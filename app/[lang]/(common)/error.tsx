'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="text-center pt-8 flex justify-center items-center h-[60vh]">
        <div className="gap-6 text-4xl font-bold flex flex-col justify-center items-center w-full md:w-[50%] xl:w-[25%]">
          <img src="/verify-fail.png" alt="success" className="w-16 h-16" />
          <span className="text-[#081342]">Something went wrong</span>{" "}
        </div>
    </div>
  )
}