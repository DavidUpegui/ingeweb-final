"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateOneRequiredWithoutUsersNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateOrConnectWithoutUsersInput_1 = require("../inputs/RoleCreateOrConnectWithoutUsersInput");
const RoleCreateWithoutUsersInput_1 = require("../inputs/RoleCreateWithoutUsersInput");
const RoleUpdateToOneWithWhereWithoutUsersInput_1 = require("../inputs/RoleUpdateToOneWithWhereWithoutUsersInput");
const RoleUpsertWithoutUsersInput_1 = require("../inputs/RoleUpsertWithoutUsersInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneRequiredWithoutUsersNestedInput = class RoleUpdateOneRequiredWithoutUsersNestedInput {
};
exports.RoleUpdateOneRequiredWithoutUsersNestedInput = RoleUpdateOneRequiredWithoutUsersNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateWithoutUsersInput_1.RoleCreateWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleCreateOrConnectWithoutUsersInput_1.RoleCreateOrConnectWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpsertWithoutUsersInput_1.RoleUpsertWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneRequiredWithoutUsersNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateToOneWithWhereWithoutUsersInput_1.RoleUpdateToOneWithWhereWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleUpdateToOneWithWhereWithoutUsersInput_1.RoleUpdateToOneWithWhereWithoutUsersInput)
], RoleUpdateOneRequiredWithoutUsersNestedInput.prototype, "update", void 0);
exports.RoleUpdateOneRequiredWithoutUsersNestedInput = RoleUpdateOneRequiredWithoutUsersNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleUpdateOneRequiredWithoutUsersNestedInput", {})
], RoleUpdateOneRequiredWithoutUsersNestedInput);
