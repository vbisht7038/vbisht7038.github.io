---
layout: post
permalink: /blog/
description: "This Page contains cooking recipe posts"
---
<div id="blog-posts">
<div class="grid-container">
{% for post in site.posts %}
<div class="card">
  <div class="card-info">
    <span> <i class="fa fa-user user-icon" aria-hidden="true"></i> {{post.author}}</span>  
    <span class="clockCont"> <i class="fa fa-clock-o clock-icon"></i>{{ post.date | date_to_long_string: "ordinal", "US" }}</span>
  </div>
  <div class="bg-img">
    <img alt="{{post.title}}" src="{{post.blogImg}}">
  </div>
  <div class="content">    
    <p>{{post.description}}</p>
    <a href='{{post.url}}'> READ MORE</a>
  </div>
</div>
{% endfor%}
</div>
</div>
