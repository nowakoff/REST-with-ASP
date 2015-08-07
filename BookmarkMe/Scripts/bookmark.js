
var demo = (function () {

    var sayHello = function () {
        var success = function (data) {
            console.log(data.url);
        };

        var error = function () {
            console.log("error!");
        };

        bookmarkAjax.getDemo(success, error);
    };

    var bindEvents = function () {
        $("button").on("click", sayHello);
        $("#result").append(demoTemplates);

    };

    var append = function () {
        $("#result").append(demoItemTemplate());
    };

    var init = function () {
        bindEvents();
    };

    return {
        initialize: function () { init(); },
        sayHello: function () { sayHello(); },
      
    };
})();

demo.initialize();

