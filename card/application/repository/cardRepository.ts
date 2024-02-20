import CardUserData from "../dto/cardUserData";
import Card from "../entity/card";

export default interface CardRepository {
    createCard(card: CardUserData, opts: {}): false|Card;
}