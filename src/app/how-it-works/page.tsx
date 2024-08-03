import Link from 'next/link'

export default function About() {
  return (
    <div className='flex flex-col md:px-48 p-4 py-16'>
      <h1 className='text-xl'>Why?</h1>
      <p className='mt-2'>
        When things get too overwhelming, it's hard not to dwell too much on
        negative things that are happening around us, and miss the positive
        things that pass by.
      </p>
      <p className='mt-2'>
        In such times, we need a mentor figure, someone full of wisdom who can
        enlighten us and help us see how things can be connected, or how
        something bad can be made into something good.
      </p>
      <p className='mt-2'>
        Celestius, who is a{' '}
        <em>*wise wizard living on the mountains by himself for decades</em>*
        (who knows how old he is!) can help you see that the worst thing that
        happened today is interconnected with the best thing that happened.
      </p>
      <p className='mt-2'>
        Note that this is not a chat application, so instead you first have to
        think about the two highlights of your day: the worst and the best.
        Putting things in perspective can be very beneficial for mindfulness and
        overall mental health, so this step is necessary.
      </p>
      <p className='mt-2'>
        Behind Celestius is an open source large language model{' '}
        <Link href="https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct" className='text-emerald-600 font-semibold hover:underline'>
          Meta-Llama-3-8B-Instruct
        </Link>
        . Even though they sometimes might be controversial, large language
        models can be great when it comes to making connections between
        seemingly separate things.
      </p>
      <p className='mt-4'>
        GitHub repository can be found{' '}
        <Link href="https://github.com/rivea0/celestius" className='text-emerald-600 font-semibold hover:underline'>here</Link>.
      </p>
      <div className='mt-8'>
      <h2 className='text-xl'>Credits</h2>
      <p>
        Built with <Link href="https://nextjs.org" className='text-emerald-600 font-semibold hover:underline'>Next.js</Link>,{' '}
        <Link href="https://huggingface.co/docs/huggingface.js" className='text-emerald-600 font-semibold hover:underline'>
          Huggingface.js
        </Link>{' '}
        and ❤️.
      </p>
      <p>
        The wizard images are generated using{' '}
        <Link href="https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0" className='text-emerald-600 font-semibold hover:underline'>
          stabilityai/stable-diffusion-xl-base-1.0
        </Link>
        .
      </p>
      <p>
        Logo is adapted from{' '}
        <Link href="https://www.svgrepo.com/svg/96146/halloween-witch-hat-outline" className='text-emerald-600 font-semibold hover:underline'>
          SVGRepo
        </Link>
        .
      </p>

      </div>
    </div>
  )
}
