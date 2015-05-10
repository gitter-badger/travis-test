module.exports = function(app, models) {
    'use strict';


    return {
        /**
         * Home Page Route
         * @param req
         * @param res
         */
        index: function(req, res){
            res.render('homepage', { title: 'test.com' });
        }
    };

};