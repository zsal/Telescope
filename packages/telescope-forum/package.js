Package.describe({
  summary: "Telescope forum package",
  version: '0.1.0',
  name: "telescope-forum"
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
    'templating',
  ], 'client');

  api.use([
  ], ['server']);

  api.add_files([
    'lib/forum.js'
  ], ['client', 'server']);

  api.add_files([
    'lib/client/routes.js',
    'lib/client/templates/posts_forum.css',
    'lib/client/templates/posts_forum.html',
    'lib/client/templates/posts_forum.js',
  ], ['client']);

  api.add_files([
    'lib/server/publication.js',
  ], ['server']);
  
  api.export([
    'viewNav'
  ]);
});