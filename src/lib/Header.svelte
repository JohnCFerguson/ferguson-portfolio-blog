<script context="module">
  import MobileNav from './navigation/MobileNav.svelte'
  import {page} from '$app/stores'
</script>

<script>
  let path
  $: ({path} = $page)
</script>

<header class='sticky top-0 z-50 shadow-md bg-white px-1'>
  <a class='left-0 logo' data-selected={path === '/'} href="/">Logo</a>
  <MobileNav />
</header>

<style>
  a[data-selected='true'] {
    font-weight: 600;
    color: #555;
  }
  a {
    text-decoration: none;
    display: block;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
  }
  @media only screen and (max-width: 767px) {
    .logo {
      display: none;
    }
  }
</style>
