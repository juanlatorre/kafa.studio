<style>
  img {
    top: -410px;
    right: -300px;
    width: calc(100vw * 2);
    animation: mandalaAnimation 1500ms ease-out 0s 1;
    max-width: 700px;
  }

  @media (min-width: 320px) and (max-width: 350px) {
    img {
      top: -350px;
      right: -300px;
      width: calc(100vw * 1.9);
    }
  }

  @media (min-width: 640px) and (max-width: 768px) {
    img {
      width: calc(100vw * 1.15);
      max-width: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 100vw;
      max-width: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    img {
      width: calc(100vw * 0.9);
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1336px) {
    img {
      top: -400px;
      right: -320px;
      max-width: 1024px;
    }
  }

  @media (min-width: 1336px) {
    img {
      width: calc(100vw * 0.9);
      max-width: 1280px;
      top: -350px;
      right: -500px;
    }
  }
</style>

<div class="relative">
  <img
    src="assets/mandala.svg"
    alt="mandala"
    class="absolute -z-20 max-w-screen-lg" />
</div>
