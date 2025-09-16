async function getGoldPrice() {
  try {
    // Free gold price API (Metals-API via exchangerate.host as proxy)
    let response = await fetch("https://api.exchangerate.host/latest?base=XAU&symbols=USD");
    let data = await response.json();

    let goldUsd = data.rates.USD;
    document.getElementById("goldPrice").innerText = `$${goldUsd.toFixed(2)}`;
    document.getElementById("lastUpdate").innerText =
      "Last updated: " + new Date().toLocaleTimeString();
  } catch (error) {
    document.getElementById("goldPrice").innerText = "⚠️ Error loading price";
  }
}

// Auto-load on page load
getGoldPrice();
