var posts=["2025/09/20/红点系统/","2025/09/22/事件系统/","2025/09/23/新手引导/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };