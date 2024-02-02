
const fromCurrency = document.getElementById('from-currency-select');
const toCurrency = document.getElementById('to-currency-select');

//currencies
const currencies = [
  "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK","LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "YER", "ZAR", "ZMW", "ZWL",
  ]; 

currencies.forEach((currency) => { //from currency dropdown
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromCurrency.add(option);
});

currencies.forEach((currency) => { //to currency dropdown
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toCurrency.add(option);
});

//Set default values
fromCurrency.value = "USD";
toCurrency.value = "MYR";

let convertCurrency = () => {
  //Create References
 const amount = document.querySelector("#amount").value;
  const from_Currency = fromCurrency.value;
  const to_Currency = toCurrency.value;

  //If amount input field is not empty
  if (amount.length != 0) {
    fetch('https://v6.exchangerate-api.com/v6/cda59d7ff39b41d2115ffba0/latest/USD')
      .then((response) => response.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[from_Currency];
        let toExchangeRate = data.conversion_rates[to_Currency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${from_Currency} = ${convertedAmount.toFixed(2)} ${to_Currency}`;
      });
  } else {
    alert("Please fill in the amount");
  }
};

document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
