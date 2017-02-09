var phantomcss = require('phantomcss');

// start a casper test
casper.test.begin('Tags', function(test) {

  phantomcss.init({
    rebase: casper.cli.get('rebase')
  });

  // open page
  casper.start('http://localhost:1337/');

  // set your preferred view port size
  casper.viewport(1024, 768);

  casper.then(function() {
      // take the screenshot of the whole body element and save it under "body.png". The first parameter is actually a CSS selector
      phantomcss.screenshot('body', 'body');
  });

  casper.then(function now_check_the_screenshots() {
    // compare screenshots
    phantomcss.compareAll();
  });

  // run tests
  casper.run(function() {
    console.log('\nTHE END.');
    casper.test.done();
  });
});