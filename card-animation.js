document.addEventListener('DOMContentLoaded', () => {
    const ramenCards = document.querySelectorAll('.ramen-card');
    
    ramenCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.card-overlay');
            const text = card.querySelector('.card-text');
            const button = card.querySelector('.btn-details');
            
            // Затемнение карточки и появление текста и кнопки
            overlay.style.opacity = '1';
            text.style.opacity = '1';
            button.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.card-overlay');
            const text = card.querySelector('.card-text');
            const button = card.querySelector('.btn-details');
            
            // Убираем затемнение и скрываем элементы
            overlay.style.opacity = '0';
            text.style.opacity = '0';
            button.style.opacity = '0';
        });
    });
});
