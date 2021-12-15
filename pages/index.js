import styles from '../styles/Home.module.css'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

export default function Home({ posts }) {
  return (
    <>
      <title>Tech With Piyush</title>
      <Sidebar />
      <h1 className={styles.main_heading}>Check out some articles:</h1>

      <section className={styles.blog_grid}>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            desc={post.frontmatter.desc}
            href={`/blog/${post.frontmatter.slug}`}
            type={`#${post.frontmatter.type}`}
            date={post.frontmatter.date}
            key={index}
          />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const mdFiles = fs.readdirSync(path.join('posts'))

  const posts = mdFiles.map((file) => {
    const slug = file.replace('.md', '')

    const mdWithMeta = fs.readFileSync(path.join('posts', file), 'utf8')

    const { data: frontmatter } = matter(mdWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
