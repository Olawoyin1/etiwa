import { Link } from "react-router-dom"

const Progress = () => {
  return (
    <div className="min-h-130 mt-22 flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="flex flex-col items-center text-center">
            <h4>Page build in progress</h4>
            <Link to="/" className="text-blue-600 hover:underline mt-4">Go back to Home</Link>
        </div>
      
    </div>
  )
}

export default Progress
