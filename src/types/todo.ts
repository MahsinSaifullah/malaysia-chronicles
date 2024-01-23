export interface ITodo {
    id: string;
    description: string;
    isComplete: boolean;
    type: ITodoType;
    index: number;
}

export type ITodoType = 'take' | 'bring'
