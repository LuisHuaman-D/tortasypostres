const swiper = new Swiper('.tortaVitrina', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  initialSlide: 1, // Arranca exactamente en la segunda foto para que las otras dos queden a los lados
  coverflowEffect: {
    rotate: 10,         // El ángulo de giro lateral de las tarjetas al rotar
    stretch: 5,        // Espaciado equilibrado entre la tarjeta central y las laterales
    depth:600,         // Profundidad para el efecto de escala y orden en cascada
    modifier: 1,
    slideShadows: false, // Sin sombras negras para mantener la nitidez total de las fotos
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});