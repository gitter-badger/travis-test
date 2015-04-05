var chai = require('chai');
var should = chai.should();

describe("describe", function () {
    it('it', function (done) {
        setTimeout(function () {
            var obj = { uid: '123456' };
            obj.should.to.be.deep.equal(obj);
            done();
        }, 500);
    });
});
