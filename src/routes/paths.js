export const PATHS = {
  home: '/',
  about: '/about',
  classes: '/classes',
  classDetail: '/classes/:slug',
  packages: '/packages',
  blog: '/blog',
  blogDetail: '/blog/:slug',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
}

export const classDetailPath = (slug) => `/classes/${slug}`

export const blogDetailPath = (slug) => `/blog/${slug}`
