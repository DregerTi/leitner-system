import {CategoryEnum} from "../enum/categoryEnum";

export default class Card {
    id: string;
    question: string;
    answer: string;
    tag: string;
    category: CategoryEnum;
    lastAnswerDateToString: string;
    userId: string;
    constructor(id: string, question: string, answer: string, tag: string, category: CategoryEnum, lastAnswerDateToString: string, userId: string) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.tag = tag;
        this.category = category;
        this.lastAnswerDateToString = lastAnswerDateToString;
        this.userId = userId;
    }
}