'use client'

import { Merienda } from 'next/font/google'
import { useFormState } from 'react-dom'
import { handleSubmit } from '../actions'
import AskForm from '../components/AskForm'
import Insight from '../components/Insight'

const merienda = Merienda({ subsets: ['latin'], weight: '400' })
const initialState = {
  message: '',
}

export default function Page() {
  const [state, formAction] = useFormState(handleSubmit, initialState)

  return (
    <>
      <AskForm formAction={formAction} />
      {state.message && <Result output={state.message} />}
    </>
  )
}

function Result({ output }: { output: string }) {
  let res = null
  try {
    res = JSON.parse(output)
  } catch (err) {
    console.error('Cannot parse output')
  }

  return (
    <div className={`md:px-40 p-4 ${merienda.className}`}>
      {res ? (
        <Insight text={JSON.parse(output)} />
      ) : (
        <div className="text-red-600">Something went wrong!</div>
      )}
    </div>
  )
}
