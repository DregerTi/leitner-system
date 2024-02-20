import CardRepository from "../repository/cardRepository";
import CardUserData from "../dto/cardUserData";
import Card from "../entity/card";

export default interface CreateCardUseCase {
    _cardRepository: CardRepository;
    execute(card: CardUserData, opts: {}): Card | false;
}