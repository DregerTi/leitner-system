import CardRepository from "../repository/cardRepository";
import CardUserData from "../dto/cardUserData";
import CardEntity from "../entity/cardEntity";

export default interface CreateCardUseCase {
    _cardRepository: CardRepository;
    execute(card: CardUserData, opts: {}): CardEntity | false;
}