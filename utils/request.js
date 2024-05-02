const apiDomain  = process.env.NEXT_PUBLIC_API_DOMAIN || null
const fetchProperties = async () => {
    try {
        if(!apiDomain) return [];
    const res = await fetch(`${apiDomain}/properties`)
    if(!res.ok){
        throw new Error('Not able to fetch data')
    }
    return res.json()
    console.log(res.json())
} catch (error) {
        console.log(error)
        throw new Error('Something went wrong')
        return []
}

}

const fetchProperty = async (id) => {
    try {
        if(!apiDomain) return null
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`)
        if(!res.ok){
            throw new Error('Property Not found')
        }
        return res.json()
    } catch (error) {
        console.log(error);
        throw new Error('Property Not Found')
        return null
    }

}


export {fetchProperties, fetchProperty}