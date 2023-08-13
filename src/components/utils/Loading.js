import { Spinner } from 'react-bootstrap';

const Loading = () => {
	return (
		<div
			style={{
				width: 'fit-content',
				margin: '0 auto',
				padding: '20px 20px',
			}}>
			<Spinner animation="border" variant="secondary" />
		</div>
	);
};

export default Loading;
