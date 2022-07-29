# quiz-app project

A simple quiz app coded in Vanilla JS. API from Open Trivia Database. Coded as a MVC pattern practice.

### Bug report: If there's the character ' (single quote) in the answer, it registers as wrong answer everytime.

- Solution idea 1: Remove single quotes from both givenAnswer and correctAnswer, then do the equality check.
- Try == instead of ===
