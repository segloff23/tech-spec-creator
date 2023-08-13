import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from 'components/home/Home';
import TechForm from './components/tech-form/TechForm';
import blank from 'data/blank';
import { Component } from 'react';
import clone from 'just-clone';
import { getProjects, saveProject, deleteProject } from 'api/projectApi';
import { toast, ToastContainer } from 'react-toastify';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedProject: null, projects: [], error: '' };
	}

	componentDidMount() {
		if (this.state.projects.length === 0) {
			getProjects()
				.then((projectList) => this.setState({ projects: projectList }))
				.catch((error) => this.setState({ error: error.message }));
		}
	}

	onCreate = () => {
		let newProject = clone(blank);
		this.setState({ selectedProject: newProject });
	};

	selectProject = (project) => {
		this.setState({ selectedProject: project });
	};

	handleSave = (savedProject) => {
		saveProject(savedProject)
			.then((response) => {
				let id = response.id;
				if (this.state.projects.map((o) => o.id).includes(id)) {
					this.setState({
						projects: this.state.projects.map((p) =>
							p.id === id ? savedProject : p
						),
					});
				} else {
					this.setState({
						projects: [
							...this.state.projects,
							{ ...savedProject, id: id },
						],
					});
				}
				this.selectProject(null);
				toast.success('Changes saved successfully');
			})
			.catch((error) => toast.warn('Error saving project: ' + error));
	};

	handleDelete = (id) => {
		deleteProject(id)
			.then(() => {
				this.setState({
					projects: this.state.projects.filter((o) => o.id !== id),
				});
				toast.success('Project deleted successfully');
			})
			.catch((error) => toast.warn('Error deleting project: ' + error));
	};

	render() {
		const { selectedProject, projects, error } = this.state;
		return (
			<>
				<ToastContainer autoClose={3000} hideProgressBar={true} />
				{selectedProject === null ? (
					<Home
						projects={projects}
						selectProject={this.selectProject}
						error={error}
						onCreate={this.onCreate}
						handleDelete={this.handleDelete}
					/>
				) : (
					<TechForm
						project={selectedProject}
						toHome={() => this.selectProject(null)}
						handleSave={this.handleSave}
					/>
				)}
			</>
		);
	}
}

export default App;
