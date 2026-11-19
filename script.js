fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    let result = 0;
    data.forEach((item) => {
      const row = document.querySelector(`[data-category="${item.category.toLowerCase()}"] strong`);
      row.firstChild.textContent = item.score;
      result += item.score;
    });

    const average = result / data.length;
    const resultElement = document.querySelector('.results__value');
    resultElement.textContent = Math.round(average);
  });
