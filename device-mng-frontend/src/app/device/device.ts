import { identifierName } from "@angular/compiler";
import { Category } from "../category/category";

export interface Device {
    id: number;
    category: Category;
    color: string;
    partNumber: number;
}

export const DEVICES: Device[] = [
    {id: 1, color: 'Test 1', category: <Category>{id: 1, name: 'test'}, partNumber: 1},
    {id: 2, color: 'Test 2', category: <Category>{id: 1, name: 'test'}, partNumber: 2}
];