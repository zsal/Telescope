// Publish a list of posts

Meteor.publish('forumList', function() {
  if(canViewById(this.userId)){
    var postIds = [];
    // compile a list of the first X posts in each category
    // and add their ids to postIds
    Categories.find().forEach(function (category) {
      var postsInCategory = Posts.find({'categories.slug': category.slug}, {
        sort: {createdAt: -1, _id: -1},
        limit: postsPerCategory
      });
      postIds = postIds.concat(_.pluck(postsInCategory.fetch(), '_id'));
    });
    return Posts.find({_id: {$in: postIds}});
  }
  return [];
});
