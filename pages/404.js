import React from "react"
import Head from "next/head"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>OOPS... 404</title>
      </Head>
      <h1 className="notf-heading">
        Sorry, this page does not exist ¯\_(ツ)_/¯
      </h1>
    </>
  )
}
