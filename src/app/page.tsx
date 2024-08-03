import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center mt-4 md:px-20 px-8 py-12 gap-8">
      <div className="flex flex-col mt-4 gap-8">
        <h1 className="md:text-6xl text-4xl">
          An insight into your day from{' '}
          <p className="underline decoration-wavy">a friendly wizard</p>
        </h1>
        <p className='md:pr-36'>
          Reflect upon the best and worst highlights of your day,
          let Celestius help you see the connections ✨
        </p>
        <Link
          href="/ask"
          className="bg-emerald-600/75 hover:bg-emerald-600 text-white font-semibold max-w-fit p-2 self-center cursor-pointer"
        >
          See what he has to say
        </Link>
      </div>
      <Image
        className="rounded-lg border-4 border-zinc-700"
        src="/celestius.jpg"
        alt="an old benevolent wizard outside of a cave in a forest"
        width={500}
        height={500}
      />
    </main>
  )
}
