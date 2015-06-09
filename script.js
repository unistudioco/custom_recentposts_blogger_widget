
// Recent Posts Blogger Widget by Uikithemes : Oussama Bouyardane

var numPosts = 3;

$(function() {
    $.ajax({
        url: '/feeds/posts/summary?alt=json-in-script&max-results='+ numPosts +'',
        type: 'get',
        dataType: 'jsonp',
        success: function(data) {
            var link, title, item = '',
                content = data.feed.entry;
            if (content !== undefined) {
                item = "<ul class='recent-posts'>";
                for (var i = 0; i < content.length; i++) {
                    title = content[i].title.$t;
                    for (var j = 0; j < content[i].link.length; j++) {
                        if (content[i].link[j].rel ==
                            "alternate") {
                            link = content[i].link[j].href;
                            break;
                        }
                    }
                    var date = content[i].published.$t;
                    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                        10, 11, 12
                    ];
                    var month2 = ["January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                    ];
                    var day = date.split("-")[2].substring(
                        0, 2);
                    var m = date.split("-")[1];
                    var year = date.split("-")[0];
                    for (var u2 = 0; u2 < month.length; u2++) {
                        if (parseInt(m) == month[u2]) {
                            m = month2[u2];
                            break;
                        }
                    }
                    date = m + ' ' + day + ', ' + year;
                    var thumb = 'media$thumbnail' in
                        content[i] ? '<img src="' + content[
                            i].media$thumbnail.url + '">' :
                        "";
                    item +=
                        '<li><div class="thumb"><a href="' +
                        link + '">' + thumb +
                        '</a></div><h3 class="title"><a href="' +
                        link + '">' + title +
                        '</a></h3><span class="meta-date">' +
                        date + '</span></li>';
                    item += '</li>';
                }
                item += '</ul>';
                $('#recentposts').html(item);
            } else {
                $('#recentposts').html(
                    '<span>No posts to load!</span>');
            }
        },
        error: function() {
            $('#recentposts').html(
                '<strong>Something is wrong!.</strong>');
        }
    });
});

