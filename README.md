<table width="100%">
	<tr>
		<td align="left" width="70">
			<strong>Nova Icons</strong><br />
			(Free) Nova Icons for use in React projects.
		</td>
		<td align="right" width="20%">
			<a href="https://www.npmjs.com/package/@humanmade/nova-icons">
				<img src="https://img.shields.io/npm/v/@humanmade/nova-icons.svg" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			A <strong><a href="https://hmn.md/">Human Made</a></strong> project. Maintained by @rmccue.
		</td>
		<td align="center">
			<img src="https://hmn.md/content/themes/hmnmd/assets/images/hm-logo.svg" width="100" />
		</td>
	</tr>
</table>

This is the free (public domain) [NOVA icons](http://www.webalys.com/nova/), repackaged into React components.

## Usage

`yarn add @humanmade/nova-icons`

You need to include the CSS file:

```js
import '@humanmade/nova-icons/style.css';
```

Then, import the icons you want:

```js
import Cloud from '@humanmade/nova-icons/Cloud';

export default props => {
	<div>Here's a thing with a <Cloud /></div>;
}
```
