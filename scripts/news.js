window.addEventListener("mousemove", (event) => {
  if (isOnline()) {
    addLocalNews()
  };
});

function isOnline() {
  return window.navigator.onLine;
}

function addLocalNews() {
  const check = localStorage.length
  for (let i = 1; i <= check; i++) {
    const contentHtml = localStorage.getItem(`news-${i}`)

    appendDiv(contentHtml)
  }
  localStorage.clear();
}

function appendDiv(content) {
  const appealContainer = document.querySelector("#news-container")
  const newNews = document.createElement("div")

  newNews.className = "gallery";
  newNews.innerHTML = content;

  appealContainer.insertBefore(newNews, appealContainer.firstChild)
}
