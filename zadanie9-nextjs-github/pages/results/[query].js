import Head from "next/head"

import Main from "@/components/layouts/main"

export default function ResultsPage({ title }) {
  return (
    <Main>
      <Head>
        <title>Results page for {title}</title>
      </Head>
      <h1>Hello Results {title}</h1>
    </Main>
  )
}

export async function getServerSideProps(context) {
  // Tutaj jest miejsce na zapytania asynchroniczne

  return {
    props: {
      title: context.params.query
    },
  }
}