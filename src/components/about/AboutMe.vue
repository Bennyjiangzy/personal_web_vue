<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						"Hello, my name is Benny Jiang - a software developer graduated from British Columbia Institute of Technology(BCIT) Computer Information Technology Program at 2022 with distinction. I started to code at 2019 and gained over 3 years experiences in software development and IT technical field through coop and school projects.",
				},
				{
					id: 2,
					bio:
						"During my co-op experience, I focused on designing and debugging CI/CD pipeline environments to meet the feature team's requirements. I developed a self-hosted pipeline agent that effectively cached crucial files, resulting in a significant reduction in pipeline runtime. Additionally, I streamlined Azure database backup plans using a Terraform script, simplifying configuration for multiple databases. I also assisted in setting up automated integration tests with appropriate user token privileges, uncovering potential bugs. Moreover, I gained proficiency in C# and contributed to the development and debugging of .Net Core web API and Serilog Nuget, leveraging logs on Datadog to identify unusual virtual machines.",
				},
				{
					id: 3,
					bio:
						"During my time in school, I had the opportunity to work on an industry e-commerce website. I designed and developed whole core backend functionalities, deployed on AWS with load balancing and proper IAM policies for RDS. As the scrum master, I prioritized functions and created a learning plan for the team's Angular skills. I gained more database and backend experience in microservices architecture using Docker/Kubernetes, Kafka, and central logging. Projects applied with RESTful APIs and were deployed to Azure and GCP via Jenkins and Gitlab, passing Jmeter tests. I built and integrated Jenkins, Gitlab, Jira, and Confluence, and used Ansible for remote configuration on AWS. These experiences equipped me with a diverse skill set for professional software development projects.",
				},
				{
					id: 4,
					bio:
						"My future goal includes: sharpening my skills and going deeper in the backend and cloud side, looking forward to any job opportunities and discussions in 2023. Thanks!",
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/tom.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
			<div class="mb-7 text-left">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					Technical Skills
				</p>
				
				<ol class="font-general-regular text-primary-dark dark:text-ternary-light mb-1">
					<b>Programing</b>: Python, C#, JavaScript, Shell 
				</ol>
				<ol class="font-general-regular text-primary-dark dark:text-ternary-light mb-1">
					<b>Web</b>: Node.js, Express.js, Angular.js, Vue.js, Figma
					
				</ol>
				<ol class="font-general-regular text-primary-dark dark:text-ternary-light mb-1">
					<b>Database</b>: MySQL, MongoDB, SQL
				</ol>
				<ol class="font-general-regular text-primary-dark dark:text-ternary-light mb-1">
					<b>Cloud</b>: Azure, AWS, GCP, Digital Ocean
				</ol>
				<ol class="font-general-regular text-primary-dark dark:text-ternary-light mb-1">
					<b>Tool & Software</b>: Linux, Terraform, Ansible, Postman, Swagger-API, Jemter, Docker&K8S, Kafka, Jenkins, Gitlab CI, Jira, Confluence, WireShark, WinServer 2016, VMware, Yolov5
				</ol>
				
			</div>
		</div>
		

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
