import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post";
import UpdatePostValidator from "App/Validators/UpdatePostValidator";


export default class BlogController {

  async index({view}: HttpContextContract) {
    const posts = await Post.all()
    return view.render('blog/index', {
      posts
    })
  }

  async create({view}: HttpContextContract) {
    const post = new Post()
    return view.render('blog/create', {
      post
    })
  }

  async show({params, view}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    return view.render('blog/show', {
      post
    })
  }

  async update({params, request, response, session}: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = request.validate(UpdatePostValidator)
    post.merge({...data, online: data.online || false}).save()
    session.flash({success: "L'article a bien été sauvegardé..."})
    return response.redirect().toRoute('homepage')
  }
}
