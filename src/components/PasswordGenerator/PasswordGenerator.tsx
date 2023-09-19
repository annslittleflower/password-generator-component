import { useState } from 'react'

import CopyInput from '@/components/ui/CopyInput'
import RangeInput from '@/components/ui/RangeInput'
import Checkbox from '@/components/ui/Checkbox'
import Button from '@/components/ui/Button'

import styles from './PasswordGenerator.module.css'

import { shuffleString } from './utils'

const CHARACTERS_MAP = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=:;><',
}

const DEFAULT_CHECKBOXES_STATE = {
  lowercase: true,
  uppercase: false,
  numbers: false,
  symbols: false,
} as const

type CheckboxKeys = keyof typeof DEFAULT_CHECKBOXES_STATE

const PasswordGenerator = () => {
  const [password, setPassword] = useState('')

  const [checkboxesState, setCheckboxesState] = useState(
    DEFAULT_CHECKBOXES_STATE
  )

  const [charactersLength, setCharactersLength] = useState(20)

  const changeCheckboxesState = (c: CheckboxKeys, v: boolean) => {
    const newCheckboxesState = Object.assign({}, checkboxesState, { [c]: v })
    setCheckboxesState(newCheckboxesState)
  }

  const generatePassword = () => {
    const checkedCount = Object.values(checkboxesState).filter(
      (v) => !!v
    ).length

    const eachCharacterSetLength = Math.ceil(charactersLength / checkedCount)

    const resultString = Object.keys(checkboxesState).reduce((acc, k) => {
      if (checkboxesState[k as CheckboxKeys]) {
        const characters = CHARACTERS_MAP[k as CheckboxKeys]
        const res = Array.from(
          { length: eachCharacterSetLength },
          () => characters[Math.floor(Math.random() * characters.length)]
        )
        acc += res.join('')
      }

      return acc.length > charactersLength
        ? acc.slice(0, charactersLength)
        : acc
    }, '')

    setPassword(shuffleString(resultString))
  }

  const checkboxError = !Object.values(checkboxesState).some((v) => v)

  return (
    <div className={styles.passwordGenerator}>
      <CopyInput
        value={password}
        disabled
      />
      <p className={styles.charLength}>Characters length {charactersLength}</p>
      <RangeInput
        value={charactersLength}
        onValueChange={setCharactersLength}
      />
      <div className={styles.checkboxes}>
        <Checkbox
          name='lowercase'
          checked={checkboxesState.lowercase}
          label='Include Lowercase'
          onValueChange={changeCheckboxesState}
        />
        <Checkbox
          name='uppercase'
          checked={checkboxesState.uppercase}
          label='Include Uppercase'
          onValueChange={changeCheckboxesState}
        />
        <Checkbox
          name='numbers'
          checked={checkboxesState.numbers}
          label='Include Numbers'
          onValueChange={changeCheckboxesState}
        />
        <Checkbox
          name='symbols'
          checked={checkboxesState.symbols}
          label='Include Symbols'
          onValueChange={changeCheckboxesState}
        />
      </div>
      {checkboxError ? (
        <p className={styles.checkboxError}>
          * Please select at least one checkbox
        </p>
      ) : null}
      <Button
        onClick={generatePassword}
        disabled={checkboxError}
      >
        Generate
      </Button>
    </div>
  )
}

export default PasswordGenerator
