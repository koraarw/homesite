<script>
  import IconifyIcon from "@iconify/svelte";
  import CollapsibleSection from "$lib/components/Collapsible.svelte";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import TeamworkIllustration from "$lib/assets/teamwork.svg?raw";
  import archIllustration from "$lib/assets/arc.svg?raw";
  import ApproachIllustration from "$lib/assets/approach.svg?raw";

  const click_book_consultation = () => {
    console.log("Clicked book consultation");
  };

  let partners = ["Meta", "Linkedin", "BAG"];
  const services = [
    {
      title: "Consulting",
      subtitle:
        "We understand your requirements and help you to get the best AI solutions that best suits your case",
    },
    {
      title: "AI Agents Development",
      subtitle:
        "We develop AI agents tools that enable your staff to be more productive",
    },
    {
      title: "AI at Work",
      subtitle:
        "We train your staff on how to effectively use AI for their work.",
    },
  ];
  const approachDetails = [
    {
      title: "01 - Consulting (Free)",
      subtitle:
        "We understand your requirements, and guide you to the best AI solutions that suits your needs",
    },
    {
      title: "02 - Research and Strategy Development",
      subtitle:
        "Deep research into the development process and developing the strategy. (In collaboration with you)",
    },
    {
      title: "03 - Implementation",
      subtitle: "Implement the proposal, in an Agile format.",
    },
    {
      title: "04 - Monitoring and Optimization",
      subtitle:
        "We continuously optimize the implementation and make sure it has the best performance.",
    },
    {
      title: "05 - Continual Improvement",
      subtitle:
        "We work together to provide future improvements based on requirements.",
    },
  ];
</script>

<section
  class="px-20 flex flex-row items-center max-sm:flex-col"
  aria-labelledby="hero-heading"
>
  <div class="w-2/3 space-y-5">
    <div class="space-y-5">
      <p class="text-4xl">Integrate</p>
      <p class="text-7xl font-extrabold">Artificial Intelligence</p>
      <p class="text-4xl">into your workflow</p>
    </div>
    <div class="w-2/3">
      {@html archIllustration}
    </div>
    <div>
      <p class="text-lg">
        Let’s empower your organization to work smarter by automating repetitive
        tasks, training your team to use AI effectively at work, and developing
        internal tools that make daily operations more efficient.
      </p>
    </div>

    <div>
      <a
        class="w-fit flex flex-row items-center justify-center no-underline gap-2 py-3.5 px-12 bg-primary text-white rounded-xl cursor-pointer hover:bg-primary/80 text-lg"
        href="#contact"
      >
        <span>Contact us</span>
        <IconifyIcon
          icon="streamline-sharp:mail-send-email-message"
          font-size={30}
        />
      </a>
    </div>
  </div>
  <div class="w-full">
    {@html TeamworkIllustration}
  </div>
</section>

<section id="partners" class="px-20 py-10" aria-labelledby="partners-heading">
  <SectionTitle label="Our partners" />
  <div class="flex items-center text-light-grey space-x-2 py-10">
    {#each partners as partner}
      <div
        class="flex flex-row items-center gap-2 justify-center hover:text-primary"
      >
        <IconifyIcon icon="mingcute:meta-fill" font-size={50} />
        <span class="text-3xl">{partner}</span>
      </div>
    {/each}
  </div>
</section>

<section
  id="services"
  class="px-20 py-10 bg-light-background"
  aria-labelledby="services-heading"
>
  <SectionTitle label="Our Serices" />
  <div class="flex items-center space-x-2 py-10">
    {#each services as service}
      <div class="w-full bg-white p-5 h-[25vh] rounded-2xl">
        <p class="text-2xl font-bold py-3">{service.title}</p>
        <p class="">{service.subtitle}</p>
      </div>
    {/each}
  </div>
</section>

<section id="approach" class="px-20 py-10" aria-labelledby="approach-heading">
  <SectionTitle label="Our Approach" />

  <div class="flex space-x-2 py-10">
    <div class="w-full">
      {@html ApproachIllustration}
    </div>
    <div class="w-full ">
      {#each approachDetails as approach}
        <CollapsibleSection headerText={approach.title}>
          <div class="content">{approach.subtitle}</div>
        </CollapsibleSection>
      {/each}
    </div>
  </div>
</section>
