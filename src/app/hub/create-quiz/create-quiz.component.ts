import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { QuizService } from 'src/app/quiz.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  Quiz: Quiz;
  model;

  private mode = "create";
  private id: string;

  constructor(private quizService: QuizService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.model = {
      questions: [],
      title: '',
    }

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = "edit";
        this.id = paramMap.get('id');
        this.quizService.getQuiz(this.id).subscribe((quizData) => {
          this.model = {
            questions: quizData.questions,
            title: quizData.title
          }
        });
      } else {
        this.increaseQuizLength();
        // console.log('create mode');
      }
    })


  }

  increaseQuizLength() {
    const q: QuizQuestion = {question: '', options: [], answerIndex: 0};
    this.model.questions.push(q);
  }

  decreaseQuizLength() {
    if (this.model.questions.length > 1) {
      this.model.questions.pop();
    }
  }

  removeItem(index: number) {
    if (this.model.questions.length > 1) {
      this.model.questions.splice(index, 1);
    }
  }

  onSubmit(quizForm: NgForm) {

    if (quizForm.invalid) {
      return;
    }

    if (this.mode == "create") {
      this.quizService.saveQuizToServer(this.model);
    } else {
      const newQuiz: Quiz = {id: this.id, title: this.model.title, questions: this.model.questions};
      this.quizService.updateQuiz(this.id, newQuiz);
    }

    // console.log(this.model);
   
    alert('quiz change success!');
    // quizForm.form.reset();
  }

}
