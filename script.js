const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const usefulLinksMarkup = '<div class="footer-useful"><span>Links úteis</span><a href="gastronomia.html">Gastronomia</a><a href="carta-de-vinhos.html">Carta de vinhos</a><a href="cardapio.html">Cardápio</a><a href="eventos.html">Eventos</a><a href="contato.html">Contato</a></div>';

document.querySelectorAll('.footer-main, .menu-footer-main').forEach((footer) => {
  if (footer.querySelector('.footer-useful')) return;
  const brand = footer.querySelector('.brand-footer, .menu-footer-brand');
  brand?.insertAdjacentHTML('afterend', usefulLinksMarkup);
});

document.querySelectorAll('.footer-bottom, .menu-footer-bottom').forEach((footerBottom) => {
  if (!footerBottom.querySelector('.footer-faith')) {
    footerBottom.insertAdjacentHTML('afterbegin', '<span class="footer-faith">Deus é fiel</span>');
  }

  if (!footerBottom.querySelector('.footer-credit')) {
    const creditMarkup = '<a class="footer-credit" href="https://www.instagram.com/clioluconi/" target="_blank" rel="noreferrer">Fotografia por Clio Luconi ↗</a>';
    const location = footerBottom.lastElementChild;
    location?.insertAdjacentHTML('beforebegin', creditMarkup);
  }
});

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const dots = [...carousel.querySelectorAll('[data-carousel-dot]')];
  const previousButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const interval = Number(carousel.dataset.interval) || 5000;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', String(isActive));
    });
  };

  const stopAutoplay = () => window.clearInterval(timer);
  const startAutoplay = () => {
    if (!reducedMotion && slides.length > 1) {
      stopAutoplay();
      timer = window.setInterval(() => showSlide(activeIndex + 1), interval);
    }
  };

  previousButton?.addEventListener('click', () => {
    showSlide(activeIndex - 1);
    startAutoplay();
  });

  nextButton?.addEventListener('click', () => {
    showSlide(activeIndex + 1);
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoplay();
    });
  });

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);

  showSlide(0);
  startAutoplay();
});
