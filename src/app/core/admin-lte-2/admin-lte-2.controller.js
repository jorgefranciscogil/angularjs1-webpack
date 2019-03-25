export default class AdminLte2 {

    constructor() {
        console.log('AdminLte2 constructor()');
        $(window).trigger('resize');
        $('body').layout();
    }

}