"use client"
import { useRouter } from 'next/navigation'


function NotFound() {
  const router = useRouter()
  router.push("/")
  return (
    <div>
      this page not found
    </div>
  )
}

export default NotFound
