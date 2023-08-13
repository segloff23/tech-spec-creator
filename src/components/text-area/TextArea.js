import './TextArea.css';
import { Card, Form } from 'react-bootstrap';

const TextArea = ({ header, data, handleChange }) => {
	return (
		<Card>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Form>
					<Form.Control
						as="textarea"
						style={{ height: '200px' }}
						name="text"
						value={data.text}
						onChange={handleChange}
					/>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default TextArea;
