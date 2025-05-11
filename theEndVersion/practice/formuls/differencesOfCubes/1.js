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
    answer1: ["x²+4x+4", "x²+4+4x", "4x+4+x²", "4x+x²+4", "4+4x+x²", "4+x²+4x", "х²+4х+4", "х²+4+4х", "4х+4+х²", "4х+х²+4", "4+4х+х²", "4+х²+4х"],
    answer2: ["(x+3)²", "x²+6x+9"],
    answer3: ["4x²+20x+25", "(2x+5)²"],
    answer4: ["(3a+4b)²", "9a²+24ab+16b²"],
    answer5: ["25x²+20xy+4y²", "(5x+2y)²"]
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
            resultDiv.textContent = `❌ Неверно. Правильные ответы: ${correctVariants[0]}`;
            resultDiv.classList.remove('correct');
        }
    }
}