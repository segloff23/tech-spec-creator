import './DocumentTracking.css';
import { Card, Form, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Warning from '../utils/Warning';

const DocumentTracking = ({
	header,
	data,
	newEntry,
	handleChange,
	updateValid,
	isChanged,
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
			updateValid(false);
		} else {
			setWarnings('');
			updateValid(true);
		}
	};

	useEffect(() => {
		if (
			Object.keys(isChanged).some((k) => isChanged[k]) &
			Object.keys(newEntry).every((k) => newEntry[k] === '')
		) {
			updateValid(false);
			setWarnings('All edits must be tracked');
		} else {
			updateWarnings(newEntry);
		}
	}, [isChanged]);

	const displayedData = [...data];
	displayedData.sort((a, b) => b.id - a.id);

	return (
		<Card>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Form>
					<Table striped hover>
						<colgroup>
							<col span="1" style={{ width: 'fit-content' }} />
							<col span="1" style={{ width: 'max-width' }} />
							<col span="1" style={{ width: 'fit-content' }} />
							<col span="1" style={{ width: 'max-width' }} />
						</colgroup>
						<thead>
							<tr>
								<th>Version</th>
								<th>Edit Author</th>
								<th>Date</th>
								<th>Description of Edit</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td style={{ whiteSpace: 'nowrap' }}>
									<Form.Control
										placeholder="Name"
										name="editAuthor"
										value={newEntry.editAuthor}
										onChange={(e) =>
											handleChange(e, updateWarnings)
										}
									/>
									<Warning message={warnings} />
								</td>
								<td>
									<Form.Control
										type="date"
										name="date"
										value={newEntry.date}
										onChange={(e) =>
											handleChange(e, updateWarnings)
										}
									/>
								</td>
								<td>
									<Form.Control
										placeholder="Description"
										name="description"
										value={newEntry.description}
										onChange={(e) =>
											handleChange(e, updateWarnings)
										}
									/>
								</td>
							</tr>
							{displayedData.map((o) => (
								<tr key={o.id}>
									<td>{o.id}</td>
									<td>{o.editAuthor}</td>
									<td>{o.date}</td>
									<td>{o.description}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default DocumentTracking;
