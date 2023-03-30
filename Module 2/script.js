let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    const w = parseFloat(document.querySelector('#weight').value);
    const h = parseFloat(document.querySelector('#height').value);
    const res = document.querySelector('#output');
    const bmi = (w / (h * h)).toFixed(2);
    res.innerHTML = bmi;
})
