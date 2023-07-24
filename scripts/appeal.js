function addAppeal() {
  const appealContainer = document.querySelector("#appeal-container")
  const content = document.querySelector("#appeal-text")

  const newAppeal = document.createElement("div")
  newAppeal.className = "appeal"
  newAppeal.innerHTML = `
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
  
  appealContainer.insertBefore(newAppeal, appealContainer.firstChild)
  content.value = ""
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