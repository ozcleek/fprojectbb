var HomepageView = Parse.View.extend({

  renderTemplate: _.template($("#home-view-template").text()),

  initialize: function(){
    $(".container-signin").html(this.el)
    this.render()
  },

  render: function(){
    this.$el.html(this.renderTemplate())
  }

});