"use client"
import { useRouter } from 'next/navigation'


function NotFound() {
  const router = useRouter()
  router.push("/")
}

export default NotFound
