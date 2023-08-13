const Warning = ({ message }) => {
	const result =
		message !== '' ? (
			<small style={{ color: 'red' }}>{message}</small>
		) : (
			<></>
		);

	return result;
};

export default Warning;
