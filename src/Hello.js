import React from 'react';

function Hello ({color, name, isSpecial}) {
	return (
		<p style = {{
			color
		}}>
			{isSpecial && <b>*</b>}
			Hello {name}
		</p>
	);
}

Hello.defaultProps = {
	name: 'default'
}

export default Hello;