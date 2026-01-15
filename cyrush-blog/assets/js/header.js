// assets/js/header.js
const toggle = document.getElementById("togglePosts");
const list = document.getElementById("postList");

posts.forEach(post => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="post.html?slug=${post.slug}">${post.title}</a>`;
  list.appendChild(li);
});

toggle.addEventListener("click", () => {
  list.classList.toggle("hidden");
});