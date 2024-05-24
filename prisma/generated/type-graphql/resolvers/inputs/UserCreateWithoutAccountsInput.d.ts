import { LoanCreateNestedManyWithoutUserInput } from "../inputs/LoanCreateNestedManyWithoutUserInput";
import { RoleCreateNestedOneWithoutUsersInput } from "../inputs/RoleCreateNestedOneWithoutUsersInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    role: RoleCreateNestedOneWithoutUsersInput;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    loans?: LoanCreateNestedManyWithoutUserInput | undefined;
}
