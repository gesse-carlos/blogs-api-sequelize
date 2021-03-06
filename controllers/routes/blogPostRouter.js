const BlogPost = require('express').Router();

const blogPostController = require('../blogPostController');
const { blogPostMiddlewares, jwtMiddleware } = require('../middlewares');

BlogPost.post(
  '/',
  jwtMiddleware.validateJWT,
  blogPostMiddlewares.validateTitleContent,
  blogPostMiddlewares.validateCategory,
  blogPostController.add,
);

BlogPost.get(
  '/',
  jwtMiddleware.validateJWT,
  blogPostController.getAll,
);

BlogPost.get(
  '/search',
  jwtMiddleware.validateJWT,
  blogPostController.search,
);

BlogPost.get(
  '/:id',
  jwtMiddleware.validateJWT,
  blogPostController.getById,
);

BlogPost.put(
  '/:id',
  jwtMiddleware.validateJWT,
  blogPostMiddlewares.validateTitleContent,
  blogPostMiddlewares.validateUpdate,
  blogPostController.update,
);

BlogPost.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  blogPostMiddlewares.validateDelete,
  blogPostController.remove,
);

module.exports = BlogPost;