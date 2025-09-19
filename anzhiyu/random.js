var posts=["2025/09/20/hello-world/","2025/09/20/红点系统/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };