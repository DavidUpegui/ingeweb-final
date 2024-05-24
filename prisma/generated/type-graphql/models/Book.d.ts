import { Loan } from "../models/Loan";
import { BookCount } from "../resolvers/outputs/BookCount";
export declare class Book {
    id: string;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    loans?: Loan[];
    _count?: BookCount | null;
}
