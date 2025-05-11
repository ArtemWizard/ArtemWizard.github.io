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

const answers = {
    answer1: ['25w²+20qw+4q²', '+25w²+20qw+4q²', '+25w²+4q²+20qw', '25w²+4q²+20qw', '+20qw+25w²+4q²', '20qw+25w²+4q²', '+20qw+4q²+25w²', '20qw+4q²+25w²', '+4q²+25w²+20qw', '4q²+25w²+20qw', '+4q²+20qw+25w²', '4q²+20qw+25w²'],
    answer2: ["(f-3)²", "(-3+f)²",'(f-3)(f-3)', '(-3+f)(-3+f)' ],
    answer3: ['4b²-20b+25','+4b²-20b+25', '+4b²+25-20b', '4b²+25-20b', '-20b+4b²+25', '-20b+25+4b²', '+25+4b²-20b', '25+4b²-20b', '+25-20b+4b²', '25-20b+4b²'],
    answer4: ["(3r-4h)²", "(-4h+3r)²", '(-4h+3r)(-4h+3r)', '(3r-4h)(3r-4h)'],
    answer5: ['25j²-20jp+4q²', '+25j²-20jp+4q²', '+25j²+4q²-20jp', '25j²+4q²-20jp', '-20jp+25j²+4q²', '-20jp+4q²+25j²', '+4q²+25j²-20jp', '4q²+25j²-20jp', '+4q²-20jp+25j²', '4q²-20jp+25j²', '+25j²-20pj+4q²', '25j²-20pj+4q²', '+25j²+4q²-20pj', '25j²+4q²-20pj', '-20pj+25j²+4q²', '-20pj+4q²+25j²', '+4q²+25j²-20pj', '4q²+25j²-20pj', '+4q²-20pj+25j²', '4q²-20pj+25j²']
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