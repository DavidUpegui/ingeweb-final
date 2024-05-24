import { BookCreateNestedOneWithoutLoansInput } from "../inputs/BookCreateNestedOneWithoutLoansInput";
export declare class LoanCreateWithoutUserInput {
    id?: string | undefined;
    status: "PENDING" | "RETURNED";
    book: BookCreateNestedOneWithoutLoansInput;
}
