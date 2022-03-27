<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/authors/${page.params.slug}.json`
      const res = await fetch(url)
      const {author} = await res.json()

      if (author) {
        return {
          props: {
            author
          }
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let author
</script>

<div class="relative ml-2 mr-2 md:left-28  py-8 px-4 rounded-lg border-indigo-900 shadow-xl" >
<h1 class="text-center py-8 px-4 rounded-lg border-indigo-900 shadow-xl font-bold m-1">{author.name}</h1>

{#if author.image}
  <SanityImage image={author.image} maxWidth={700} />
{/if}

{#if author?.bio}
  <PortableText
    blocks={author.bio}
    serializers={{
      types: {
        code: Code,
        image: ImageBlock,
        authorReference: AuthorBlock
      },
      marks: {
        link: Link
      }
    }}
  />
{/if}

<h2 class="text-center m-2">Posts by {author.name}</h2>

<PostsGrid posts={author.posts} />
</div>
