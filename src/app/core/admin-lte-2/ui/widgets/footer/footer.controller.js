export { AdminLte2Footer as default }

class AdminLte2Footer{

    constructor(){
        console.log('AdminLte2Footer constructor()');
        this.version = '0.1.0 ALPHA';
        this.versionTemplate = `<b>Version</b> ${this.version}`;
    }

}