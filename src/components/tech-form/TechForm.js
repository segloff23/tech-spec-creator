import './TechForm.css';
import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import NavSidebar from 'components/nav-sidebar/NavSidebar';
import ActionSidebar from 'components/action-sidebar/ActionSidebar';
import Header from 'components/header/Header';
import clone from 'just-clone';
import FORM_SECTIONS from 'data/formSections';
import Spacer from 'components/utils/Spacer';
import withTitle from 'components/utils/withTitle';

const TechForm = ({ project, toHome, handleSave }) => {
	const [refreshKey, setRefreshKey] = useState(1);
	const [isChanged, setIsChanged] = useState(
		Object.fromEntries(FORM_SECTIONS.map((obj) => [obj.key, false]))
	);
	const [isValid, setIsValid] = useState(
		Object.fromEntries(FORM_SECTIONS.map((obj) => [obj.key, true]))
	);

	const [newEntries, setNewEntries] = useState(
		Object.fromEntries(
			FORM_SECTIONS.map((obj) => [
				obj.key,
				obj.isList ? clone(obj.blankEntry) : clone(project[obj.key]),
			])
		)
	);

	const handleChange = (form, event, callback) => {
		const { key, isList } = form;
		const { name, value } = event.target;
		const newEntry = { ...newEntries[key], [name]: value };

		let changed;
		if (isList) {
			changed = Object.keys(newEntry).some(
				(k) => newEntry[k] !== form.blankEntry[k]
			);
		} else {
			changed = Object.keys(newEntry).some(
				(k) => newEntry[k] !== project[key][k]
			);
		}

		setIsChanged({ ...isChanged, [key]: changed });
		setNewEntries({ ...newEntries, [key]: newEntry });
		if (callback) {
			callback(newEntry, name);
		}
	};

	const updateValid = (key, value) => {
		setIsValid({ ...isValid, [key]: value });
	};

	const onDiscard = () => {
		setIsChanged(
			Object.fromEntries(FORM_SECTIONS.map((obj) => [obj.key, false]))
		);
		setIsValid(
			Object.fromEntries(FORM_SECTIONS.map((obj) => [obj.key, true]))
		);
		setNewEntries(
			Object.fromEntries(
				FORM_SECTIONS.map((obj) => [
					obj.key,
					obj.isList
						? clone(obj.blankEntry)
						: clone(project[obj.key]),
				])
			)
		);
		setRefreshKey(refreshKey + 1);
	};

	const canBeSaved =
		Object.keys(isValid).every((k) => isValid[k]) &&
		Object.keys(isChanged).some((k) => isChanged[k]);

	const onSave = () => {
		let newProject = clone(project);
		for (let obj of FORM_SECTIONS) {
			if (obj.isList) {
				let newId =
					project[obj.key].length === 0
						? 0
						: 1 + Math.max(...project[obj.key].map((o) => o.id));
				newProject[obj.key].push({ ...newEntries[obj.key], id: newId });
			} else {
				newProject[obj.key] = newEntries[obj.key];
			}
		}
		handleSave(newProject);
	};

	return (
		<>
			<Header title="Tech Specification Form" />
			<NavSidebar
				items={Object.keys(FORM_SECTIONS).map(
					(k) => FORM_SECTIONS[k].header
				)}
			/>
			<ActionSidebar
				onSave={onSave}
				disableSave={!canBeSaved}
				onDiscard={onDiscard}
				toHome={toHome}
				items={FORM_SECTIONS.filter((obj) => isChanged[obj.key]).map(
					(obj) => ({ header: obj.header, valid: isValid[obj.key] })
				)}
			/>

			<div className="app-container full-width" key={refreshKey}>
				{FORM_SECTIONS.map((o, i) => {
					const TempComponent = o.comp;
					const { header, key, isList } = o;
					return (
						<React.Fragment key={i}>
							<a className="anchor" id={header}></a>
							<div id={header}></div>
							<Spacer />
							<TempComponent
								header={header}
								data={isList ? project[key] : newEntries[key]}
								newEntry={isList ? newEntries[key] : null}
								handleChange={(e, callback) =>
									handleChange(o, e, callback)
								}
								updateValid={(value) => updateValid(key, value)}
								isChanged={isChanged}
							/>
						</React.Fragment>
					);
				})}

				<div style={{ height: '10px' }}></div>
				<div style={{ width: 'fit-content', margin: '0 auto' }}>
					<Button
						style={{ width: '200px' }}
						onClick={() => window.scroll(0, 0)}>
						Back To Top
					</Button>
				</div>
			</div>
		</>
	);
};

export default withTitle(TechForm, 'This is the tech form');
