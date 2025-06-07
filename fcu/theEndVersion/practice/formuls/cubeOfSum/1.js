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
    answer1: ["f³+3f²+3f+1"],
    answer2: ["(j+1)³", "(1+j)³"],
    answer3: ["27l³+54l²+36l+8"],
    answer4: ["(3b+2)³", '(2+3b)³'],
    answer5: ["125z³+150z²v+60zv²+8v³"]
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