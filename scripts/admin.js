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
  const newstitle = document.querySelector("#news-title").value
  const newsBody = document.querySelector("#news-body").value
  const newsImage = document.querySelector("#news-image").src.slice(-15)

  if (newstitle.trim() === "" || newsBody.trim() === "" || newsImage === "placeholder.svg") {
    cuteAlert({
      type: "error",
      title: "Error",
      message: "News can't be empty",
      buttonText: "Got it"
    })
    return false
  } else {
    cuteAlert({
      type: "question",
      title: "Nice article",
      message: "Add this news?",
      confirmText: "Sure",
      cancelText: "No"
    }).then((e) => {
      if (e == "confirm") {
        location.reload()
      } else {
        return false
      }
    })
  }
};
