const newsList = [
  {
    title: "모푸의 컴퓨터 문제가 모푸(관리자)의 문제가 아닐 수도 있다는 사실이 드러나... 모푸를 질책했던 푸리들은 미안한 마음에 공겜 10개 면제권 준다는...",
    summary: "사랑해요",
    date: "2025-08-20"
  }
];

const container = document.getElementById("news-container");

newsList.forEach(news => {
  const div = document.createElement("div");
  div.innerHTML = `<h2>${news.title}</h2><p>${news.summary}</p><small>${news.date}</small>`;
  container.appendChild(div);

});
