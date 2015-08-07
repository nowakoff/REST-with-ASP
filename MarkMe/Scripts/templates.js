
var updateBookmark = {
    updateItemTemplate: function (id, title, url, user, i) {
        return '<div class="modal fade" id="edit' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">' +
                    '<div class="modal-dialog" role="document">'+
                        '<div class="modal-content">'+
                           ' <div class="modal-header">'+
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                                '<h4 class="modal-title" id="exampleModalLabel">Edit Bookmark</h4>'+
                            '</div>'+
                            '<div class="modal-body">'+
                                '<form class="updateBookmark">'+
                                    '<div class="form-group">' +
                                        '<input type="hidden" class="form-control" id="recipient-name" name="ID" value="' + id + '">' +
                                        '<label for="recipient-name" class="control-label">Title:</label>'+
                                        '<input name="Title" type="text" class="form-control" id="recipient-name" value="' + title + '">' +
                                    '</div>'+
                                    '<div class="form-group">'+
                                        '<label for="message-text" class="control-label">Url:</label>'+
                                        '<input type="text" name="Url" class="form-control" id="message-text" value="' + url + '">' +
                                    '</div>'+
                                    '<div class="form-group">'+
                                        '<label for="message-text" class="control-label">User:</label>'+
                                        '<input type="text" name="User" class="form-control" id="message-text" value="' + user + '">' +
                                         '<input class="btn btn-primary updateMark" type="submit" value="Submit">' +
                                       '</div>' +
                                     '</form>'+
                            '</div>'+
                            '<div class="modal-footer">'+
                                '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                            '</div>'+
                        '</div>'+
                    '</div>' +
                    '</div>';
    }
}
var deleteBookmark = {  
    deleteItemTemplate: function(title, id, i) {
        return '<div class="modal fade" id="delete' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                        '<div class="modal-content">' +
                            '<div class="modal-header">' +
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                                '<h4 class="modal-title" id="exampleModalLabel">Delete Bookmark </h4>' +
                            '</div>' +
                                '<div class="modal-body">' +
                                '<form class="deleteBookmark">' +
                                    '<div class="form-group">' +
                                        '<p>Do you want to delete '+ title +' bookmark?</p>' +
                                        '<input type="hidden" class="form-control" id="recipient-name" name="ID" value="' + id + '">' +
                                    '</div>' +
                                     '</form>' +
                            '</div>' +
                            '<div class="modal-footer">' +
                                '<button  type="button" class="btn btn-default deleteMark" data-dismiss="modal">Yes</button>' +
                                '<button type="button" class="btn btn-primary">No</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' 
    
    }

}

var showBookmark = { 
    showItemTemplate: function (title, url, user,i){

        return '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"   id="details' + i + '">' +
                   '<div class="modal-dialog modal-sm">'+
                       '<div class="modal-content">'+
                           '<div class="modal-header">'+
                               '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                               '<h4 class="modal-title" id="exampleModalLabel">Bookmark Details</h4>'+
                           '</div>'+
                           '<div class="form-group">'+
                               '<label for="recipient-name" class="control-label">Title:' + title + '</label>' +
                           '</div>'+
                           '<div class="form-group">'+
                               '<label for="message-text" class="control-label">Url:' + url + '</label>' +
                           '</div>'+
                           '<div class="form-group">' +
                               '<label for="message-text" class="control-label">User:' + user + '</label>' +
                            '</div>'+
                        '</div>'+
                   '</div>'+
               '</div>'
      }
}

           