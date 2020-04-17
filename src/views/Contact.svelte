<script>
  import { isContactVisible } from "../stores.js";
  import { fly } from "svelte/transition";

  function closeModal() {
    isContactVisible.set(false);
  }
</script>

<style>
  a {
    font-family: "Nunito", serif;
  }
</style>

{#if $isContactVisible}
  <div
    class="flex flex-col items-center absolute h-screen w-screen bg-pink-jaan
    px-12 pt-12"
    transition:fly={{ y: -200, duration: 500 }}>
    <div class="flex justify-between w-full items-center">
      <button class="relative" on:click={closeModal}>
        <svg
          id="exterior"
          class="w-10 fill-current text-black"
          viewBox="0 0 20 20">
          <path
            d="M12.71,7.291c-0.15-0.15-0.393-0.15-0.542,0L10,9.458L7.833,7.291c-0.15-0.15-0.392-0.15-0.542,0c-0.149,0.149-0.149,0.392,0,0.541L9.458,10l-2.168,2.167c-0.149,0.15-0.149,0.393,0,0.542c0.15,0.149,0.392,0.149,0.542,0L10,10.542l2.168,2.167c0.149,0.149,0.392,0.149,0.542,0c0.148-0.149,0.148-0.392,0-0.542L10.542,10l2.168-2.168C12.858,7.683,12.858,7.44,12.71,7.291z
            M10,1.188c-4.867,0-8.812,3.946-8.812,8.812c0,4.867,3.945,8.812,8.812,8.812s8.812-3.945,8.812-8.812C18.812,5.133,14.867,1.188,10,1.188z
            M10,18.046c-4.444,0-8.046-3.603-8.046-8.046c0-4.444,3.603-8.046,8.046-8.046c4.443,0,8.046,3.602,8.046,8.046C18.046,14.443,14.443,18.046,10,18.046z" />
        </svg>
      </button>
      <a class="md:hidden text-md" href="mailto:juanlatorre@protonmail.com">
        juanlatorre@pm.me
      </a>
      <a
        class="hidden md:block text-lg"
        href="mailto:juanlatorre@protonmail.com">
        juanlatorre@protonmail.com
      </a>
    </div>
    <div class="w-screen">
      <script id="sylvmujwnocm">
        (function(a, b, c, e, f) {
          var s = a.createElement("script");
          s.src = b;
          s.setAttribute("data-form-id", e);
          s.setAttribute("data-runner-id", c);
          s.setAttribute("data-url-params", f);
          s.setAttribute("data-scale", true);
          a.head.appendChild(s);
        })(
          window.document,
          "https://form.questionscout.com/qs-form-script.min.js",
          "sylvmujwnocm",
          "5e7d1c80445adb51b8aaa16c",
          "[]"
        );
      </script>
    </div>
  </div>
{/if}
