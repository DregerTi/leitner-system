import CardEntity from "../entity/cardEntity";

export default interface QuizzByDay {
  date: string,
  cards: CardEntity[]
}