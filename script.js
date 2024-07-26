document
  .getElementById("fetchSubscription")
  .addEventListener("click", function () {
    fetch("http://localhost:3000/subscription")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network problem");
        }
        return response.json();
      })
      .then((data) => {
        displaySubscrition(data.subscription);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  });

function displaySubscrition(subscription) {
  const subscriptionBody = document.getElementById("subscriptionBody");
  subscriptionBody.innerHTML = ""; // Clear existing  subscription

  subscription.forEach((subscription) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${subscription.customerName}</td>
            <td>${subscription.package}</td>
            <td>${subscription.status}</td>
        `;
    subscriptionBody.appendChild(row);
  });
}
