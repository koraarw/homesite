<script>
  import IconifyIcon from "@iconify/svelte";
  export let headerText;

  let expanded = false;
</script>

<div class="">
  <h3 class="text-xl font-bold">
    <button aria-expanded={expanded} on:click={() => (expanded = !expanded)}
      class="text-start"
      >
      {headerText}
      {#if expanded}
        <IconifyIcon icon="icons8:angle-up" font-size={20} />
      {:else}
        <IconifyIcon icon="icons8:angle-down" font-size={20} />
      {/if}
    </button>
  </h3>

  <div class="text-text-light px-2" hidden={!expanded}>
    <slot></slot>
  </div>
</div>

<style>

  h3 {
    margin: 0;
  }

  button {
    background-color: var(--background, #fff);
    color: var(--gray-darkest, #282828);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    margin: 0;
    padding: 1em 0.5em;
  }


</style>
