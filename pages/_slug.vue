<template>
    <article>
        <div>
            <a class="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-neutral-600" href="../">../</a>
        </div>
        <header class="mx-auto text-left pb-10">
            <dl>
            <dt class="sr-only">Published on</dt>
            <dd class="font-medium text-purple-400 my-4">
                <time :datetime="post.createdAt">
                    {{ $moment(post.createdAt).format('dddd MMMM Do YYYY') }}
                </time>
            </dd>
            </dl>

            <h2 class="text-5xl font-bold text-white-900">
            {{ post.title }}
            </h2>
        </header>

        <NuxtContent
            class="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert"
            :document="post"
        />
    </article>
</template>

<script>
export default {
    async asyncData ({ $content, params, error }) {
    const post = await $content('posts')
        .where({ slug: params.slug })
        .fetch()
        .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
        })

    return { post: post[0] }
    }
}
</script>
