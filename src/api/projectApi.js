import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3000/projects/';

export function getProjects() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getProjectById(id) {
	return fetch(baseUrl + id)
		.then(handleResponse)
		.catch(handleError);
}

export function saveProject(project) {
	if ('id' in project) {
		return fetch(baseUrl + project.id, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(project),
		})
			.then(handleResponse)
			.catch(handleError);
	} else {
		return fetch(baseUrl, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(project),
		})
			.then(handleResponse)
			.catch(handleError);
	}
}

export function deleteProject(projectId) {
	return fetch(baseUrl + projectId, { method: 'DELETE' })
		.then(handleResponse)
		.catch(handleError);
}
