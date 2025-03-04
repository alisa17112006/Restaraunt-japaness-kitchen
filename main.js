function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

// Загружаем корзину из localStorage (или создаем пустую)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

    document.getElementById("checkout-btn").addEventListener("click", function () {
        window.location.href = "/checkout.html"; // Переход на страницу оформления
    });

    updateCartUI(); // Обновляем корзину при загрузке страницы
});

// Функция добавления товара в корзину
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем корзину
    updateCartUI();
}

// Функция обновления UI корзины
function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = ""; // Очищаем список

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.price} руб. 
            <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = `Итого: ${total.toFixed(2)} руб.`;
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Обновляем корзину
    updateCartUI();
}

// Кнопка прокрутки вверх
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
