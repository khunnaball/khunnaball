const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const posts = await $content('posts').fetch()

  for (const post of posts) {
    routes.push(post.slug)
  }

  return routes
}

const siteUrl = process.env.BASE_URL || 'http://localhost:3000'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'khunnaball • blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A place to share music and really anything!' },
      { property: 'og:site_name', content: 'khunnaball blog' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: siteUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'khunnaball blog',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A place to share music and really anything!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${siteUrl}/img/og-logo.png`,
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '627' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: siteUrl,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com/", },
      { rel: "preconnect", href: "https://fonts.gstatic.com/", },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  sitemap: {
    hostname: siteUrl,
    gzip: true,
    routes: createSitemapRoutes,
  },
  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Sitemap: `${siteUrl}/sitemap.xml`,
    },
  ],
}
