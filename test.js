"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

describe('git-get-patch', function() {
  it('should delegate correctly', function(done) {
    var rev = 'master';
    var repoPath = '/home/node.git';

    var streamPatch = proxyquire.load('./', {
      'git-spawned-stream': function(path, args) {
        path.should.eql(repoPath);
        args.should.eql(['format-patch', '-M', "--encoding=utf8", "--stdout", "-1", "--root", rev]);

        done();
      }
    });

    streamPatch(repoPath, rev);
  });
});
