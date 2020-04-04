import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './models/quiz.model';
import { QuizQuestion } from './models/quiz-question.model'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [];
  private quizzesUpdated = new Subject<Quiz[]>();

  constructor(private http: HttpClient) { }

  public saveQuizToServer(quiz) {
    this.http.post<{message: string, quizId: string}>('http://localhost:3000/api/quizzes', quiz)
    .subscribe(
      (response) => {
        console.log(response.message);
        console.log(response.quizId);
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

  deleteQuiz(id: string) {
    this.http.delete('http://localhost:3000/api/quizzes/' + id)
      .subscribe( () => {
        const updatedQuizzes = this.quizzes.filter( quiz => quiz.id !== id)
        this.quizzes = updatedQuizzes;
        this.quizzesUpdated.next([...this.quizzes]);
      })
  }

}
