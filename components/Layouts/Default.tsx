import { ReactNode } from 'react'
import Footer from '../ui/footer/Footer'
import Header from '../ui/header/Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
