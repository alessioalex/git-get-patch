"use strict";

var gitSpawnedStream = require('git-spawned-stream');

function getPatch(repoPath, rev) {
  rev = rev || 'HEAD';

  var args = ["format-patch", "-M"];
  args.push("--encoding=utf8", "--stdout", "-1", "--root", rev);

  return gitSpawnedStream(repoPath, args);
}

module.exports = getPatch;
