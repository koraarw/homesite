<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
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
    class="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between"
  >
    <a
      class="font-medium tracking-tight text-[color:var(--color-primary)] no-underline text-5xl"
      href="#top">Koraa</a
    >
    <ul class="list-none flex gap-4 m-0 p-0 text-lg" role="list">
      <li>
        <a
          class="no-underline px-2 py-1 rounded hover:bg-slate-100"
          href="#about">Home</a
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
  </nav>
</header>

<main id="top">{@render children?.()}</main>

<footer class="border-t border-slate-200 bg-slate-50 py-8">
  <div class="max-w-[1100px] mx-auto px-4 flex items-center justify-between">
    <div class="font-semibold">Koraa</div>
    <div class="text-slate-500">
      © {new Date().getFullYear()} Koraa. All rights reserved.
    </div>
  </div>
</footer>
