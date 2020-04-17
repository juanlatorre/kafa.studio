<style>
  div.relative {
    top: 250px;
    animation: bioAnimation 2s ease-out;
  }

  h1 {
    font-family: "Playfair Display", serif;
    line-height: 1.2;
  }

  .nunito {
    font-family: "Nunito", sans-serif;
  }

  #bio {
    margin-left: -20px;
  }

  .brush-pink {
    background: url(../assets/brush.svg);
    background-repeat: no-repeat;
    background-size: 140px auto;
    padding: 35px 30px;
  }

  .brush-yellow {
    background: url(../assets/brushbutton.svg);
    background-repeat: no-repeat;
    background-size: 300px 80px;
    padding: 37px 39px;
  }

  .studio {
    margin-left: -0.5em;
  }

  @media (min-width: 320px) and (max-width: 350px) {
    h1 {
      font-size: 1.6rem;
    }

    .brush-pink {
      background-size: 130px auto;
      padding: 35px 30px;
    }
  }

  @media (min-width: 1024px) {
    .brush-pink {
      background-size: 170px auto;
      padding: 40px 35px;
    }
  }

  @media (min-width: 1336px) {
    div.relative {
      top: 180px;
      left: 50px;
    }
  }
</style>

<div class="relative px-6 lg:px-24">
  <h1 class="font-bold text-3xl lg:text-4xl text-blacky">
    <span id="bio" class="brush-pink text-white">Kafa</span>
    <span class="studio">Studio</span>
  </h1>
  <p
    class="nunito max-w-sm lg:max-w-md mt-10 lg:mt-16 text-md text-blacky
    lg:text-xl">
    <u>Kafa</u>
    (
    <i>/KAH-fuh/</i>
    ) es un estudio de desarrollo web y móvil en Chile, ayudando a personas y
    empresas a entregar hermosas e intuitivas experiencias digitales a través de
    buenas prácticas, investigación y experiencia.
  </p>
  <!-- <div class="mt-4">
    <a href="##" class="-ml-8 nunito text-black-jaan font-bold brush-yellow">
      Un poco más sobre nosotros
    </a>
  </div> -->

</div>
