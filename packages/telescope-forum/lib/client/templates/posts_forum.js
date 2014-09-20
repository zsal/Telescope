var getPosts = function (date) {
  var terms = {
    view: 'digest',
    after: moment(date).startOf('day').toDate(),
    before: moment(date).endOf('day').toDate()
  };
  var parameters = getParameters(terms);
  var posts = Posts.find(parameters.find, parameters.options).map(function (post, index, cursor) {
    post.rank = index;
    return post;
  });
  return posts;
}

Template[getTemplate('postsForum')].helpers({
  postsLoaded: function () {
    return true;
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
  },
  loadMoreUrl: function () {
    return ''
  }
});