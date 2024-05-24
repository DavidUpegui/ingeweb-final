import { Role } from "../outputs/Role";
export declare class CreateManyUserAndReturnOutputType {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role;
}
