const buttons = document.querySelectorAll("button");
const list = document.getElementById("data-list");
const typeLabel = document.getElementById("resource-type");

function fetchAndRender(resource) {
  fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = '';
      const items = data.slice(0, 10);
      items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.title;
        list.appendChild(li);
      });

      typeLabel.textContent = resource;
    });

  buttons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-type="${resource}"]`).classList.add("active");
}

fetchAndRender("posts");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    fetchAndRender(type);
  });
});
