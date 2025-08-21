<script>
  import IconifyIcon from "@iconify/svelte";
  import { text } from "@sveltejs/kit";

  const testimonies = [
    {
      id: 1,
      imageURL: "https://i.pravatar.cc/450?u=12",
      message: "I love Korra, because of how they worked well with me",
      organization: "G6 Real Estate",
      name: "Gentil Sugira",
      title: "CEO",
    },
    {
      id: 2,
      imageURL: "https://i.pravatar.cc/450?u=23",
      message: "I love K",
      organization: "Rwanda",
      name: "KLKL Binco",
      title: "CEO",
    },
    {
      id: 3,
      imageURL: "https://i.pravatar.cc/450?u=50",
      message: "I love Korra, because of how they worked well with me love Korra, because of how they worked well with me love Korra, because of how they worked well with me love Korra, because of how they worked well with me love Korra, because of how they worked well with me",
      organization: "Amazon",
      name: "Shane Mazon",
      title: "Developer",
    },
  ];

  let testimonyDisplay = testimonies[0];
  // @ts-ignore
  const handleTestimonyChange = (id) => {
    testimonyDisplay = testimonies.filter((elt) => elt.id === id)[0];
  };
</script>

<div class="p-10">
  <h1 class="text-3xl">Testimonies</h1>
  <div class="text-text-light space-y-5">
    <h2 class="text-xl py-5">
      Hear what others have said from working with us
    </h2>
    <IconifyIcon icon="bi:quote" font-size={50} />

    <div class="space-y-5">
      <p>{testimonyDisplay.message}</p>
      <p class="text-white/70 space-x-1">
        <span>{testimonyDisplay.name}</span>
        <span>-</span>{testimonyDisplay.title}
        <span>at</span>
        <span>{testimonyDisplay.organization}</span>
      </p>

      <div class="flex flex-row items-center justify-start gap-5">
        {#each testimonies as testimony}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="rounded-full border-2 border-footer cursor-pointer hover:border-primary/80"
            on:click={() => handleTestimonyChange(testimony.id)}
          >
            <img
              alt="The project logo"
              src={testimony.imageURL}
              width="66"
              height="66"
              class="rounded-full"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
