import React from 'react';
import icons from './selection.json';

const Icon = (props) => {
	const getIcon = (iconName) => {
		const icon = icons.icons.find(icon => icon.properties.name === iconName);

		if (icon) {
			return icon.icon.paths.join(' ');
		} else {
			console.warn(`icon ${iconName} does not exist.`);
			return '';
		}
	}

	return(
		<svg width="20" height="20" viewBox="0 0 1024 1024">
			<path d={getIcon(props.icon)}></path>
		</svg>
	)
}

export default Icon;
