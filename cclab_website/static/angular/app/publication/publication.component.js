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
var publication_service_1 = require('./publication.service');
// Add the RxJS Observable operators.
require('./rxjs-operators');
var PublicationComponent = (function () {
    function PublicationComponent(publicationService) {
        this.publicationService = publicationService;
        this.mode = 'Observable';
    }
    PublicationComponent.prototype.ngOnInit = function () { this.getPublications(); };
    PublicationComponent.prototype.getPublications = function () {
        var _this = this;
        this.publicationService.getPublications()
            .subscribe(function (publications) { return _this.publications = publications; });
    };
    PublicationComponent = __decorate([
        core_1.Component({
            selector: 'publication',
            templateUrl: '/static/templates/publication.component.html',
            providers: [publication_service_1.PublicationService]
        }), 
        __metadata('design:paramtypes', [publication_service_1.PublicationService])
    ], PublicationComponent);
    return PublicationComponent;
}());
exports.PublicationComponent = PublicationComponent;
//# sourceMappingURL=publication.component.js.map