import React from 'react';

const getDisplayName = (WrappedComponent) => {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withTitle = (WrappedComponent, title) => {
	class WithTitle extends React.Component {
		componentDidMount() {
			document.title = title;
		}
		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
	WithTitle.displayName = `WithTitle(${getDisplayName(WrappedComponent)})`;
	return WithTitle;
};

export default withTitle;
