<template>
    <a class="text-blue-500 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-purple-400" :href="link">../</a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            requried: false,
            default: "../"
        },
    }
}
</script>
