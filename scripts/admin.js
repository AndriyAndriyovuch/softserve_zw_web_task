function isOnline() {
  return window.navigator.onLine;
}

function readURL(input) {
  if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        document.querySelector("#news-image").setAttribute('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function submitMyForm() {
  const newstitle = document.querySelector("#news-title")
  const newsBody = document.querySelector("#news-body")
  const newsImage = document.querySelector("#news-image")

  if (newstitle.value.trim() === "" || newsBody.value.trim() === "" || newsImage.src.slice(-15) === "placeholder.svg") {
    cuteAlert({
      type: "error",
      title: "Error",
      message: "News can't be empty",
      buttonText: "Got it"
    })

  } else {
    cuteAlert({
      type: "question",
      title: "Nice article",
      message: "Add this news?",
      confirmText: "Sure",
      cancelText: "No"
    }).then((e) => {
      if (e == "confirm") {
        if (isOnline()) {
          location.reload
        } else {
          const contentHtml = `
            <div class="news-image">
              <img
                src=${newsImage}
                alt="Cinque Terre"
                height="250"/>
            </div>
            <div class="desc">
              ${newsBody}
            </div>
        `
          localStorage.setItem(`news-${maxNewsNumber() + 1}`, contentHtml)
          newsBody.value = ''
          newstitle.value = ''
          newsImage.src = 'images/news/placeholder.svg'
        }
      } else {
        return false
      }
    })
  }
};

function maxNewsNumber() {
  const newsNumbers = Object.keys(localStorage)
  .filter(item => item.startsWith('news-'))
  .map(item => Number(item.replace('news-', '')));


  return newsNumbers.length === 0 ? 0 : Math.max(...newsNumbers)
}
