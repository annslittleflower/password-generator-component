import { useReducer, useState } from 'react'

import CopyInput from '@/components/ui/CopyInput'
import RangeInput from '@/components/ui/RangeInput'
import Checkbox from '@/components/ui/Checkbox'

import styles from './PasswordGenerator.module.css'

const CHARACTERS_MAP = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=:;><',
}

const PasswordGenerator = () => {
  const [password, setPassword] = useState('awdawd')

  const [lowercaseChecked, setLowercaseChecked] = useState(true)
  const [uppercaseChecked, setUppercaseChecked] = useState(true)
  const [numbersChecked, setNumbersChecked] = useState(true)
  const [symbolsChecked, setSymbolsChecked] = useState(true)

  const [charactersLength, setCharactersLength] = useState(20)

  const changeLowercase = (n: string, v: boolean) => setLowercaseChecked(v)
  const changeUppercase = (n: string, v: boolean) => setUppercaseChecked(v)
  const changeNumbers = (n: string, v: boolean) => setNumbersChecked(v)
  const changeSymbols = (n: string, v: boolean) => setSymbolsChecked(v)

  const generatePassword = () => {
    const p = CHARACTERS_MAP.lowercase
    setPassword(p)
  }

  return (
    <div className={styles.passwordGenerator}>
      <CopyInput
        value={password}
        disabled
      />
      <p className={styles.charLength}>Characters length {charactersLength}</p>
      <RangeInput
        // interesting react bug with initial render of range input, defaultValue fixes it
        defaultValue={charactersLength}
        onValueChange={setCharactersLength}
      />
      <div className={styles.checkboxes}>
        <Checkbox
          name='lowercaseChecked'
          checked={lowercaseChecked}
          label='Include Lowercase'
          onValueChange={changeLowercase}
        />
        <Checkbox
          name='uppercaseChecked'
          checked={uppercaseChecked}
          label='Include Uppercase'
          onValueChange={changeUppercase}
        />
        <Checkbox
          name='numbersChecked'
          checked={numbersChecked}
          label='Include Numbers'
          onValueChange={changeNumbers}
        />
        <Checkbox
          name='symbolsChecked'
          checked={symbolsChecked}
          label='Include Symbols'
          onValueChange={changeSymbols}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
