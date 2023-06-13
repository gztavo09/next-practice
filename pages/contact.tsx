import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <h1>Contact</h1>
        <div>
            Ir a <Link href='/' >Home</Link>
        </div>
    </MainLayout>
  )
}
