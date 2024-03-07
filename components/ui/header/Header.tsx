import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="text-[#00d8ff] fixed h-14 top-0 flex items-center justify-center w-full">
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  )
}

export default Header
