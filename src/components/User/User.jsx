import { useParams } from "react-router-dom"


function User() {
    const {userid} = useParams()
  return (
      <div className="text-center bg-orange-700 text-white text-4xl p-5 m-12">User:{userid}</div>
  )
}

export default User