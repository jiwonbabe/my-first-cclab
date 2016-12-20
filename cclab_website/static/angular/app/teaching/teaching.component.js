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
var teaching_service_1 = require('./teaching.service');
// Add the RxJS Observable operators.
require('./rxjs-operators');
var TeachingComponent = (function () {
    function TeachingComponent(teachingService) {
        this.teachingService = teachingService;
        this.mode = 'Observable';
    }
    TeachingComponent.prototype.ngOnInit = function () { this.getTeachings(); };
    TeachingComponent.prototype.getTeachings = function () {
        var _this = this;
        this.teachingService.getTeachings()
            .subscribe(function (teachings) { return _this.teachings = teachings; });
    };
    TeachingComponent = __decorate([
        core_1.Component({
            selector: 'teaching',
            templateUrl: '/static/templates/teaching.component.html',
            providers: [teaching_service_1.TeachingService]
        }), 
        __metadata('design:paramtypes', [teaching_service_1.TeachingService])
    ], TeachingComponent);
    return TeachingComponent;
}());
exports.TeachingComponent = TeachingComponent;
//# sourceMappingURL=teaching.component.js.map