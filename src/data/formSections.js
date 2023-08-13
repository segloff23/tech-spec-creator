import Organization from 'components/organization/Organization';
import DocumentTracking from 'components/document-tracking/DocumentTracking';
import ProjectOverview from 'components/project-overview/ProjectOverview';
import WireframeLinks from 'components/wireframe-links/WireframeLinks';
import TextArea from 'components/text-area/TextArea';
import ItemTracker from 'components/item-tracker/ItemTracker';

const FORM_SECTIONS = [
	{
		header: 'Organization',
		key: 'organization',
		isList: false,
		comp: Organization,
	},
	{
		header: 'Document Tracking',
		key: 'documentTracking',
		isList: true,
		comp: DocumentTracking,
		blankEntry: { editAuthor: '', date: '', description: '' },
	},
	{
		header: 'Project Overview',
		key: 'projectOverview',
		isList: false,
		comp: ProjectOverview,
	},
	{
		header: 'Links to Wireframes',
		key: 'linksToWireframes',
		isList: true,
		comp: WireframeLinks,
		blankEntry: { nickname: '', url: '' },
	},
	{
		header: 'Editing + Updates + Admin',
		key: 'editingUpdatesAdmin',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Content Management',
		key: 'contentManagement',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Sitemap + Navigation',
		key: 'sitemapNavigation',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Site Stats + Tracking',
		key: 'siteStatsTracking',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Search Engine Optimization',
		key: 'searchEngineOptimization',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Web Content Management System + Editor Interface',
		key: 'webContentManagementSystem',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Accessibility',
		key: 'accessibility',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Style + Design',
		key: 'styleDesign',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Security',
		key: 'security',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Hosting',
		key: 'hosting',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Maintenance + Support',
		key: 'maintenanceSupport',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Additional Requirements',
		key: 'additionalRequirements',
		isList: true,
		comp: ItemTracker,
		blankEntry: { description: '', remarks: '' },
	},
	{
		header: 'Exclusions',
		key: 'exclusions',
		isList: false,
		comp: TextArea,
	},
	{
		header: 'Considerations',
		key: 'considerations',
		isList: false,
		comp: TextArea,
	},
	{
		header: 'Assumptions',
		key: 'assumptions',
		isList: false,
		comp: TextArea,
	},
	{
		header: 'Comments',
		key: 'comments',
		isList: false,
		comp: TextArea,
	},
];

export default FORM_SECTIONS;
