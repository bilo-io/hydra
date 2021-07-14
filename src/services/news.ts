import axios from 'axios'

const key = 'e4e66081f56c451d899ea25efc5dd6b6'
const baseUrl = 'https://newsapi.org/v2'

export const getHeadlines = ({ country, limit, category, query }: { country: string, limit: number, category: string, query: string}) => {
  let url = `${baseUrl}/top-headlines?country=${country}&apiKey=${key}`

  if (limit) {
    url += `&pageSize=${limit || 5}`

    url += category
      ? `&category=${category}`
      : ''
    url += query
      ? `&q=${query}`
      : ''
  }

  return axios({ method: 'GET', url })
}

export const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
]

export const countries = [
  { name: 'United Arab Emirates', code: 'ae' },
  { name: 'Argentina', code: 'ar' },
  { name: 'Austria', code: 'at' },
  { name: 'Australia', code: 'au' },
  { name: 'Belgium', code: 'be' },
  { name: 'Bulgaria', code: 'bg' },
  { name: 'Brazil', code: 'br' },
  { name: 'Canada', code: 'ca' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'China', code: 'cn' },
  { name: 'Colombia', code: 'co' },
  { name: 'Cuba', code: 'cu' },
  { name: 'Czech Republic', code: 'cz' },
  { name: 'Germany', code: 'de' },
  { name: 'Egypt', code: 'eg' },
  { name: 'France', code: 'fr' },
  { name: 'United Kingdom of Great Britain and Northern Ireland', code: 'gb' },
  { name: 'Greece', code: 'gr' },
  { name: 'Hong Kong', code: 'hk' },
  { name: 'Hungary', code: 'hu' },
  { name: 'Indonesia', code: 'id' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Israel', code: 'il' },
  { name: 'India', code: 'in' },
  { name: 'Italy', code: 'it' },
  { name: 'Japan', code: 'jp' },
  { name: 'Korea (Republic of Korea)', code: 'kr' },
  { name: 'Lithuania', code: 'lt' },
  { name: 'Latvia', code: 'lv' },
  { name: 'Morocco', code: 'ma' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Nigeria', code: 'ng' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'Norway', code: 'no' },
  { name: 'New Zealand', code: 'nz' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Poland', code: 'pl' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Romania', code: 'ro' },
  { name: 'Serbia', code: 'rs' },
  { name: 'Russian Federation', code: 'ru' },
  { name: 'Saudi Arabia', code: 'sa' },
  { name: 'Sweden', code: 'se' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Slovenia', code: 'si' },
  { name: 'Slovakia', code: 'sk' },
  { name: 'Thailand', code: 'th' },
  { name: 'Turkey', code: 'tr' },
  { name: 'Taiwan', code: 'tw' },
  { name: 'Ukraine', code: 'ua' },
  { name: 'United States of America', code: 'us' },
  { name: 'Venezuela (Bolivarian Republic of Venezuela)', code: 've' },
  { name: 'South Africa', code: 'za' }
]

export default {
  getHeadlines,
  categories,
  countries
}
