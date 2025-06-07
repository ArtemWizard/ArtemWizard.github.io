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
    answer1: ['z²+4z+4', '+z²+4z+4',  '+z²+4+4z', 'z²+4+4z', '+4z+z²+4', '4z+z²+4', '+4z+4+z²', '4z+4+z²', '+4+z²+4z', '4+z²+4z', '+4+4z+z²', '4+4z+z²'],
    answer2: ["(s+3)²", "(3+s)²",'(s+3)(s+3)','(3+s)(3+s)', '(3+s)(s+3)', '(s+3)(3+s)' ],
    answer3: ['4g²+20g+25', '+4g²+20g+25','+4g²+25+20g', '4g²+25+20g', '+20g+4g²+25', '20g+4g²+25', '+20g+25+4g²', '20g+25+4g²', '+25+4g²+20g', '25+4g²+20g', '+25+20g+4g²', '25+20g+4g²'],
    answer4: ['(3l+4v)²', '(+3l+4v)²', '(+4v+3l)²', '(4v+3l)²'],
    answer5: ['25w²+20wq+4q²', '+25w²+20wq+4q²', '+25w²+4q²+20wq', '25w²+4q²+20wq', '+20wq+25w²+4q²', '20wq+25w²+4q²', '+20wq+4q²+25w²', '20wq+4q²+25w²', '+4q²+25w²+20wq', '4q²+25w²+20wq', '+4q²+20wq+25w²', '4q²+20wq+25w²','+25w²+20qw+4q²', '25w²+20qw+4q²', '+25w²+4q²+20qw', '25w²+4q²+20qw', '+20qw+25w²+4q²', '20qw+25w²+4q²', '+20qw+4q²+25w²', '20qw+4q²+25w²', '+4q²+25w²+20qw', '4q²+25w²+20qw', '+4q²+20qw+25w²', '4q²+20qw+25w²']
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