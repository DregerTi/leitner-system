import CardRepository from "../repository/cardRepository";
import Card from "../dto/card";

export default class GetCardsByTagsUseCase
{
    constructor(private cardRepository: CardRepository) {

    }
    execute(tags: string[]): Card[]
    {
        const cards = this.cardRepository.getCardsByTags(tags);
        return cards.map(card => {
            return {
                id: card.id,
                category: card.category,
                question: card.question,
                answer: card.answer,
                tag: card.tag
            }
        })
    }
}