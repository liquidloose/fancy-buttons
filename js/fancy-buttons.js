const fbGoogleIcons = `
<link  href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
`;

document.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML("afterbegin", fbGoogleIcons);

  let fancyButton = document.querySelector(
    ".wp-block-create-block-fancy-buttons"
  );

  addEventListener("scroll", (event) => {
    console.log(event);
    console.log(window.scrollY);

    if (window.scrollY < 80) {
      fancyButton.classList.remove("show");
    }
    if (window.scrollY > 80) {
      fancyButton.classList.add("show");
    }
  });

  fancyButton.addEventListener("click", (event) => {
    console.log("click");
    if (window.scrollY > 100) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    }
  });
});
