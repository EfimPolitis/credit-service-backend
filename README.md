## Описание

Данная программа была разработанна в качестве backend для проекта "credit-service-client"

## Требования

- Node - 18v
- Postgres

## Установка зависимостей

```bash
$ npm install
```

## Миграция сущностей в базу данных

- Создайте базу данных "credit-service-db"
- Возможно потребуется изменить конфигурацию в файле ".env"
- Введите команду

```bash
$ npx prisma db push
```

## Запуск проекта

```bash
$ npm run build
```

```bash
$ npm run start
```
