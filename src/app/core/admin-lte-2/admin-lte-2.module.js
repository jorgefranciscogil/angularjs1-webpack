import 'angular'

import { AdminLte2 } from './admin-lte-2.component'
import { AdminLte2Header } from './ui/widgets/header/header.component'
import { AdminLte2Footer } from './ui/widgets/footer/footer.component'
import { AdminLte2AsideLeft } from './ui/widgets/aside-left/aside-left.component'
import { AdminLte2NavAsideLeft } from './ui/widgets/aside-left/nav-aside-left/nav-aside-left.component'
import { AdminLte2AsideRight } from './ui/widgets/aside-right/aside-right.component'

export default angular.module('admin-lte-2', [
    'ngSanitize'
])
.component('adminLte2', AdminLte2)
//.directive('adminLte2', () => AdminLte2) //to use on index page
.component('adminLte2Header', AdminLte2Header)
.component('adminLte2Footer', AdminLte2Footer)
.component('adminLte2AsideLeft', AdminLte2AsideLeft)
.component('adminLte2NavAsideLeft', AdminLte2NavAsideLeft)
.component('adminLte2AsideRight', AdminLte2AsideRight)