let currentTheme = 'light';

function changeTheme() {
    const body = document.body;
    if (currentTheme === 'light') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        currentTheme = 'dark';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        currentTheme = 'light';
    }
}

function ToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
