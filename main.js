function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

// Массив для хранения товаров в корзине
let cart = [];

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const item = this.closest(".menu-item");
            const name = item.querySelector("h3").textContent;
            const price = parseFloat(item.querySelector(".price").textContent);

            addToCart(name, price);
        });
    });
});

// Функция добавления товара в корзину
function addToCart(name, price) {
    cart.push({ name, price });

    updateCartUI();
}

// Обновляем корзину на странице
function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartList.innerHTML = ""; // Очищаем список

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} руб. <button onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `Итого: ${total.toFixed(2)} руб.`;
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});