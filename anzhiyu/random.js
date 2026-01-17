var posts=["2025/09/20/红点系统/","2025/09/22/事件系统/","2025/09/23/新手引导/","2025/10/04/SLG大地图的管理方案/","2025/10/04/帧同步/","2025/10/04/游戏场景管理-空间划分/","2025/10/04/红点系统的前世今生以及相关注意事项/","2026/01/18/Unity UI 性能优化：为什么你应该少用 SetActive？/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };