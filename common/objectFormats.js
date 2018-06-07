define(function(require) {
  var Backbone = require('Backbone');
  
  //Links are models meant to contain data for html links
  //{
  //  link: 'url/goes/here'
  //   name: 'link-replacement
  //}
  var Link = Backbone.Model.extend({
      defaults: {
          link: '',
          name: ''
      }
  });
  
  return {
    linkModel: Link
  };
});
