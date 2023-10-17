const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.74,
    TRY: 9.56
  };

  const convertButton = document.getElementById('convertButton');
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const amount = document.getElementById('amount');
  const result = document.getElementById('result');

  convertButton.addEventListener('click', () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const inputAmount = parseFloat(amount.value);

    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * (1 / exchangeRates[from]) * exchangeRates[to];
      result.textContent = `${inputAmount} ${from} is ${convertedAmount.toFixed(2)} ${to}`;
    } else {
      result.textContent = 'Invalid amount';
    }
  });