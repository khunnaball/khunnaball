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
    async asyncData({ $content, params, error }) {
    const post = await $content('posts')
        .where({ slug: params.slug })
        .fetch()
        .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
        })

    return { post: post[0] }
    },
    head() {
    return {
        title: `${this.post.title} - `,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.post.description,
            },
            // OG
            { hid: 'og:type', property: 'og:type', content: 'article' },
            {
                hid: 'article:published_time',
                property: 'article:published_time',
                content: this.post.createdAt,
            },
            {
                hid: 'article:modified_time',
                property: 'article:modified_time',
                content: this.post.updatedAt,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: `${this.$config.baseUrl}/${this.post.slug}`,
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: `${this.post.title} - Corner of Progress`,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: this.post.description,
            },
        ],
        link: [
            {
                hid: 'canonical',
                rel: 'canonical',
                href: `${this.$config.baseUrl}/${this.post.slug}`,
            },
        ],
    }
    },
}
</script>
