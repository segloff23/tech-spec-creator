import './ItemTracker.css';
import { Card, Form, Table } from 'react-bootstrap';
import { useState } from 'react';
import Warning from '../utils/Warning';

const ItemTracker = ({ header, data, newEntry, handleChange, updateValid }) => {
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
							<col span="1" style={{ width: 'max-width' }} />
						</colgroup>
						<thead>
							<tr>
								<th>ID</th>
								<th>Description</th>
								<th>Remarks</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td>
									<Form.Control
										placeholder="Description"
										name="description"
										value={newEntry.description}
										onChange={(e) =>
											handleChange(e, updateWarnings)
										}
									/>
									<Warning message={warnings} />
								</td>
								<td>
									<Form.Control
										placeholder="Remarks"
										name="remarks"
										value={newEntry.remarks}
										onChange={(e) =>
											handleChange(e, updateWarnings)
										}
									/>
								</td>
							</tr>
							{displayedData.map((o) => (
								<tr key={o.id}>
									<td>{o.id}</td>
									<td>{o.description}</td>
									<td>{o.remarks}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default ItemTracker;
