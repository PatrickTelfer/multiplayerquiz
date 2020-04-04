import { QuizQuestion } from './quiz-question.model'

export class Quiz {
    constructor(
        public id: string,
        private title: string,
        private questions: QuizQuestion[]
    ) {}

    public getQuestions() {
        return [...this.questions];
    }

    public getId() {
        return this.id;
    }

    public addQuestion(q: QuizQuestion) {
        this.questions.push(q);
    }
}