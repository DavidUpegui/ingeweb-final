import { LoanCreateNestedManyWithoutBookInput } from "../inputs/LoanCreateNestedManyWithoutBookInput";
export declare class BookCreateInput {
    id?: string | undefined;
    title: string;
    author: string;
    description: string;
    category: string;
    image: string;
    quantityAvaiable: number;
    loans?: LoanCreateNestedManyWithoutBookInput | undefined;
}
