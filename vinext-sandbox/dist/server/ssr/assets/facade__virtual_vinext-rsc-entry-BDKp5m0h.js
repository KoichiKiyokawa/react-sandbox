import { n as usePathname, t as getLayoutSegmentContext } from "../index.js";
import React, { createElement } from "react";
import { jsx } from "react/jsx-runtime";
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/error-boundary.js
/**
* Generic ErrorBoundary used to wrap route segments with error.tsx.
* This must be a client component since error boundaries use
* componentDidCatch / getDerivedStateFromError.
*/
var ErrorBoundary = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}
	static getDerivedStateFromError(error) {
		if (error && typeof error === "object" && "digest" in error) {
			const digest = String(error.digest);
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;") || digest.startsWith("NEXT_REDIRECT;")) throw error;
		}
		return { error };
	}
	reset = () => {
		this.setState({ error: null });
	};
	render() {
		if (this.state.error) {
			const FallbackComponent = this.props.fallback;
			return jsx(FallbackComponent, {
				error: this.state.error,
				reset: this.reset
			});
		}
		return this.props.children;
	}
};
/**
* Inner class component that catches notFound() errors and renders the
* not-found.tsx fallback. Resets when the pathname changes (client navigation)
* so a previous notFound() doesn't permanently stick.
*
* The ErrorBoundary above re-throws notFound errors so they propagate up to this
* boundary. This must be placed above the ErrorBoundary in the component tree.
*/
var NotFoundBoundaryInner = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notFound: false,
			previousPathname: props.pathname
		};
	}
	static getDerivedStateFromProps(props, state) {
		if (props.pathname !== state.previousPathname && state.notFound) return {
			notFound: false,
			previousPathname: props.pathname
		};
		return {
			notFound: state.notFound,
			previousPathname: props.pathname
		};
	}
	static getDerivedStateFromError(error) {
		if (error && typeof error === "object" && "digest" in error) {
			const digest = String(error.digest);
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;404")) return { notFound: true };
		}
		throw error;
	}
	render() {
		if (this.state.notFound) return this.props.fallback;
		return this.props.children;
	}
};
/**
* Wrapper that reads the current pathname and passes it to the inner class
* component. This enables automatic reset on client-side navigation.
*/
function NotFoundBoundary({ fallback, children }) {
	return jsx(NotFoundBoundaryInner, {
		pathname: usePathname(),
		fallback,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/vinext@0.0.30_@vitejs+plugin-rsc@0.5.21_react-dom@19.2.4_react@19.2.4__react-server-dom_9169a35fa5bee2b3489aa6798161ced5/node_modules/vinext/dist/shims/layout-segment-context.js
/**
* Layout segment context provider.
*
* This is a "use client" module because it needs React's createContext
* and useContext, which are NOT available in the react-server condition.
* The RSC entry renders this as a client component boundary.
*
* The context is shared with navigation.ts via getLayoutSegmentContext()
* to avoid creating separate contexts in different modules.
*/
/**
* Wraps children with the layout segment context.
* Each layout in the App Router tree wraps its children with this provider,
* passing the remaining route tree segments below that layout level.
* Segments include route groups and resolved dynamic param values.
*/
function LayoutSegmentProvider({ childSegments, children }) {
	const ctx = getLayoutSegmentContext();
	if (!ctx) return children;
	return createElement(ctx.Provider, { value: childSegments }, children);
}
//#endregion
//#region \0virtual:vite-rsc/client-references/group/facade:\0virtual:vinext-rsc-entry
var export_f29e6e234fea = {
	ErrorBoundary,
	NotFoundBoundary
};
var export_0deffcb8ffd7 = { LayoutSegmentProvider };
//#endregion
export { export_0deffcb8ffd7, export_f29e6e234fea };
