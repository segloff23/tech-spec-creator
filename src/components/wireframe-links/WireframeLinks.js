import './WireframeLinks.css';
import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import Warning from '../utils/Warning';

const WireframeLinks = ({
	header,
	data,
	newEntry,
	handleChange,
	updateValid,
}) => {
	const [warnings, setWarnings] = useState('');

	const updateWarnings = (updatedRow) => {
		const someBlank = Object.keys(updatedRow).some(
			(k) => updatedRow[k] === ''
		);
		const someFilled = Object.keys(updatedRow).some(
			(k) => updatedRow[k] !== ''
		);
		if (someBlank && someFilled) {
			setWarnings('*All fields required');
			updateValid(true);
		} else {
			setWarnings('');
			updateValid(false);
		}
	};

	return (
		<Card>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Form>
					<Row>
						<Col sm={3}>
							<Form.Control
								placeholder="Nickname"
								name="nickname"
								value={newEntry.nickname}
								onChange={(e) =>
									handleChange(e, updateWarnings)
								}
							/>
							<Warning message={warnings} />
						</Col>
						<Col sm={9}>
							<Form.Control
								placeholder="URL"
								name="url"
								value={newEntry.url}
								onChange={(e) =>
									handleChange(e, updateWarnings)
								}
							/>
						</Col>
					</Row>
				</Form>
				<div style={{ height: '10px' }}></div>
				<ListGroup>
					{data.map((o, i) => (
						<ListGroup.Item key={i}>
							<a href={o.url}>{o.nickname}</a>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
		</Card>
	);
};

export default WireframeLinks;
