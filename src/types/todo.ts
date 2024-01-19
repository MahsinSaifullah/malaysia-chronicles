export interface ITodo {
    id: string;
    desription: string;
    isComplete: boolean;
    type: ITodoType
}

export type ITodoType = 'take' | 'bring'
