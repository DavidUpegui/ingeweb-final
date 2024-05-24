import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { Loan } from "../../../models/Loan";
import { BookLoansArgs } from "./args/BookLoansArgs";
export declare class BookRelationsResolver {
    loans(book: Book, ctx: any, info: GraphQLResolveInfo, args: BookLoansArgs): Promise<Loan[]>;
}
