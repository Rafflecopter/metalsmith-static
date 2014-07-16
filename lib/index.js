/**
 * Module Dependencies.
 */

var ncp   = require('ncp').ncp;
var path  = require('path');
var mkdirp = require('mkdirp');


/**
 * Module Exports
 */

module.exports = function(opts) {
  opts = opts || {}
  relSrc = opts.src || 'public'
  relDest = opts.dest || 'public'

  return function(files, metalsmith, done) {
    var src = path.join(metalsmith.dir, relSrc);
    var dest = path.join(metalsmith.dir, metalsmith._dest, relDest)

    mkdirp(dest, function(err) {
      if (err) return done(err);

      ncp(src, dest, function(err) {
        if (err) return done(err);
        done();
      });
    });
  };
};
