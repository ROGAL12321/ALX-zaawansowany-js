import formatDate from 'date-fns/format'
import Link from 'next/link'

const EntryItem = ({ entry }) => (
  <div className="flex flex-col space-y-2">
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

export default EntryItem