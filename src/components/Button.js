import React from 'react'
import './Button.scss';

export default function Button({children}) {
	return (
		<div>
			<button className='button'>{children}</button>
		</div>
	)
}
