<script>
  import Tailwindcss from "./utils/Tailwindcss.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./views/Home.svelte";
  import Contact from "./views/Contact.svelte";
  import Menu from "./views/Menu.svelte";
</script>

<Tailwindcss />

<main id="app" class="flex flex-col lg:flex-row h-screen">
  <!-- <Navbar /> -->
  <Home />
  <Contact />
  <Menu />
</main>
