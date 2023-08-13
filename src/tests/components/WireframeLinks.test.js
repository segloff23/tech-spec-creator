import WireframeLinks from 'components/wireframe-links/WireframeLinks';
import { Card } from 'react-bootstrap';
import { mount } from 'enzyme';

const props = {
	header: 'My Header Text',
	data: [
		{
			nickname: 'lorem ipsum',
			url: 'loremipsum.com',
		},
		{
			nickname: 'lorem ipsum',
			url: 'loremipsum.com',
		},
		{
			nickname: 'lorem ipsum',
			url: 'loremipsum.com',
		},
	],
	newEntry: {
		nickname: '',
		url: '',
	},
	handleChange: () => {},
	updateValid: () => {},
};

describe('WireframeLinks Static Tests', () => {
	const wrapper = mount(<WireframeLinks {...props} />);
	const header = <Card.Header>{props.header}</Card.Header>;

	it('renders card header', () => {
		expect(wrapper.contains(header)).toEqual(true);
	});
	it('generates all hyperlinks', () => {
		expect(wrapper.find('a')).toHaveLength(props.data.length);
	});
});
