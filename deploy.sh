#!/bin/bash
# Публикация портала на https://github.com/Chetverda/AI_for_teachers
# Запускать из папки «портал»

set -e
REMOTE="https://github.com/Chetverda/AI_for_teachers.git"

if ! command -v git >/dev/null 2>&1; then
  echo "Ошибка: git не установлен. Установите git и запустите снова."
  exit 1
fi

# Пересобрать index.html из исходников (если скрипт есть)
if [ -f scripts/build_portal.py ]; then
  python3 scripts/build_portal.py
fi

if [ ! -d .git ]; then
  git init
  git branch -M main
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "$REMOTE"
else
  git remote set-url origin "$REMOTE"
fi

git add .
git commit -m "Портал материалов СтажИИровка 2026" || true
git push -u origin main

echo ""
echo "Готово. Включите GitHub Pages:"
echo "  Settings → Pages → Source: GitHub Actions"
echo ""
echo "Сайт: https://chetverda.github.io/AI_for_teachers/"
