import {expect, jest, test} from "@jest/globals";
import JsonHandler from './infrastructure/database/jsonHandler';
import {CategoryEnum} from "./application/enum/categoryEnum";
import {JsonCardRepository} from "./infrastructure/repository/jsonCardRepository";
import GetCardsByCategoryAndDate from "./application/service/getCardsByCategoryAndDate";

test('Current date should return first categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.FIRST);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.FIRST);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.FIRST);
    expect(cards[2].id).toBe("3");
});

test('Current date should return second categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SECOND,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SECOND,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SECOND,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.SECOND);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.SECOND);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.SECOND);
    expect(cards[2].id).toBe("3");
});

test('Current date should return third categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.THIRD,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.THIRD,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.THIRD,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.THIRD);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.THIRD);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.THIRD);
    expect(cards[2].id).toBe("3");
});

test('Current date should return fourth categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FOURTH,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FOURTH,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FOURTH,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.FOURTH);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.FOURTH);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.FOURTH);
    expect(cards[2].id).toBe("3");
});

test('Current date should return fifth categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIFTH,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIFTH,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIFTH,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.FIFTH);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.FIFTH);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.FIFTH);
    expect(cards[2].id).toBe("3");
});


test('Current date should return sixth categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SIXTH,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SIXTH,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SIXTH,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.SIXTH);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.SIXTH);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.SIXTH);
    expect(cards[2].id).toBe("3");
});

test('Current date should return seventh categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SEVENTH,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SEVENTH,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.SEVENTH,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(3);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.SEVENTH);
    expect(cards[0].id).toBe("1");
    expect(cards[1].question).toBe("question");
    expect(cards[1].answer).toBe("answer");
    expect(cards[1].tag).toBe("tag");
    expect(cards[1].category).toBe(CategoryEnum.SEVENTH);
    expect(cards[1].id).toBe("2");
    expect(cards[2].question).toBe("question");
    expect(cards[2].answer).toBe("answer");
    expect(cards[2].tag).toBe("tag");
    expect(cards[2].category).toBe(CategoryEnum.SEVENTH);
    expect(cards[2].id).toBe("3");
});

test('Current date should not return done categories cards if there are', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.DONE,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.DONE,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.DONE,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(0);
});

test('Current date should not return cards that have been answered in the last 2^i days', () => {
    // Arrange
    const JsonHandler = require('./infrastructure/database/jsonHandler');
    JsonHandler.JsonHandler.prototype.getData = jest.fn(() => [
        {
            id: "1",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
        {
            id: "2",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2025-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
        {
            id: "3",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2025-01-01',
            userId: "1",
            category: CategoryEnum.FIRST,
        },
        {
            id: "4",
            question: "question",
            answer: "answer",
            tag: "tag",
            lastAnswerDateToString: '2024-12-01',
            userId: "1",
            category: CategoryEnum.SEVENTH,
        },
    ]);

    const date = new Date('2025-01-01');
    const getCardsByCategoryAndDate = new GetCardsByCategoryAndDate(new JsonCardRepository());
    // Act
    const cards = getCardsByCategoryAndDate.getCardsForQuizz(date);
    // Assert
    expect(cards.length).toBe(1);
    expect(cards[0].question).toBe("question");
    expect(cards[0].answer).toBe("answer");
    expect(cards[0].tag).toBe("tag");
    expect(cards[0].category).toBe(CategoryEnum.FIRST);
    expect(cards[0].id).toBe("1");
});