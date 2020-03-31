import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {

  constructor(private http: HttpClient) { }

  public saveQuizToServer(quiz) {
    this.http.post('http://localhost:3000/api/createQuiz', quiz).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}
