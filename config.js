'use strict';

const pascalCase = require( 'pascal-case' );
const prettier = require( 'prettier' );
const stringifyObject = require( 'stringify-object' );

const template = data => {
	let propTypesRequire = '';
	let propTypes = '';
	let defaultProps = '';
	if (data.propTypes !== undefined) {
		propTypesRequire = `const PropTypes = require('prop-types');\n`;
		propTypes = `\n${data.name}.propTypes = ${data.propTypes}\n`;
	}
	if (data.defaultProps !== undefined) {
		defaultProps = `\n${data.name}.defaultProps = ${data.defaultProps}\n`;
	}
	const jsxSvgWithProps = data.jsxSvg.replace(
		/<svg([\s\S]*?)>/,
		(match, group) => `<svg${group} {...this.props} className={ className }>`
	);
	const js = `
		'use strict';
		const React = require('react');
		${propTypesRequire}
		class ${data.name} extends React.PureComponent {
			render() {
				const className = ( 'HMNovaIcon ' + this.props.className || '' ).trim();
				return ${jsxSvgWithProps};
			}
		}
		${propTypes}${defaultProps}
		module.exports = ${data.name};
	`;
	return prettier.format(js);
};

module.exports = {
	precompile: true,
	template,
	filenameTemplate: pascalCase,
};
