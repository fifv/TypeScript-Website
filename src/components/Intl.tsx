import { IntlProvider } from 'react-intl';
/* ATTENTION: */
import { lang as messages } from "../copy/en/en";

type IntlProps = {
	locale: string
	children: any
}
export const Intl = (props: IntlProps) => {
	const { children, locale } = props
	// let messages = require("../copy/en/en").lang
	// try {
	// 	messages = require("../copy/" + locale + "/" + locale).lang
	// } catch (error) {
	// 	// NOOP
	// }
	return (
		<IntlProvider locale={ locale || "en" } messages={ messages as any } >
			{ children }
		</IntlProvider>
	)
}
