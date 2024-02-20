import CardRepository from "../repository/cardRepository";
import { CategoryEnum, getNextCategoryEnumValue } from "../enum/categoryEnum";

export default class AnswerCardUseCase {
  _cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this._cardRepository = cardRepository;
  }

  execute(cardId: string, isCorrectAnswer: boolean): boolean {
    const cardFromDatabase = this._cardRepository.getCardById(cardId);
    if (!cardFromDatabase) {
      return false;
    }
    cardFromDatabase.category = isCorrectAnswer ?
      getNextCategoryEnumValue(cardFromDatabase.category)
      : CategoryEnum.FIRST;
    return false !== this._cardRepository.updateCard(cardFromDatabase, cardId);
  }
}