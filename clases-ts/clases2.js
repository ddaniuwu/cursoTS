"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transporte = /** @class */ (function () {
    function Transporte(velocidad, formaDeMovilidad) {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }
    Transporte.prototype.getvelocidad = function () {
        return this.velocidad;
    };
    Transporte.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Transporte.prototype.getformaDeMovilidad = function () {
        return this.formaDeMovilidad;
    };
    Transporte.prototype.setformaDeMovilidad = function (formaDeMovilidad) {
        this.formaDeMovilidad = formaDeMovilidad;
    };
    return Transporte;
}());
var transporte1 = new Transporte(24324, "Carro");
//const transporte : Tansporte = new  Transporte(20 , "carro")
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(velocidad, formaDeMovilidad, cantidadDePuertas) {
        var _this = _super.call(this, velocidad, formaDeMovilidad) || this;
        _this.cantidadDePuertas = cantidadDePuertas;
        return _this;
    }
    Auto.prototype.getvelocidad = function () {
        return _super.prototype.getvelocidad.call(this) + 10;
    };
    Auto.prototype.getCantidadDePuertas = function () {
        return this.cantidadDePuertas;
    };
    Auto.prototype.setCantidadDePuertas = function (cantidadDePuertas) {
        this.cantidadDePuertas = cantidadDePuertas;
    };
    return Auto;
}(Transporte));
var auto = new Auto(20, "Suelo", 3);
