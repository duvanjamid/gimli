  var ErrorHandler = require('./error').errorHandler;

  module.exports = exports = function(app) {




    // The main page of the blog
    app.get('/', function(req, res, next){
        return res.render('index', {
            title: 'Editor homepage'
        });
    });

    /* The main page of the blog, filtered by tag
    app.get('/tag/:tag', contentHandler.displayMainPageByTag);

    app.get("/post/:permalink", contentHandler.displayPostByPermalink);
    app.post('/newcomment', contentHandler.handleNewComment);
    app.get("/post_not_found", contentHandler.displayPostNotFound);

    app.get('/newpost', contentHandler.displayNewPostPage);
    app.post('/newpost', contentHandler.handleNewPost);

    app.get('/login', sessionHandler.displayLoginPage);
    app.post('/login', sessionHandler.handleLoginRequest);

    app.get('/logout', sessionHandler.displayLogoutPage);

    app.get("/welcome", sessionHandler.displayWelcomePage);

    app.get('/signup', sessionHandler.displaySignupPage);
    app.post('/signup', sessionHandler.handleSignup);
    app.use(ErrorHandler);
*/
}
