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
exports.ShortenerController = void 0;
const common_1 = require("@nestjs/common");
const shortener_service_1 = require("./shortener.service");
const shortener_dto_1 = require("../dto/shortener.dto");
let ShortenerController = class ShortenerController {
    constructor(shortenerService) {
        this.shortenerService = shortenerService;
    }
    async createShortUrl(body, resp) {
        const res = await this.shortenerService.createShortUrl(body);
        return resp.status(201).json({ shortUrl: res });
    }
    async toOriginalUrl(token) {
        const url = await this.shortenerService.toOriginalUrl(token);
        if (url) {
            return { url };
        }
        else {
            return { url: 'https://www.google.com' };
        }
    }
};
exports.ShortenerController = ShortenerController;
__decorate([
    (0, common_1.Post)("/toshort"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortener_dto_1.ShortenerDto, Object]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "createShortUrl", null);
__decorate([
    (0, common_1.Get)(":token"),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "toOriginalUrl", null);
exports.ShortenerController = ShortenerController = __decorate([
    (0, common_1.Controller)('shortener'),
    __metadata("design:paramtypes", [shortener_service_1.ShortenerService])
], ShortenerController);
//# sourceMappingURL=shortener.controller.js.map