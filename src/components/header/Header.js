import { Card } from 'react-bootstrap';
import './Header.css';

const Header = ({ title }) => {
	return (
		<div className="header">
			<Card>
				<Card.Header style={{ fontSize: '30px' }}>{title}</Card.Header>
			</Card>
		</div>
	);
};

export default Header;
