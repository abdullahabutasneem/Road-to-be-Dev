
let btn = document.querySelector('#calculateBtn');

btn.addEventListener('click', function () {
    const w = parseFloat(document.querySelector('#weightInput').value);
    const h = parseFloat(document.querySelector('#heightInput').value);
    const res = document.querySelector('#output');
    const bmi = (w / (h * h)).toFixed(2);
    res.innerHTML = bmi;
})
