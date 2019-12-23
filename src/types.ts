export interface Solutions {
    [key: string]: Year
}

export interface Year {
    title?: string,
    solutions?: Solution[]
}

export interface Solution {
    title: string,
    description: string,
    part_1: Part,
    part_2: Part,
}

export interface Part {
    difficulty: Difficulty
}

export enum Difficulty {
    Easy = 'easy'
}