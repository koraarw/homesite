<script>
  export let label;
  export let onClick;
</script>

<button on:click={onClick} class="py-3.5 px-12 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/80">{label}</button>
