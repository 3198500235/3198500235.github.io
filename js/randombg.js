//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/1-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/2-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/3-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/4-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/5-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/6-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/7-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/8-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/9-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/10-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/11-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/12-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/13-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/14-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/15-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/16-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/17-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/18-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/19-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/20-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/21-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/22-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/23-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/24-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/25-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/26-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/27-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/28-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/29-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/30-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/31-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/32-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/33-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/34-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/35-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/36-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/37-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/38-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/39-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/40-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/41-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/42-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/43-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/44-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/45-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/46-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/47-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/48-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/49-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/50-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/51-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/52-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/53-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/54-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/55-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/56-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/57-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/58-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/59-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/60-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/51-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/62-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/63-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/64-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/65-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/66-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/67-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/68-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/69-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/70-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/71-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/72-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/73-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/74-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/75-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/76-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/77-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/78-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/79-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/80-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/81-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/82-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/83-min.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.ceil(Math.random() * (backimg.length-1));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/1-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/2-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/3-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/4-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/5-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/6-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/7-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/8-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/9-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/10-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/11-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/12-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/13-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/14-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/15-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/16-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/17-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/18-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/19-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/20-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/21-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/22-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/23-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/24-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/25-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/26-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/27-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/28-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/29-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/30-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/31-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/32-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/33-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/34-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/35-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/36-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/37-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/38-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/39-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/40-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/41-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/42-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/43-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/44-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/45-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/46-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/47-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/48-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/49-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/50-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/51-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/52-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/53-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/54-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/55-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/56-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/57-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/58-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/59-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/60-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/51-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/62-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/63-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/64-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/65-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/66-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/67-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/68-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/69-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/70-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/71-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/72-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/73-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/74-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/75-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/76-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/77-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/78-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/79-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/80-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/81-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/82-min.jpg)",
    "url(https://cdn.jsdelivr.net/gh/3198500235/CDN@1.8/banner/83-min.jpg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];