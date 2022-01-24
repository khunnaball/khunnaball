<template>
    <div>
        <div>
            <a class="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-neutral-600" href="../">../</a>
        </div>
        <NuxtContent class="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert my-4" :document="about"/>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const about = await $content('about').fetch()
        return {
            about,
        }
    },
    head() {
        return {
            title: 'About -',
        }
    },
}
</script>