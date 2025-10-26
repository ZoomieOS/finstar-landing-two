
    (function () {
    const burger = document.getElementById('burger');
    const menu   = document.getElementById('mobileMenu');
    const close  = document.getElementById('menuClose');
    const content = document.getElementById('menuContent');
    const cta     = document.getElementById('menuCta');

    function openMenu() {
    // иконка → крестик
    burger?.setAttribute('aria-expanded', 'true');
    // показать оверлей
    menu?.classList.remove('opacity-0', 'pointer-events-none');
    menu?.classList.add('opacity-100');
    // контент — лёгкий слайд вверх + fade
    requestAnimationFrame(() => {
    content?.classList.remove('translate-y-4', 'opacity-0');
    content?.classList.add('translate-y-0', 'opacity-100');
    cta?.classList.remove('translate-y-4', 'opacity-0');
    cta?.classList.add('translate-y-0', 'opacity-100');
});
    // lock scroll
    document.documentElement.style.overflow = 'hidden';
}

    function closeMenu() {
    burger?.setAttribute('aria-expanded', 'false');
    // прячем контент сначала (чтобы был reverse-anim)
    content?.classList.add('translate-y-4');
    content?.classList.remove('translate-y-0');
    content?.classList.add('opacity-0');
    cta?.classList.add('translate-y-4');
    cta?.classList.remove('translate-y-0');
    cta?.classList.add('opacity-0');

    // затем прячем оверлей после окончания анимации контента
    setTimeout(() => {
    menu?.classList.add('opacity-0', 'pointer-events-none');
    menu?.classList.remove('opacity-100');
}, 250); // синхронизировано с duration-300 (чуть раньше)
    document.documentElement.style.overflow = '';
}

    burger?.addEventListener('click', openMenu);
    close?.addEventListener('click', closeMenu);
    // клик по фону — закрыть
    menu?.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
});
    // Esc — закрыть
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});
})();