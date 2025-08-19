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
    title: "모푸 생일 굿즈 전격 공개!! 수려한 굿즈 일러스트와 섹시한 모푸 캐릭터에 찬사 쏟아져",
    summary: "모푸의 2025 생일을 기념한 굿즈가 출시되었다. 해당 굿즈는 모푸 쿠션,안대를 포함한 6종의 굿즈로 출시하였다. 해당 굿즈는 모푸의 마플샵에서 구매할 수 있으며 해당 6종의 굿즈를 한꺼번에 구매할 수 있는 굿즈 세트도 마련되어 있다.",
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

