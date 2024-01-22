export interface ITodo {
    id: string;
    description: string;
    isComplete: boolean;
    type: ITodoType
}

export type ITodoType = 'take' | 'bring'
