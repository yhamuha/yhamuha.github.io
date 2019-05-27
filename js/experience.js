/**
 * Created by Yaroslav Hamuha
 */
function experienceCtrl ($scope) {
    $scope.experiences = [
        {
            dateRange: 'Feb 2019 - today',
            position: 'Ready for new oportunities',
            state: '',
            role: 'Focused on microservice stack: Java - SpringBoot - MVC – Test - REST - AWS S3 - Docker.',
            href: ''
        },
        {
            dateRange: 'May 2018 - Feb 2019',
            position: 'Software Engineer',
            state: '',
            role: 'Have done significant amount of work on the REST-based (OAS 3.0) project from scratch that provide services regarding internal tasks. Provided domain decomposition, requirement analysis, system design, implementation and testing by SDLC. Worked using TDD and SOLID approaches, GRASP patterns. Created a business logic utilized JavaEE on back-end, MySQL DB, Spring Data/MVC/Boot, Hibernate. Used Docker, Gradle, Eclipse STS, Git, FlyWay data migration tool, Swagger, Postman for endpoint tests.',
            href: ''
        },
        {
            dateRange: 'Jun 2015 - May 2018',
            position: 'Java Backend Developer',
            state: 'Become Java Senior',
            role: 'Worked on improvment technical skills with Senior Java mentor and worked on the project to develop separate functionalities of B2B solution that provide a services for Real Estate. Used data structures utilized Java Collections API, JDBC, DAO, Servlets, JSP, JSTL, SQL. Used Tomcat Web Server, Maven, Git.',
            href: 'https://www.linkedin.com/company/becomejavasenior/'
        },
        {
            dateRange: 'Dec 2014 - Mar 2015',
            position: 'Junior Web Developer',
            state: 'SoftServe Inc',
            role: 'Trained in developing a part of layer of web application for municipal area. Took participation in developing back-end on Java, Spring MVC, Servlets, SQL, as well as front-end on HTML5, CSS3, BootStrap. Used Scrum Agile, Maven, Git, Google Map API.',
            href: 'https://www.linkedin.com/company/softserve-business-systems/'
        }
    ];
}
