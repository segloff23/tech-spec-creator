import { Card } from 'react-bootstrap';
import { mount } from 'enzyme';
import DocumentTracking from 'components/document-tracking/DocumentTracking';

const props = {
	header: 'My Header Text',
	data: [
		{
			id: 0,
			editAuthor: 'lorem ipsum:',
			date: '2020-10-10',
			description: 'lorem ipsum',
		},
		{
			id: 1,
			editAuthor: 'lorem ipsum:',
			date: '2020-10-10',
			description: 'lorem ipsum',
		},
		{
			id: 2,
			editAuthor: 'lorem ipsum:',
			date: '2020-10-10',
			description: 'lorem ipsum',
		},
	],
	newEntry: {
		editAuthor: '',
		date: '',
		description: '',
	},
	handleChange: () => {},
	updateValid: () => {},
	isChanged: false,
};

describe('DocumentTracking Static Tests', () => {
	const wrapper = mount(<DocumentTracking {...props} />);
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
