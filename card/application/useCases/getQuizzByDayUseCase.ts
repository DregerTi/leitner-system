import CardRepository from "../repository/cardRepository";
import { CategoryEnum, getNextCategoryEnumValue } from "../enum/categoryEnum";
import Card from "../dto/card";
import GetCardsByCategoryAndDate from "../service/getCardsByCategoryAndDate";

export default class GetQuizzByDayUseCase {
  _cardRepository: CardRepository;

  constructor(cardRepository: CardRepository) {
    this._cardRepository = cardRepository;
  }

  execute(date: Date): Card[] {
    const quizzService = new GetCardsByCategoryAndDate(this._cardRepository);
    return quizzService.getCardsForQuizz(date);
  }
}