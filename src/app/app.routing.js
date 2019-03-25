import ownFormComponentsPage from 'pages/components/own/forms/form-components.page.html'
import ownUiComponentsPage from 'pages/components/own/ui/ui-components.page.html'
import thirdPartyFormComponentsPage from 'pages/components/third-party/forms/form-components.page.html'
import thirdPartyUiComponentsPage from 'pages/components/third-party/ui/ui-components.page.html'

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
    .state('user.spa.components', {
        url: '^/components',
        abstract: true,
        template: '<ui-view/>'
    })
        .state('user.spa.components.own', {
            url: '/own',
            abstract: true,
            template: '<ui-view/>'
        })
            .state('user.spa.components.own.forms', {
                url: '/forms',
                template: ownFormComponentsPage
            })
            .state('user.spa.components.own.ui', {
                url: '/forms',
                template: ownUiComponentsPage
            })
        .state('user.spa.components.third_party', {
            url: '/third-party',
            abstract: true,
            template: '<ui-view/>'
        })
            .state('user.spa.components.third_party.forms', {
                url: '/forms',
                template: thirdPartyFormComponentsPage
            })
            .state('user.spa.components.third_party.ui', {
                url: '/forms',
                template: thirdPartyUiComponentsPage
            });
    
}

export { routing as AppRouting }