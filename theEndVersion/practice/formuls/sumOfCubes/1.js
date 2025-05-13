let lastField = null;
let lastPos = 0;

// Запоминаем поле и позицию курсора при любых кликах и вводе
document.querySelectorAll('input[type="text"]').forEach(field => {
    field.addEventListener('click', () => {
        lastField = field;
        lastPos = field.selectionStart;
    });
    field.addEventListener('keyup', () => {
        lastField = field;
        lastPos = field.selectionStart;
    });
    field.addEventListener('mouseup', () => {
        lastField = field;
        lastPos = field.selectionStart;
    });
});

// Ставим mousedown, чтобы поймать позицию ДО того, как кнопка заберёт фокус
document.getElementById('insertBtn').addEventListener('mousedown', e => {
    e.preventDefault();  // не даём кнопке увести фокус раньше времени

    if (!lastField) {
        alert('Сначала кликните в поле ввода, чтобы установить курсор.');
        return;
    }
    const sym = '²';
    const v = lastField.value;
    lastField.value = v.slice(0, lastPos) + sym + v.slice(lastPos);
    lastField.focus();
    const newPos = lastPos + 1;
    lastField.setSelectionRange(newPos, newPos);
    lastPos = newPos;
});

// Ставим mousedown, чтобы поймать позицию ДО того, как кнопка заберёт фокус
document.getElementById('insertBtn2').addEventListener('mousedown', e => {
    e.preventDefault();  // не даём кнопке увести фокус раньше времени

    if (!lastField) {
        alert('Сначала кликните в поле ввода, чтобы установить курсор.');
        return;
    }
    const sym = '³';
    const v = lastField.value;
    lastField.value = v.slice(0, lastPos) + sym + v.slice(lastPos);
    lastField.focus();
    const newPos = lastPos + 1;
    lastField.setSelectionRange(newPos, newPos);
    lastPos = newPos;
});

const answers = {
    answer1: ["(u+3)(u²-3u+9)", "(u²-3u+9)(u+3)"],
    answer2: ["u³+27", "27+u³", "3³+u³", "u³+3³"],
    answer3: ["(2i+3)(4i²-6i+9)", '(4i²-6i+9)(2i+3)'],
    answer4: ["8r³+27", "27+8r³", '8r³+3³', '3³+8r³'],
    answer5: ["(5q+4d)(25q²-20qd+16d²)", "(25q²-20qd+16d²)(5q+4d)"]
};

function normalize(str) {
    return str.replace(/\s+/g, '').replace(/\^2/g, '²').toLowerCase();
}

function checkAllAnswers() {
    for (const [id, correctVariants] of Object.entries(answers)) {
        const input = document.getElementById(id);
        const userAnswer = input.value;
        const resultDiv = document.getElementById('result' + id.slice(-1));

        const normalizedUserAnswer = normalize(userAnswer);

        // Проверяем, есть ли совпадение с любым вариантом
        const isCorrect = correctVariants.some(
            correct => normalize(correct) === normalizedUserAnswer
        );

        if (isCorrect) {
            resultDiv.style.color = 'green';
            resultDiv.textContent = '✅ Верно!';
            resultDiv.classList.add('correct');
        } else {
            resultDiv.style.color = 'red';
            resultDiv.textContent = `❌ Неверно. Правильный ответ: ${correctVariants[0]}`;
            resultDiv.classList.remove('correct');
        }
    }
}