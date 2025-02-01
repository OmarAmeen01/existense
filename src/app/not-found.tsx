import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='p-16 grid place-items-center'>
      <h1 className='font-sans text-6xl font-[800] p-4'>Not found – 404!</h1>
      <div>
        <Link href="/" className='font-sans text-xl font[600] p-4 underline  text-blue-500'>Go back to Home</Link>
      </div>
  </div>
  )
}