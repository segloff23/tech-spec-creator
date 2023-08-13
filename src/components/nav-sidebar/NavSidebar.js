import Spacer from 'components/utils/Spacer';
import { Card, ListGroup } from 'react-bootstrap';
import './NavSidebar.css';

const NavSidebar = ({ items }) => {
	return (
		<div className="sidebar side-width">
			<Spacer />
			<Card style={{ maxHeight: '88vh' }}>
				<Card.Header>Form Navigation</Card.Header>
				<Card.Body className="nav-link-body">
					<ListGroup>
						{items.map((item, i) => (
							<ListGroup.Item key={i}>
								<a href={'#' + item} className="nav-link-text">
									{item}
								</a>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	);
};

export default NavSidebar;
