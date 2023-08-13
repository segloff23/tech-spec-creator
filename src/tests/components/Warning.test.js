import Warning from 'components/utils/Warning';
import { shallow } from 'enzyme';

const props = {
	message: '',
};

describe('ItemTracker Static Tests', () => {
	const wrapper = shallow(<Warning {...props} />);

	it('renders nothing when message is blank', () => {
		expect(wrapper.contains('small')).toBe(false);
	});
	it('renders message when present', () => {
		const message = 'lorem ipsum';
		wrapper.setProps({ message: message });
		wrapper.update();
		expect(wrapper.find('small').text()).toBe(message);
	});
});
