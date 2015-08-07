var table = { 
    createTable: function(result)  {

        $.each(result, function (i, column) {
            $("#loopRows").append(
            '<tr ><td>' + column.ID + '</td>' +
            '<td>' + column.Title + '</td>' +
            '<td>' + column.Url + '</td>' +
            '<td>' + column.User + '</td>' +
            '<td>' + column.Date + '</td>' +
            '<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#details'+i+'">Details</button>' +
             showBookmark.showItemTemplate(column.Title, column.Url, column.User, i) +'</td>' +
            '<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#edit'+ i +'" >Edit</button>' +
             updateBookmark.updateItemTemplate(column.ID, column.Title, column.Url, column.User, i) + '</td>' +
            '<td><button type="button" class="btn btn-primary delete" data-toggle="modal" data-target="#delete'+ i +'" >Delete</button>' +
             deleteBookmark.deleteItemTemplate(column.Title, column.ID,i) + '</td></tr>');
             console.log(result);

        });
        console.log("calling deleteMark");
        deleteMark();
        console.log("calling updateMark");
        updateMark();
    }
}


