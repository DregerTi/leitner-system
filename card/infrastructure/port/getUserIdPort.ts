export default interface GetUserIdPort {
    getUserIdByToken(token: string): Promise<string>;
}