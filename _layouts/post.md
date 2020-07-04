<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
  {% seo %}
  <meta name="keywords" content="{{ page.keywords }}">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="/assets/css/blog_style.css" rel="stylesheet">
</head>
<body>
<!-- Navigation -->
{% include navigation.md %}
<!-- Navigation -->
<!-- blog content -->
<div class="container-fluid" id="mainContainer">
  <div class="row">
            <div id="left" class="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
            </div>
<div id="center" class="col-xs-12 col-sm-9 col-md-8 col-lg-8 col-xl-8">
  <div id=post-cont>
  {{ content }}
  </div>
  <!-- comment box -->
  {% include comment-disqus.md %}
  <!-- comment box -->
</div>
<div id="right" class="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2">
</div>
</div>
</div>  
<!-- blog content -->
<!-- footer -->
{% include footer.md %}
<!-- footer -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script src="/assets/js/script.js"></script>
</body>
</html>
