export type OjtPhotoCategory =
'Deployment' |
'Data Management' |
'Development' |
'OJT Activities' |
'Certificates' |
'Farewell Party';

export interface OjtPhoto {
  id: string;
  src: string;
  caption: string;
  category: OjtPhotoCategory;
}

export const ojtPhotos: OjtPhoto[] = [
{
  id: 'first-deployment',
  src: "/First_Deployment.png",
  caption:
  'First day of deployment at Advanced Infinit Technology Solutions Inc. with the intern team.',
  category: 'Deployment'
},
{
  id: 'data-1',
  src: "/Screenshot_2026-09-09_040124.png",
  caption: 'Checking and verifying Learning Management System records at the intern workstation.',
  category: 'Data Management'
},
{
  id: 'data-2',
  src: "/Screenshot_2026-09-09_040155.png",
  caption: 'Data verification and entry work alongside the intern team.',
  category: 'Data Management'
},
{
  id: 'data-3',
  src: "/Screenshot_2026-09-09_040224.png",
  caption: 'Reviewing missing values to improve data completeness and accuracy.',
  category: 'Data Management'
},
{
  id: 'dev-1',
  src: "/DEVELOPMENT_PROGRESS_CHECKING_CTO.jpg",
  caption: 'Development progress checking with the Chief Technology Officer.',
  category: 'Development'
},
{
  id: 'dev-2',
  src: "/image.png",
  caption: 'Working on Secret Forrest POS features at the development desk.',
  category: 'Development'
},
{
  id: 'dev-3',
  src: "/image-1.png",
  caption: 'Collaborating with fellow interns on system requirements.',
  category: 'Development'
},
{
  id: 'dev-4',
  src: "/image-2.png",
  caption: 'Reviewing code and system workflows during a development sprint.',
  category: 'Development'
},
{
  id: 'dev-5',
  src: "/image-3.png",
  caption: 'Walking a mentor through implemented features for feedback.',
  category: 'Development'
},
{
  id: 'dev-6',
  src: "/image-4.png",
  caption: 'Focused development work inside the InfinIT Solutions office.',
  category: 'Development'
},
{
  id: 'dev-7',
  src: "/image-5.png",
  caption: 'Building and testing Point-of-Sale booking modules on the project workstation.',
  category: 'Development'
},
{
  id: 'activity-1',
  src: "/OJT_COORDINATOR_VISITATION_PIC1.jpg",
  caption: 'OJT coordinator visitation with the intern batch.',
  category: 'OJT Activities'
},
{
  id: 'activity-2',
  src: "/OJT_COORDINATOR_VISITATION_PIC2.jpg",
  caption: 'Group photo during the OJT coordinator visitation.',
  category: 'OJT Activities'
},
{
  id: 'activity-3',
  src: "/image-6.png",
  caption: 'Light moments with the intern team during office hours.',
  category: 'OJT Activities'
},
{
  id: 'coordinator-surprise-1',
  src: "/OJT_COORDINATOR_SURPISE_VISITATION_PIC1.jpg",
  caption:
  'Welcoming the OJT Coordinator during the surprise visitation at the InfinIT Solutions office.',
  category: 'OJT Activities'
},
{
  id: 'surprise-visit-1',
  src: "/SUPRISE_VISIT_GO_OUT_IN_MALL1.jpg",
  caption:
  'Bonding activity with fellow interns following the surprise visit of the OJT Coordinator.',
  category: 'OJT Activities'
},
{
  id: 'cert-1',
  src: "/OJT-COMPLETION.jpg",
  caption: 'Receiving the Certificate of Completion at the InfinIT Solutions office.',
  category: 'Certificates'
},
{
  id: 'cert-2',
  src: "/OJT-COMPLETION_WITH_TEAM.jpg",
  caption: 'Certificate of Completion turnover with the full intern team.',
  category: 'Certificates'
},
{
  id: 'farewell-1',
  src: "/Farewellparty_1.jpg",
  caption: 'Farewell gathering with mentors, colleagues, and fellow interns.',
  category: 'Farewell Party'
},
{
  id: 'farewell-2',
  src: "/Farewellparty_2.jpg",
  caption: 'Celebrating the completion of the internship journey together.',
  category: 'Farewell Party'
}];


export const photoCategories: OjtPhotoCategory[] = [
'Deployment',
'Data Management',
'Development',
'OJT Activities',
'Certificates',
'Farewell Party'];


export const journeyOverview = [
{ label: 'Position', value: 'OJT Software Developer' },
{ label: 'Company', value: 'Advanced Infinit Technology Solutions Inc.' },
{ label: 'Focus Areas', value: 'Data Management and Software Development' },
{
  label: 'Key Experiences',
  value: 'System Development, Data Validation, Collaboration, and Professional Events'
}];


export interface OjtMilestone {
  id: string;
  phase: string;
  duration?: string;
  title: string;
  content: string;
  badge?: string;
  icon: 'database' | 'code' | 'dashboard' | 'coordinator' | 'celebrate' | 'deployment';
  photoIds: string[];
}

export const ojtMilestones: OjtMilestone[] = [
{
  id: 'first-deployment',
  phase: 'OJT Deployment',
  title: 'First OJT Deployment',
  content:
  'Officially began my On-the-Job Training journey at Advanced Infinit Technology Solutions Inc., marking the start of hands-on learning, workplace collaboration, and professional software development experience.',
  badge: 'Beginning of the Journey',
  icon: 'deployment',
  photoIds: ['first-deployment']
},
{
  id: 'data-management',
  phase: 'Data Management',
  duration: '2 Weeks',
  title: 'Learning Management System Data Management',
  content:
  'Checked, verified, and entered missing values in the Learning Management System to improve data completeness, accuracy, and reliability.',
  icon: 'database',
  photoIds: ['data-1', 'data-2', 'data-3']
},
{
  id: 'secret-forrest',
  phase: 'Development Project',
  duration: '4 Weeks',
  title: 'Secret Forrest: Camping Site POS',
  content:
  'Contributed to the development of Secret Forrest, a Point-of-Sale system designed for a camping site. The experience involved working with system features, workflows, and practical business requirements.',
  icon: 'code',
  photoIds: ['dev-7', 'dev-2', 'dev-1']
},
{
  id: 'surprise-visit',
  phase: 'OJT Activity',
  title: 'Surprise Visit of OJT Coordinator',
  content:
  'Welcomed the OJT Coordinator during a surprise visit, providing an opportunity to share our internship experiences, reflect on our progress, and participate in a meaningful bonding activity with fellow interns.',
  icon: 'coordinator',
  photoIds: ['coordinator-surprise-1', 'surprise-visit-1']
},
{
  id: 'mis',
  phase: 'Development Project',
  duration: '2 Weeks',
  title: 'Management Information System',
  content:
  'Participated in Management Information System development activities, strengthening knowledge in system components, data handling, and organized information workflows.',
  icon: 'dashboard',
  photoIds: ['dev-4', 'dev-5', 'dev-6']
},
{
  id: 'farewell',
  phase: 'Farewell Party',
  title: 'Celebrating Growth and Completion',
  content:
  'Concluded the internship journey through a farewell gathering with fellow interns, mentors, and colleagues—celebrating shared experiences, learning, and professional growth.',
  icon: 'celebrate',
  photoIds: ['farewell-1', 'farewell-2', 'cert-2']
}];