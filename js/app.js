// Declare variable
const share = document.getElementById("share-article");
const writer = document.querySelector(".writer");
const writerContainer = document.querySelector(".writer-wrapper");
const shareContent = document.querySelector(".share-container");
const shareWrapper = document.querySelector(".share-wrapper");
const shareActive = document.querySelector(".share-fill");

// Event Listener
share.addEventListener("click", (e) => {
  // Mobile action
  writer.classList.toggle("writer-active");
  writerContainer.classList.toggle("writer-wrapper-toggle");
  shareContent.classList.toggle("share-active");
  shareWrapper.classList.toggle("share-wrapper-toggle");
  shareActive.classList.toggle("fill-active");

  //   Desktop Action
});
