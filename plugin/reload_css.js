//
// Author: Loki Ng
// Date: 23 July 2013
//
var M = require('mstring');
var Chrome = require('chrome-remote-interface');

var reloadStyles = M(function() {/***
$('link[rel=stylesheet]').each(function() {
  var link = $(this).prop('href').replace(/.r=\d+/, '');
  var pass = ['localhost', '127.0.0.1', '192.168'].some(function(key) {
    return link.indexOf(key) != -1;
  });
  if (pass) {
    var d = (link.indexOf('?') === -1) ? '?' : '&';
    link = link + d + "r=" + Math.floor(Math.random() * 9999999 + 1111111);
    $(this).prop('href', link);
  }
});
***/});

var styleOnly = process.argv[2] === 'style-only'

Chrome({port: '9222'}, function (chrome) {
    with (chrome) {

        Runtime.evaluate({expression: "window.location.host"}, function(err, response) {
          var pass = ['localhost', '127.0.0.1', '192.168'].some(function(key) {
            return response.result.value.indexOf(key) != -1;
          });
          if (pass) {
            if (styleOnly) {
                Runtime.evaluate({expression: reloadStyles});
            } else {
                Page.reload();
            }
          }
          close();
        });
    }
}).on('error', function () {
    console.error('Cannot connect to Chrome');
});
