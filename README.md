# MVP Карточная игра "Мемо"

В этом репозитории реализован MVP карточкой игры "Мемо" по [тех.заданию](./docs/mvp-spec.md)

Проект задеплоен на gh pages:
https://skypro-web-developer.github.io/react-memo/

## Разработка

Проект реализован на основе шаблона [Create React App](https://github.com/facebook/create-react-app).

### Как разрабатывать

- Установите зависимости командой `npm install`
- Запустите dev сервер `npm start`
- Откройте адрес в браузере

### Стек и инструменты

Для стилей в коде используются css modules.

Настроены eslint и prettier. Корректность кода проверяется автоматически перед каждым коммитом с помощью lefthook (аналог husky). Закомитить код, который не проходит проверку eslint не получится.

### Доступные команды

#### `npm start`

Запускает приложение в режиме разработки.

Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть его в браузере.

#### `npm run build`

Собирает оптимизированный и минифицированный продакшен билд приложения в папку `build`.
После сборке, приложение готово к деплою.

#### `npm run deploy`

Деплоит приложение в github pages. По сути, запускает сборку и коммитит билд в ветку gh-pages.

(!) github pages должен быть включен в настройках репозитория и настроен на ветку gh-pages

#### `npm run lint`

Запускает eslint проверку кода, эта же команда запускается перед каждым коммитом.
Если не получается закоммитить, попробуйте запустить эту команду и исправить все ошибки и предупреждения.

Я планирую работать над 1 домашкой по 2,5 часа каждый день, в течении 3 дней. То есть 7,5 часов.
выполнила домашнюю работу за 6 часов.

я планирую работать над 2 домашкой по 2 часа в день, в течении 2 дней. То есть 4 часа.
Выполнила дз за 7,5 часов