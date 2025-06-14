const breedSelect = document.getElementById('breedSelect');
const getSubBreedBtn = document.getElementById('getSubBreedBtn');
const subBreedList = document.getElementById('subBreedList');
const dogImage = document.getElementById('dogImage');

// 1. Load danh sách giống loài chính khi vào trang
fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => {
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      breedSelect.appendChild(option);
    });
  });

// 2. Khi bấm "Get Sub Breed"
getSubBreedBtn.addEventListener("click", () => {
  const selectedBreed = breedSelect.value;
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`)
    .then(res => res.json())
    .then(data => {
      subBreedList.innerHTML = "";
      dogImage.innerHTML = "";

      if (data.message.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Không có sub breed";
        subBreedList.appendChild(li);
      } else {
        data.message.forEach(sub => {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.textContent = sub;
          link.href = "#";

          // 3. Khi click vào 1 sub-breed => hiển thị ảnh
          link.addEventListener("click", () => {
            fetch(`https://dog.ceo/api/breed/${selectedBreed}/${sub}/images/random`)
              .then(res => res.json())
              .then(imgData => {
                dogImage.innerHTML = `<img src="${imgData.message}" alt="${sub}"/>`;
              });
          });

          li.appendChild(link);
          subBreedList.appendChild(li);
        });
      }
    });
});
