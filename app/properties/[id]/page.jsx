
'use client'
import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
import {fetchProperty} from '@/utils/request'
const IdPage = () => {
  const {id} = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=> {

    const fetchPropertyData = async () => {
      try {
        const property = await fetchProperty(id)
        setProperty(property)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    if(property === null) {
      fetchPropertyData()
    }

  },[id, property])

  return (
    <div>
      <h1>IdPage</h1>
      <button onClick={()=> router.push('/properties')} className='bg-blue-500' >Navigation hooks {id} </button>
    </div>
  )
}

export default IdPage
