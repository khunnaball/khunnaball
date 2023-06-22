<template>
    <div>
        <div class="flex mb-4">
            <BackNavigation />
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
            title: 'About • khunnaball',
        }
    },
}
</script>