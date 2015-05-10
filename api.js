(function () {
    function Api() {

    }

    Api.prototype.init = function () {

    };

    window.Api = new Api();

    try{
        window.initSDK()
    }catch (e){
        console.log('init initSDK must be defined');
    }

})(document,window);