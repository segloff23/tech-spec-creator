import './ProjectOverview.css';
import { Card, Form } from 'react-bootstrap';

const ProjectOverview = ({ header, data, handleChange }) => {
	return (
		<Card>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Card.Subtitle className="text-muted">
					High-level information describing proposed solution, what
					the project works to achieve, and business reasoning
				</Card.Subtitle>
				<div style={{ height: '10px' }}></div>
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

export default ProjectOverview;
