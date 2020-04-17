<script>
  import Mandala from "../components/Mandala.svelte";
  import Bio from "../components/Bio.svelte";
</script>

<style>
  #home {
    overflow: hidden;
    height: calc(100vh - 72.8px);
    width: 100%;
  }

  @media (max-width: 320px) {
    #home {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  @media (min-width: 1336px) {
    #home {
      height: 100vh;
    }
  }
</style>

<section id="home">
  <Mandala />
  <Bio />
</section>
