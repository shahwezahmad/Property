
'use client'
import {useRouter, useParams, useSearchParams} from 'next/navigation'
const IdPage = () => {
  const router  = useRouter()
  const {id} = useParams()
  const query = useSearchParams()
  return (
    <div>
      <h1>IdPage</h1>
      <button onClick={()=> router.push('/properties')} className='bg-blue-500' >Navigation hooks {id}, {query.get('name')} </button>
    </div>
  )
}

export default IdPage
