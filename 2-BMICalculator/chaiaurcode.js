const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give is a valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give is a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;
    let message = `<span>Your BMI: ${bmi}</span><br>`;
    if (bmi < 18.6) {
     message += "<span>underweight.</span>";
    } else if(bmi >=18.6 && bmi <= 24.9){
      message += "<span>Normal range.</span>";
    }
    else {
      message += "<span>overweight.</span>";
    }
    results.innerHTML = message;
  }
});
