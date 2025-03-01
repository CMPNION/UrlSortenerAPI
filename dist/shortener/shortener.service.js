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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerService = void 0;
const common_1 = require("@nestjs/common");
const conn_1 = require("../db/conn");
const shortener_dto_1 = require("../dto/shortener.dto");
const ts_token_generator_1 = require("ts-token-generator");
let ShortenerService = class ShortenerService {
    async createShortUrl(body) {
        const url = body.url;
        const gen = new ts_token_generator_1.TokenGenerator({ bitSize: 128, baseEncoding: ts_token_generator_1.TokenBase.BASE62 });
        const token = gen.generate();
        const dbconn = await (0, conn_1.connectToDatabase)(process.env.DB_NAME, process.env.DB_COLLECTION);
        dbconn.shortener.insertOne({ url: url, token: token });
        var shortUrl = process.env.ROOT_URL + token;
        return shortUrl;
    }
    async toOriginalUrl(token) {
        const dbconn = await (0, conn_1.connectToDatabase)(process.env.DB_NAME, process.env.DB_COLLECTION);
        const res = await dbconn.shortener.findOne({ token: token }, { projection: { _id: 0, url: 1, token: 1 } });
        return res.url;
    }
};
exports.ShortenerService = ShortenerService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortener_dto_1.ShortenerDto]),
    __metadata("design:returntype", Promise)
], ShortenerService.prototype, "createShortUrl", null);
exports.ShortenerService = ShortenerService = __decorate([
    (0, common_1.Injectable)()
], ShortenerService);
//# sourceMappingURL=shortener.service.js.map