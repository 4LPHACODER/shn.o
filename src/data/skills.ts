import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
{
  id: 'research',
  title: 'Research and Innovation',
  blurb: 'Turning observations into researched, validated, and buildable solutions.',
  featured: true,
  skills: [
  { name: 'Research Writing', level: 88 },
  { name: 'Data Analysis', level: 80 },
  { name: 'Problem Identification', level: 90 },
  { name: 'System Analysis', level: 82 },
  { name: 'Innovation Development', level: 85 },
  { name: 'Project Planning', level: 84 },
  { name: 'Technology Research', level: 87 }]

},
{
  id: 'programming',
  title: 'Programming',
  blurb: 'Core languages used across coursework and academic projects.',
  skills: [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'PHP', level: 70 },
  { name: 'Python', level: 72 }]

},
{
  id: 'web',
  title: 'Web Development',
  blurb: 'Building responsive, maintainable interfaces and applications.',
  skills: [
  { name: 'Responsive Design', level: 88 },
  { name: 'Laravel', level: 70 },
  { name: 'React', level: 72 },
  { name: 'Tailwind CSS', level: 85 }]

},
{
  id: 'database',
  title: 'Database',
  blurb: 'Designing and querying relational data for school systems.',
  skills: [
  { name: 'MySQL', level: 80 },
  { name: 'Database Management', level: 75 }]

},
{
  id: 'tools',
  title: 'Tools',
  blurb: 'Day-to-day environment for coding, design, and collaboration.',
  skills: [
  { name: 'GitHub', level: 80 },
  { name: 'Figma', level: 78 },
  { name: 'Canva', level: 90 },
  { name: 'Visual Studio Code', level: 92 }]

},
{
  id: 'professional',
  title: 'Professional Skills',
  blurb: 'Strengthened through student leadership and team projects.',
  skills: [
  { name: 'Problem-Solving', level: 88 },
  { name: 'Teamwork', level: 92 },
  { name: 'Communication', level: 90 },
  { name: 'Adaptability', level: 86 }]

}];