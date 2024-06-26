"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyBookAndReturnOutputType = class CreateManyBookAndReturnOutputType {
};
exports.CreateManyBookAndReturnOutputType = CreateManyBookAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyBookAndReturnOutputType.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyBookAndReturnOutputType.prototype, "quantityAvaiable", void 0);
exports.CreateManyBookAndReturnOutputType = CreateManyBookAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyBookAndReturnOutputType", {})
], CreateManyBookAndReturnOutputType);
