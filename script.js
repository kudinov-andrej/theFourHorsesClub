
  const list = document.querySelector('.players__list');
  const listWrapper = document.querySelector('.players__list-wrapper');
  const cardWidth = 394;
  const gap = 20;
  let currentIndex = 0;
  const counter = document.querySelector('.players__counter_type_active');
  const totalCount = list.children.length - 2;

  // Функция для обработки клика на кнопки
  function handleButtonClick(direction) {
    if (direction === 'left') {
      currentIndex = Math.max(currentIndex - 1, 0);
    } else if (direction === 'right') {
      currentIndex = (currentIndex + 1) % totalCount;
    }

    updateListPosition();
    updateCounter();
  }

  // Функция для обновления позиции списка
  function updateListPosition() {
    const newPosition = -(currentIndex * (cardWidth + gap));
    list.style.transform = `translateX(${newPosition}px)`;
   
  }
  
  function updateCounter() {
    counter.textContent = (currentIndex + 3).toString();
  }

  // Обработчики событий для кнопок
  document.querySelector('.players__button_type_left').addEventListener('click', () => handleButtonClick('left'));
  document.querySelector('.players__button_type_right').addEventListener('click', () => handleButtonClick('right'));

   // Бесконечный скролл вправо каждые 4 секунды
   setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCount;
    updateListPosition();
    updateCounter();
  }, 4000);



