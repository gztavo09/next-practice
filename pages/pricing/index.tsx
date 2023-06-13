import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
        <h1>Pricing</h1>
        <div>
            Ir a <Link href='/' >Home</Link>
        </div>
    </MainLayout>
  )
}
