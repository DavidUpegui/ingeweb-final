import { BookWhereInput } from "../inputs/BookWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { LoanListRelationFilter } from "../inputs/LoanListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookWhereUniqueInput {
    id?: string | undefined;
    AND?: BookWhereInput[] | undefined;
    OR?: BookWhereInput[] | undefined;
    NOT?: BookWhereInput[] | undefined;
    title?: StringFilter | undefined;
    author?: StringFilter | undefined;
    description?: StringFilter | undefined;
    category?: StringFilter | undefined;
    image?: StringFilter | undefined;
    quantityAvaiable?: IntFilter | undefined;
    loans?: LoanListRelationFilter | undefined;
}
