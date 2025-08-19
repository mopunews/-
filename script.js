const newsList = [
  {
    title: "모푸 머리 그리 크지 않다...",
    summary: "사랑해요",
    date: "2025-08-20"
  },
  {
    title: "모푸 생일 굿즈 전격 공개...",
    summary: "두 번째 기사 내용이에요.",
    date: "2025-08-20"
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




