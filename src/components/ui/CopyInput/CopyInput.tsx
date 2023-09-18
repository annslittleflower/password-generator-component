import { ComponentPropsWithoutRef } from 'react'

import styles from './CopyInput.module.css'

import imgUrl from '/images/copyIcon.svg'

type CopyInputProps = ComponentPropsWithoutRef<'input'>

const CopyInput = (props: CopyInputProps) => {
	return (
		<>
			<input
				{...props}
				className={styles.cardImage}
			/>
			<img
				src={imgUrl}
				onClick={() => console.log('works')}
				style={{ width: 100 }}
			/>
		</>
	)
}

export default CopyInput
