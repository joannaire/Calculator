// Listen for Submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide Results
  document.getElementById("result").style.display = "none";

  // Show Loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  // UI Vars
  const price = document.getElementById("price");
  const capital = document.getElementById("capital");
  const price1 = document.getElementById("price1");
  const price2 = document.getElementById("price2");
  const quantity = document.getElementById("total-qty");
  const prediction1 = document.getElementById("total-p1");
  const prediction2 = document.getElementById("total-p2");

  //   // Computed Monthly payment
  //   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  //   const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (true) {
    const amtShares = capital.value / price.value;
    quantity.value = amtShares.toFixed(4);

    const worth1 = amtShares * price1.value;
    const pl1 = worth1 - capital.value;
    prediction1.value = pl1.toFixed(4);

    const worth2 = amtShares * price2.value;
    const pl2 = worth2 - capital.value;
    prediction2.value = pl2.toFixed(4);

    // Show Results
    document.getElementById("result").style.display = "block";

    // Hide Loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check number inputs");
  }
}

// Show Error
function showError(error) {
  // Hide Results
  document.getElementById("result").style.display = "none";

  // Hide Loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get Elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);

  // Clear Error
  function clearError() {
    document.querySelector(".alert").remove();
  }
}
let kol_hours = document.getElementById("hours"),
  kol_hours_label = document.getElementById("hours-amount"),
  totalValue = document.getElementById("final-price"),
  who = document.getElementById("who"),
  workPrice = document.getElementById("work-price"),
  nds = document.getElementById("nds");

kol_hours.oninput = function () {
  const hoursVal = kol_hours.value;
  kol_hours_label.innerHTML = hoursVal;
  capital.value = hoursVal;
  // calculate();
};
