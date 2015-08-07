
var bookmarkAjax = {
    getDemo: function (successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            url: "api/bookmark",
            success: function (data) {
                if ($.isFunction(successCallback)) { successCallback(data); }
            },
            error: function (xhr, status, err) {
                if ($.isFunction(errorCallback)) { errorCallback(xhr, status, err); }
            }
        });
    }
}