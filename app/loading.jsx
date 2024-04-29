'use client'
import { ClipLoader } from "react-spinners" 

const override = {
    display:'block',
    margin:'100px auto'
}
const LoadingPage = ({loading}) => {
    return (
        <ClipLoader color="#3b8256" cssOverride={override} size={150} loading = {loading} />
    )
}
export default LoadingPage