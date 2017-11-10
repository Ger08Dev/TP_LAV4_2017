webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__servicios_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_anagrama_mas_listado_anagrama_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_pptijera_pptijera_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_pptijera_mas_listado_pptijera_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_trivia_paices_trivia_paices_component__ = __webpack_require__("../../../../../src/app/componentes/trivia-paices/trivia-paices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_trivia_paices_mas_listado_trivia_paices_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';









// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_11__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_anagrama_mas_listado_anagrama_mas_listado_component__["a" /* AnagramaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_pptijera_pptijera_component__["a" /* PPTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_pptijera_mas_listado_pptijera_mas_listado_component__["a" /* PPTijeraMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_trivia_paices_trivia_paices_component__["a" /* TriviaPaicesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_trivia_paices_mas_listado_trivia_paices_mas_listado_component__["a" /* TriviaPaicesMasListadoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_smart_table__["a" /* Ng2SmartTableModule */]
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_17__servicios_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        var _this = _super.call(this, "Agilidad Aritmetica", gano, jugador) || this;
        _this.resultadoParticipante = 0;
        return _this;
    }
    JuegoAgilidad.prototype.generarNuevo = function () {
        this.numero1 = Math.floor(Math.random() * 10);
        this.numero2 = Math.floor(Math.random() * 10);
        this.operador = Math.floor(Math.random() * 4);
        if (this.operador == 0) {
            this.operardorMostrar = "+";
            this.resulatdoReal = this.numero1 + this.numero2;
        }
        if (this.operador == 1) {
            this.operardorMostrar = "-";
            this.resulatdoReal = this.numero1 - this.numero2;
        }
        if (this.operador == 2) {
            this.operardorMostrar = "/";
            this.resulatdoReal = this.numero1 / this.numero2;
        }
        if (this.operador == 3) {
            this.operardorMostrar = "x";
            this.resulatdoReal = this.numero1 * this.numero2;
        }
        console.info(this.numero1 + this.operardorMostrar + this.numero2 + "=" + this.resulatdoReal);
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.resulatdoReal == this.resultadoParticipante) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        return _super.call(this, "Anagrama", gano, jugador) || this;
    }
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabra == this.respuesta.toUpperCase()) {
            this.gano = true;
        }
        if (this.gano)
            return true;
        else
            return false;
    };
    ;
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-paices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPaices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
var JuegoPaices = (function (_super) {
    __extends(JuegoPaices, _super);
    function JuegoPaices(nombre, gano, jugador) {
        return _super.call(this, nombre, gano, jugador) || this;
    }
    JuegoPaices.prototype.verificar = function () {
        if (this.respuestaJugador == this.respuestaVerdadera) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoPaices;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-paices.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PiedraPapelTijera = (function (_super) {
    __extends(PiedraPapelTijera, _super);
    function PiedraPapelTijera(unNombre, jugador, gano) {
        var _this = _super.call(this, "Piedra Papel Tijera", gano, jugador) || this;
        _this.numeroRandom = 0;
        _this.piedra = 1;
        _this.papel = 2;
        _this.tijera = 3;
        _this.nombre = unNombre;
        _this.jugador = jugador;
        _this.gano = gano;
        return _this;
    }
    PiedraPapelTijera.prototype.Comenzar = function () {
        this.numeroRandom = Math.floor((Math.random() * 3) + 1);
    };
    PiedraPapelTijera.prototype.Piedra = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.resultado = "Empato";
            this.gano = false;
        }
        if (this.numeroRandom == 2) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == 3) {
            this.gano = true;
            this.resultado = "Gano";
        }
    };
    PiedraPapelTijera.prototype.Papel = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == 2) {
            this.gano = false;
            this.resultado = "Empato";
        }
        if (this.numeroRandom == 3) {
            this.gano = false;
            this.resultado = "Perdio";
        }
    };
    PiedraPapelTijera.prototype.Tijera = function () {
        this.Comenzar();
        if (this.numeroRandom == 1) {
            this.gano = false;
            this.resultado = "Perdio";
        }
        if (this.numeroRandom == 2) {
            this.gano = true;
            this.resultado = "Gano";
        }
        if (this.numeroRandom == 3) {
            this.resultado = "Empato";
        }
    };
    PiedraPapelTijera.prototype.verificar = function () {
        return true;
    };
    return PiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n  \r\n    width: 100%;\r\n    margin: 0; padding: 0;\r\n}\r\n\r\nlabel{\r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 13px;\r\n}\r\n.centro{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 500px;\r\n    border: 10px solid #f1f1f1;\r\n    background: #3664F3;\r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n   \r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-right: 300px;\r\n    margin-left: 300px; \r\n    \r\n    \r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 15px;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 5%;\r\n    bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\r\n    <h2>\r\n     Adivina el numero\r\n    </h2>\r\n   </div>\r\n\r\n      <form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\" >\r\n        \r\n        <div class=\"centro\" >\r\n        <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:20%\"/>\r\n      \r\n          <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn2\">Verificar</button></h2>\r\n      \r\n          <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn2 orange\">Nuevo número secreto</button></h2>\r\n      \r\n          <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ></p></h2>\r\n\r\n          \r\n        </div>\r\n      </form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    var modelo = this;
                    mensaje = "La tercera fue la vencida.";
                    this.enviarJuego.emit(this.nuevoJuego);
                    this.MostarMensaje("Sos un Genio!!!", true);
                    this.nuevoJuego.numeroSecreto = 0;
                    modelo.ocultarVerificar = false;
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AdivinaElNumeroComponent);

var _a, _b;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            \r\n                <app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n          </div>\r\n        <div class=\"col-sm-6\">\r\n            <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n        </div>\r\n        \r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
        // console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AdivinaMasListadoComponent);

var _a;
//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  .centro{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid #f1f1f1;\r\n      background: #BE3600;\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n     \r\n  }\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-right: 300px;\r\n    margin-left: 300px; \r\n    \r\n    \r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 15px;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 5%;\r\n    bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<!-- index.html -->\r\n<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\r\n    <h2>\r\n     Agilidad Aritmetica\r\n    </h2>\r\n   </div>\r\n\r\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n  <div class=\"centro\">\r\n<h3 style=\"text-align: center\">{{nuevoJuego.numero1}}\r\n    {{nuevoJuego.operardorMostrar}}\r\n    {{nuevoJuego.numero2}}</h3>\r\n  \r\n <h3>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.resultadoParticipante\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n </h3>\r\n  \r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn2\">Verificar {{Tiempo}} </button></h2>\r\n \r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn2 orange\">Nuevo</button></h2>\r\n  \r\n  \r\n\r\n \r\n\r\n</div>\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        this.ocultarVerificar = false;
        this.nuevoJuego.generarNuevo();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.ocultarVerificar = true;
            clearInterval(this.repetidor);
        }
        else {
            this.MostarMensaje("Puede fallar!!!");
            clearInterval(this.repetidor);
            this.ocultarVerificar = true;
            this.enviarJuego.emit(this.nuevoJuego);
            this.Tiempo = 5;
        }
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AgilidadAritmeticaComponent);

var _a, _b;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            \r\n                <app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n          </div>\r\n        <div class=\"col-sm-6\">\r\n            <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n        </div>\r\n        \r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AgilidadMasListadoComponent);

var _a;
//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        \r\n        <app-anagrama (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-anagrama> \r\n      </div>\r\n    <div class=\"col-sm-6\">\r\n        <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n    </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaMasListadoComponent = (function () {
    function AnagramaMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    AnagramaMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    AnagramaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return AnagramaMasListadoComponent;
}());
AnagramaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], AnagramaMasListadoComponent);

var _a;
//# sourceMappingURL=anagrama-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  .centro{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid #f1f1f1;\r\n      background: #6B00A8;\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      \r\n     \r\n  }\r\n  \r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-right: 300px;\r\n    margin-left: 300px; \r\n    \r\n    \r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 15px;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 5%;\r\n    bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\r\n    <h2>\r\n     Anagrama\r\n    </h2>\r\n   </div>\r\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"centro\">\r\n        <div align=\"center\" class=\"titulo\" style=\"color:aliceblue\">\r\n            <h4>Presione Generar</h4>\r\n            </div>\r\n      <h3 [hidden]=\"ocultarVerificar\" style=\"color:aliceblue\">{{miJuego.desordenada}}</h3>\r\n      <h3 [hidden]=\"!ocultarVerificar\" style=\"color:aliceblue\">{{miJuego.palabra}}</h3>\r\n  \r\n      <input type=\"text\" [(ngModel)]=\"miJuego.respuesta\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"ingrese respuesta\" >\r\n      <h3></h3>\r\n      <button [hidden]=\"!ocultarVerificar\" class=\"btn2 blue\" (click)=\"GenerarNuevo()\">Generar Palabra</button>\r\n      \r\n      <button [hidden]=\"ocultarVerificar\" class=\"btn2 purple\"(click)=\"Verificar()\">Validar</button>\r\n      <h3></h3>\r\n  </div>\r\n</form>\r\n\r\n \r\n  \r\n\r\n  \r\n  \r\n  \r\n  \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnagramaComponent = (function () {
    function AnagramaComponent(serv) {
        this.serv = serv;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.miJuego.jugador = this.serv.TraerUsuario();
        this.miJuego.desordenada = "Presiona el Boton";
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.GenerarNuevo = function () {
        this.ocultarVerificar = false;
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_2__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.miJuego.jugador = this.serv.TraerUsuario();
        this.miPalabra = this.Palabras[Math.floor((Math.random() * 32))];
        this.miJuego.palabra = this.miPalabra["palabra"];
        this.miJuego.desordenada = this.miPalabra["desordenada"];
    };
    AnagramaComponent.prototype.Verificar = function () {
        if (this.miJuego.verificar()) {
            this.enviarJuego.emit(this.miJuego);
            console.log(this.miJuego);
            this.ocultarVerificar = true;
        }
        else {
            this.enviarJuego.emit(this.miJuego);
            console.log(this.miJuego);
            this.ocultarVerificar = true;
        }
    };
    AnagramaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.TraerPalabas().then(function (data) { _this.Palabras = data; });
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    return AnagramaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AnagramaComponent.prototype, "enviarJuego", void 0);
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], AnagramaComponent);

var _a, _b;
//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\r\n{\r\n    height: 50px;\r\n    width: 1000px;\r\n    background-color: rgba(102, 51, 153, 0.25);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: center;\r\n    \r\n    \r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center; \r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: #3E06B0;\r\n}\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n\r\n\r\n  \r\n  <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\r\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n  </ul>\r\n</div>\r\n</div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    font-family: 'Press Start 2P',cursive;\r\n    font-size: 40px;\r\n    color: whitesmoke;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu></app-menu>\r\n\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table\r\n{\r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 10px;\r\n    color: white;\r\n}\r\n\r\nng2-smart-table{\r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 10px;\r\n    color: #D3AFF5;\r\n\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ng2-smart-table [settings]=\"settings\" [source]=\"listado\"></ng2-smart-table> -->\r\n<!-- div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n\r\n<table class=\"table table-condensed\" >\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
        this.settings = {
            hideHeader: false,
            hideSubHeader: false,
            pager: {
                display: true,
                perPage: 7,
            },
            actions: false,
            columns: {
                nombre: {
                    title: 'Nombre Juego'
                },
                jugador: {
                    title: 'Jugador'
                },
                gano: {
                    title: 'Resultado'
                }
            }
        };
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        //this.lista = JSON.stringify(this.listadoParaCompartir);
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosComponent);

//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n      \r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  label{\r\n      font-family: 'Press Start 2P',cursive; \r\n      color: #FFFFFF;\r\n      font-size: 13px;\r\n  }\r\n  .centro{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid rgba(128, 128, 128, 0.49);\r\n      background: rgba(95, 0, 55, 0.43);\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n     \r\n  }\r\n  \r\n\r\n  \r\n  \r\n  \r\n  .cancelbtn {\r\n      width: auto;\r\n      padding: 10px 18px;\r\n      background-color: #f44336;\r\n  }\r\n  .aceptbtn {\r\n      width: auto;\r\n      padding: 10px 18px;\r\n      background-color: #3664F4;\r\n  }\r\n  .imgcontainer {\r\n      text-align: center;\r\n      margin: 24px 0 12px 0;\r\n  }\r\n  \r\n  img.avatar {\r\n      width: 40%;\r\n      border-radius: 50%;\r\n  }\r\n  \r\n  .container {\r\n      padding: 16px;\r\n  }\r\n  \r\n  span.psw {\r\n      float: right;\r\n      padding-top: 16px;\r\n  }\r\n  \r\n  /* Change styles for span and cancel button on extra small screens */\r\n  @media screen and (max-width: 300px) {\r\n      span.psw {\r\n         display: block;\r\n         float: none;\r\n      }\r\n      .cancelbtn {\r\n         width: 100%;\r\n      }\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br>\r\n\r\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"centro\">\r\n      <h2></h2>\r\n            \r\n      <div class=\"imgcontainer\">\r\n          <img src=\"../../TP_LAV4_2017/assets/imagenes/login.gif\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\r\n        </div>\r\n\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\r\n<h5></h5>\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\r\n            \r\n        \r\n       \r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n              {{progresoMensaje}} - {{progreso}}%\r\n            </div>\r\n        </div>\r\n       \r\n        \r\n        <h2></h2>\r\n        <button class=\"btn2\" *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\r\n        <button class=\"btn2 red\" routerLink=\"/Registro\" >Registrarse</button>\r\n        <H2></H2>\r\n      </div>\r\n\r\n    \r\n        \r\n    \r\n     \r\n      <h3></h3>\r\n  \r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(miServicio, route, router) {
        this.miServicio = miServicio;
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.lista = this.miServicio.InicializarLista();
        console.log(this.lista);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin' || this.usuario === 'German' && this.clave === '1234') {
            this.miServicio.CargarUsuario(this.usuario);
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border-radius: 5px; /* 5px rounded corners */\r\n    max-width: 200px;\r\n   height: 100%;\r\n    margin: 10px;\r\n    padding-bottom: 10px;\r\n    float: left;\r\n  background-color: rgba(61, 53, 71, 0.41);\r\n    text-align: center;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\nimg {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 200px;\r\n    height: 200px;\r\n}/* Add some padding inside the card container */\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n\r\n.button{\r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    padding: 5px 15px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n\r\n    border: none;\r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  .button:hover {background-color: #3e8e41}\r\n  \r\n  .button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n\r\n  h4{\r\n      color: white;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"card\">\r\n      <img class=\"img-thumbnail\"   src=\"../../TP_LAV4_2017/assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n      <H4>Velocidad aritmética </H4>\r\n  \r\n\r\n      <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n    \r\n    </div>\r\n  \r\n       <div class=\"card\">\r\n      <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\r\n      <H4>Adivina el número</H4>\r\n    \r\n      <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <img class=\"img-thumbnail\" src=\"../../TP_LAV4_2017/assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Piedra Papel o Tijera</H4>\r\n       \r\n        <p>           <button class=\"btn2 blue\"  (click)=\"Juego('PPT')\">Jugar</button></p>\r\n      </div>\r\n\r\n    <div class=\"card\">\r\n        <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/Palabra.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n        <H4>Anagrama de Palabra</H4>\r\n      \r\n        <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Anagrama')\">Jugar</button></p>\r\n      </div>\r\n \r\n      <div class=\"card\">\r\n          <img  class=\"img-thumbnail\"  src=\"../../TP_LAV4_2017/assets/imagenes/banderas.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n          <H4>Trivia de Banderas</H4>\r\n        \r\n          <p>           <button class=\"btn2 blue\"  (click)=\"Juego('Trivia')\">Jugar</button></p>\r\n        </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/AnagramaMasListado']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PPTijeraMasListado']);
                break;
            case 'Trivia':
                this.router.navigate(['/Juegos/TriviaPaices']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\r\n    <button routerLink=\"/Principal\">Principal</button>\r\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\r\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\r\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\r\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \r\n    <button routerLink=\"/error\">Error</button>\r\n  \r\n</div-->\r\n\r\n<!--nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\r\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n        </ul>\r\n    </div>\r\n  </nav-->\r\n  <nav class=\"navbar navbar-inverse\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Juegos <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a  (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                        <li><a  (click)=\"Juego('PPT')\">Piedra Papel Tijera</a></li>\r\n                        <li><a  (click)=\"Juego('Anagrama')\">Anagrama</a></li>\r\n                        <li><a  (click)=\"Juego('Trivia')\">Trivia Paices</a></li>\r\n                    </ul>\r\n                  </li>\r\n                \r\n                <li><a  (click)=\"Juego('Listado')\">Listado</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a routerLink=\"/QuienSoy\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n                  <li><a routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n      \r\n   "

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'PPT':
                this.router.navigate(['/Juegos/PPTijeraMasListado']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/AnagramaMasListado']);
                break;
            case 'Trivia':
                this.router.navigate(['/Juegos/TriviaPaices']);
                break;
            case 'Listado':
                this.router.navigate(['/Listado']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        \r\n<app-pptijera (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-pptijera> \r\n      </div>\r\n    <div class=\"col-sm-6\">\r\n        <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPTijeraMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PPTijeraMasListadoComponent = (function () {
    function PPTijeraMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    PPTijeraMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    PPTijeraMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return PPTijeraMasListadoComponent;
}());
PPTijeraMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pptijera-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], PPTijeraMasListadoComponent);

var _a;
//# sourceMappingURL=pptijera-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  .centro{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid #f1f1f1;\r\n      background: #178800;\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      \r\n     \r\n  }\r\n\r\n  img{\r\n    border: 5px solid #30131C;\r\n  }\r\n  \r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-right: 300px;\r\n    margin-left: 300px; \r\n    \r\n    \r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 15px;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 5%;\r\n    bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.Empate {\r\n    background-color: #FFD000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\r\n    <h2>\r\n     Piedra Papel Tijera\r\n    </h2>\r\n   </div>\r\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"centro\">\r\n        <div align=\"center\" class=\"titulo\">\r\n        <h4>Elija su opcion</h4>\r\n        </div>\r\n        <br>\r\n        <table border=\"0\" width=\"60%\" height=\"auto\" align=\"center\">\r\n            <tr>\r\n                <td><img style=\"margin:2px\" src=\"../../TP_LAV4_2017/assets/imagenes/Piedra.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Piedra()\"></td>\r\n              \r\n                <td><img style=\"margin:2px\" src=\"../../TP_LAV4_2017/assets/imagenes/Papel.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Papel()\"></td>\r\n               \r\n                <td><img style=\"margin:2px\" src=\"../../TP_LAV4_2017/assets/imagenes/Tijera.jpg\" border=\"1\" width=\"100px\" height=\"150px\" (click)=\"Tijera()\"></td>\r\n            </tr>\r\n        </table>\r\n\r\n        <br><br>\r\n        <div [hidden]=ocultarOponente >\r\n          <div *ngIf=\"juegoPPT.numeroRandom==1\" align=\"center\">\r\n              <img src=\"../../TP_LAV4_2017/assets/imagenes/Piedra.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\r\n          </div>\r\n\r\n          <div *ngIf=\"juegoPPT.numeroRandom==2\" align=\"center\">\r\n              <img src=\"../../TP_LAV4_2017/assets/imagenes/Papel.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\r\n          </div>\r\n\r\n          <div *ngIf=\"juegoPPT.numeroRandom==3\" align=\"center\">\r\n              <img src=\"../../TP_LAV4_2017/assets/imagenes/Tijera.jpg\" border=\"1\" width=\"100px\" height=\"150px\">\r\n          </div>\r\n        </div>\r\n        <h2></h2>\r\n      </div>\r\n    </form>\r\n\r\n    <div id=\"snackbar\">{{Mensajes}}</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/pptijera/pptijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PPTijeraComponent = (function () {
    function PPTijeraComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = true;
    }
    PPTijeraComponent.prototype.Piedra = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Piedra();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        this.ocultarOponente = false;
        //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.Papel = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Papel();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        //this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.Tijera = function () {
        this.juegoPPT = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* PiedraPapelTijera */]("Piedra, Papel o Tijera", this.miServicio.TraerUsuario(), true);
        this.ocultarOponente = false;
        this.juegoPPT.Tijera();
        if (this.juegoPPT.resultado == "Gano")
            this.MostarMensaje("Gano");
        if (this.juegoPPT.resultado == "Empato")
            this.MostarMensaje("Empato");
        if (this.juegoPPT.resultado == "Perdio")
            this.MostarMensaje("Perdio");
        // this.juegoPPT.jugador = this.miServicio.retornarUsuario();
        this.enviarJuego.emit(this.juegoPPT);
    };
    PPTijeraComponent.prototype.MostarMensaje = function (mensaje) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (this.juegoPPT.resultado == "Gano")
            x.className = "show Ganador";
        if (this.juegoPPT.resultado == "Empato")
            x.className = "show Empate";
        if (this.juegoPPT.resultado == "Perdio")
            x.className = "show Perdedor";
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarOponente = true;
        }, 3000);
    };
    PPTijeraComponent.prototype.ngOnInit = function () {
    };
    return PPTijeraComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PPTijeraComponent.prototype, "enviarJuego", void 0);
PPTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pptijera',
        template: __webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], PPTijeraComponent);

var _a, _b;
//# sourceMappingURL=pptijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  .centro{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    \r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    \r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu>  </app-menu>\r\n\r\n<form >\r\n  <div class=\"centro\">\r\n<img src=\"../../TP_LAV4_2017/assets/imagenes/saladejuegos.png\" alt=\"Image\" style=\"width:750px \">\r\n</div>\r\n<div class=\"centro\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px; \">\r\n   \r\n    <h2><a routerLink=\"/Juegos\">Jugar</a></h2>\r\n          \r\n           \r\n                   \r\n              \r\n                    <h2>  <a routerLink=\"/Listado\">Listado de Resultados</a></h2>\r\n           \r\n    \r\n       \r\n        \r\n     \r\n</div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\n\r\n    \r\nform {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  .centro1{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid #004353;\r\n      background: rgba(2, 136, 91, 0.53);\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      color: white;\r\n      \r\n     \r\n  }\r\n  .centro2{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 800px;\r\n    border: 10px solid  #3A0202;\r\n    background:rgba(214, 0, 0, 0.46);\r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: white;\r\n   \r\n}\r\n.centro3{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 900px;\r\n    border: 10px solid #00581B;\r\n    background: rgba(95, 247, 75, 0.49);\r\n    text-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: white;\r\n   \r\n}\r\nbody {\r\n    font-family: 'Press Start 2P',cursive; \r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-family: 'Press Start 2P',cursive; font-size: 16px;}\r\n\r\n\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = " <app-menu></app-menu> \r\n  <form style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\" >\r\n  <!-- First Container -->\r\n\r\n  <div class=\"centro1\">\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"/assets/imagenes/quiensoy.jpg\" class=\"img-responsive \" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Un alumno de la UTN FRA</h3>\r\n  </div>\r\n</div>\r\n<br><br>\r\n  <!-- Second Container -->\r\n  <div class=\"centro2\">\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n     <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n    \r\n  </div>\r\n</div>\r\n<br><br>\r\n  <!-- Third Container (Grid) -->\r\n  <div class=\"centro3\">\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Mi Juego</h3><br>\r\n    <div class=\"center1\">\r\n\r\n        <img src=\"../../TP_LAV4_2017/assets/imagenes/miJuego.PNG\" alt=\"Image\">\r\n     \r\n    </div>\r\n  </div>\r\n</div>\r\n<br><br>\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n      <p>Desarrollado por <a href=\"https://github.com/Ger08Dev\">German Rodriguez (Ger08Dev)</a></p> \r\n    </footer>\r\n</form> \r\n  <!-- Footer -->\r\n  "

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn,.signupbtn {float:left;width:50%}\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 98%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"jumbotron\">\r\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n   \r\n  </div>\r\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\r\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\r\n  <div id=\"id01\" class=\"modal\">\r\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n    <form class=\"modal-content animate\" >\r\n      <div class=\"container\">\r\n        <label><b>Email</b></label>\r\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\r\n  \r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\r\n  \r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n  \r\n        <div class=\"clearfix\">\r\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\r\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n  \r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n  \r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistroComponent = (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegistroComponent);

//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        \r\n<app-trivia-paices (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-trivia-paices> \r\n      </div>\r\n    <div class=\"col-sm-6\">\r\n        <app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n    </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaPaicesMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TriviaPaicesMasListadoComponent = (function () {
    function TriviaPaicesMasListadoComponent(servicioJuego) {
        this.servicioJuego = servicioJuego;
    }
    TriviaPaicesMasListadoComponent.prototype.ngOnInit = function () {
        this.listadoParaCompartir = this.servicioJuego.InicializarLista();
        this.lista = JSON.stringify(this.listadoParaCompartir);
    };
    TriviaPaicesMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        this.servicioJuego.CargarLista(this.listadoParaCompartir);
        console.log(this.listadoParaCompartir);
        console.log(this.lista);
    };
    return TriviaPaicesMasListadoComponent;
}());
TriviaPaicesMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trivia-paices-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], TriviaPaicesMasListadoComponent);

var _a;
//# sourceMappingURL=trivia-paices-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices/trivia-paices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    \r\n      width: 100%;\r\n      margin: 0; padding: 0;\r\n  }\r\n  \r\n  .centro{\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      width: 500px;\r\n      border: 10px solid #f1f1f1;\r\n      background: #690000;\r\n      text-align: center;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      \r\n     \r\n  }\r\n\r\n  img{\r\n    border: 5px solid #30131C;\r\n  }\r\n  \r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-right: 300px;\r\n    margin-left: 300px; \r\n    \r\n    \r\n    font-family: 'Press Start 2P',cursive; \r\n    font-size: 15px;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 5%;\r\n    bottom: 30px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.Empate {\r\n    background-color: #FFD000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices/trivia-paices.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center ;font-family: 'Press Start 2P',cursive;color: white; \">\r\n    <h2>\r\n     Trivia Paices\r\n    </h2>\r\n   </div>\r\n<form name=\"juego\" style=\"font-family: 'Press Start 2P',cursive; font-size: 10px\">\r\n    <div class=\"centro\">  \r\n        \r\n        <br>\r\n        <table border=\"0\" width=\"60%\" height=\"auto\" align=\"center\">\r\n            <tr>\r\n                <td><img class=\"img-thumbnail\" src=\"../../TP_LAV4_2017/assets/imagenes/{{Bandera}}.jpg\" alt=\"Avatar\" style=\"width:50%\"></td>\r\n              \r\n            </tr>\r\n          \r\n            <tr><button *ngIf=\"!BloquearBotones\" class=\"btn2 blue\" (click)=\"Opcion1()\">{{nuevoJuego.opcion1}}</button></tr>\r\n            <tr><button *ngIf=\"!BloquearBotones\" class=\"btn2 blue\" (click)=\"Opcion2()\">{{nuevoJuego.opcion2}}</button></tr>\r\n            <tr><button *ngIf=\"!BloquearBotones\" class=\"btn2 blue\" (click)=\"Opcion3()\">{{nuevoJuego.opcion3}}</button></tr>\r\n            <tr><button *ngIf=\"!BloquearBotones\" class=\"btn2 blue\" (click)=\"Opcion4()\">{{nuevoJuego.opcion4}}</button></tr>\r\n         \r\n        </table>\r\n        <br><br>\r\n        <button class=\"btn2 purple\" (click)=\"GenerarPregunta()\">Generar</button>\r\n        <br><br>\r\n      </div>\r\n    </form>\r\n\r\n  <div id=\"snackbar\">{{Mensajes}}</div> "

/***/ }),

/***/ "../../../../../src/app/componentes/trivia-paices/trivia-paices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriviaPaicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_juego_paices__ = __webpack_require__("../../../../../src/app/clases/juego-paices.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TriviaPaicesComponent = (function () {
    function TriviaPaicesComponent(miServicio) {
        this.miServicio = miServicio;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.CargarArrays();
        this.GenerarPregunta();
    }
    TriviaPaicesComponent.prototype.GenerarPregunta = function () {
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_2__clases_juego_paices__["a" /* JuegoPaices */]("Trivia Paices", false, "german");
        this.nuevoJuego.jugador = this.miServicio.TraerUsuario();
        this.i = Math.floor(Math.random() * 4);
        this.pais = this.miArrayPaices[this.i];
        this.nuevoJuego.opcion1 = this.pais['Opcion1'];
        this.nuevoJuego.opcion2 = this.pais['Opcion2'];
        this.nuevoJuego.opcion3 = this.pais['Opcion3'];
        this.nuevoJuego.opcion4 = this.pais['Opcion4'];
        this.nuevoJuego.respuestaVerdadera = this.pais['Correcta'];
        this.Bandera = this.pais['Correcta'];
        this.BloquearBotones = false;
    };
    TriviaPaicesComponent.prototype.Opcion1 = function () {
        this.nuevoJuego.respuestaJugador = this.pais['Opcion1'];
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Perfecto", true);
        }
        else {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Erraste");
        }
        this.BloquearBotones = true;
    };
    TriviaPaicesComponent.prototype.Opcion2 = function () {
        this.nuevoJuego.respuestaJugador = this.pais['Opcion2'];
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Perfecto", true);
        }
        else {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Erraste");
        }
        this.BloquearBotones = true;
    };
    TriviaPaicesComponent.prototype.Opcion3 = function () {
        this.nuevoJuego.respuestaJugador = this.pais['Opcion3'];
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Perfecto", true);
        }
        else {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Erraste");
        }
        this.BloquearBotones = true;
    };
    TriviaPaicesComponent.prototype.Opcion4 = function () {
        this.nuevoJuego.respuestaJugador = this.pais['Opcion4'];
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Perfecto", true);
        }
        else {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Erraste");
        }
        this.BloquearBotones = true;
    };
    TriviaPaicesComponent.prototype.CargarArrays = function () {
        this.miArrayPaices = new Array();
        this.miArrayPaices.push({ "Opcion1": "Brazil", "Opcion2": "Iran", "Opcion3": "Armenia", "Opcion4": "Francia", "Correcta": "Brazil" });
        this.miArrayPaices.push({ "Opcion1": "Argentina", "Opcion2": "Italia", "Opcion3": "Nicaragua", "Opcion4": "Alemania", "Correcta": "Nicaragua" });
        this.miArrayPaices.push({ "Opcion1": "Turquia", "Opcion2": "Camerun", "Opcion3": "Bolivia", "Opcion4": "Paraguay", "Correcta": "Camerun" });
        this.miArrayPaices.push({ "Opcion1": "Belgica", "Opcion2": "Japon", "Opcion3": "Rusia", "Opcion4": "Peru", "Correcta": "Belgica" });
        this.miArrayPaices.push({ "Opcion1": "Inglaterra", "Opcion2": "Argentina", "Opcion3": "Holanda", "Opcion4": "Serbia", "Correcta": "Argentina" });
        this.miArrayPaices.push({ "Opcion1": "Cuba", "Opcion2": "Mongolia", "Opcion3": "Ucrania", "Opcion4": "Peru", "Sudafrica": "Cuba" });
        console.log(this.miArrayPaices);
    };
    TriviaPaicesComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    TriviaPaicesComponent.prototype.ngOnInit = function () {
    };
    return TriviaPaicesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], TriviaPaicesComponent.prototype, "enviarJuego", void 0);
TriviaPaicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-trivia-paices',
        template: __webpack_require__("../../../../../src/app/componentes/trivia-paices/trivia-paices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/trivia-paices/trivia-paices.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _b || Object])
], TriviaPaicesComponent);

var _a, _b;
//# sourceMappingURL=trivia-paices.component.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_anagrama_mas_listado_anagrama_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama-mas-listado/anagrama-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_pptijera_pptijera_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera/pptijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_pptijera_mas_listado_pptijera_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/pptijera-mas-listado/pptijera-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_trivia_paices_mas_listado_trivia_paices_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/trivia-paices-mas-listado/trivia-paices-mas-listado.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal

















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'PPTijera', component: __WEBPACK_IMPORTED_MODULE_15__componentes_pptijera_pptijera_component__["a" /* PPTijeraComponent */] },
            { path: 'PPTijeraMasListado', component: __WEBPACK_IMPORTED_MODULE_16__componentes_pptijera_mas_listado_pptijera_mas_listado_component__["a" /* PPTijeraMasListadoComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'AnagramaMasListado', component: __WEBPACK_IMPORTED_MODULE_14__componentes_anagrama_mas_listado_anagrama_mas_listado_component__["a" /* AnagramaMasListadoComponent */] },
            { path: 'TriviaPaices', component: __WEBPACK_IMPORTED_MODULE_17__componentes_trivia_paices_mas_listado_trivia_paices_mas_listado_component__["a" /* TriviaPaicesMasListadoComponent */] }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegoServiceService = (function () {
    function JuegoServiceService(miServicio) {
        this.miServicio = miServicio;
        this.myArrayServicio = new Array();
    }
    JuegoServiceService.prototype.TraerUsuario = function () {
        return this.UsuarioLogueado;
    };
    JuegoServiceService.prototype.CargarUsuario = function (user) {
        this.UsuarioLogueado = user;
    };
    JuegoServiceService.prototype.TraerPalabas = function () {
        return this.miServicio.TraerPalabra().toPromise()
            .then(function (datos) {
            console.log("Datos:" + datos);
            return datos;
        });
    };
    JuegoServiceService.prototype.CargarLista = function (ArrayParaPasar) {
        this.myArrayServicio.concat(ArrayParaPasar);
        console.info("En el Servicio: ", ArrayParaPasar);
    };
    JuegoServiceService.prototype.InicializarLista = function () {
        return this.myArrayServicio;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], JuegoServiceService);

var _a;
//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.TraerPalabra = function () {
        return this.http
            .get("../TP_LAV4_2017/assets/palabras.json")
            .map(this.extraerDatos)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpGetJuagdorPromise = function (url, objeto) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpGetJuagdorPromiseO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map