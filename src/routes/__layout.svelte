<script>
  import '../styles/tailwind-output.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import SideNav from '$lib/navigation/SideNav.svelte'
  import MobileNav from '$lib/navigation/MobileNav.svelte'

  let open = false
</script>

<Header />
<SideNav />
<main class='content-area'>
  <div class='relative mb-36 mt-4 ml-2 mr-2 md:left-28 px-4 pt-4 pb-4 rounded-lg border-indigo-900 content-shadow-xl'>
    <slot />
  </div>
</main>
<Footer />
<style>
  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }
</style>
