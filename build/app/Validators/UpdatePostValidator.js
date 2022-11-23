"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdatePostValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.minLength(5)
            ]),
            content: Validator_1.schema.string({ trim: true })
        });
        this.messages = {
            'minLength validation failed': "Le nombre de caractère est incorrect"
        };
    }
}
exports.default = UpdatePostValidator;
//# sourceMappingURL=UpdatePostValidator.js.map