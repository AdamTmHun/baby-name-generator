module.exports = {
    mode: 'jit',
    viewer: false,
    config: {
      darkMode: "class",
      content: [
        `components/**/*.{vue,js}`,
        `composables/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        // `nuxt.config.{js,ts}`,
      ],
    },
}