preloadSubscriptions.push('categories');

adminNav.push({
  route: 'categories',
  label: 'Categories'
});

Meteor.startup(function () {

  Router.onBeforeAction(Router._filters.isAdmin, {only: ['categories']});

  PostsCategoryController = PostsListController.extend({
    view: 'category'
  });

  Router.map(function() {

    // Categories

    this.route('posts_category', {
      path: '/category/:slug/:limit?',
      controller: PostsCategoryController,
      onAfterAction: function() {
        Session.set('categorySlug', this.params.slug);
      }
    });

    // Categories Admin

    this.route('categories');

  });

});

// not working right now… 
// TODO: find a way to make rendered callback reactive
Meteor.startup(function () {
  Template[getTemplate('posts_list')].rendered = function () {
    var slug = Session.get('categorySlug');
    var $submit = $('.submit');
    if(slug){
      $submit.attr('href', '/submit' + '?category='+slug);
    } else {
      $submit.attr('href', '/submit');
    }
  }
});