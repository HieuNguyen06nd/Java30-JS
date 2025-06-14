 const colors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];
  const boxesContainer = document.querySelector('.boxes');
  const pointsSpan = document.querySelector('.points');
  const btn = document.getElementById('btn');

  let totalBoxes = 0;

  const updateTotal = () => {
    pointsSpan.textContent = totalBoxes;
  };

  const createBox = (color) => {
    const div = document.createElement('div');
    div.className = 'box';
    div.style.backgroundColor = color;

    div.addEventListener('click', () => {
      boxesContainer.removeChild(div);
      totalBoxes--;
      updateTotal();
    });

    boxesContainer.appendChild(div);
    totalBoxes++;
    updateTotal();
  };

  const renderBoxes = () => {
    colors.forEach(color => {
      createBox(color);
    });
  };

  // Load 5 box đầu tiên khi trang mở
  renderBoxes();

  btn.addEventListener('click', () => {
    renderBoxes();
  });