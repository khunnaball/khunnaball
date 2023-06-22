<template>
    <div>
        <div>
            <BackNavigation />
        </div>
        <div class="mt-5 mb-10">
            <h1 class="font-hard text-2xl leading-5">Blog</h1>
        </div>
        <ul>
            <li v-for="post in posts" :key="post.title">
                <AppPostCard :post="post" />
            </li>
        </ul>
    </div>
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