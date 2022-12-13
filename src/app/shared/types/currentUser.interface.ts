export interface CurrentUserInterface {
    id: number,
    email: string, 
    createdAt: string,
    updatedAt: string,
    username: string,
    bio: string | null, // not required: means it is either string or null if bio not provided
    image: string | null,
    token: string
}