import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { LoanOrderByRelationAggregateInput } from "../inputs/LoanOrderByRelationAggregateInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    roleId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    role?: RoleOrderByWithRelationInput | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    loans?: LoanOrderByRelationAggregateInput | undefined;
}
