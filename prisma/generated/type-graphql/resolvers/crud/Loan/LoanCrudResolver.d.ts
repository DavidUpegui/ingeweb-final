import type { GraphQLResolveInfo } from "graphql";
import { AggregateLoanArgs } from "./args/AggregateLoanArgs";
import { CreateManyLoanArgs } from "./args/CreateManyLoanArgs";
import { CreateOneLoanArgs } from "./args/CreateOneLoanArgs";
import { DeleteManyLoanArgs } from "./args/DeleteManyLoanArgs";
import { DeleteOneLoanArgs } from "./args/DeleteOneLoanArgs";
import { FindFirstLoanArgs } from "./args/FindFirstLoanArgs";
import { FindFirstLoanOrThrowArgs } from "./args/FindFirstLoanOrThrowArgs";
import { FindManyLoanArgs } from "./args/FindManyLoanArgs";
import { FindUniqueLoanArgs } from "./args/FindUniqueLoanArgs";
import { FindUniqueLoanOrThrowArgs } from "./args/FindUniqueLoanOrThrowArgs";
import { GroupByLoanArgs } from "./args/GroupByLoanArgs";
import { UpdateManyLoanArgs } from "./args/UpdateManyLoanArgs";
import { UpdateOneLoanArgs } from "./args/UpdateOneLoanArgs";
import { UpsertOneLoanArgs } from "./args/UpsertOneLoanArgs";
import { Loan } from "../../../models/Loan";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLoan } from "../../outputs/AggregateLoan";
import { LoanGroupBy } from "../../outputs/LoanGroupBy";
export declare class LoanCrudResolver {
    aggregateLoan(ctx: any, info: GraphQLResolveInfo, args: AggregateLoanArgs): Promise<AggregateLoan>;
    createManyLoan(ctx: any, info: GraphQLResolveInfo, args: CreateManyLoanArgs): Promise<AffectedRowsOutput>;
    createOneLoan(ctx: any, info: GraphQLResolveInfo, args: CreateOneLoanArgs): Promise<Loan>;
    deleteManyLoan(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLoanArgs): Promise<AffectedRowsOutput>;
    deleteOneLoan(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLoanArgs): Promise<Loan | null>;
    findFirstLoan(ctx: any, info: GraphQLResolveInfo, args: FindFirstLoanArgs): Promise<Loan | null>;
    findFirstLoanOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLoanOrThrowArgs): Promise<Loan | null>;
    loans(ctx: any, info: GraphQLResolveInfo, args: FindManyLoanArgs): Promise<Loan[]>;
    loan(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLoanArgs): Promise<Loan | null>;
    getLoan(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLoanOrThrowArgs): Promise<Loan | null>;
    groupByLoan(ctx: any, info: GraphQLResolveInfo, args: GroupByLoanArgs): Promise<LoanGroupBy[]>;
    updateManyLoan(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLoanArgs): Promise<AffectedRowsOutput>;
    updateOneLoan(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLoanArgs): Promise<Loan | null>;
    upsertOneLoan(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLoanArgs): Promise<Loan>;
}
