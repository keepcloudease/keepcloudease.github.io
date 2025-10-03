var posts=["2025/09/20/红点系统/","2025/09/22/事件系统/","2025/09/23/新手引导/","2025/10/04/SLG大地图的管理方案/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };