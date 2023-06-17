// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Farm Monitor System',
		category: 'Microservice Application System',
		img: require('@/assets/images/farm.png'),
	},
	{
		id: 2,
		title: 'Student Grade System',
		category: 'Microservice Application System',
		img: require('@/assets/images/K8S.png'),
	},
	{
		id: 3,
		title: 'ANP E-commerce Project',
		category: 'Web Application',
		img: require('@/assets/images/ANP.png'),
	},
	{
		id: 4,
		title: 'Mini RPG Game',
		category: 'Game Application',
		img: require('@/assets/images/Pygame.png'),
	},
	{
		id: 5,
		title: 'Reminder Social Web',
		category: 'Web Application',
		img: require('@/assets/images/Happy.png'),
	},
];

export default projects;
