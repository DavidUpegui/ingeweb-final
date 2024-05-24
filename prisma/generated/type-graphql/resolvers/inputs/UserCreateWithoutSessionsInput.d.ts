import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { LoanCreateNestedManyWithoutUserInput } from "../inputs/LoanCreateNestedManyWithoutUserInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    role: RoleCreateNestedOneWithoutUsersInput;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    loans?: LoanCreateNestedManyWithoutUserInput | undefined;
}
