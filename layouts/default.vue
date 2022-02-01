<template>
  <div class="flex flex-col min-h-screen max-w-3xl mx-auto px-4 pt-6">
    <!-- <div class="pt-6 pb-4 text-center">
      <nav class="mt-7 flex items-stretch">
        <div class="flex items-center justify-left space-x-3 w-1/2">
          <NuxtLink to="/" aria-label="Home page">
            <h1 class="text-purple-400">
              ~/blog
            </h1>
          </NuxtLink>
        </div>
        <ul class="flex items-center justify-end space-x-5 w-1/2">
          <li>
            <NuxtLink to="about" class="nav-link" aria-label="About page">
              /about
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div> -->

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
