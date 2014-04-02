var SigninView = Parse.View.extend({
  
  renderTemplate: _.template($("#signin-view-template").text()),

  events: {
    "click .form-signin-heading": "signingUp",
    "click .js-create": "userProfile"
  },

  initialize: function(){
    $(".container-signin").html(this.el)
    this.render()
  },

  render: function(){
    this.$el.html(this.renderTemplate())
  },

  signingUp: function(){
    $('.email').addClass('active')
    $('.js-create').addClass('active')
    $('.js-signup').addClass('active')

  },

  userProfile: function(){
    console.log("it's 12pm");
    
    var user = new Parse.User();

    user.set("username",  $('.js-signupusername').val());
    user.set("email", $('.js-signupemail').val());
    user.set("password", $('.js-signuppassword').val());


    user.signUp(null, {
      success: function(user){
        console.log('we got this far...')
      },
      error: function(user, error){
        alert(error.message);
      }
    });
  
        console.log("shiver me timbers!")
        // router.navigate('user/', {
        //  trigger: true
        // });
  }

});