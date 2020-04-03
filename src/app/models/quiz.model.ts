import { QuizQuestion } from './quiz-question.model'

export class Quiz {
    constructor(
        private id: string,
        private title: string,
        private questions: QuizQuestion[]
    ) {}

    public getQuestions() {
        return [...this.questions];
    }

    public addQuestion(q: QuizQuestion) {
        this.questions.push(q);
    }
}