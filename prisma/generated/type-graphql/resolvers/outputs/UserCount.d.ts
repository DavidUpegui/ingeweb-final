import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountLoansArgs } from "./args/UserCountLoansArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    loans: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getLoans(root: UserCount, args: UserCountLoansArgs): number;
}
