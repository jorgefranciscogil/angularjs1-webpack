import './aside-left.styles.scss'
import AdminLte2AsideLeftCtrl from './aside-left.controller'
import AdminLte2AsideLeftTpl from './aside-left.template.html'

let AdminLte2AsideLeft = {
    template : AdminLte2AsideLeftTpl,
    controller : AdminLte2AsideLeftCtrl,
    transclude : {
        nav : '?adminLte2NavAsideLeft'
    },
    bindings : {
        userName : "<?"
    }
};

export { AdminLte2AsideLeft }