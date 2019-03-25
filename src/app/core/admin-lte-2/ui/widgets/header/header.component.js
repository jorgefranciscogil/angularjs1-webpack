import './header.styles.scss'
import AdminLte2HeaderCtrl from './header.controller'
import AdminLte2HeaderTpl from './header.template.html'

let AdminLte2Header = {
    template : AdminLte2HeaderTpl,
    controller : AdminLte2HeaderCtrl,
    bindings : {
        userName : '=?'
    }
};

export { AdminLte2Header }