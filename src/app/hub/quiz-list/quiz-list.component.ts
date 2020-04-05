import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quiz } from '../../models/quiz.model'
import { Subscription } from 'rxjs';
import { QuizService } from 'src/app/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit, OnDestroy {
  quizzes: Quiz[] = [];
  private quizSub: Subscription;

  constructor(public quizService: QuizService, public router: Router) { }

  ngOnInit() {
    this.quizService.getQuizzes();
    this.quizSub = this.quizService.getQuizUpdateListener()
      .subscribe((quizzes: Quiz[]) => {
        this.quizzes = quizzes;
      })
  }

  deleteQuiz(quizId) {
    this.quizService.deleteQuiz(quizId);
  }

  editQuiz(quizId) {
    this.router.navigate(['edit', quizId])
  }

  ngOnDestroy() {
    this.quizSub.unsubscribe();
  }

}
