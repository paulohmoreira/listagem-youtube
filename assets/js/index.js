const search = () => {
  const searchInput = document.getElementById("search-input").value.toUpperCase();
  const videos = document.getElementById("video-wrapper");
  const videoCard = document.querySelectorAll(".video-card");
  const videoName = videos.getElementsByTagName("p");


  for (var i = 0; videoName.length; i++) {
    let match = videoCard[i].getElementsByTagName("p")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchInput) > -1) {
        videoCard[i].style.display = "";
      } else {
        videoCard[i].style.display = "none";
      }

    }
  }
}