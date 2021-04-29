const baseUrl = 'https://github.com/fu4303/miraklasiaf'

export const TWITTER_USER_NAME = 'miraklasiaf'
export const PLATFORM_NAME = 'fu4303'
export const PLATFORM_LOWERCASE = 'fu4303'
export const PLATFORM_URL = 'https://miraklasiaf-nu.vercel.app'

export const siteMetadata = {
  copyright: `© ${new Date().getFullYear()} Alec Campbell`,
  author: {
    name: 'Alec Campbell',
    github: 'https://github.com/fu4303',
    twitter: 'https://twitter.com/miraklasiaf',
    linkedin: 'https://linkedin.com/in/doc22940',
    email: 'rsiyq924@gmail.com',
    mailto: 'mailto:rsiyq924@gmail.com'
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/develop/website`,
    blobUrl: `${baseUrl}/blob/develop`
  },
  seo: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${PLATFORM_URL}`,
      site_name: `${PLATFORM_NAME}.com`
    },
    twitter: {
      handle: '@miraklasiaf',
      site: '@miraklasiaf',
      cardType: 'summary_large_image'
    }
  }
}

export const routes = [
  ['Home', '/'],
  ['Blog', '/blog'],
  ['Dashboard', '/dashboard'],
  ['About', '/about']
]
