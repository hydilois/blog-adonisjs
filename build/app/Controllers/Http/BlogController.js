"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Post"));
const UpdatePostValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdatePostValidator"));
class BlogController {
    async index({ view }) {
        const posts = await Post_1.default.all();
        return view.render('blog/index', {
            posts
        });
    }
    async show({ params, view }) {
        const post = await Post_1.default.findOrFail(params.id);
        return view.render('blog/show', {
            post
        });
    }
    async update({ params, request, response, session }) {
        const post = await Post_1.default.findOrFail(params.id);
        post.merge(await request.validate(UpdatePostValidator_1.default)).save();
        session.flash({ success: "L'article a bien été sauvegardé..." });
        return response.redirect().toRoute('homepage');
    }
}
exports.default = BlogController;
//# sourceMappingURL=BlogController.js.map