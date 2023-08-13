import './Organization.css';
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import Warning from '../utils/Warning';

const initializeWarning = (org) => {
	if (org.projectName === '') {
		return Object.keys(org).reduce(
			(O, k) => ({ ...O, [k]: '*required' }),
			{}
		);
	} else {
		return {};
	}
};

const Organization = ({ header, data, handleChange, updateValid }) => {
	const [warnings, setWarnings] = useState(initializeWarning(data));

	const updateWarnings = (updatedRow, key) => {
		let message = '';

		if (updatedRow[key] === '') {
			message = '*required';
		} else if ((key === 'phone') & !updatedRow[key].match(/^\d{10}$/)) {
			message = 'Enter valid 10 digit phone number';
		} else if (
			(key === 'email') &
			!updatedRow[key].match(/^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
		) {
			message = 'Enter valid email address';
		}

		const newWarning = { ...warnings, [key]: message };

		setWarnings(newWarning);
		if (Object.keys(newWarning).some((k) => newWarning[k] !== '')) {
			updateValid(false);
		} else {
			updateValid(true);
		}
	};

	return (
		<Card>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Form>
					<Row>
						<Col>
							<FloatingLabel label="Project Name">
								<Form.Control
									name="projectName"
									value={data.projectName}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.projectName} />
							</FloatingLabel>
						</Col>
					</Row>
					<div style={{ height: '10px' }}></div>
					<Row>
						<Col>
							<FloatingLabel label="Name">
								<Form.Control
									name="name"
									value={data.name}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.name} />
							</FloatingLabel>
							<div style={{ height: '5px' }}></div>
							<FloatingLabel label="Phone">
								<Form.Control
									type="tel"
									name="phone"
									value={data.phone}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.phone} />
							</FloatingLabel>
							<div style={{ height: '5px' }}></div>
							<FloatingLabel label="Email">
								<Form.Control
									type="email"
									name="email"
									value={data.email}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.email} />
							</FloatingLabel>
							<div style={{ height: '5px' }}></div>
						</Col>
						<Col>
							<FloatingLabel label="Mailing Address">
								<Form.Control
									as="textarea"
									style={{ height: '184px' }}
									name="address"
									value={data.address}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.address} />
							</FloatingLabel>
							<div style={{ height: '5px' }}></div>
						</Col>
					</Row>
					<Row>
						<Col>
							<FloatingLabel label="Date">
								<Form.Control
									type="date"
									name="date"
									value={data.date}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.date} />
							</FloatingLabel>
						</Col>
						<Col>
							<FloatingLabel label="Author">
								<Form.Control
									name="author"
									value={data.author}
									onChange={(e) =>
										handleChange(e, updateWarnings)
									}
								/>
								<Warning message={warnings.author} />
							</FloatingLabel>
						</Col>
					</Row>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default Organization;
