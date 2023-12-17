const textsArr1 = [
  "Зареєструйтесь на сайті або через мобільний додаток у статусі Водія та заповніть профіль. Встановлення програми 112kilo (доступно поки лише для ОС Android) для Водіїв є обов'язковим",
  'Створіть Замовлення у Особистому Кабінеті (розділ Замовлення). Вкажіть, що коли та як вам необхідно перевезти',
  "У 'Відповідих маршрутах' знаходяться контакти Водіїв, які потрапляють під ваші вимоги. Контакти періодично оновлюються і Ви отримуєте повідомлення про нові маршрути",
  "Зв'яжіться і домовтеся з Водієм. Обговоріть форму оплати. З свого кабінету підтвердіть його запит на доставку вантажу. Після підтвердження запиту Водія, Сервісом буде автоматично створена електронна накладна і Договір доставки",
  "Перед відправкою вантажу перевірте правильність заповнення накладної, створеної Сервісом. У разі потреби внесіть правки та зробіть обов'язкове фото вантажу (доступно з телефону Водія). Підпишіть накладну електронним ключем (згенерований сервісом) зі свого кабінету або продиктуйте його Водію.",
  "Після підписання Водієм і Відправником накладаня автоматично з'явиться в кабінеті Одержувача. Якщо Одержувач на сервісі не зареєстрований, для перегляду накладної він повинен створити обліковий запис на свою пошту, вказану в замовленні на доставку вантажу.",
  'Після доставки вантажу, Одержувач підписує накладну електронним ключем, який генерується сервісом та відправляється на його телефон, зазначений у Замовленні на доставку вантажу, створеному Клієнтом (замовником доставки). Підписується накладна у телефоні Водія.',
];

const textsArr2 = [
  "Зареєструйтесь на сайті або через мобільний додаток у статусі Водія та заповніть профіль. Встановлення програми 112kilo (доступно поки лише для ОС Android) для Водіїв є обов'язковим.",
  'Створіть Маршрут у Особистому Кабінеті (розділ Маршрути). Вкажіть, коли та куди ви плануєте поїздку',
  'У "Відповідних Замовленнях" знаходяться контакти Клієнтів (замовників), які відповідають Вашим вимогам. Контакти періодично оновлюються і Ви отримуєте повідомлення про нові Замовлення. Для того, щоб контакти Клієнтів були видні, Ви повинні верифікуватися. Протягом 24 годин сервіс перевірить достовірність даних та активує ваш обліковий запис.',
  "Зв'яжіться та домовтеся з Клієнтом (замовником). Обговоріть форму оплати. Зі свого кабінету надішліть запит на доставку вантажу. Після підтвердження вашого запиту Клієнтом, Сервісом буде автоматично створено електронну накладну та Договір доставки.",
  'Під час зустрічі з Відправником, відкрийте накладну у додатку на вашому мобільному телефоні. За необхідності внесіть редагування, зробіть фото вантажу. Підпишіть паролем для входу до облікового запису. Відправник підписує накладну самостійно зі свого кабінету або передає код підпису Вам.',
  'При передачі вантажу, Одержувач підписується у накладній своїм електронним ключем. Отримуєте гроші за доставку.',
];

const word1 = document.querySelectorAll('.word1');
const word2 = document.querySelectorAll('.word2');
const switcher = document.querySelectorAll('.switcher');
const switchText = document.getElementById('switch-text');
const count = document.querySelector('.count_box-num-text');
const total = document.querySelector('.count_box-num-text1');
const btnBack = document.querySelector('.btn-back');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;

word1.forEach(el => {
  el.addEventListener('click', function () {
    switcher.forEach(it => (it.checked = true));
    el.classList.add('label--isActive');
    word2.forEach(otherEl => otherEl.classList.remove('label--isActive'));

    currentIndex = 0;
    switchText.textContent = textsArr2[currentIndex];
    count.textContent = `0${currentIndex + 1}`;
  });
});

word2.forEach(el => {
  el.addEventListener('click', function () {
    switcher.forEach(it => (it.checked = false));
    el.classList.add('label--isActive');
    word1.forEach(otherEl => otherEl.classList.remove('label--isActive'));

    currentIndex = 0;
    switchText.textContent = textsArr1[currentIndex];
    count.textContent = `0${currentIndex + 1}`;
  });
});

switcher.forEach(el => {
  el.addEventListener('click', function () {
    if (el.checked == true) {
      word2.forEach(otherEl => otherEl.classList.add('label--isActive'));
      word1.forEach(otherEl => otherEl.classList.remove('label--isActive'));

      currentIndex = 0;
      switchText.textContent = textsArr1[currentIndex];
      count.textContent = `0${currentIndex + 1}`;
    } else {
      word2.forEach(otherEl => otherEl.classList.remove('label--isActive'));
      word1.forEach(otherEl => otherEl.classList.add('label--isActive'));

      currentIndex = 0;
      switchText.textContent = textsArr2[currentIndex];
      count.textContent = `0${currentIndex + 1}`;
    }
  });
});

switcher.forEach(el => {
  el.addEventListener('change', function () {
    currentIndex = 0;
    changeText(0);
  });
});

function changeText(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = switcher[0].checked
      ? textsArr1.length - 1
      : textsArr2.length - 1;
  } else if (
    currentIndex >= (switcher[0].checked ? textsArr2.length : textsArr1.length)
  ) {
    currentIndex = 0;
  }

  const activeTextsArr = switcher[0].checked ? textsArr2 : textsArr1;

  switchText.textContent = activeTextsArr[currentIndex];
  count.textContent = `0${currentIndex + 1}`;
  total.textContent = `0${activeTextsArr.length}`;
}

changeText(0);

btnBack.addEventListener('click', function () {
  changeText(-1);
});

btnNext.addEventListener('click', function () {
  changeText(1);
});
