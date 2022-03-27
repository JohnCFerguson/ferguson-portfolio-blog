<script>
    import { onMount } from 'svelte';

    export let sidenav = false
    const mediaQueryHandler = e => {
        //Reset mobile state
        if (!e.matches) {
            sidenav = false
        }
    }

    onMount(() => {
        const mediaListener = window.matchMedia("(min-width: 767px)")
        mediaListener.addListener(mediaQueryHandler)
    })
</script>

<div class="fixed top-14 w-35 float-left shadow-md bg-white px-1 h-5/6">
    <nav class="sticky">
        <ul class='relative'>
            <li class='relative'>
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:pl-8" data-mdb-ripple="true" data-mdb-ripple-color="dark" href='/'>Home</a>
            </li>
            <li class='relative'>
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:pl-8" data-mdb-ripple="true" data-mdb-ripple-color="dark" href='/'>About</a>
            </li>
            <li class='relative'>
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:pl-8" data-mdb-ripple="true" data-mdb-ripple-color="dark" href='/'>Resume</a>
            </li>
            <li class='relative'>
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:pl-8" data-mdb-ripple="true" data-mdb-ripple-color="dark" href='/'>Blog</a>
            </li>
        </ul>
    </nav>
</div>


<style>
    @media only screen and (max-width: 767px) {
        div {
            display: none;
        }

    }
</style>