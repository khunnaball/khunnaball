<template>
  <article>
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd class="font-medium text-purple-400 text-xs">
        <time :datetime="post.createdAt">
          {{ $moment(post.createdAt).format('DD-MM-YYYY') }}
        </time>
      </dd>
    </dl>
    <div class="space-y-5">
      <NuxtLink :to="post.slug" :aria-label="`Read - ${post.title}`">
        <h2 class="text-xl font-bold tracking-tight text-white-900">
          {{ post.title }}
        </h2>
      </NuxtLink>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requried: true,
      default: () => {}
    }
  }
}
</script>
