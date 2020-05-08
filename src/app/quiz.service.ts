import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './models/quiz.model';
import { QuizQuestion } from './models/quiz-question.model'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [];
  private quizzesUpdated = new Subject<Quiz[]>();

  constructor(private http: HttpClient, public router: Router) { }

  public saveQuizToServer(quiz) {
    this.http.post<{message: string, quizId: string}>('http://localhost:3000/api/quizzes', quiz)
    .subscribe(
      (response) => {
        this.router.navigate(['quizzes']);
      }
    )
  }

  getQuizUpdateListener() {
    return this.quizzesUpdated.asObservable();
  }


  getQuizzes() {
    this.http.get<{message: string, quizzes: any}>
      ('http://localhost:3000/api/quizzes')
      .pipe(
        map((quizData) => {
          return quizData.quizzes.map( quiz => {
            return {
              title: quiz.title,
              questions: quiz.questions,
              id: quiz._id
            }
          })
        })
      )
      .subscribe(
        (transformedQuizzes) => {
          this.quizzes = transformedQuizzes;
          this.quizzesUpdated.next([...this.quizzes])
        }
      )
  }

  getQuiz(id: string) {
    return this.http.get<any>('http://localhost:3000/api/quizzes/' + id);
  }

  updateQuiz(oldQuizId: string, newQuiz: Quiz) {
    this.http.put('http://localhost:3000/api/quizzes/' + oldQuizId, newQuiz).subscribe(
      (response) => {
        const updatedQuizzes  = [...this.quizzes];
        const oldQuizIndex = updatedQuizzes.findIndex(q => q.id == oldQuizId);
        updatedQuizzes[oldQuizIndex] = newQuiz;
        this.quizzes = updatedQuizzes;
        this.quizzesUpdated.next([...this.quizzes]);
        this.router.navigate(['quizzes']);
      }
    )
  }

  deleteQuiz(id: string) {
    this.http.delete('http://localhost:3000/api/quizzes/' + id)
      .subscribe( () => {
        const updatedQuizzes = this.quizzes.filter( quiz => quiz.id !== id)
        this.quizzes = updatedQuizzes;
        this.quizzesUpdated.next([...this.quizzes]);
      })
  }

}
