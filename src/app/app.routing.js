import oneboxTpl from 'shared/ui/widgets/onebox/one-box.template.html'

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

function routing($urlRouterProvider, $locationProvider, $stateProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('user', {
        abstract: true,
        template: '<ui-view/>'
    })
    .state('user.spa', {
        abstract: true,
        template: require('./shared/ui/widgets/spa/spa.template.html'),
        controller: 'SPACtrl as appCtrl'
        /* component: 'adminLte2' */
    })
    .state('user.spa.home', {
        url: '^/',
        template:   `<section class="content-header">
                        <h1>
                            Home <small>sweet home</small>
                        </h1>
                    </section>`
    })
    .state('user.spa.extra', {
        url: '^/extra',
        abstract: true,
        template: '<ui-view/>'
    })
    .state('user.spa.extra.tixalia', {
        url: '/tixalia',
        template: `<section class="content-header">
                    <h1>
                        Tixalia <small>widget</small>
                    </h1>
                </section>`
    })
    .state('user.spa.extra.onebox', {
        url: '/onebox',
        template: oneboxTpl
    });
    
}

export { routing as AppRouting }