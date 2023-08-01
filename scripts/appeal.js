window.addEventListener("mousemove", (event) => {
  if (isOnline()) {
    addLocalNews()
  };
});

function isOnline() {
  return window.navigator.onLine;
}

function addAppeal() {
  const content = document.querySelector("#appeal-text")

  if (content.value.trim() === "") {
    cuteAlert({
      type: "error",
      title: "Error",
      message: "Appeal can't be empty",
      buttonText: "Got it"
    })
  } else {
    const contentHtml = `
    <p>
      ${content.value}
    </p>

    <div class="appeal-info">
      <span class="appeal-date">${getCurrentTime()}</span>
      <span class="username">user_${randomNumber(1215, 99999)}</span>
      <span class="appeal-avatar"><img src="https://randomuser.me/api/portraits/lego/${randomNumber(1,8)}.jpg" alt="avatar" class="avatar-img">
      </span>
    </div>

    <hr>
    `
    if (isOnline()) {
      appendDiv(contentHtml)
    } else {
      localStorage.setItem(`appeal-${maxAppealNumber() + 1}`, contentHtml)
    }

    content.value = ""
  }
}

function addLocalNews() {
  const check = localStorage.length
  for (let i = 1; i <= check; i++) {
    const contentHtml = localStorage.getItem(`appeal-${i}`)

    appendDiv(contentHtml)

    localStorage.removeItem(`appeal-${i}`);
  }
}

function appendDiv(content) {
    const appealContainer = document.querySelector("#appeal-container")
    const newAppeal = document.createElement("div")

    newAppeal.className = "appeal";
    newAppeal.innerHTML = content;

    appealContainer.insertBefore(newAppeal, appealContainer.firstChild)
}


function getCurrentTime() {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedDay}.${formattedMonth}.${year},${formattedHours}:${formattedMinutes}`;
}

function randomNumber(start, finish) {
  return Math.floor(Math.random() * finish) + start;
}

function maxAppealNumber() {
  const appealNumbers = Object.keys(localStorage)
  .filter(item => item.startsWith('appeal-'))
  .map(item => Number(item.replace('appeal-', '')));

  return appealNumbers.length === 0 ? 0 : Math.max(...appealNumbers)
}
