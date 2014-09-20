Template[getTemplate('postsForum')].helpers({
  postsLoaded: function () {
    return Session.get('postsLoaded');
  },
  post_item: function () {
    return getTemplate('post_item');
  },
  categories: function () {
    return Categories.find();
  },
  posts: function () {
    return Posts.find({'categories.slug': this.slug},{
      sort: {createdAt: -1, _id: -1},
      limit: postsPerCategory
    });
  }
});