'use client'
import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostTextArea () {
  const { pending } = useFormStatus()
  const alreadySubmitted = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current === null) return
    if (!pending && alreadySubmitted.current) {
      alreadySubmitted.current = false
      textAreaRef.current.value = ''
      return
    }

    alreadySubmitted.current = pending
  }, [pending])

  return (
        <textarea
            ref={textAreaRef}
            name='content'
            rows={4}
            className='w-full text-xl bg-black placeholder-gray-500 p-2'
            placeholder='¡¿Qué está pasando!?'
        ></textarea>
  )
}
