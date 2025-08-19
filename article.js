// index에서 넘긴 ?index=값 가져오기
const params = new URLSearchParams(window.location.search);
const articleIndex = parseInt(params.get("index"), 10);

// 뉴스 데이터
const newsList = [
  {
    title: "모푸 머리 그리 크지 않다. 푸리들의 억까가 심한 편이다.",
    summary: "모푸의 머리가 그리 크지 않은 것으로 밝혀졌다. 푸리들은 일명 모푸의 머리가 대두,목성이라고 말하지만 실제로는 작은 편에 속한다는 사실이 입증되었다. 이를 보고 모푸는 '푸리들의 억까가 심하다' 와 같이 억울함을 토로한 바 있다",
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

