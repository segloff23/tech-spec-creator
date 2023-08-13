import Spacer from 'components/utils/Spacer';
import { Button, Card, ListGroup } from 'react-bootstrap';
import './ActionSidebar.css';

const ActionSidebar = ({ onSave, onDiscard, disableSave, toHome, items }) => {
	return (
		<div className="sidebar-right side-width">
			<Spacer />
			<Card className="action-sidebar-form-management">
				<Card.Header>Form Management</Card.Header>
				<Card.Body className="test-body">
					<Button
						className="action-sidebar-button"
						onClick={onSave}
						disabled={disableSave}>
						Save Changes
					</Button>
					<Spacer />
					<Button
						className="action-sidebar-button"
						variant="warning"
						onClick={onDiscard}>
						Discard Changes
					</Button>
					<Spacer />
					<Button
						className="action-sidebar-button"
						variant="success"
						onClick={toHome}>
						Back to Home
					</Button>
				</Card.Body>
			</Card>
			{items.length > 0 && (
				<>
					<Spacer />
					<Card>
						<Card.Header>Modified Sections</Card.Header>
						<Card.Body className="action-sidebar-modified">
							<ListGroup>
								{items.map((item, i) => (
									<ListGroup.Item key={i}>
										<a
											href={'#' + item.header}
											className={
												item.valid
													? 'nav-link-text'
													: 'nav-link-text action-sidebar-invalid'
											}>
											{item.header}
										</a>
									</ListGroup.Item>
								))}
							</ListGroup>
						</Card.Body>
					</Card>
				</>
			)}
		</div>
	);
};

export default ActionSidebar;
