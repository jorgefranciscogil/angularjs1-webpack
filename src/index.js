//third-party css
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'ionicons/css/ionicons.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'

//third-party js
import 'jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'admin-lte/dist/js/adminlte'
//import 'admin-lte/dist/js/demo'

//app
import './app/assets/sass/main.scss'
import './app/app.module.js'

/*
- app
    - assets
    - core                          (only modules)
        admin-lte-2                 (app)
            - widgets
    - modules                       (or pages?)
        - places
        - events
            - sell
    - services
        - repositories              (infraestructure DDD)
            - PlacesRepository
            - EventsRepository
        - entities                  (domain DDD)
            - PlaceEntity
            - EventEntity
    - shared
        - pipes                     (filters)
        - ui
    - widgets
        - onebox
*/
