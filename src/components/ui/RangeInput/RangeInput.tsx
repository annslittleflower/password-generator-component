import { ComponentPropsWithoutRef, useState } from 'react'

import styles from './RangeInput.module.css'

type RangeInputProps = ComponentPropsWithoutRef<'input'>

const RangeInput = ({
  min = 10, // lets do at least 10 characters by default
  max = 100,
  defaultValue,
  ...rest
}: RangeInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue) // TODO default value
  console.log('irangenputValue', inputValue)
  return (
    <input
      type='range'
      className={styles.rangeInput}
      value={inputValue}
      onChange={(e) => setInputValue(+e.target.value)}
      min={min}
      max={max}
      {...rest}
    />
  )
}

export default RangeInput
