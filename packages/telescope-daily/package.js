Package.describe({
  summary: "Telescope daily view",
  version: "0.1.0",
  name: "telescope-daily"
});

Package.onUse(function (api) {

  api.use([
    'telescope-lib',
    'telescope-base',
    'iron:router',
    'meteorhacks:fast-render',
    'meteorhacks:subs-manager'
  ], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'templating'
  ], 'client');

  api.add_files(['lib/daily.js'], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/templates/posts_daily.html',
    'lib/client/templates/posts_daily.js',
    'lib/client/stylesheets/daily.css',
    ], ['client']);
 
  api.export(['PostsDailyController']);
});