import { useContext } from 'react'
import { GlobalContext } from 'contexts/global'
import formatDate from 'date-fns/format'
import Link from 'next/link'

const EntryItem = ({ entry }) => {
  const { state, handleEntryChange } = useContext(GlobalContext)
  const isSelected = state.selected.find(element => element === entry._id)

  return (
    <div className={`flex flex-col space-y-2 p-2 ${isSelected ? 'border-2 border-gray-600' : ''}`}>
      <button
        className='border-2'
        onClick={() => handleEntryChange(entry._id)}
      >
        {isSelected ? 'Unselect' : 'Select'}
      </button>
      <div className="prose dark:prose-dark w-full">{entry.message}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.name}</p>
        <span className="text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {formatDate(new Date(entry.createdAt), "d MMM yyyy 'at' h:mm bb")}
        </p>
        <Link href={`/entries/${entry._id}`}>Przejdz do wiadomości</Link>
      </div>
    </div>
  )
  }

export default EntryItem

// 1. Zrob obsluge zaznaczenia elementu za pomoca globalnego stanu
// 2. Po wcisnieciu przycisku, zmien tresc przycisku na 'unselect', dodaj do elementu klase "border-2 border-gray-600" (zeby zaznaczony element byl w ramce)
// 3. Zaznaczenie powinno dzialac w momencie jak przechodze na szczegoly danego postu i wracam do ekranu glownego
// 4. Tylko odswiezenie przegladarki, powinno anulowac wszystkie zaznaczenia (wersja dla PRO - zapamietaj wybor uzytkownika)
// 5. Skorzystaj z globalnego stanu.