# Custom Recent Posts Blogger Widget

The demo of this widget <a href="http://jsfiddle.net/uikithemes/qpy3thwz/1/" target="_blank">jsfiddle</a>
<h4>Step 1 : The HTML MarkUp :</h4>
<pre>
&lt;div class=&quot;widget-content&quot;&gt;
&lt;h2 class=&quot;widget-title&quot;&gt;Recent Posts&lt;/h2&gt;
&lt;div id=&quot;recentposts&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
Firstly go to your blogger dashboard > layout > Add HTML/JAVASCRIPT widget.<br/>
You must only put this code <code>&lt;div id=&quot;recentposts&quot;&gt;&lt;/div&gt;</code> on your widget.
<br/>
<h4>Step 2 : The Stylesheet CSS :</h4>
You should add this code below before <code>]]&gt;&lt;b:/skin&gt;</code> Tag.
<pre>
/* Recent Posts */

#recenposts{
    position:relative;
    overflow:hidden;
    padding: 0;
}
.recent-posts {
    overflow: hidden;
    position: relative;
    padding: 0;
}

.recent-posts > li  {
    overflow: hidden;
    position: relative;
    padding: 0 0 25px 0;
}

.recent-posts > li:last-child  {
    padding: 0;
}

.recent-posts > li .thumb {
    width: 60px;
    height: 55px;
    display: block;
    float: left;
    margin-right: 15px;
    overflow: hidden;
    border-radius: 3px;
}

.recent-posts > li .thumb img {
    width: 100%;        
    height: 100%;
    display: block;
}

.recent-posts > li .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    display: inline;
}

.recent-posts > li .title a {
    color: #222;
}

.recent-posts > li .title a:hover {
    color: #D8A175;
}

.recent-posts > li .meta-date {
    display: block;
    font-size: 12px;
}

.recent-posts > li .meta-date:before {
    content: "\f017";
    margin-right:5px;
    float:left;
}
</pre>
<br/>
<h4>Step 3 : Javascript Script :</h4>
You should place this code below before the <code>&lt;/head&gt;</code> or <code>&lt;/body&gt;</code>.
<pre>
// The number of posts appear
var numPosts = 3;

$(function() {
    $.ajax({
        url: &#039;/feeds/posts/summary?alt=json-in-script&amp;max-results=&#039;+ numPosts +&#039;&#039;,
        type: &#039;get&#039;,
        dataType: &#039;jsonp&#039;,
        success: function(uikithemes) {
            var link, title, item = &#039;&#039;,
                content = uikithemes.feed.entry;
            if (content !== undefined) {
                item = &quot;&lt;ul class=&#039;recent-posts&#039;&gt;&quot;;
                for (var i = 0; i &lt; content.length; i++) {
                    title = content[i].title.$t;
                    for (var j = 0; j &lt; content[i].link.length; j++) {
                        if (content[i].link[j].rel ==
                            &quot;alternate&quot;) {
                            link = content[i].link[j].href;
                            break;
                        }
                    }
                    var date = content[i].published.$t;
                    var month = [1, 2, 3, 4, 5, 6, 7, 8, 9,
                        10, 11, 12
                    ];
                    var month2 = [&quot;January&quot;, &quot;February&quot;, &quot;March&quot;,
                        &quot;April&quot;, &quot;May&quot;, &quot;June&quot;,
                        &quot;July&quot;, &quot;August&quot;, &quot;September&quot;,
                        &quot;October&quot;, &quot;November&quot;, &quot;December&quot;
                    ];
                    var day = date.split(&quot;-&quot;)[2].substring(
                        0, 2);
                    var m = date.split(&quot;-&quot;)[1];
                    var year = date.split(&quot;-&quot;)[0];
                    for (var u2 = 0; u2 &lt; month.length; u2++) {
                        if (parseInt(m) == month[u2]) {
                            m = month2[u2];
                            break;
                        }
                    }
                    date = m + &#039; &#039; + day + &#039;, &#039; + year;
                    var thumb = &#039;media$thumbnail&#039; in
                        content[i] ? &#039;&lt;img src=&quot;&#039; + content[
                            i].media$thumbnail.url + &#039;&quot;&gt;&#039; :
                        &quot;&quot;;
                    item +=
                        &#039;&lt;li&gt;&lt;div class=&quot;thumb&quot;&gt;&lt;a href=&quot;&#039; +
                        link + &#039;&quot;&gt;&#039; + thumb +
                        &#039;&lt;/a&gt;&lt;/div&gt;&lt;h3 class=&quot;title&quot;&gt;&lt;a href=&quot;&#039; +
                        link + &#039;&quot;&gt;&#039; + title +
                        &#039;&lt;/a&gt;&lt;/h3&gt;&lt;span class=&quot;meta-date&quot;&gt;&#039; +
                        date + &#039;&lt;/span&gt;&lt;/li&gt;&#039;;
                    item += &#039;&lt;/li&gt;&#039;;
                }
                item += &#039;&lt;/ul&gt;&#039;;
                $(&#039;#recentposts&#039;).html(item);
            } else {
                $(&#039;#recentposts&#039;).html(
                    &#039;&lt;span&gt;No posts to load!&lt;/span&gt;&#039;);
            }
        },
        error: function() {
            $(&#039;#recentposts&#039;).html(
                &#039;&lt;strong&gt;Something is wrong!.&lt;/strong&gt;&#039;);
        }
    });
});
</pre>
<br/>
Now just click on save template.<br/>
That's it and you well done!<br/>
I hope this widget help you to make your blog more functionality.<br/>
by <b>Oussama Bouyardane</b>
