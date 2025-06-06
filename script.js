function convert() {
  const value = parseFloat(document.getElementById('value').value);
  const fromUnit = document.getElementById('from').value;
  const toUnit = document.getElementById('to').value;
  const resultElement = document.getElementById('result');

  if (isNaN(value)) {
    resultElement.innerText = "Please enter a valid number!";
    resultElement.style.display = 'block';
    return;
  }

  const conversionRates = {
    kg: { kg: 1, lb: 2.20462, oz: 35.274, g: 1000 },
    lb: { kg: 0.453592, lb: 1, oz: 16, g: 453.592 },
    oz: { kg: 0.0283495, lb: 0.0625, oz: 1, g: 28.3495 },
    g:  { kg: 0.001, lb: 0.00220462, oz: 0.035274, g: 1 }
  };

  const converted = value * conversionRates[fromUnit][toUnit];
  resultElement.innerHTML = `${value} ${fromUnit} = <strong>${converted.toFixed(2)} ${toUnit}</strong>`;
  resultElement.style.display = 'block';
}
