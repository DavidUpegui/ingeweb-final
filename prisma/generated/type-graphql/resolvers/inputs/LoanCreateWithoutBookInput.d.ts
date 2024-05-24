import { UserCreateNestedOneWithoutLoansInput } from "../inputs/UserCreateNestedOneWithoutLoansInput";
export declare class LoanCreateWithoutBookInput {
    id?: string | undefined;
    status: "PENDING" | "RETURNED";
    user: UserCreateNestedOneWithoutLoansInput;
}
