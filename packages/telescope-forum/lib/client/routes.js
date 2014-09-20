var postsPerCategory = 5;

var coreSubscriptions = new SubsManager({
  // cache recent 50 subscriptions
  cacheLimit: 50,
  // expire any subscription after 30 minutes
  expireIn: 30
});

Meteor.startup(function () {
  Router.map(function() {
    this.route('postsForum', {
      path: '/forum',
      template: getTemplate('postsForum'),
      onBeforeAction: function() {
        var terms = {
          view: 'forum'
        };

        this.postsForumSubscription = coreSubscriptions.subscribe('forumList', function() {
          Session.set('postsLoaded', true);
        });
        // this.postsForumUsersSubscription = coreSubscriptions.subscribe('postsForumUsers', terms);

        return [this.postsForumSubscription];

      }
    });
  });
});