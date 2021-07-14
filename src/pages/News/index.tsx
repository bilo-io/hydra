import React, { useEffect, useState } from 'react'
import { getHeadlines } from 'services/news'
import Accordion from 'components/Accordion'

const newsThumbnail = 'https://static.coindesk.com/wp-content/uploads/2018/08/etcrbcb-710x458.jpg?format=webp'

export const News = () => {
  // eslint-disable-next-line no-unused-vars
  const category = 'business'
  const country = { name: 'United States of America', code: 'us' }
  const keywords = ['bitcoin', 'crypto', 'finance', 'bank', 'money', 'fashion', 'software', 'future']

  const [articles, setArticles] = useState<any>({})
  const [error, setError] = useState<any>(null)
  const handleError = (error: any) => {
    setError(JSON.stringify(error, undefined, 2))
  }

  useEffect(() => {
    keywords.forEach((query: string) => {
      getHeadlines({ country: country.code, limit: 100, category, query })
        .then(response => {
          const items = response.data?.articles
          if (items.length > 0) {
            setArticles({
              ...articles,
              [query]: items
            })
          }
        })
        .catch(handleError)
    })
  }, [])

  const ArticleCard = ({ article }: { article: any }) => (
    <Accordion title={
      <div style={{ width: 'calc(100% - 2rem)', padding: '1rem' }}>
        <div style={{ padding: '1rem', borderRadius: '0.5rem', backgroundColor: '#88888822' }}>{article?.title}</div>
        <img src={article?.urlToImage || newsThumbnail} style={{ width: '16rem', margin: 'auto' }} />
        <div>{article?.publishedAt?.split('T')?.[0]}</div>
      </div>
    }>

      <div style={{ padding: '2rem' }}>

        <div>Overview:</div>
        <div>{article?.description}</div>
        <br />
        <div></div>
        <div>{article?.content}</div>
        <br />
        {/* <div style={{ fontStyle: 'italic' }}> */}
        <div>{article?.author}</div>
        <a target='_blank' href={article?.url} rel="noreferrer">- {article?.source?.name || article?.url}</a>
        {/* </div> */}
        {
          error && <pre style={{ color: '#f00', margin: '1rem', textAlign: 'center' }}>{JSON.stringify(error, undefined, 4)}</pre>
        }
      </div>
    </Accordion>
  )

  return (
    <div>
      {keywords.map((keyword) =>
        articles?.[keyword]?.map((article: any, i: number) => (
          <>
            <ArticleCard key={i} article={article} />
          </>
        ))
      )}
    </div>
  )
}

export default News
