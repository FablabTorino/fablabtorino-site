$(document).ready(function() {
    if ($('#latest_mail').length != 0) {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://us5.campaign-archive.com/feed?u=bbd5781f8c72a1885774d98c0&id=2ee26e2206',
            method: 'GET',
            beforeSend: function(xhr){
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            },
            success: function(data) {
                var contents = $(data).find('item').first().find('description').html();
                contents = contents.replace(/<style type="text\/css">[^<]*<\/style>/m, '');
                $('#latest_mail').empty().append(contents);
            }
        });
    }
});
