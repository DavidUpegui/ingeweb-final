import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Loan } from "../../../models/Loan";
import { Role } from "../../../models/Role";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserLoansArgs } from "./args/UserLoansArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    role(user: User, ctx: any, info: GraphQLResolveInfo): Promise<Role>;
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    loans(user: User, ctx: any, info: GraphQLResolveInfo, args: UserLoansArgs): Promise<Loan[]>;
}
