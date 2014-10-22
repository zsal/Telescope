// Session variables
Session.set('initialLoad', true);
Session.set('today', new Date());
Session.set('view', 'top');
Session.set('postsLimit', getSetting('postsPerPage', 10));
Session.set('sessionId', Meteor.default_connection._lastSessionId);

STATUS_PENDING=1;
STATUS_APPROVED=2;
STATUS_REJECTED=3;

// Geo-Location
Session.set('plat', -1);
Session.set('plng', -1);

var watchID = navigator.geolocation.watchPosition(function(position) {
  Session.set('plat', position.coords.latitude);
  Session.set('plng', position.coords.longitude);
});

adminNav = adminNav.concat([
  {
    route: 'posts_pending',
    label: 'Pending'
  },
  {
    route: 'all-users',
    label: 'Users'
  },
  {
    route: 'settings',
    label: 'Settings'
  },
  {
    route: 'toolbox',
    label: 'Toolbox'
  }   
]);

// Sort postModules array position using modulePositions as index
postModules = _.sortBy(postModules, function(module){return _.indexOf(modulePositions, module.position)});

postHeading = _.sortBy(postHeading, 'order');

postMeta = _.sortBy(postMeta, 'order');

Meteor.startup(function () {
  $('#rss-link').attr('title', i18n.t('New Posts'));
});