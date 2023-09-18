import { ComponentPropsWithoutRef, useState } from 'react'

import styles from './CopyInput.module.css'

import imgUrl from '/images/copyIcon.svg'

type CopyInputProps = ComponentPropsWithoutRef<'input'>

const CopyInput = (props: CopyInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputValue)
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        {...props}
        className={styles.copyInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img
        src={imgUrl}
        className={styles.copyIcon}
        onClick={copyToClipboard}
      />
    </div>
  )
}

export default CopyInput
