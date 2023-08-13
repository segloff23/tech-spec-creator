import TextArea from 'components/text-area/TextArea';
import { Card, Form } from 'react-bootstrap';
import { mount } from 'enzyme';

const props = {
	header: 'My Header Text',
	data: { text: 'lorem ipsum' },
	handleChange: () => {},
};

describe('ItemTracker Static Tests', () => {
	const wrapper = mount(<TextArea {...props} />);
	const header = <Card.Header>{props.header}</Card.Header>;

	it('renders card header', () => {
		expect(wrapper.contains(header)).toEqual(true);
	});
	it('displays given text', () => {
		expect(wrapper.find(Form.Control).text()).toBe(props.data.text);
	});
});
