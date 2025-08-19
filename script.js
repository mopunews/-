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
target="_blank"로 새 창 또는 새 탭에서 열림

?index=0, ?index=1 같은 주소로 기사를 구분해서 넘김

2. ✨ 새 파일: article.html (기사 단독 페이지)
html
코드 복사
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>모뿌 뉴스 - 기사 보기</title>
  <link rel="stylesheet" href="mopun2.css" />
</head>
<body>
  <div id="article-container"></div>

  <script src="article.js"></script>
</body>
</html>
  }
});

