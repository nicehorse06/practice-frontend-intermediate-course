//當前頁數
let currentPage = 0;
//確保每次ajax玩才會再發一次
let isLoading = false;

window.onload = () => {
  // 首次載入前20項
  appendData();

  // 滑動時執行該函式
  window.onscroll = () => {
    // 頁面倒底前預先載入的距離
    const pre_load_height = 200;
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.offsetHeight,
      body.scrollHeight,
      html.clientHeight,
      html.offsetHeight,
      html.scrollHeight
    );
    // infinite scroll 為偵測 scrollTop + window height === document height 時觸發載入
    if (scrollTop + window.innerHeight >= height - pre_load_height) {
      // 做載入的動作
      if (!isLoading) {
        appendData();
      }
    }
  }
}

// 發出 ajax
let sendHttpRequest = (callback) => {
  const client_id = '80stfocyvne9dzzxyvz4j4x9yl75bd';
  const game = 'League%20of%20Legends';
  let targetUrl = `https://api.twitch.tv/kraken/streams/?game=${game}&client_id=${client_id}&offset=${currentPage}`;
  let request = new XMLHttpRequest();
  isLoading = true;
  request.open("GET", targetUrl);
  request.onload = () => {
    data = JSON.parse(request.responseText);
    console.log(callback);
    callback(null, data);
  };
  request.send();
};

// 用來結合 HttpRequest 和 插入 HTML 內容的函式
let appendData = () => {
  sendHttpRequest((err, data) => {
      const { streams } = data;
      const row = document.querySelector('.row');
      for (let stream of streams) {
        //插入element string到row的最後一個子項
        row.insertAdjacentHTML('beforeend', getColumn(stream));
      }
      currentPage += 20;
      isLoading = false;
  });
}

// 準備用來增加HTML的載入動作
let getColumn = (stream) => {
  return `
    <div class='col'>
      <div class='preview'>
        <div class='placeholder'></div>
        <img src='${stream.preview.medium}' onload='this.style.opacity=1'/>
      </div>
      <div class='bottom'>
        <div class="avatar">
          <img class='avatar_img' src='${stream.channel.logo}' />
        </div>
        <div class='intro'>
          <div class='channel_name'>${stream.channel.display_name}</div>
          <div class='owner_name'>${stream.channel.name}</div>
        </div>
      </div>
    </div>  
    `
}