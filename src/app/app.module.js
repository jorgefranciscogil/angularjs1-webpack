import angular from 'angular'
import uirouter from 'angular-ui-router'
import ngSanitize from 'angular-sanitize'
import adminLte2 from './core/admin-lte-2/admin-lte-2.module.js'

import { AppRouting } from './app.routing'
import { AppCtrl } from './app.controller'
import { SPACtrl } from './shared/ui/widgets/spa/spa.controller'
import { MockUserEntity } from './services/entities/MockUserEntity.service'

angular.module('my-angularjs-app', [
    uirouter,
    ngSanitize,
    adminLte2.name
])
.config(AppRouting)
.controller('AppCtrl', AppCtrl)
.controller('SPACtrl', SPACtrl)
.service('MockUserEntity', MockUserEntity)