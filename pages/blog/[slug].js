import React, { useEffect } from 'react'
import prism from 'prismjs'
import 'prismjs/components/prism-json'
import matter from 'gray-matter'
import { marked } from 'marked'
import path from 'path'
import fs from 'fs'
import Navbar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Post({ frontmatter: { title, date }, slug, content }) {
  useEffect(() => {
    prism.highlightAll()
  }, [])
  return (
    <>
      <title>{title}</title>
      <Navbar />
      <div className="main-blog">
        <h3>{`Written on : ${date}`}</h3>
        <article
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

  const { data: frontmatter, content } = matter(mdWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
