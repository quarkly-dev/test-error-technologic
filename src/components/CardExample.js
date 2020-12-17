import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text } from "@quarkly/widgets";
const defaultProps = {
	"width": "25%",
	"lg-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "CEO"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "5px 0 20px 0",
			"children": "Nathan K. Joe"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"children": "This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides."
		}
	}
};

const CardExample = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" />
		<Box {...override("box")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{children}
	</StackItem>;
};

Object.assign(CardExample, { ...StackItem,
	defaultProps,
	overrides
});
export default CardExample;