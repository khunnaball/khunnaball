<template>
  <div class="flex flex-col min-h-screen max-w-3xl mx-auto px-4 pt-6">
    <main class="flex-grow py-4">
      <Nuxt />
    </main>

    <footer class="text-center py-5 text-gray-500 text-sm">
      <p> <a href="https://github.com/khunnaball">khunnaball</a></p>
    </footer>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200 font-mono font-light;
}

.nav-link {
  @apply hover:text-purple-400 underline;
}
</style>
