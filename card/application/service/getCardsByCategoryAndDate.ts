import CardRepository from "../repository/cardRepository";
import Card from "../dto/card";
import CardEntity from "../entity/cardEntity";
import {CategoryEnum, getNextCategoryEnumValue} from "../enum/categoryEnum";

export default class GetCardsByCategoryAndDate {
    _cardRepository: CardRepository;
    _cards: CardEntity[];


    constructor(cardRepository: CardRepository) {
        this._cardRepository = cardRepository;
        this._cards = this._cardRepository.getAllCards();
    }

    getCardsForQuizz(date: Date): Card[] {
        const cardsForQuizz = [];
        let category = CategoryEnum.FIRST;
        for (let i = 1; i <= 64; i = i * 2) {
            const numberOfDaysRequiredToAsk = i;
            cardsForQuizz.push(this._cards.filter((card) => {
                if (card.lastAnswerDateToString === undefined) {
                    return true;
                }
                const lastAnswerDate = new Date(card.lastAnswerDateToString);
                if (category === card.category && lastAnswerDate.getDate() + numberOfDaysRequiredToAsk === date.getDate()) {
                    return true;
                }
            }));
            category = getNextCategoryEnumValue(category);
        }

        const res: Card[] = [];
        cardsForQuizz.map((cards) => {
            cards.map((card) => {
                res.push({
                    id: card.id,
                    question: card.question,
                    answer: card.answer,
                    tag: card.tag,
                    category: card.category,
                })
            });
        });

        return res;
    }
}