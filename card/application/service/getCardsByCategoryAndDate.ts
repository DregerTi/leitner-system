import CardRepository from "../repository/cardRepository";

import { CategoryEnum, getNextCategoryEnumValue } from "../enum/categoryEnum";
import CardEntity from "../entity/cardEntity";

export default class GetCardsByCategoryAndDate {
  _cardRepository: CardRepository;
  _cards: CardEntity[];


  constructor(cardRepository: CardRepository) {
    this._cardRepository = cardRepository;
    this._cards = this._cardRepository.getAllCards();
  }

  getCardsForQuizz(date: Date): CardEntity[] {
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

    const res: CardEntity[] = [];
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