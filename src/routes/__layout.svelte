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
  <slot />
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
