/**
 * Created by Yaroslav Hamuha
 */
function experienceCtrl ($scope) {
    $scope.experiences = [
        {
            dateRange: 'May 2018 - today',
            position: 'Software Engineer',
            state: '',
            role: 'Developing a full parts of REST based web application that provide a complex services for internal customer orders. Creating a specification for project, working using TDD and SDLC approaches. Using DB SQL and Hibernate, necessaries parts of Spring: Boot, Data (JPA), MVC. Creating a business logic utilizing Java SDK. Using Gradle, Eclipse, Git, Docker, Angular.',
            href: ''
        },
        {
            dateRange: 'Jun 2015 - May 2018',
            position: 'Java Backend Developer',
            state: 'Become Java Senior',
            role: 'Developed part of B2B solution that provide a services for Real Estate. Worked with Data Structures utilized Java Collections API. Used JDBC, DAO, Servlets, JSP, JSTL, SQL. Used Tomcat Web Server, Maven, Git.',
            href: 'https://www.linkedin.com/company/becomejavasenior/'
        },
        {
            dateRange: 'Dec 2014 - Mar 2015',
            position: 'Entry Intern Developer',
            state: 'SoftServe Software Company',
            role: 'Developed some layer of web application for municipal area. Used MVC, Servlets, SQL, HTML5, CSS3, jQuery and BootStrap responsive-design library, Worked based on Scrum Agile, used Maven, Git, Google Map API.',
            href: 'https://www.linkedin.com/company/softserve-business-systems/'
        }
    ];
}
