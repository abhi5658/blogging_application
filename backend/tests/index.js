before(async function (done) {
    // create a test DB
    const seed = require('../scripts/seedDb');
    await seed;
    done();
})

require('./unit/blogService.test');
require('./integration/ping.test');
require('./integration/blogController.test');