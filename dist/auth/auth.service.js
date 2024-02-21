"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const env_keys_const_1 = require("../common/const/env-keys.const");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    extractTokenFromHeader(header, isBearer) {
        const splitToken = header.split(' ');
        const prefix = isBearer ? 'Bearer' : 'Basic';
        if (splitToken.length !== 2 || splitToken[0] !== prefix) {
            throw new common_1.UnauthorizedException('잘못된 토큰입니다');
        }
        const token = splitToken[1];
        return token;
    }
    decodeBasicToken(base64String) {
        const decoded = Buffer.from(base64String, 'base64').toString('utf8');
        const split = decoded.split(':');
        if (split.length !== 2) {
            throw new common_1.UnauthorizedException('잘못된 유형의 토큰입니다');
        }
        const email = split[0];
        const password = split[1];
        return { email, password };
    }
    async authenticateWithEmailAndPassword(user) {
        const existingUser = await this.usersService.getUserByEmail(user.email);
        console.log(existingUser);
        if (!existingUser) {
            throw new common_1.UnauthorizedException('존재하지 않는 사람입니다');
        }
        const passOk = await bcrypt.compare(user.password, existingUser.password);
        if (!passOk) {
            throw new common_1.UnauthorizedException('패스워드가 틀렸습니다');
        }
        return existingUser;
    }
    signToken(user, isRefreshToken) {
        const payload = {
            email: user.email,
            sub: user.id,
            type: isRefreshToken ? 'refresh' : 'access',
        };
        return this.jwtService.sign(payload, {
            secret: this.configService.get(env_keys_const_1.ENV_JWT_SECRET_KEY),
            expiresIn: isRefreshToken ? 3600 : 300,
        });
    }
    async loginWithEmail(user) {
        const existingUser = await this.authenticateWithEmailAndPassword(user);
        return this.loginUser(existingUser);
    }
    loginUser(user) {
        console.log('loginuser');
        return {
            accessToken: this.signToken(user, false),
            refreshToken: this.signToken(user, true),
        };
    }
    async registerWithEmail(user) {
        const hash = await bcrypt.hash(user.password, 10);
        const newUser = await this.usersService.signUp(user.id, user.email, hash);
        return this.loginUser(newUser);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map