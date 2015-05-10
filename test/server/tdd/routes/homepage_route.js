module.exports = function (sinon) {

    function requireRoute(models) {
        return require('../../../../src/routes/homepage')();
    }

    function callHomepageRoute() {
        homepage.index({}, response);
    }

    // Object to mock the response
    var response;

    // route
    var homepage;

    describe('Homepage route', function () {
        beforeEach(function () {

            response = {};
            response.render = sinon.stub();
            response.send = sinon.stub();

            homepage = requireRoute();
        });

        it('Calls the render function', function () {

            callHomepageRoute();

            response.render.should.have.been.calledOnce;
        });

        it('Calls the render function with the correct template name', function () {

            callHomepageRoute();

            // Call the promise resolve function
            //promiseMock.then.getCall(0).args[0]({});

            response.render.getCall(0).args.length.should.be.above(0);
            response.render.getCall(0).args[0].should.equal('homepage');
            response.render.getCall(0).args[1].should.deep.equal({ title: 'test.com' });

        });

    });

}