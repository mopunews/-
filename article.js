// index에서 넘긴 ?index=값 가져오기
const params = new URLSearchParams(window.location.search);
const articleIndex = parseInt(params.get("index"), 10);

// 뉴스 데이터
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

// 기사 유효성 검사
if (isNaN(articleIndex) || !newsList[articleIndex]) {
  document.getElementById("article-container").innerHTML = "<p>기사를 찾을 수 없습니다.</p>";
} else {
  const article = newsList[articleIndex];
  const container = document.getElementById("article-container");

  container.innerHTML = `
    <h1>${article.title}</h1>
    <p class="news-date">${article.date}</p>
    <p class="news-summary">${article.summary}</p>
  `;
}
