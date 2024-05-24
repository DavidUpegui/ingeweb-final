import { RoleCreateOrConnectWithoutUsersInput } from "../inputs/RoleCreateOrConnectWithoutUsersInput";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateToOneWithWhereWithoutUsersInput } from "../inputs/RoleUpdateToOneWithWhereWithoutUsersInput";
import { RoleUpsertWithoutUsersInput } from "../inputs/RoleUpsertWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneRequiredWithoutUsersNestedInput {
    create?: RoleCreateWithoutUsersInput | undefined;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | undefined;
    upsert?: RoleUpsertWithoutUsersInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateToOneWithWhereWithoutUsersInput | undefined;
}
