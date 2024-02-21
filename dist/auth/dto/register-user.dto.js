"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const users_entity_1 = require("../../users/entity/users.entity");
class RegisterUserDto extends (0, mapped_types_1.PickType)(users_entity_1.UsersModel, [
    'id',
    'email',
    'password',
]) {
}
exports.RegisterUserDto = RegisterUserDto;
//# sourceMappingURL=register-user.dto.js.map