const newsList = [
  {
    title: "모푸의 컴퓨터 문제가...",
    summary: "사랑해요",
    date: "2025-08-20"
  },
  {
    title: "두 번째 기사 제목입니다",
    summary: "두 번째 기사 내용이에요.",
    date: "2025-08-19"
  }
];

const container = document.getElementById("news-container");

newsList.forEach((news, index) => {
  const div = document.createElement("div");
  div.classList.add("news-article");

  div.innerHTML = `
    <a href="article.html?index=${index}" target="_blank" class="news-title-link">
      <h2 class="news-title">${news.title}</h2>
    </a>
  `;

  container.appendChild(div);
});

