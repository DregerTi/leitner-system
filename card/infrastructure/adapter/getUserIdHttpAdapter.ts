import GetUserIdPort from "../port/getUserIdPort";

export default class GetUserIdHttpAdapter implements GetUserIdPort {
    async getUserIdByToken(token: string): Promise<string> {
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token
                })
            });
            const data = await response.json();
            return data.userId;
        } catch (error) {
            return '';
        }
    }
}