document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("menu-list");
    const orderList = document.getElementById("order-list");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout");

    let total = 0;

    menuList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const itemId = event.target.dataset.id;
            const itemName = event.target.textContent;
            const itemPrice = parseFloat(event.target.dataset.price);

            const orderItem = document.createElement("li");
            orderItem.innerHTML = `${itemName} <span>$${itemPrice.toFixed(2)}</span>`;
            orderList.appendChild(orderItem);

            total += itemPrice;
            totalElement.textContent = total.toFixed(2);
        }
    });

    checkoutButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name && email && total > 0) {
            alert(`Thank you, ${name}! Your order has been placed. Total amount: $${total.toFixed(2)}`);
            // You can add further processing or send the order information to a server.
        } else {
            alert("Please provide valid billing information and order items.");
        }
    });
});
