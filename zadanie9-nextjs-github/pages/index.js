import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import Main from '@/components/layouts/main'

export default function Home() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event) => {
    event.preventDefault();

    if(inputValue.length < 3) return alert('Pole jest puste')

    router.push(`/results/${inputValue}`)
  }

  return (
    <Main>
      <Head>
        <title>index page</title>
      </Head>
      <div className="border-2 border-gray-500 p-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-2 border-gray-500 rounded p-2"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="button" className="rounded bg-red-800 w-full my-3 text-white" onClick={handleButtonClick}> Send </button>
      </div>
    </Main>
  )
}
