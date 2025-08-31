<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import ResponsiveNav from "$lib/components/ResponsiveNav.svelte";
  import Testimonies from "$lib/components/Testimonies.svelte";
  import "../app.css";

  let { children } = $props();

  export const prerender = true;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#0E2A47" />
  <title>Koraa — Innovative Solutions, Trusted Partnerships</title>
  <meta
    name="description"
    content="Koraa delivers modern solutions with a focus on quality, reliability, and long-term partnerships."
  />
  <link rel="canonical" href="/" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Koraa",
      "url": "/",
      "logo": "/favicon.svg"
    }
  </script>
  <meta
    property="og:title"
    content="Koraa — Innovative Solutions, Trusted Partnerships"
  />
  <meta
    property="og:description"
    content="Koraa delivers modern solutions with a focus on quality, reliability, and long-term partnerships."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Koraa — Innovative Solutions, Trusted Partnerships"
  />
  <meta
    name="twitter:description"
    content="Koraa delivers modern solutions with a focus on quality, reliability, and long-term partnerships."
  />
</svelte:head>

<header
  class="sticky top-0 bg-white/80 backdrop-saturate-150 backdrop-blur z-10"
>
  <nav
    class="px-20 h-16 flex items-center justify-between max-md:px-0 max-md:py-10"
  >
    <a
      class="font-medium tracking-tight text-[color:var(--color-primary)] no-underline text-5xl max-md:px-5"
      href="#top">Koraa</a
    >
    <ul class="list-none flex gap-4 m-0 p-0 text-lg max-md:hidden" role="list">
      <li>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a
          class="no-underline px-2 py-1 rounded hover:bg-slate-100"
          href="#">Home</a
        >
      </li>
      <li>
        <a
          class="no-underline px-2 py-1 rounded hover:bg-slate-100"
          href="#services">Services</a
        >
      </li>
      <li>
        <a
          class="no-underline px-2 py-1 rounded hover:bg-slate-100"
          href="#approach">Our Approach</a
        >
      </li>
      <li>
        <a
          class="no-underline px-2 py-1 rounded hover:bg-slate-100"
          href="#contact">Contact us</a
        >
      </li>
    </ul>

    <ResponsiveNav />
  </nav>
</header>

<main id="top">{@render children?.()}</main>

<footer
  id="contact"
  class="border-t text-white bg-footer px-20 pt-10 max-md:px-5"
>
  <section
    class="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start"
  >
    <div class="w-full"><ContactForm /></div>
    <div class="w-full"><Testimonies /></div>
  </section>

  <div
    class="py-10 flex items-start justify-between max-md:flex-col max-md:justify-start"
  >
    <div class="font-semibold space-y-2">
      <p class="bg-primary text-text-dark px-2 py-1 rounded-lg text-xl">
        Contact us:
      </p>
      <p class="text-lg font-light">Email: koraa.rw@gmail.com</p>
      <p class="text-lg font-light">Phone: 250-793149088</p>
      <p class="text-lg font-light">Address: Nyarugenge, Kigali, Rwanda</p>
    </div>
    <div class="font-light space-y-4 mt-8">
      <p>© {new Date().getFullYear()} Koraa. All rights reserved.</p>
      <p>
        <span>Terms and Conditions</span>
        <span>-</span>
        <span>Privacy Policy</span>
      </p>
    </div>
  </div>
</footer>
