namespace AboutMe {

    angular.module('AboutMe', ['ui.router'])
        .config(($stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/aboutMe.html',
                controller: AboutMeController,
                controllerAs: 'amc'

            })
            .state('ContactMe', {
                url: '/contactMe',
                templateUrl: '/ngApp/contactMe.html',
                controller: ContactMeController,
                controllerAs: 'cmc'

            });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
    class AboutMeController {

        public title = 'About Me';

        }

        angular.module('AboutMe').controller('aboutMeController', AboutMeController);

        class ContactMeController {

            public title = 'Contact Me';

        }

        angular.module('AboutMe').controller('contactMeController', ContactMeController);

};

