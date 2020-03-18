import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizQuestion } from 'src/app/models/quiz-question.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  questions: QuizQuestion[] = [];
  model;
  constructor() { }

  ngOnInit() {
    this.increaseQuizLength();
    this.model = {
      questions: this.questions,
      title: '',
    }
  }

  increaseQuizLength() {
    const q = new QuizQuestion('', [], 0);
    this.questions.push(q);
  }

  decreaseQuizLength() {
    if (this.questions.length > 1) {
      this.questions.pop();
    }
  }

  removeItem(index: number) {
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
    }
  }

  onSubmit() {
    console.log(this.model);
  }

}
