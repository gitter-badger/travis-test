module.exports = function (browser) {

    'use strict';

    // Blog Index Suite
    describe('Homepage', function () {

        beforeEach(function (done) {
            browser.get('http://localhost:3000/')
                .then(function () {
                    done();
                },
                function (err) {
                    done(error);
                }
            );

        });

        /**
         * As a Visitor,
         * I would like to see a Welcome on the homepage,
         * so I know where I am.
         */
        //it('should have a robotlovesyou image', function (done) {
            //browser.elementByCssSelector('h1#title').getValue().should.become('Welcome')
            //.should.equal("What the text should be")
            //.should
                //.eventually.exist
            //    .notify(done);

        //});

        /**
         * As an Owner,
         * I would like Visitors to see some explanatory text on the homepage,
         * so that they understand why the site looks a bit pants at the moment.
         */
        it('should have a container for the explanatory text', function (done) {
            browser.elementByCssSelector('h1#title')
                .should.eventually.exist.notify(done);
        });
    });
}

