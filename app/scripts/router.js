var MainRouter = Backbone.Router.extend({

  routes: {
    "" : "signInPage",
    "user/" : "homePage"
  },

  signInPage: function() {
    new SigninView()
  },

  homePage: function(){
    new HomeView()
  }

});