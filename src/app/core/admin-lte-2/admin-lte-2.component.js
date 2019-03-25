import AdminLte2Tpl from './admin-lte-2.template.html'
import AdminLte2Ctrl from './admin-lte-2.controller'

//as directive
let AdminLte2 = {
    template : AdminLte2Tpl,
    controller : AdminLte2Ctrl,
    bindings : {
        userName : "<?"
    }
};

export { AdminLte2 }