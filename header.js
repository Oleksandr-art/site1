
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="site-header">
      <div class="language-switch">
        <a href="#" id="lang-en">EN</a> | <a href="#" id="lang-de">DE</a>
      </div>
      <div class="burger-menu" id="burger">
        ☰
      </div>
      <nav class="burger-nav" id="navMenu">
        <a href="index.html">Home</a>
        <a href="gallery.html">Photos</a>
        <a href="video.html">Videos</a>
        <a href="about.html">About Me</a>
        <a href="contact.html">Contact</a>
      </nav>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("navMenu");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
});
