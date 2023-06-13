import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Home() {
  return (
      <MainLayout>
        <h1>Home</h1>
        <div>
          Ir a <Link href='/about' >About</Link>
        </div>
      </MainLayout>
  )
}
