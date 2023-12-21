
export type UserId = string;

export interface Chat{
    id: string;
    userId: string;
    name: string;
    message: string;
    upvotes: UserId[];
}


export abstract class Store{
    constructor() { 

    }
    initRoom(roomId: String) {
        
    }
    getChats(room: string, limit: number, offset: number) {
    
    }
    addChat(userId: UserId, name: string, room: string, message: string) {
    
    }
    upvote(userId: UserId, room: string, chatId: string) {
        
    }

}