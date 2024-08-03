import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="px-2 py-1">
      <div className="flex items-end">
        <Link href="/" className="flex items-end gap-2 p-1">
          <Image src="/logo.svg" alt="wizard's hat" width={60} height={60}  />
          <span className="text-3xl">Celestius</span>
        </Link>
        <span className="ml-auto text-lg p-1"><Link href="/how-it-works">How it works</Link></span>
      </div>
    </header>
  )
}