<script>
  import { isContactVisible, client } from "../stores.js";
  import { fly } from "svelte/transition";

  let messageSend;

  function closeModal() {
    isContactVisible.set(false);
  }

  async function handleSubmit(event) {
    const formData = new FormData(event.target);
    const formClient = {};
    for (const [k, v] of formData.entries()) {
      formClient[k] = v;
    }

    const res = fetch(
      "https://getform.io/f/2efc6aab-9a32-42b5-bbfb-92b116977fb2",
      {
        method: "POST",
        mode: "cors",
        body: formData
      }
    ).then(function(response) {
      if (response.ok) {
        messageSend = true;
      } else {
        throw new Error();
      }
    });
  }
</script>

<style>
  a {
    font-family: "Nunito", serif;
  }

  .g-recaptcha {
    visibility: hidden;
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
      <form
        method="POST"
        class="w-full max-w-sm bg-transparent px-8 pt-6 pb-8 mb-4 mx-auto"
        on:submit|preventDefault={handleSubmit}
        id="ajaxForm">
        <div class="border-b border-b-2 border-black py-2 mb-4">
          <input
            class="appearance-none bg-transparent border-none w-full text-black
            mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black"
            type="text"
            placeholder="Nombre"
            aria-label="Nombre"
            name="nombre"
            value={$client.name}
            required />
        </div>
        <div class="border-b border-b-2 border-black py-2 mb-4">
          <input
            class="appearance-none bg-transparent border-none w-full text-black
            mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black"
            type="text"
            placeholder="Email"
            aria-label="Email"
            name="email"
            value={$client.email}
            required />
        </div>
        <div class="border-b border-b-2 border-black py-2 mb-6">
          <textarea
            placeholder="Mensaje"
            name="mensaje"
            class="w-full placeholder-black bg-transparent resize-y
            focus:outline-none appearance-none text-black mr-3 py-1 px-2"
            value={$client.message}
            required />
        </div>
        <div
          class="g-recaptcha"
          data-sitekey="6LfICe8UAAAAAFy2ChG4dELGDqMc6jGb_vbmktwt" />
        {#await handleSubmit}
          <div />
        {:then}
          <div class="{messageSend ? 'block' : 'hidden'} p-3 mt-2 mb-3">
            Recibimos tu mensaje ✌️
          </div>

        {:catch error}
          <div class="p-3 mt-2 mb-3">
            Tu mensaje no pudo ser enviado, inténtalo de nuevo 😰
          </div>
        {/await}
        <div class="flex items-center justify-between">
          <button
            class="bg-purple-jaan hover:bg-yellow-jaan hover:text-black
            text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="submit">
            Enviar
          </button>
        </div>
      </form>

    </div>
  </div>
{/if}
