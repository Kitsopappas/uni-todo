export interface ITodoEntity {
    id?: number,
    name: string,
    done: boolean,
    createdAt: string,
    updatedAt: string,
    deletedAt?: string,
}