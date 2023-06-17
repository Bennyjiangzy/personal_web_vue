// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const Singleprojects = {
    1:{
        singleProjectHeader: {
            singleProjectTitle: `Farm Monitor System`,
            singleProjectDate: 'Sep, 2022 ~ Dec 2022',
            singleProjectTag: 'Developer / Containerization / Devops',
        },
        projectImages: [
            {
                id: 1,
                title: 'Error page',
                img: require('@/assets/images/farm.png'),
            },
            {
                id: 2,
                title: 'Design structure',
                img: require('@/assets/images/Farm2.jpg'),
            },
            {
                id: 3,
                title: 'Source code',
                img: require('@/assets/images/Farm3.jpg'),
            },
        ],
        projectInfo: {
            source:"https://github.com/Bennyjiangzy/Farm_Monitor_System",
            sourcesimple:"Farm Monitor System",
            objectivesHeading: 'Objective',
            objectivesDetails:
                'This system was built to help farmers better observe crops in greenhouses and periodically analyze environmental and resource consumption parameters to better plan planting plans.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Azure',
                        'Python',
                        'Restful API',
                        'Swagger',
                        'Jenkins',
                        'Gitlab',
                        'Docker',
                        "Jemeter", 
                        "Kafka",
                        "Jira",
                        "Confluence",
                        "HTML",
                        "CSS"
                    ],
                },
            ],
            projectDetailsHeading: 'Process & Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'This project was done through constant iteration. From the simple API at the beginning, I continued to improve it midway, adding storage components and periordical analysis components. Later, it was completely separated and deployed to the cloud, and an asynchronous message queue and UI dashboard were also added. During this period, I also integrated Gitlab as a code repository and Jenkins as a CI/CD and testing tool. Completed the process from 0 to 1 project development deployment to operation and maintenance.',
                },
                {
                    id: 2,
                    details:
                        'The biggest challenge is the configuration on the cloud. I had to deploy all the platforms locally include Jenkins, Gitlab, Jira and Confluence for better understanding. For Jenkins, I also need to farmiliar the third-party modules and Jenkins file syntax. Through continuous attempts, familiar reading and understanding of official documents and solid understanding, I finally skillfully deployed all platforms on different VMs, which can cooperate with each other and are equipped with Nginx and Https.',
                },
                {
                    id: 3,
                    details:
                        'Through this project, I have a deep understanding of the advantages and disadvantages of microservices, the life cycle of software development and solid trial and error and cloud capabilities',
                },
                
            ]
        }
    },
    2:{singleProjectHeader: {
        singleProjectTitle: `Student Grade System`,
        singleProjectDate: 'Sep, 2022 ~ Dec 2022',
        singleProjectTag: 'Developer / Containerization / Devops',
    },
    projectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/K8S.png'),
        },
        {
            id: 2,
            title: 'Source code',
            img: require('@/assets/images/student2.jpg'),
        }
    ],
    projectInfo: {
        source:"https://github.com/Bennyjiangzy/Student_Grade_Check_System",
        sourcesimple:"Student Grade Check System",
        objectivesHeading: 'Objective',
        objectivesDetails:
            'This system was built to help teachers to count and record scores and periodically calculate the highest, lowest, average and other statistically significant parameters.',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'GKS & EKS',
                    'Python',
                    'Shell Script',
                    'Restful API',
                    'Swagger',
                    'Docker & Docker-Compose & K8S',
                    "Jemeter", 
                    "HTML",
                    "CSS"
                ],
            },
        ],
        projectDetailsHeading: 'Process & Challenge',
        projectDetails: [
            {
                id: 1,
                details:
                    'This Project was built based on a existing project of mine. Therefore the business logic of the project is very simple, so I spent more time on how to enhance the fault tolerance and scalability of the system and reduce the difficulty of project deployment. At the beginning of the project, I chose to use docker-compose to design the framework and understand containerization technology. After gaining a deep understanding, I used K8S to deploy the upgraded project locally and in the cloud at the same time and used the scalable deployment function.',
            },
            {
                id: 2,
                details:
                    "The most difficult part of the whole project is how to use K8S to manage and design highly fault-tolerant programs. Therefore, I visualize the core logic by drawing pictures. Through this method, I found that there are several places where the load balancer needs to accept a large number of requests. After that, I first experimented with adding the deployment function to these LBs locally. Finally, use GKS and EKS to deploy the management project, and use the cloud-native metric to read the LB's CPU indicator to decide whether to expand",
            },
            {
                id: 3,
                details:
                    'Through this project, I have mastered the high-level usage skills of K8S, such as how to set up permanent data volume and deployment, how to set up nested port and network, etc. At the same time, my ability to program structure and design has also been greatly improved.',
            }
            
        ]
    }},
    3:{singleProjectHeader: {
        singleProjectTitle: `ANP E-commerce Project`,
        singleProjectDate: 'Sep, 2021 ~ Dec 2021',
        singleProjectTag: 'Developer&Scrum Master / Frontend / Backend / Database',
    },
    projectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/ANP.png'),
        },
    ],
    projectInfo: {
        source:"https://github.com/tomhyhan/anp-awesome",
        sourcesimple:"Anp Awesome",
        objectivesHeading: 'Objective',
        objectivesDetails:
            "This website is a replacement for our sponsor's legacy system modules in the aviation industry. It mainly provides material management services for vendors and customers. ",
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Node.js',
                    'Express.js',
                    'Angular.js',
                    'JavaScript',
                    'Passport.js',
                    'Bootsrap',
                    'MySQL',
                    'AWS',
                    'HTML',
                    'CSS',
                ],
            },
        ],
        projectDetailsHeading: 'Process & Challenge',
        projectDetails: [
            {
                id: 1,
                details:
                    'This project was developed based on a 6-person team and Agile methodology. We needed to help an Indian company develop an e-commerce website to replace their existing system. My main development task is to be responsible for the back-end and database framework of the entire project and a small part of the front-end design and development. My secondary task is to manage the task flow of the team, be responsible for the product report and customer communication of the weekly delivery meeting.',
            },
            {
                id: 2,
                details:
                    "The biggest development difficulty of this project is using Angular as the framework. Because our team had no experience with Angular, progress was slow in the first few weeks. As the team's srum master, I started to analyze the priority of the weekly tasks and then assigned the highest priority Angular content based on this indicator. For example, in the first few weeks, the client asked us to complete at least 3 to 4 forms, so the first content I assigned was the table, form and submit functions of Angular. In the middle stage of development, we need to merge front-end and back-end API functions, so I assign the task of learning http request to the team in advance. In the end, with my arrangement and the cooperation of the team members, we not only completed the project on time, but also got the highest score among all the teams",
            },
            {
                id: 3,
                details:
                    "Overall, this is the first time I've been officially involved in developing a professional project. This made me realize that developers should pay more attention to analyzing clear requirements rather than focusing on the code itself when actually developing. Clients often only know the desired result but not the process. As developers, we need to communicate with customers frequently to guide customers to express the functions they don't want or the functions they want. No matter how elegant the code is, it is meaningless if it does not meet the requirements",
            },
        ]
    }},
    4:{singleProjectHeader: {
        singleProjectTitle: `Mini RPG Game`,
        singleProjectDate: 'Jan, 2021 ~ Apr 2021',
        singleProjectTag: 'Developer / Frontend / Backend / Database',
    },
    projectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/Pygame.png'),
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/game2.png'),
        },
        {
            id: 3,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/game3.png'),
        },
    ],
    projectInfo: {
        source:"https://github.com/Bennyjiangzy/Monster-Hunter-Fake",
        sourcesimple:"Monster Hunter Fake",
        objectivesHeading: 'Objective',
        objectivesDetails:
            'This is a simple RPG game. Users can choose two weapons at the beginning. Defeating monsters can obtain gold for buying items and scores. After game is over, scores will be uploaded to a Flask website',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Python',
                    'Pygame',
                    'Flask',
                    'HTML',
                    'CSS',
                    'Heroku',
                    'OOP design',
                    'MVC',
                ],
            },
        ],
        projectDetailsHeading: 'Process & Challenge',
        projectDetails: [
            {
                id: 1,
                details:
                    'This project is a simple interactive game. It helped me understand and test the concepts of OOP design and MVC. I also split it into several parts, such as store logic, battle logic, monster skill logic, character logic, and so on. Finally, they are integrated together, and the scores are displayed using flask',
            },
            {
                id: 2,
                details:
                    "I think the more challenging part is designing and implementing the MVC pattern. For me at the time, the MVC pattern was more abstract, so I prefer to use simplified patterns to help me understand. For example, every time I start with a simple model, create a character, or a monster, and then immediately attach his picture in the view. Run simple click logic after. Under this framework, I gradually increased the operational complexity and finally completed the project",
            },
            {
                id: 3,
                details:
                    'Although looking at this game now, it is a bit rough and even the gameplay process is boring. But it still brought me a deep understanding of OOP design and the pros and cons of the MVC model. It made my learning on web apps and .net core very easy. Of course, it also strengthened my use of Python.',
            },
        ]
    }},
    5:{singleProjectHeader: {
        singleProjectTitle: `Reminder Social Web`,
        singleProjectDate: 'Jan, 2021 ~ Apr 2021',
        singleProjectTag: 'Developer&Scrum Master / Frontend / Backend / Database',
    },
    projectImages: [
        {
            id: 1,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/Happy.png'),
        },
        {
            id: 2,
            title: 'Kabul Project Management UI',
            img: require('@/assets//images/reminder4.png'),
        },
        {
            id: 3,
            title: 'Kabul Project Management UI',
            img: require('@/assets/images/reminder3.jpg'),
        },
    ],
    projectInfo: {
        source:"https://github.com/Bennyjiangzy/Happy-reminders",
        sourcesimple:"Happy Reminders",
        objectivesHeading: 'Objective',
        objectivesDetails:
            'This web app was build for students to record important tasks and share tasks with friends through social functions',
        technologies: [
            {
                title: 'Tools & Technologies',
                techs: [
                    'Node.js',
                    'Express.js',
                    'JavaScript',
                    'Passport.js',
                    'MongoDB',
                    'Heroku',
                    'Bootsrap',
                    'HTML',
                    'CSS',
                ],
            },
        ],
        projectDetailsHeading: 'Process & Challenge',
        projectDetails: [
            {
                id: 1,
                details:
                    "This is my first web project after learning JavaScript. It took me about 10 weeks to jointly develop it with 4 other teammates using the aigle method. As a developer, my responsibility is to be responsible for the entire social function, most of the database and back-end development, session and Oauth2 development and registration functions. As Scrum master, I am responsible for driving the team's development process and weekly delivery meetings with mentors. This project has two difficulties for me, one is to understand and use Oauth2 and session through passport.js, and the other is to use asynchrony to design and write back-end database functions.",
            },
            {
                id: 2,
                details:
                    "During the initial stages of my development journey, I encountered the complexity of Session and token, which are advanced concepts. To overcome this challenge, I dedicated 3 to 5 hours per week to watching an extensive explanation video on passport.js, kindly provided by my tutor. The video was approximately three hours long, and through this commitment, I was able to grasp a deeper understanding of these concepts and their implementation. After that, I can use it proficiently and understand every step of the session from creation to destruction. For example, how is the login request intercepted by the middleware, how to call the method after interception to check whether there is a session and then return the corresponding page according to the result, etc.",
            },
            {
                id: 3,
                details:
                    "The second challenge, which I took upon myself, was related to the database setup. During the instructional phase, we utilized a mock database for teaching purposes. However, during the summer break, I made the decision to switch to a real database and deploy it. I opted for mongoDB as my database of choice. The initial hurdle I encountered was consistently getting a null response regardless of how I attempted to connect to the data. Later, I discovered that this was due to the asynchronous nature of database operations and access. Consequently, I invested a significant amount of time learning and implementing asynchronous techniques. Eventually, after two weeks of rewriting the backend API using asynchronous methods, I successfully deployed it on Heroku.",
            },
            {
                id: 4,
                details:
                    "This project marks the first website project in my life, and it has been a tremendous learning experience for me. Throughout this endeavor, I acquired valuable knowledge, such as understanding the distinctions between various HTTP requests, fostering teamwork, dynamically rendering web pages, and utilizing advanced JavaScript techniques. Most importantly, I developed self-motivation and pushed myself beyond my comfort zone, allowing me to grow personally and professionally.",
            },
        ]
    }}
};

export default Singleprojects;