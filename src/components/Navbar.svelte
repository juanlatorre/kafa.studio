<script>
  import NavItem from "./NavItem.svelte";
</script>

<style>
  #nav {
    border-bottom: 1px solid #f3f3f3;
  }

  @media (min-width: 1024px) {
    #nav {
      border-bottom: 0px;
      border-right: 1px solid #f3f3f3;
    }
  }
</style>

<nav
  id="nav"
  class="flex items-center justify-between px-6 py-4 bg-white
  lg:flex-col-reverse">
  <NavItem icon="contact" />
  <NavItem icon="menu" />
</nav>
