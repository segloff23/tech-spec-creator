import ItemTracker from 'components/item-tracker/ItemTracker';
import { Card } from 'react-bootstrap';
import { mount } from 'enzyme';

const props = {
	header: 'My Header Text',
	data: [
		{ id: 0, description: 'lorem ipsum', remarks: 'lorem ipsum' },
		{ id: 1, description: 'lorem ipsum', remarks: 'lorem ipsum' },
		{ id: 2, description: 'lorem ipsum', remarks: 'lorem ipsum' },
	],
	newEntry: { description: 'lorem ipsum', remarks: 'lorem ipsum' },
	handleChange: () => {},
	updateValid: () => {},
};

describe('ItemTracker Static Tests', () => {
	const wrapper = mount(<ItemTracker {...props} />);
	const header = <Card.Header>{props.header}</Card.Header>;
	const tbody = wrapper.find('tbody');
	const rows = tbody.find('tr').map((r) => r.find('td').map((c) => c.text()));

	it('renders card header', () => {
		expect(wrapper.contains(header)).toEqual(true);
	});
	it('renders all <tr> elements within <tbody>', () => {
		expect(tbody.find('tr')).toHaveLength(1 + props.data.length);
	});
	it('sorts data by id, descending', () => {
		let isSorted = true;
		for (let i = 2; i < rows.length; i++) {
			if (parseInt(rows[i][0]) > parseInt(rows[i - 1][0])) {
				isSorted = false;
				break;
			}
		}
		expect(isSorted).toEqual(true);
	});
});
