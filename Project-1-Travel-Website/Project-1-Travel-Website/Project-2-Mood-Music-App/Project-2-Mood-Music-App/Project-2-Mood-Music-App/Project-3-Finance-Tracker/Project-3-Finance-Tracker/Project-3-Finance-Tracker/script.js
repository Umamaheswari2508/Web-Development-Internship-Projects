let balance = 0;

function addTransaction() {
  const text = document.getElementById("text").value;
  const amount = Number(document.getElementById("amount").value);
  const list = document.getElementById("list");

  if (text === "" || amount === 0) {
    alert("Please enter valid details");
    return;
  }

  balance += amount;
  document.getElementById("balance").innerText = "₹" + balance;

  const li = document.createElement("li");
  li.classList.add(amount > 0 ? "plus" : "minus");

  li.innerHTML = `
    <span>${text}</span>
    <span>${amount > 0 ? "+" : ""}${amount}</span>
  `;

  list.appendChild(li);

  document.getElementById("text").value = "";
  document.getElementById("amount").value = "";
}
