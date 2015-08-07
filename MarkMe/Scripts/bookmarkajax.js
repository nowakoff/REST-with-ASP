
//***************GET*****************************************************
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'http://localhost:62795/api/bookmarks',
        success: function (result) {
            table.createTable(result);
        }
    });

//***************POST****************************************************
    $("#postBookmark").submit(function () {
        $.ajax({
            type: "POST",
            url: "http://localhost:62795/api/bookmarks",
            data: $(this).serialize(),
            complete: function (data) {
                window.location = 'Index.html'
            }
        });

    });
});

//***************DELETE****************************************************
function deleteMark() {
    $(".deleteMark").on("click", function () {
        console.log("I got clicked!");
        console.log($(this).parent().parent().find('#recipient-name').val())
        var ID = $(this).parent().parent().find('#recipient-name').val()

        $.ajax({
            type: "DELETE",
            url: "http://localhost:62795/api/bookmarks/" + ID,
            complete: function () {
            window.location = 'Index.html'
            }
        });
    });
}
//***************UPDATE****************************************************
function updateMark() {
    $(".updateMark").on("click", function () {
        console.log("I got clicked!");
        console.log($(this).parent().parent().find('#recipient-name').val())
        var ID = $(this).parent().parent().find('#recipient-name').val()

        $(".updateBookmark").submit(function () {
            $.ajax({
                type: "PUT",
                url: "http://localhost:62795/api/bookmarks/" + ID,
                data: $(this).serialize(),
                complete: function (data) {
                    window.location = 'Index.html'

                }
            });

        });
    });
}