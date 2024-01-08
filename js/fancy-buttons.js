const fbGoogleIcons = `
<link  href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
`;

document.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML("afterbegin", fbGoogleIcons);

  let fancyButton = document.querySelector(
    ".wp-block-create-block-fancy-buttons"
  );

  let scrollMarker = false;
  console.log("true");
  addEventListener("scroll", (event) => {
    console.log(scrollY);

    if (scrollY < 300 && scrollMarker == true) {
      scrollMarker = false;
      console.log("less");
      fancyButton.classList.toggle("show");
    }
    if (scrollY > 300 && scrollMarker == false) {
      scrollMarker = true;
      fancyButton.classList.toggle("show");
    }
  });

  fancyButton.addEventListener("click", (event) => {
    if (scrollY > 300) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    }
  });
});
