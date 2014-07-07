var filteredModules = function (positions) {
  return _.filter(postModules, function(module){return _.contains(positions, module.position)});
}

var post = {};

Template[getTemplate('post_item')].created = function () {
  post = this.data;
};

Template[getTemplate('post_item')].helpers({
  leftPostModules: function () {
    return filteredModules(['leftOfLeft', 'left', 'rightOfLeft']);
  },
  centerPostModules: function () {
    return filteredModules(['leftOfCenter', 'center', 'rightOfCenter']);
  },
  rightPostModules: function () {
    return filteredModules(['leftOfRight', 'right', 'rightOfRight']);
  },
  moduleContext: function () {
    var module = this;
    module.moduleClass = camelToDash(module.template) + ' ' + module.position + 'cell';
    module.post = post;
    console.log(post)
    return module;
  }
});
