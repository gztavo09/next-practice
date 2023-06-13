import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { DarkLayout } from '@/components/layout/DarkLayout'

type Props = {
    page: JSX.Element | JSX.Element[]
}

export default function about () {
    return (
        <>
            <h1>About</h1>
            <div>
                Ir a <Link href='/' >Home</Link>
            </div>
        </>
    )
}

about.getLayout = function getLayout(page: JSX.Element[]) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}