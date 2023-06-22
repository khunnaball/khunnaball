<template>
<ul class="flex mb-4">
    <li class="pr-4">
        <span class="text-purple-400">
        ~/
        </span>
    </li>
    <li class="px-4">
        <NuxtLink to="about" class="nav-link" aria-label="About page">
        /about
        </NuxtLink>
    </li>
    <li class="px-4">
        <NuxtLink to="blog" class="nav-link" aria-label="Blog">
        /blog
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
</template>
