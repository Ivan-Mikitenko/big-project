declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classnames: IClassNames;
	export = classnames;
}

declare module '*.svg' {
	import { FunctionComponent, SVGAttributes } from 'react';

	const content: FunctionComponent<SVGAttributes<SVGElement>>;
	export default content;
}

declare const __IS_DEV__: boolean;
