
export class QuizQuestion {
    constructor(
        private question: string, 
        private options: string[], 
        private answerIndex: number 
        ) {}

    getQuestion() {
        return this.question;
    }

    getOptions() {
        return [...this.options];
    }
}