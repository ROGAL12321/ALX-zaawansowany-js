import { getGuestbookEntry } from '@/lib/fauna'
import MainLayout from '@/components/MainLayout'

export default function EntryPage({ entry }) {
  return (
    <MainLayout>
      <div className='rounded'>
        <h1 className='text-4xl mb-4'>Hidden fields</h1>
        <p>name: {entry.name}</p>
        <p>message: {entry.message}</p>
        <p>Secret Message: {entry.secretMessage}</p>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps(req) {
  return {
    props: {
      entry:  await getGuestbookEntry(req.params.id)
    }
  }
}