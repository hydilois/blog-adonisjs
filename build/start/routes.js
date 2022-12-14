"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', 'BlogController.index').as('homepage');
Route_1.default.get('/post/:id', 'BlogController.show').as('post.show');
Route_1.default.post('/post/:id', 'BlogController.update');
//# sourceMappingURL=routes.js.map