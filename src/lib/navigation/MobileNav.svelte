<script>
  import Hamburger from './Hamburger.svelte'
  import {onMount} from 'svelte'
  import {page} from '$app/stores'

  let sidenav = false
  const classes = 'cursor-pointer mr-4 border-none focus:outline-none'
  let mobileView = false
  let path
  $: ({path} = $page)
  const setSideNav = () => {
    sidenav = !sidenav
  }
  const mediaQueryHandler = (e) => {
    //Reset mobile state
    if (!e.matches) {
      sidenav = false
    }
    console.log(`Mobile View: ${mobileView} SideNav: ${sidenav}`)
  }

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)')
    mediaListener.addListener(mediaQueryHandler)
  })
</script>

<nav>
  <div class="inner">
    <a class="logo" data-selected={path === '/'} href="/">Logo</a>
    <Hamburger on:mobileNavClick={setSideNav} />
    <ul class={`navbar-list${sidenav ? ' mobile' : ''}`}>
      <li>
        <a
          class="flex justify-center hover:text-gray-700 hover:no-underline center"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          href="/">Home</a
        >
      </li>
      <li>
        <a
          class="flex justify-center hover:text-gray-700 hover:no-underline"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          href="/">About</a
        >
      </li>
      <li>
        <a
          class="flex justify-center hover:text-gray-700 hover:no-underline"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          href="/">Resume</a
        >
      </li>
      <li>
        <a
          class="flex justify-center hover:text-gray-700 hover:no-underline"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          href="/blog">Blog</a
        >
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    height: 45px;
    width: 100%;
    display: flex;
  }
  a[data-selected='true'] {
    font-weight: 600;
    color: #555;
  }
  a {
    text-decoration: none;
  }
  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    box-sizing: border-box;
    display: grid;
    grid-template-areas: 'a a';
    width: 100%;
  }
  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 theme('spacing.16');
  }

  .navbar-list.mobile {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - theme('spacing.16'));
    bottom: 0;
    right: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #424245;
  }

  .navbar-list a {
    color: #fff;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
  }

  @media only screen and (min-width: 767px) {
    nav {
      display: none;
    }
    .navbar-list {
      display: flex;
      padding: 0;
    }
    .navbar-list a {
      display: inline-flex;
    }
  }
</style>
