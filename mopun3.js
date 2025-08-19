const newsList = [
  {
    title: "기후 변화가 심각해지고 있어요",
    summary: "2025년, 이상기후 현상이 전 세계적으로 늘어나고 있습니다.",
    date: "2025-08-20"
  }
];

const container = document.getElementById("news-container");

newsList.forEach(news => {
  const div = document.createElement("div");
  div.innerHTML = `<h2>${news.title}</h2><p>${news.summary}</p><small>${news.date}</small>`;
  container.appendChild(div);
});