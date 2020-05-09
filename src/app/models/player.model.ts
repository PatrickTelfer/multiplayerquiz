export class Player {
    constructor(private name: string, private score: number) {}

    getScore() {
        return this.score;
    }
}