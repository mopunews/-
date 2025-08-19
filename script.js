const newsList = [
  {
    title: "모푸의 컴퓨터 문제가 모푸(관리자)의 문제가 아닐 수도 있다는 사실이 드러나...",
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

newsList.forEach(news => {
  const div = document.createElement("div");
  div.classList.add("news-article");

  div.innerHTML = `
    <h2 class="news-title">${news.title}</h2>
    <div class="news-content" style="display:none;">
      <p class="news-summary">${news.summary}</p>
      <small class="news-date">${news.date}</small>
    </div>
  `;

  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("news-title")) {
    const content = e.target.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
});
