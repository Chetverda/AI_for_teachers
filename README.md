# Портал материалов — СтажИИровка 2026

Единая страница со всеми **цифровыми бонусами** МК №1 и МК №2.

## GitHub Pages — пошагово

Папка `портал/` — **отдельный репозиторий** (в корне лежит `index.html`, это важно для Pages).

### 1. Репозиторий

**https://github.com/Chetverda/AI_for_teachers**

Папка `портал/` загружается в корень этого репозитория (`index.html` — в корне).

### 2. Быстрый деплой

```bash
cd портал
chmod +x deploy.sh
./deploy.sh
```

Или вручную:

```bash
cd портал
git init
git add .
git commit -m "Портал материалов СтажИИровка 2026"
git branch -M main
git remote add origin https://github.com/Chetverda/AI_for_teachers.git
git push -u origin main
```

### 3. Включите GitHub Pages

1. Репозиторий → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. После push сработает workflow `.github/workflows/pages.yml`
4. Сайт будет доступен по адресу:

   **https://chetverda.github.io/AI_for_teachers/**

### 4. Обновление материалов

После правок в `МК-01/05_Раздатки_цифровые/` или `МК-02/...`:

```bash
# из папки «СтажИИровка для учителей 2026»
python3 портал/scripts/build_portal.py

# затем из папки портал
git add .
git commit -m "Обновление материалов"
git push
```

---

## Локальный просмотр

```bash
cd портал
python3 -m http.server 8080
```

Откройте http://localhost:8080

## Содержание

| Раздел | МК |
|---|---|
| 5 правил промпта | №1 |
| Безопасность ИИ | №1 |
| Карта сервисов | №1 |
| Промпты для учителя | №1 |
| Как создать помощника | №2 |
| Шаблон системного промпта | №2 |
| Примеры агентов | №2 |
| Тестирование агента | №2 |
