var AboutMe;
(function (AboutMe) {
    angular.module('AboutMe', ['ui.router'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
    var AboutMeController = (function () {
        function AboutMeController() {
            this.title = 'About Me';
        }
        return AboutMeController;
    }());
    angular.module('AboutMe').controller('aboutMeController', AboutMeController);
    var ContactMeController = (function () {
        function ContactMeController() {
            this.title = 'Contact Me';
        }
        return ContactMeController;
    }());
    angular.module('AboutMe').controller('contactMeController', ContactMeController);
})(AboutMe || (AboutMe = {}));
;
//# sourceMappingURL=app.js.map