import Header from 'components/header/Header';
import Loading from 'components/utils/Loading';
import withTitle from 'components/utils/withTitle';
import { Button, Card, Table } from 'react-bootstrap';
import './Home.css';

const Home = ({ projects, error, selectProject, onCreate, handleDelete }) => {
	return (
		<>
			<Header title="Tech Specification Manager" />
			<div className="app-container home-container full-width">
				<Card>
					<Card.Header>Project Listings</Card.Header>
					<Card.Body>
						<div style={{ width: '100%', textAlign: 'center' }}>
							<Button
								variant="dark"
								size="sm"
								style={{ width: '50%' }}
								onClick={onCreate}>
								Create New Project
							</Button>
						</div>
						{projects.length === 0 && error === '' ? (
							<Loading />
						) : error !== '' ? (
							<p
								style={{
									textAlign: 'center',
									marginTop: '10px',
								}}>
								Unexpected error occured loading existing
								projects
							</p>
						) : (
							<Table striped hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Author</th>
										<th>Date</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{projects.map((o) => (
										<tr key={o.id}>
											<td
												style={{ cursor: 'pointer' }}
												onClick={() =>
													selectProject(o)
												}>
												{o.organization.projectName}
											</td>
											<td>{o.organization.author}</td>
											<td>{o.organization.date}</td>
											<td>
												<Button
													variant="danger"
													style={{ width: '100%' }}
													onClick={() =>
														handleDelete(o.id)
													}>
													DELETE
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						)}
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default withTitle(Home, 'This is the home!');
