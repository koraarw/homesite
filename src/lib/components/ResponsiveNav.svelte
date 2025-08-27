<script>
  import { Hamburger } from "svelte-hamburgers";
  import { fly } from "svelte/transition";

  let open = $state(false);
</script>

<div class="w-full fixed min-md:hidden">
  <div class="ml-[80%]">
    <Hamburger
      bind:open
      type="collapse"
      title="Toggle nav links"
      ariaControls="nav"
    />
  </div>

  {#if open}
    <ul
      id="nav"
      class="fixed bg-white w-full space-y-10 py-10 px-5"
      transition:fly={{ y: -15 }}
    >
      <li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a class="no-underline px-1 py-3 rounded hover:bg-slate-100" href="#"
          >Home</a
        >
      </li>
      <li>
        <a
          class="no-underline px-1 py-3 rounded hover:bg-slate-100"
          href="#services">Services</a
        >
      </li>
      <li>
        <a
          class="no-underline px-1 py-3 rounded hover:bg-slate-100"
          href="#approach">Our Approach</a
        >
      </li>
      <li>
        <a
          class="no-underline px-1 py-3 rounded hover:bg-slate-100"
          href="#contact">Contact us</a
        >
      </li>
      <br />
    </ul>
  {/if}
</div>
