<template>
  <main className="space-y-8">
    <ul class="flex mb-4">
      <li class="px-4">
        <span class="text-purple-400">
          ~/blog
        </span>
      </li>
      <li class="px-4">
        <NuxtLink to="about" class="nav-link" aria-label="About page">
          /about
        </NuxtLink>
      </li>
      <li class="px-4">
        <a 
        target="_blank"
        href="https://github.com/khunnaball/"
        class="nav-link"
        rel="noreferrer"
        >
          /github
        </a>
      </li>
    </ul>

    <ul class="">
      <li v-for="post in posts" :key="post.title" class="py-4">
        <AppPostCard :post="post" />
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'createdAt', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { posts }
  }
}
</script>