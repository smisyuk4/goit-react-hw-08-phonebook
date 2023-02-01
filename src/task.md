## Книга контактів
Додай у програму «Книга контактів» можливість реєстрації, логіна та оновлення користувача, а також роботу з приватною колекцією контактів.

## Бекенд
Для цього завдання є готовий бекенд. Ознайомся з документацією. Він підтримує всі необхідні операції з колекцією контактів, а також реєстрацію, логін та оновлення користувача за допомогою JWT.
https://connections-api.herokuapp.com/docs/#/User/post_users_signup

## Стан
npm install @redux-devtools/extension
npm install @reduxjs/toolkit
npm install @reduxjs/toolkit react-redux
npm install redux-persist

## Маршрутизація
Додай маршрутизацію з бібліотекою React Router. У програмі має бути кілька сторінок:

/register - публічний маршрут реєстрації нового користувача з формою
/login - публічний маршрут логіна існуючого користувача з формою
/contacts - приватний маршрут для роботи зі списком контактів користувача
Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

npm install react-router-dom

## Меню користувача
Створи компонент UserMenu, що відображає пошту користувача і кнопку виходу з облікового запису. Ось як може виглядати його розмітка.

<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>

## Стилізація
Це фінальна версія програми, тому попрацюй над оформленням інтерфейсу. Можна використовувати бібліотеку стилізації або компонентів, наприклад Chakra UI або Material UI.

https://mui.com/

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material


## Повідомлення та лоадер
https://notiflix.github.io/documentation
https://notiflix.github.io/loading

npm i notiflix