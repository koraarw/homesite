<script>
  import IconifyIcon from "@iconify/svelte";
  import CollapsibleSection from "$lib/components/Collapsible.svelte";
  import SectionTitle from "$lib/components/SectionTitle.svelte";
  import TeamworkIllustration from "$lib/assets/teamwork.svg?raw";
  import archIllustration from "$lib/assets/arc.svg?raw";
  import ApproachIllustration from "$lib/assets/approach.svg?raw";

  const partners = ["G6 Real Estate"];
  const services = [
    {
      title: "Consulting",
      subtitle:
        "We work with you to understand your needs and recommend AI solutions that best fit your business.",
    },
    {
      title: "Process automation",
      subtitle:
        "We help enterprises transform the way your business operates by replacing manual processes with intelligent automation that's built for your needs and supported for long-term success.",
    },
    {
      title: "Upskill your Workforce",
      subtitle:
        "Empower your team to work smarter with AI by learning how to apply it safely, efficiently, and without risking sensitive business data.",
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
  const handleScheduleMeeting = () => {
    // @ts-ignore
    Calendly.initPopupWidget({ url: "https://calendly.com/koraa-rw" });
    return null;
  };
</script>

<section
  class="px-20 flex flex-row items-center max-sm:flex-col-reverse max-md:px-5"
  aria-labelledby="hero-heading"
>
  <div class="w-2/3 space-y-5 max-md:w-full">
    <div class="space-y-5 max-md:text-center">
      <p class="text-4xl max-md:text-3xl">Integrate</p>
      <p class="text-7xl font-extrabold max-md:text-3xl">
        Artificial Intelligence
      </p>
      <p class="text-4xl max-md:text-3xl">into your workflow</p>
    </div>
    <div class="w-1/3 max-md:w-full">
      {@html archIllustration}
    </div>
    <div>
      <p class="text-lg text-wrap text-justify">
        Koraa is redefining process workflows, enabling the enterprises to <span class="font-semibold">automate workflows</span> with intelligent agents, 
        and <span class="font-semibold">upskill</span> their workforce to efficiently use Artificial Intelligence at work.
      </p>
    </div>

    <div
      class="space-y-5 flex flex-row items-start justify-start gap-5 max-md:flex-col max-md:gap-0"
    >
      <button
        class="flex flex-row items-center justify-center no-underline gap-2 py-3.5 px-12 bg-footer text-white rounded-xl cursor-pointer hover:bg-footer/80 text-lg max-md:w-full max-md:py-2.5 max-md:text-base"
        onclick={handleScheduleMeeting}
      >
        <span>Schedule Free Consultation</span>
        <IconifyIcon
          icon="pajamas:calendar"
          font-size={30}
          class="max-md:text-base"
        />
      </button>

      <a
        class="flex flex-row items-center justify-center no-underline gap-2 py-3.5 px-12 bg-primary text-white rounded-xl cursor-pointer hover:bg-primary/80 text-lg max-md:w-full max-md:py-2.5 max-md:text-base"
        href="#contact"
      >
        <span>Contact us</span>
        <IconifyIcon
          icon="streamline-sharp:mail-send-email-message"
          font-size={30}
          class="max-md:text-base"
        />
      </a>
    </div>
  </div>
  <div class="w-2/4 max-md:w-full">
    {@html TeamworkIllustration}
  </div>
</section>

<!-- <section
  id="partners"
  class="px-20 max-md:px-5 py-10 text-light-grey bg-primary/5 mt-10 max-md:bg-primary/10"
  aria-labelledby="partners-heading"
>
  <h1
    class="text-xl rounded-lg cursor-pointer text-center font-semibold text-gray-500"
  >
    Trusted by:
  </h1>
  <div
    class="flex items-center justify-center space-x-2 py-10 max-md:flex-wrap"
  >
    {#each partners as partner}
      <div
        class="flex flex-row items-center gap-2 justify-center hover:text-primary"
      >
        <IconifyIcon icon="mingcute:meta-fill" font-size={46} />
        <span class="text-3xl font-light">{partner}</span>
      </div>
    {/each}
  </div>
</section> -->

<section
  id="services"
  class="px-20 py-10 max-md:px-5 bg-primary/5  max-md:bg-primary/10"
  aria-labelledby="services-heading"
>
  <SectionTitle label="Our Serices" />
  <div
    class="flex items-center space-x-2 py-10 max-md:flex-wrap gap-10"
  >
    {#each services as service}
      <div
        class="w-full bg-white p-5 h-[25vh] max-xl:h-[45vh] rounded-2xl border border-light-grey/50 max-md:h-auto"
      >
        <p class="text-2xl font-bold py-3 text-center">{service.title}</p>
        <p class="text-justify max-xl:text-start  max-md:text-justify">{service.subtitle}</p>
      </div>
    {/each}
  </div>
</section>

<section
  id="approach"
  class="px-20 py-10 max-md:px-5"
  aria-labelledby="approach-heading"
>
  <SectionTitle label="Our Approach" />

  <div class="flex space-x-2 py-10">
    <div class="w-2/3 max-md:hidden">
      {@html ApproachIllustration}
    </div>
    <div
      class="w-full pl-40 space-y-5 flext flex-col justify-start max-md:pl-0"
    >
      {#each approachDetails as approach}
        <CollapsibleSection headerText={approach.title}>
          <div class="text-justify">{approach.subtitle}</div>
        </CollapsibleSection>
      {/each}
    </div>
  </div>
</section>
