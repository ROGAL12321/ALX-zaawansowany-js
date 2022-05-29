import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import performGraphQLQuery from '@/helpers/api';
import { getRepositoriesFromSearch } from '@/helpers/queries'

import Main from "@/components/layouts/main"


export default function ResultsPage({ title, results }) {
  return (
    <Main>
      <Head>
        <title>Results page for {title}</title>
      </Head>
      <div className="w-2/3 mx-auto">
        <h1 className="text-center">Search for: <span className="font-bold">
        {title}</span></h1>
        <ul className="mt-8">
          {
            results.map((result) => {
              return (
                <li key={result.node.id} className="relative m-2 p-2 rounded border-2 border-gray-200">
                  <div className="flex space-between align-center">
                    {result.node.owner.avatarUrl && <Image width="30px" height="30px" className="w-10 rounded" src={result.node.owner.avatarUrl} alt="avatar"/>}
                    <h2 className="text-xl ml-2">{result.node.owner.login}</h2>
                  </div>
                  <p className="mt-4">{result.node.description} </p>
                  <p className="absolute top-2 right-2"> &#9733; {result.node.stargazerCount}</p>
                  <Link href={`/repository/${result.node.owner.login}-${result.node.name}`}>
                    <span className="block text-red-500 text-right pr-2 mt-2 cursor-pointer">
                      See details
                    </span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Main>
  )
}

export async function getServerSideProps(context) {
  const query = getRepositoriesFromSearch(context.params.query);

  try {
    const result = await performGraphQLQuery(query)

    return {
      props: {
        title: context.params.query,
        results: result.data.search.edges
      }
    }
  } catch(error) {
    return {
      props: {}
    }
  }
}