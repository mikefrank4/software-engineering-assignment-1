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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const factorialRoute_1 = __importDefault(require("../src/factorialRoute"));
const app = (0, express_1.default)();
app.get("/factorial/:num", factorialRoute_1.default);
describe("Factorial Endpoint Tests", () => {
    it("should handle 0 correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/factorial/0");
        expect(response.text).toBe("factorial(0) is 1");
    }));
    it("should handle 1 correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/factorial/1");
        expect(response.text).toBe("factorial(1) is 1");
    }));
    it("should handle negative numbers correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/factorial/-2");
        expect(response.text).toBe("factorial(-2) is undefined for negative integers");
    }));
    it("should handle a positive integer", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/factorial/5");
        expect(response.text).toBe("factorial(5) is 120");
    }));
});
//# sourceMappingURL=factorial.test.js.map