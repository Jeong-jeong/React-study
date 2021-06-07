import React from 'react'
import classNames from 'classnames';
import './Button.scss';

// size:  large, medium, small
// color: blue, pink, gray
// outline, fullWidth = boolean type
function Button({children, size, color, outline, fullWidth}) {
	return (
			<button className={classNames('button', size, color, {
				outline,
				fullWidth
			})}>{children}</button>
	)
}

Button.defaultProps = {
	size: 'medium',
	color: 'blue'
};

export default Button;
