"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var prisma_1 = require("../services/prisma");
var validator_service_1 = require("../validators/validator-service");
var router = (0, express_1.Router)();
var validatorService = new validator_service_1.ValidatorService();
router.post('/users/create', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isValid, errors, userExists, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = validatorService.validateUser(req.body), isValid = _a.isValid, errors = _a.errors;
                if (!isValid) return [3 /*break*/, 5];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, prisma_1.default.user.findUnique({ where: { email: req.body.email } })];
            case 2:
                userExists = _b.sent();
                if (userExists) {
                    return [2 /*return*/, res.status(403).send({ success: false, errors: { email: ['The email already exists '] } })];
                }
                return [4 /*yield*/, prisma_1.default.user.create({ data: req.body })];
            case 3:
                _b.sent();
                return [2 /*return*/, res.send({ success: true })];
            case 4:
                e_1 = _b.sent();
                return [2 /*return*/, res.status(403).send({ success: false })];
            case 5:
                res.status(403).json({ success: false, errors: errors });
                return [2 /*return*/];
        }
    });
}); });
router.get('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentPage, limit, step, users, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentPage = req.query.page;
                limit = 6;
                step = (currentPage * limit) - limit;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma_1.default.user.findMany({
                        skip: step,
                        take: limit
                    })];
            case 2:
                users = _a.sent();
                res.send(users);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                res.send(403).send({ success: false });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get('/users/count', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usersCount, limit, numOfPages, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma_1.default.user.count()];
            case 1:
                usersCount = _a.sent();
                limit = 6;
                numOfPages = Math.ceil(usersCount / limit);
                res.send({ numOfPages: numOfPages });
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(403).send({ success: false });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
