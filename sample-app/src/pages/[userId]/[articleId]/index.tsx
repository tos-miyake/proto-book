import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Error from 'next/error'

import { useGetArticleQuery, Users } from '@/generated/graphql'

import { Article } from '@/components/article'
import { ArticleHeader } from '@/components/article/article-header'
import { ArticleFooter } from '@/components/article/article-footer'
import { UserIcon } from '@/components/user-icon'

import { SiteHeader } from '@/components/site-header'

import styles from './index.module.css'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { loading, error, data } = useGetArticleQuery({
    variables: {
      id: articleId as string,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }
  if (error) {
    return <p>{error.toString()}</p>
  }

  if (!data || !data.articles_by_pk) {
    return <Error statusCode={404} />
  }

  const { user, subject, content, publishedAt } = data.articles_by_pk

  if (!publishedAt) {
    return <Error statusCode={404} />
  }

  const articleProps = { user, subject, publishedAt }

  return (
    <>
      <SiteHeader />
      <div className={styles.contentContainer}>
        <ArticleHeader {...articleProps} />
        <div className={styles.content}>
          <Article content={content} />
        </div>
        <ArticleFooter {...articleProps} />
      </div>
    </>
  )
}

export default ArticlePage
