'use client' 
 
import Image from 'next/image'
 
export default function Error() {
 
  return (
    <div className="text-center pt-8 flex justify-center items-center h-[60vh]">
        <div className="gap-6 text-4xl font-bold flex flex-col justify-center items-center w-full md:w-[50%] xl:w-[25%]">
          <Image src="/verify-fail.png" width={24} height={24} alt="success" className="w-16 h-16" />
          <span className="text-[#081342]">Something went wrong</span>{" "}
        </div>
    </div>
  )
}