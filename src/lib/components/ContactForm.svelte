<script>
  let form = {
    to: "",
    subject: "",
    message: "",
  };
  let loading = false;
  let result = "";

  async function handleSubmit() {
    loading = true;
    try {
      const response = await fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      result = response.ok ? "Email sent!" : `Error: ${data.error}`;
    } catch (error) {
      // @ts-ignore
      result = `Error: ${error?.message}`;
    }
    console.log("=====", result);

    loading = false;
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="bg-footer-light flex flex-col justify-center p-10 rounded-2xl space-y-5 max-md:p-5"
>
  <h1 class="text-3xl">
    Schedule a <span class="text-primary">Free</span> consultation
  </h1>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-lg mb-2.5 font-medium">Email</label>
    <input
      bind:value={form.to}
      placeholder="my@email.com"
      required
      class="w-full bg-white rounded-lg border px-3 py-2 text-text-dark h-12 focus:outline-0"
    />
  </div>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-lg mb-2.5 font-medium">Name</label>
    <input
      bind:value={form.subject}
      placeholder="Enter Name"
      required
      class="w-full bg-white rounded-lg border px-3 py-2 text-text-dark h-12 focus:outline-0"
    />
  </div>
  <div>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="block text-lg mb-2.5 font-medium">Message</label>
    <textarea
      bind:value={form.message}
      required
      rows="5"
      maxlength="200"
      class="w-full bg-white rounded-lg border px-3 py-2 text-text-dark focus:outline-0"
      placeholder="Type message..."
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={loading}
    class="bg-primary py-5 rounded-xl hover:bg-primary/80"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
</form>
