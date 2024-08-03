import Image from 'next/image'

export default function Insight({ text }: { text: string }) {
  return (
    // bg-amber-500/25
    <div className="flex flex-col p-2 justify-center border-2 border-stone-200 rounded-md py-4 bg-amber-100/25">
      <p className="md:px-8 px-2 whitespace-pre-wrap">{text}</p>
      <div className='flex flex-col'>
      <Image
        src="/celestius2.jpg"
        alt="an old wizard sitting outside a cave with a firelamp beside him"
        width={175}
        height={175}
        className='border-1 rounded-md self-end mt-8'
      ></Image>

      </div>
    </div>
  )
}
