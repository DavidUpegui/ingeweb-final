"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionMinAggregate = class SessionMinAggregate {
};
exports.SessionMinAggregate = SessionMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinAggregate.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SessionMinAggregate.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SessionMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SessionMinAggregate.prototype, "updatedAt", void 0);
exports.SessionMinAggregate = SessionMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SessionMinAggregate", {})
], SessionMinAggregate);
