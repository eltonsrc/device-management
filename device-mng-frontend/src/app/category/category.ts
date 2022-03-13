import { identifierName } from "@angular/compiler";

export interface Category {
    id: number;
    name: string;
}

export const CATEGORIES: Category[] = [
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'}
];