import CopyInput from '@/components/ui/CopyInput'
import RangeInput from '@/components/ui/RangeInput'

import styles from './PasswordGenerator.module.css'

// const CHARACTERS_MAP = {
//   lowercase: 'awdawd',
//   uppercase: 'awdDDDD',
//   numbers: '0123456789',
//   symbols: '!@#$%^&*()_+-=:;><',
// }

const PasswordGenerator = () => {
  return (
    <div className={styles.passwordGenerator}>
      <CopyInput />
      <RangeInput />
    </div>
  )
}

export default PasswordGenerator
