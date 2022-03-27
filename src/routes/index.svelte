<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  
  export let posts
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class='relative ml-2 mr-2 md:left-28'>
  <h1 class="text-center py-8 px-4 rounded-lg border-indigo-900 shadow-xl font-bold">Recent posts</h1>

  <PostsGrid {posts} />
</div>
