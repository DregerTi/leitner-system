import { FastifyInstance } from "fastify";
import { isValidCardUserData } from "./service/isValidCardUserData";
import CardController from "../controller/cardController";
import CreateCardWithUserIdUseCase from "../../application/useCases/createCardWithUserIdUseCase";
import { JsonCardRepository } from "../../infrastructure/repository/jsonCardRepository";
import AnswerCardUseCase from "../../application/useCases/answerCardUseCase";
import GetQuizzByDayUseCase from "../../application/useCases/getQuizzByDayUseCase";

async function cardRoutes(fastify: FastifyInstance, options: object) {
    const cardController = new CardController(
        new CreateCardWithUserIdUseCase(new JsonCardRepository()),
        new AnswerCardUseCase(new JsonCardRepository()),
        new GetQuizzByDayUseCase(new JsonCardRepository())
    );

    fastify.post('/cards', async (request, reply) => {
        const card = request.body;
        const userToken = request.headers?.authorization ?? 'test';
        if (!isValidCardUserData(card) || undefined === userToken) {
            reply.code(400)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send("Bad Request");
        } else {
            const createdCard = cardController.createCard(card, userToken);
            if (false === createdCard) {
                reply.code(400)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send("Invalid information");
            } else {
                reply.code(201)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send(
                        createdCard
                    );
            }
        }
    })

    fastify.patch('/cards/:cardId/answer', async (request, reply) => {
        // @ts-ignore
        const cardId = request.params.cardId;
        // @ts-ignore
        const answer = request.body.isValid;
        const userToken = request.headers?.authorization ?? 'test';
        if (undefined === userToken) {
            reply.code(400)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send("Bad Request");
        } else {
            const updatedCard = cardController.answerCard(cardId, answer);
            if (!updatedCard) {
                reply.code(400)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send("Invalid information");
            } else {
                reply.code(204)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send();
            }
        }
    });

    fastify.get('/cards/quizz', async (request, reply) => {
        // @ts-ignore
        let date = request.query?.date ?? new Date().toISOString();
        if (undefined === new Date(date)) {
            date = new Date().toISOString();
        }
        const cards = cardController.getQuizzCards(new Date(date));

        reply.code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(cards);
    });
}

export default cardRoutes;