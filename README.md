### Hexlet tests and linter status:
[![Actions Status](https://github.com/kicha3007-boop/frontend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kicha3007-boop/frontend-project-lvl1/actions)
[![Lint](https://github.com/kicha3007-boop/frontend-project-lvl1/actions/workflows/lint.yml/badge.svg)](https://github.com/kicha3007-boop/frontend-project-lvl1/actions/workflows/lint.yml)

# Игры разума

Пять консольных игр для тренировки мозга. Игра задаёт три вопроса подряд: три верных ответа — победа,
первый неверный — поражение и предложение попробовать снова.

| Команда | Игра |
|---|---|
| `brain-even` | Чётное ли число |
| `brain-calc` | Калькулятор: `+`, `-`, `*` |
| `brain-gcd` | Наибольший общий делитель |
| `brain-progression` | Пропущенное число арифметической прогрессии |
| `brain-prime` | Простое ли число |

`brain-games` только знакомится с игроком.

## Требования

- Node.js 22 или новее
- npm
- make

## Установка

```bash
git clone https://github.com/kicha3007-boop/frontend-project-lvl1.git
cd frontend-project-lvl1
make install
npm link
```

## Запуск

```bash
brain-even        # после npm link
make brain-even   # без глобальной установки
```

## Пример игры

```text
$ brain-progression
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```

```text
$ brain-calc
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```

## Разработка

```bash
make lint       # oxlint + проверка форматирования oxfmt
make lint-fix   # отформатировать и исправить
make publish    # npm publish --dry-run
```
