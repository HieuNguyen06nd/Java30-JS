const tableBody = document.querySelector("#userTable tbody");
const pagination = document.getElementById("pagination");

let users = [];
let currentPage = 1;
const rowsPerPage = 5;

const fetchUsers = async () => {
  const res = await fetch("https://api.github.com/users?per_page=100");
  const data = await res.json();
  users = data;
  displayTable(users, currentPage);
  setupPagination(users);
};

const displayTable = (data, page) => {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = data.slice(start, end);

  tableBody.innerHTML = "";

  paginatedItems.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${start + index + 1}</td>
      <td><img src="${user.avatar_url}" alt="${user.login}" /></td>
      <td>${user.login}</td>
      <td><a href="${user.html_url}" target="_blank">${user.html_url}</a></td>
      <td><a href="https://api.github.com/users/${user.login}/repos" target="_blank">
        https://api.github.com/users/${user.login}/repos</a></td>
    `;
    tableBody.appendChild(row);
  });
};

const setupPagination = (data) => {
  const pageCount = Math.ceil(data.length / rowsPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.style.fontWeight = "bold";
    btn.addEventListener("click", () => {
      currentPage = i;
      displayTable(users, currentPage);
      setupPagination(users);
    });
    pagination.appendChild(btn);
  }
};

document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = users.filter(user => user.login.toLowerCase().includes(keyword));
  currentPage = 1;
  displayTable(filtered, currentPage);
  setupPagination(filtered);
});

// Load lần đầu
fetchUsers();
