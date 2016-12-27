"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_service_1 = require('./people.service');
// Add the RxJS Observable operators.
require('./rxjs-operators');
var PeopleComponent = (function () {
    function PeopleComponent(peopleService) {
        this.peopleService = peopleService;
        this.mode = 'Observable';
    }
    PeopleComponent.prototype.ngOnInit = function () { this.getPeoples(); };
    PeopleComponent.prototype.getPeoples = function () {
        var _this = this;
        this.peopleService.getPeoples()
            .subscribe(function (peoples) { return _this.peoples = peoples; });
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'people',
            templateUrl: '/static/templates/people.component.html',
            providers: [people_service_1.PeopleService]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map