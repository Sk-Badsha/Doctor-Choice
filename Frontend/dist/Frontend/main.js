(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Doctor Choice\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1KCA":
/*!******************************************************!*\
  !*** ./src/app/doctorlogin/doctorlogin.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorloginComponent", function() { return DoctorloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DoctorloginComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorloginComponent.ɵfac = function DoctorloginComponent_Factory(t) { return new (t || DoctorloginComponent)(); };
DoctorloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorloginComponent, selectors: [["app-doctorlogin"]], decls: 2, vars: 0, template: function DoctorloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctorlogin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3Jsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "2sIq":
/*!****************************************************************!*\
  !*** ./src/app/after-user-login/after-user-login.component.ts ***!
  \****************************************************************/
/*! exports provided: AfterUserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterUserLoginComponent", function() { return AfterUserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_service/patient.service */ "Z18w");
/* harmony import */ var _models_patients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/patients */ "a3f/");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-nav/side-nav.component */ "KWBv");




class AfterUserLoginComponent {
    constructor(patientserviceobj, patientobj) {
        this.patientserviceobj = patientserviceobj;
        this.patientobj = patientobj;
        this.user = "";
    }
    ngOnInit() {
        console.log("after log in");
        this.patientserviceobj.profile();
        this.user = localStorage.getItem('Name');
        console.log(sessionStorage.getItem('Name'));
    }
}
AfterUserLoginComponent.ɵfac = function AfterUserLoginComponent_Factory(t) { return new (t || AfterUserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_patients__WEBPACK_IMPORTED_MODULE_2__["patients"])); };
AfterUserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AfterUserLoginComponent, selectors: [["app-after-user-login"]], decls: 9, vars: 1, consts: [["id", "main", 1, "demo"], [1, "container-user"], [1, "user", "animate__animated", "animate__zoomInLeft"], [1, "alert", "alert-success"]], template: function AfterUserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Registration Success!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please click here to login!. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome Back! ", ctx.user, " \uD83D\uDC93\uD83D\uDC93");
    } }, directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"]], styles: [".demo[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    margin-left: 250px;\r\n    transition: margin-left .5s;\r\n    \r\n}\r\n\r\n.container-user[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to left, #135058, #1cba95);\r\n  \r\n    margin: 0 auto;\r\n    padding: 20px;\r\n}\r\n\r\n.user[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: auto;\r\n   color: black;\r\n    font-weight: 400;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmdGVyLXVzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNEQUFzRDs7SUFFdEQsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtHQUNiLFlBQVk7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWZ0ZXItdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kZW1vIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI21haW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgLyogcGFkZGluZzogMTZweDsgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lci11c2VyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTM1MDU4LCAjMWNiYTk1KTtcclxuICBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4udXNlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "7+xq":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-nav/side-nav.component */ "KWBv");


class DemoComponent {
    constructor() { }
    ngOnInit() {
    }
}
DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(); };
DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], decls: 7, vars: 0, consts: [["id", "main", 1, "demo"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus, quo officia adipisci voluptatum necessitatibus dolores, cupiditate consequatur libero quia iste. Excepturi corrupti iure libero placeat quae maxime harum in, saepe hic provident blanditiis voluptatibus eligendi, fugit quos eius nostrum quaerat officiis eum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__["SideNavComponent"]], styles: [".demo[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    margin-left: 250px;\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmIiwiZmlsZSI6ImRlbW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1ve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 85, vars: 0, consts: [["id", "about", 1, "about"], [1, "heading"], [1, "row"], [1, "image"], ["src", "../../assets/images/about-img.svg", "alt", ""], [1, "content"], ["href", "#", 1, "btn", "btn-lg", "btn-primary"], [1, "responsive-container-block", "container"], [1, "responsive-container-block"], [1, "responsive-cell-block", "wk-desk-3", "wk-ipadp-3", "wk-tab-6", "wk-mobile-12", "card-container"], [1, "card"], [1, "team-image-wrapper"], ["src", "../../assets/images/IMG_20220528_002633_187.jpg", 1, "team-member-image"], [1, "text-blk", "name"], [1, "text-blk", "position"], [1, "text-blk", "feature-text"], [1, "text-blk", "feature-text", "text-res"], [1, "social-icons"], ["href", "https://www.twitter.com", "target", "_blank"], ["src", "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg", 1, "twitter-icon"], ["href", "https://www.facebook.com", "target", "_blank"], ["src", "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg", 1, "facebook-icon"], ["href", "https://www.gmail.com", "target", "_blank"], ["src", "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999", "alt", "mail Icon", 1, "mail-icon", 2, "height", "20px", "width", "18px"], ["src", "../../assets/images/WhatsApp Image 2023-02-06 at 12.52.09 AM.jpeg", 1, "team-member-image"], ["src", "../../assets/images/WhatsApp Image 2023-02-06 at 12.52.07 AM.jpeg", 1, "team-member-image"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sk Badsha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " MD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "badshabhota@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sk Badsha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " CEO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "badshabhota@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Sk Badsha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " CMO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "badshabhota@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["section[_ngcontent-%COMP%]{\r\n    padding:2rem 9%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]:nth-child(even){\r\n    background: #f5f5f5;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-bottom: 2rem;\r\n    text-shadow:  .4rem .4rem 0 rgba(0, 0, 0, .2);\r\n    text-transform: uppercase;\r\n    color: #444;\r\n    font-size: 5rem;\r\n    letter-spacing: .4rem;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color:#16a085;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-top: 1rem;\r\n  padding: .5rem;\r\n  padding-left: 1rem;\r\n  border:var(--border);\r\n  border-radius: .5rem;\r\n  box-shadow: var(--box-shadow);\r\n  color:var(--green);\r\n  cursor: pointer;\r\n  font-size: 1.7rem;\r\n  background: #fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  padding:.7rem 1rem;\r\n  border-radius: .5rem;\r\n  background: var(--green);\r\n  color:#fff;\r\n  margin-left: .5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  background: var(--green);\r\n  color:#fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  color: var(--green);\r\n  background:#fff;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap:2rem;\r\n    padding-bottom: 4em;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n    flex:1 1 45rem;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  border-radius: 2em;\r\n    \r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n    flex:1 1 45rem;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color:  #444 ;\r\n    text-shadow:  .5rem .5rem 0 rgba(22, 160, 133, .2 ) ;\r\n    font-size: 4rem;\r\n    line-height: 1.8;\r\n}\r\n\r\n.about[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:  #777 ;\r\n    padding:1rem 0;\r\n    font-size: 1.5rem;\r\n    line-height: 1.8;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n    font-family: Nunito, sans-serif;\r\n  }\r\n\r\n.responsive-cell-block[_ngcontent-%COMP%] {\r\n    min-height: 75px;\r\n  }\r\n\r\n.text-blk[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-right: 0px;\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n    line-height: 25px;\r\n  }\r\n\r\n.responsive-container-block[_ngcontent-%COMP%] {\r\n    min-height: 75px;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 0px;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n    margin-left: auto;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n.team-head-text[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n    font-weight: 900;\r\n    text-align: center;\r\n  }\r\n\r\n.team-head-text[_ngcontent-%COMP%] {\r\n    line-height: 50px;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n    margin-right: 0px;\r\n    margin-bottom: 50px;\r\n    margin-left: 0px;\r\n  }\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1380px;\r\n    margin-top: 60px;\r\n    margin-right: auto;\r\n    margin-bottom: 60px;\r\n    margin-left: auto;\r\n    padding-top: 0px;\r\n    padding-right: 30px;\r\n    padding-bottom: 0px;\r\n    padding-left: 30px;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 7px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 30px;\r\n    padding-right: 25px;\r\n    padding-bottom: 30px;\r\n    padding-left: 25px;\r\n  }\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    margin-top: 0px;\r\n    margin-right: 10px;\r\n    margin-bottom: 25px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n.name[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-right: 0px;\r\n    margin-bottom: 5px;\r\n    margin-left: 0px;\r\n    font-size: 18px;\r\n    font-weight: 800;\r\n  }\r\n\r\n.position[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-right: 0px;\r\n    margin-bottom: 10px;\r\n    margin-left: 0px;\r\n  }\r\n\r\n.feature-text[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    color: rgb(122, 122, 122);\r\n    line-height: 30px;\r\n  }\r\n\r\n.text-res[_ngcontent-%COMP%]{\r\n    text-transform: none;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n.social-icons[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.team-image-wrapper[_ngcontent-%COMP%] {\r\n    clip-path: circle(50% at 50% 50%);\r\n    width: 130px;\r\n    height: 130px;\r\n  }\r\n\r\n.team-member-image[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n@media (max-width: 500px) {\r\n    .card-container[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      margin-top: 0px;\r\n      margin-right: 0px;\r\n      margin-bottom: 25px;\r\n      margin-left: 0px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFRTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNkNBQTZDO0lBQzdDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7O2lCQUVhO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7O0VBRVosa0JBQWtCOztBQUVwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBT0UsaUJBQWlCOztBQUVqQjtJQUNFLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zZWN0aW9ue1xyXG4gICAgcGFkZGluZzoycmVtIDklO1xyXG59XHJcblxyXG5zZWN0aW9uOm50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbiAgLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIHRleHQtc2hhZG93OiAgLjRyZW0gLjRyZW0gMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNHJlbTtcclxufVxyXG5cclxuLmhlYWRpbmcgc3BhbntcclxuICAgIGNvbG9yOiMxNmEwODU7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGJvcmRlcjp2YXIoLS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gIGNvbG9yOnZhcigtLWdyZWVuKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJ0biBzcGFue1xyXG4gIHBhZGRpbmc6LjdyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxuXHJcbi5idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5idG46aG92ZXIgc3BhbntcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuICAuYWJvdXQgLnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOjJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xyXG59XHJcblxyXG4uYWJvdXQgLnJvdyAuaW1hZ2V7XHJcbiAgICBmbGV4OjEgMSA0NXJlbTtcclxufVxyXG5cclxuLmFib3V0IC5yb3cgLmltYWdlIGltZ3tcclxuICAgIC8qIGhlaWdodDogMzVlbTtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG4gICAgd2lkdGg6NTAlOyAgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBcclxufVxyXG5cclxuLmFib3V0IC5yb3cgLmNvbnRlbnR7XHJcbiAgICBmbGV4OjEgMSA0NXJlbTtcclxufVxyXG5cclxuLmFib3V0IC5yb3cgLmNvbnRlbnQgaDN7XHJcbiAgICBjb2xvcjogICM0NDQgO1xyXG4gICAgdGV4dC1zaGFkb3c6ICAuNXJlbSAuNXJlbSAwIHJnYmEoMjIsIDE2MCwgMTMzLCAuMiApIDtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbi5hYm91dCAucm93IC5jb250ZW50IHB7XHJcbiAgICBjb2xvcjogICM3NzcgO1xyXG4gICAgcGFkZGluZzoxcmVtIDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvKiB0cnkgJiBkZWxldGUgKi9cclxuXHJcbiAgKiB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAucmVzcG9uc2l2ZS1jZWxsLWJsb2NrIHtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LWJsayB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlc3BvbnNpdmUtY29udGFpbmVyLWJsb2NrIHtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0taGVhZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZWFtLWhlYWQtdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEzODBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDRweCAyMHB4IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc2l0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0dXJlLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtcmVze1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLWljb25zIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLnRlYW0taW1hZ2Utd3JhcHBlciB7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gIH1cclxuICBcclxuICAudGVhbS1tZW1iZXItaW1hZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "9jgq":
/*!********************************************************!*\
  !*** ./src/app/directives/match-password.directive.ts ***!
  \********************************************************/
/*! exports provided: MatchPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswordDirective", function() { return MatchPasswordDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/customvalidation.service */ "WkmI");



class MatchPasswordDirective {
    constructor(customValidator) {
        this.customValidator = customValidator;
        this.MatchPassword = [];
    }
    validate(formGroup) {
        return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
    }
}
MatchPasswordDirective.ɵfac = function MatchPasswordDirective_Factory(t) { return new (t || MatchPasswordDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"])); };
MatchPasswordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatchPasswordDirective, selectors: [["", "appMatchPassword", ""]], inputs: { MatchPassword: ["appMatchPassword", "MatchPassword"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: MatchPasswordDirective, multi: true }])] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-nav/side-nav.component */ "KWBv");





function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() { }
    ngOnInit() {
        if (localStorage.getItem('usertype') !== null) {
            this.userExist = true;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 92, vars: 2, consts: [[4, "ngIf"], [1, "flex-container"], ["id", "item-1", 1, "item-left"], ["src", "../../assets/images/home-img.svg", "alt", ""], ["id", "item-2", 1, "item-center"], ["id", "container-item-1", 1, "container-item"], [1, "container-item-numbersize"], ["id", "container-item-2", 1, "container-item"], ["id", "container-item-3", 1, "container-item"], [1, "container-item-numbersize", "p-32"], ["id", "container-item-4", 1, "container-item"], ["id", "item-3", 1, "item-right"], [1, "ig-left"], ["src", "../../assets/images/steps-1_prev_ui.png", "alt", "steps"], [1, "grid-container"], [1, "heading"], [1, "grid-box-container"], [1, "grid-box"], ["src", "../../assets/images/img_telemed_bigger@3x.png", "alt", ""], ["href", "#", 1, "btn"], ["src", "../../assets/images/service_24_7-removebg-preview.png", "alt", ""], ["src", "../../assets/images/affordable-removebg-preview.png", "alt", ""], ["src", "../../assets/images/privacy_background_removed.png", "alt", ""], ["src", "../../assets/images/experienced_doctors-removebg-preview.png", "alt", ""], ["src", "../../assets/images/e_prescription-removebg-preview.png", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Total Consultation Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "407640 hrs 45 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Total Doctor attended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "147");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Average ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Consultation Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "05 mins 00 sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Emergency Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 011-23978046 OR 1075");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "For Emergency Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Follow this steps to consult doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Why choose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Doctor Choice?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "instant teleconsultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "24/7 Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Safe & Affordable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Privacy Guaranteed Conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Expert & Experienced In Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Instant Downloaded E-prescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    border:var(--border);\r\n    border-radius: .5rem;\r\n    box-shadow: var(--box-shadow);\r\n    color:var(--green);\r\n    cursor: pointer;\r\n    font-size: 1.7rem;\r\n    background: #fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    padding:.7rem 1rem;\r\n    border-radius: .5rem;\r\n    background: var(--green);\r\n    color:#fff;\r\n    margin-left: .5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    background: var(--green);\r\n    color:#fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    color: var(--green);\r\n    background:#fff;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    height: 531px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.item-left[_ngcontent-%COMP%], .item-center[_ngcontent-%COMP%], .item-right[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    \r\n\r\n    margin: 10px;\r\n    padding: 3px;\r\n    align-items: stretch;\r\n}\r\n\r\n#item-1[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 270px;\r\n}\r\n\r\n#item-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.item-center[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    flex-basis: 544px;\r\n    justify-content: space-evenly;\r\n    align-content: space-evenly;\r\n\r\n}\r\n\r\n.container-item[_ngcontent-%COMP%] {\r\n    background-color: #16a085;\r\n    width: 42%;\r\n    height: 32%;\r\n}\r\n\r\n.container-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n    height: 4px;\r\n    font-size: 17px;\r\n    font-family: 'Montserrat';\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    padding: 12px 5px;\r\n    color: #000;\r\n}\r\n\r\n.container-item-numbersize[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-size: 36px;\r\n    font-weight: 550;\r\n    color: rgb(41, 35, 35);\r\n    padding: 10px 0;\r\n}\r\n\r\n.container-item[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.15);\r\n    box-shadow: 2px 2px 5px #2a4243;\r\n}\r\n\r\n#container-item-1[_ngcontent-%COMP%], #container-item-2[_ngcontent-%COMP%], #container-item-3[_ngcontent-%COMP%], #container-item-4[_ngcontent-%COMP%] {\r\n    transition: all 1.3s;\r\n}\r\n\r\n#container-item-2[_ngcontent-%COMP%] {\r\n    padding-left: 17px;\r\n}\r\n\r\n#container-item-3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n   \r\n}\r\n\r\n#container-item-4[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#container-item-4[_ngcontent-%COMP%]   .container-item-numbersize[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: 400;\r\n}\r\n\r\n#container-item-4[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    color: #021015;\r\n    padding-top: 1em;\r\n}\r\n\r\n.p-32[_ngcontent-%COMP%]{\r\n    padding: 21px 16px;\r\n}\r\n\r\n.item-right[_ngcontent-%COMP%] {\r\n\r\n    font-weight: 12;\r\n\r\n    color: #1c098d;\r\n    padding-top: 1rem;\r\n    font-size: 2rem;\r\n    margin-bottom: 0.5rem;\r\n    line-height: 1.2;\r\n    margin-top: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.item-right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-decoration: none;\r\n    text-transform: none;\r\n    color: rgb(24, 4, 4);\r\n    font-weight: 540;\r\n    left: 58px;\r\n    top: 23px;\r\n}\r\n\r\n.item-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n   position: relative;\r\n    left: 110px;\r\n}\r\n\r\n\r\n\r\n.ig-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    padding: 16px 11px;\r\n    width: 25%;\r\n    height: 80%;\r\n\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    border: dotted 6px #9fdede;\r\n    border-bottom: none;\r\n    width: 8%;\r\n    margin: 5px auto;\r\n  }\r\n\r\n.grid-container[_ngcontent-%COMP%]{\r\n    \r\n    padding:15px 9%;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-bottom: 2rem;\r\n    text-shadow:  .4rem .4rem 0 rgba(0, 0, 0, .2);\r\n    text-transform: uppercase;\r\n    color: #444;\r\n    font-size: 5rem;\r\n    letter-spacing: .4rem;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    color:#16a085;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\r\n    gap:15px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]{\r\n    box-shadow: 0 5px 10px rgba(0,0,0,.2);\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    text-align: center;\r\n    padding:30px 20px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color:#444;\r\n    font-size: 22px;\r\n    padding:10px 0;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color:#777;\r\n    font-size: 15px;\r\n    line-height: 1.8;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    \r\n    font-size: 17px;\r\n    border-radius: 5px;\r\n    padding: 8px 25px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]   .grid-btn[_ngcontent-%COMP%]:hover{\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]   .grid-box-container[_ngcontent-%COMP%]   .grid-box[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 10px 15px rgba(0,0,0,.3);\r\n    transform:rotate(-5deg);\r\n}\r\n\r\n@media (max-width:768px){\r\n    .grid-container[_ngcontent-%COMP%]{\r\n        padding:20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDJCQUEyQjs7QUFFL0I7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTs7OztJQUlJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0hBQXNIO0lBQ3RILGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTs7SUFFZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUNBO0dBQ0csa0JBQWtCO0lBQ2pCLFdBQVc7QUFDZjs7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7QUFDRjtJQUNJLCtEQUErRDtJQUMvRCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCO2lCQUNhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFJOUIsdUJBQXVCO0FBQ25DOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlcjp2YXIoLS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgIGNvbG9yOnZhcigtLWdyZWVuKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJ0biBzcGFue1xyXG4gICAgcGFkZGluZzouN3JlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciBzcGFue1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDUzMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcblxyXG4uaXRlbS1sZWZ0LFxyXG4uaXRlbS1jZW50ZXIsXHJcbi5pdGVtLXJpZ2h0IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICAvKiBoZWlnaHQ6IGF1dG87ICovXHJcblxyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbiNpdGVtLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG59XHJcblxyXG4jaXRlbS0xIGltZyB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uaXRlbS1jZW50ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGZsZXgtYmFzaXM6IDU0NHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWluZXItaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg1O1xyXG4gICAgd2lkdGg6IDQyJTtcclxuICAgIGhlaWdodDogMzIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWl0ZW0gcCB7XHJcblxyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxMnB4IDVweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWl0ZW0tbnVtYmVyc2l6ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgY29sb3I6IHJnYig0MSwgMzUsIDM1KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMmE0MjQzO1xyXG59XHJcblxyXG4jY29udGFpbmVyLWl0ZW0tMSxcclxuI2NvbnRhaW5lci1pdGVtLTIsXHJcbiNjb250YWluZXItaXRlbS0zLFxyXG4jY29udGFpbmVyLWl0ZW0tNCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMS4zcztcclxufVxyXG5cclxuI2NvbnRhaW5lci1pdGVtLTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4jY29udGFpbmVyLWl0ZW0tMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG4jY29udGFpbmVyLWl0ZW0tNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250YWluZXItaXRlbS00IC5jb250YWluZXItaXRlbS1udW1iZXJzaXplIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyLWl0ZW0tNCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMjEwMTU7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcblxyXG4ucC0zMntcclxuICAgIHBhZGRpbmc6IDIxcHggMTZweDtcclxufVxyXG5cclxuLml0ZW0tcmlnaHQge1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiAxMjtcclxuXHJcbiAgICBjb2xvcjogIzFjMDk4ZDtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxufVxyXG5cclxuLml0ZW0tcmlnaHQgaDUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDI0LCA0LCA0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1NDA7XHJcbiAgICBsZWZ0OiA1OHB4O1xyXG4gICAgdG9wOiAyM3B4O1xyXG59XHJcbi5pdGVtLXJpZ2h0IHB7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG59XHJcbi8qIC5zdGVwc19pY29ue1xyXG4gICAgZmxvYXQ6IGlubGluZS1zdGFydDtcclxufSAqL1xyXG5cclxuLmlnLWxlZnQgaW1nIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMTFweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuXHJcbn1cclxuXHJcbmhye1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgNnB4ICM5ZmRlZGU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgd2lkdGg6IDglO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICB9XHJcbi5ncmlkLWNvbnRhaW5lcntcclxuICAgIC8qIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibHVldmlvbGV0LCBsaWdodGdyZWVuKTsgKi9cclxuICAgIHBhZGRpbmc6MTVweCA5JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogIC40cmVtIC40cmVtIDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjRyZW07XHJcbn1cclxuXHJcbi5oZWFkaW5nIHNwYW57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IzE2YTA4NTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIC5ncmlkLWJveC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNzBweCwgMWZyKSk7XHJcbiAgICBnYXA6MTVweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIC5ncmlkLWJveC1jb250YWluZXIgLmdyaWQtYm94e1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjMwcHggMjBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIC5ncmlkLWJveC1jb250YWluZXIgLmdyaWQtYm94IGltZ3tcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIC5ncmlkLWJveC1jb250YWluZXIgLmdyaWQtYm94IGgze1xyXG4gICAgY29sb3I6IzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgLmdyaWQtYm94LWNvbnRhaW5lciAuZ3JpZC1ib3ggcHtcclxuICAgIGNvbG9yOiM3Nzc7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgLmdyaWQtYm94LWNvbnRhaW5lciAuZ3JpZC1ib3ggLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiMzMzM7XHJcbiAgICBjb2xvcjojZmZmOyAqL1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciAuZ3JpZC1ib3gtY29udGFpbmVyIC5ncmlkLWJveCAuZ3JpZC1idG46aG92ZXJ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIgLmdyaWQtYm94LWNvbnRhaW5lciAuZ3JpZC1ib3g6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTpyb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAtby10cmFuc2Zvcm06cm90YXRlKC01ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNWRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EIQW":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_patients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/patients */ "a3f/");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/patient.service */ "Z18w");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");







function ResetPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email is not registered \uD83D\uDE30 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Got You!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome Partner \uD83D\uDE03 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ResetPasswordComponent {
    constructor(patientobj, patientServiceobj) {
        this.patientobj = patientobj;
        this.patientServiceobj = patientServiceobj;
    }
    ngOnInit() { }
    closeAlert() {
        this.showmsg = false;
        this.showsuccess = false;
    }
    submitForm() {
        this.closeAlert();
        this.patientServiceobj
            .forgotPassword(this.patientobj)
            .subscribe((res) => {
            console.log('Return Back...');
            if (res === null) {
                this.showmsg = true;
                console.log("User not registered");
            }
            else {
                this.showsuccess = true;
                console.log(res);
                console.log("Welcome User valid");
            }
        });
        this.patientobj.email = "";
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_patients__WEBPACK_IMPORTED_MODULE_1__["patients"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 20, vars: 6, consts: [[1, "wrapper"], [1, "title-text"], [1, "title", "login"], ["class", " alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", " alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "reg-email"], [1, "form-container"], [1, "form-inner"], ["name", "loginform", "novalidate", "", 1, "login", 3, "ngSubmit"], ["f", "ngForm"], [1, "field"], ["type", "text", "id", "InputEmail", "placeholder", "Email Address", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], [1, "field", "btn"], [1, "btn-layer"], ["type", "submit", "value", "Confirm", "id", "InputSubmit", 1, "form-control"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "pd-alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot/Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResetPasswordComponent_div_5_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_div_6_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please Enter Your Register Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.patientobj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.patientobj.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _r2.submitted && _r3.errors));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    height: 100%;\r\n    width: 100%;\r\n    place-items: center;\r\n  \r\n  }\r\n  [_ngcontent-%COMP%]::selection{\r\n    background: #fa4299;\r\n    color: #fff;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin: auto;\r\n    margin-top: 2em;\r\n    max-width: 390px;\r\n    padding: 30px;\r\n    border-radius: 5px; \r\n    box-shadow:0px 15px 15px rgba(146, 146, 42, 0.277);\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 200%;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    color: rgb(20,164,77);\r\n    opacity: .9;\r\n  }\r\n  .title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover{\r\n    opacity: 1;\r\n  }\r\n  \r\n  \r\n  input[type=\"radio\"][_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  input[type=\"text\"][_ngcontent-%COMP%]\r\n  {\r\n    text-transform: none;\r\n  }\r\n  .signup-link[_ngcontent-%COMP%], .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      font-size: 1.5em;\r\n  }\r\n  #signup[_ngcontent-%COMP%]:checked    ~ .slider-tab[_ngcontent-%COMP%]{\r\n    left: 50%;\r\n  }\r\n  #signup[_ngcontent-%COMP%]:checked    ~ label.signup[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    cursor: default;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  #signup[_ngcontent-%COMP%]:checked    ~ label.login[_ngcontent-%COMP%]{\r\n    color: #000;\r\n  }\r\n  #login[_ngcontent-%COMP%]:checked    ~ label.signup[_ngcontent-%COMP%]{\r\n    color: #000;\r\n  }\r\n  #login[_ngcontent-%COMP%]:checked    ~ label.login[_ngcontent-%COMP%]{\r\n    cursor: default;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n  .form-container[_ngcontent-%COMP%]   .form-inner[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 200%;\r\n  }\r\n  .form-container[_ngcontent-%COMP%]   .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    outline: none;\r\n    padding-left: 15px;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgrey;\r\n    border-bottom-width: 2px;\r\n    font-size: 17px;\r\n    transition: all 0.3s ease;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n    border-color: #fc83bb;\r\n    \r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n    color: #999;\r\n    transition: all 0.3s ease;\r\n  }\r\n  form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder{\r\n    color: #b3b3b3;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 30px;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fa4299;\r\n    text-decoration: none;\r\n  }\r\n  .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-decoration: underline;\r\n  }\r\n  form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-layer[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 300%;\r\n    position: absolute;\r\n    left: -100%;\r\n    background: -webkit-linear-gradient(right, #a445b2, #fa4299, #a445b2, #fa4299);\r\n    border-radius: 5px;\r\n    transition: all 0.4s ease;\r\n  }\r\n  form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-layer[_ngcontent-%COMP%]{\r\n    left: 0;\r\n  }\r\n  form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 0;\r\n    position: relative;\r\n    background: none;\r\n    border: none;\r\n    color: #fff;\r\n    padding-left: 0;\r\n    border-radius: 5px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n  }\r\n  .form-control[_ngcontent-%COMP%]{\r\n    box-shadow: none;\r\n  }\r\n  .show[_ngcontent-%COMP%]{\r\n    font-size: 1.8em;\r\n   margin-top: 1em;\r\n   margin-bottom: 1em;\r\n    \r\n    \r\n    height: 2em;\r\n    \r\n  }\r\n  .pd-alert[_ngcontent-%COMP%]{\r\n    padding-right: .6em; \r\n  }\r\n  .btn-close[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    padding-top: 1em;\r\n    padding-right: .7em;\r\n  \r\n   font-size: .8em;\r\n   \r\n  }\r\n  .reg-email[_ngcontent-%COMP%]{\r\n    margin: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1COztFQUVyQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7Ozs7Ozs7Ozs7S0FVRztFQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3Qkc7RUFDSDtJQUNFLGFBQWE7RUFDZjtFQUNBOztJQUVFLG9CQUFvQjtFQUN0QjtFQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZix5QkFBaUI7WUFBakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0RBQXdEO0VBQzFEO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQix1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEVBQThFO0lBQzlFLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLE9BQU87RUFDVDtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtHQUNqQixlQUFlO0dBQ2Ysa0JBQWtCO0lBQ2pCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7R0FFcEIsZUFBZTs7RUFFaEI7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBodG1sLGJvZHl7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICA6OnNlbGVjdGlvbntcclxuICAgIGJhY2tncm91bmQ6ICNmYTQyOTk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLndyYXBwZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgbWF4LXdpZHRoOiAzOTBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgYm94LXNoYWRvdzowcHggMTVweCAxNXB4IHJnYmEoMTQ2LCAxNDYsIDQyLCAwLjI3Nyk7XHJcbiAgfVxyXG4gIC53cmFwcGVyIC50aXRsZS10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gIH1cclxuICAud3JhcHBlciAudGl0bGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMjAsMTY0LDc3KTtcclxuICAgIG9wYWNpdHk6IC45O1xyXG4gIH1cclxuICAudGl0bGUtdGV4dCBoMTpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC8qIC53cmFwcGVyIC5zbGlkZS1jb250cm9sc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDMwcHggMCAxMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfSAqL1xyXG4gIC8qIC5zbGlkZS1jb250cm9scyAuc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcbiAgfVxyXG4gIC5zbGlkZS1jb250cm9scyBsYWJlbC5zaWdudXB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLnNsaWRlLWNvbnRyb2xzIC5zbGlkZXItdGFie1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC42OCwtMC41NSwwLjI2NSwxLjU1KTtcclxuICB9ICovXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl1cclxuICB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgLnNpZ251cC1saW5rLC5wYXNzLWxpbmsgYXtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgI3NpZ251cDpjaGVja2VkIH4gLnNsaWRlci10YWJ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG4gICNzaWdudXA6Y2hlY2tlZCB+IGxhYmVsLnNpZ251cHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gICNzaWdudXA6Y2hlY2tlZCB+IGxhYmVsLmxvZ2lue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dpbjpjaGVja2VkIH4gbGFiZWwuc2lnbnVwe1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gICNsb2dpbjpjaGVja2VkIH4gbGFiZWwubG9naW57XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgLndyYXBwZXIgLmZvcm0tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIgLmZvcm0taW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbm5lciBmb3Jte1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjY4LC0wLjU1LDAuMjY1LDEuNTUpO1xyXG4gIH1cclxuICAuZm9ybS1pbm5lciBmb3JtIC5maWVsZHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmZvcm0taW5uZXIgZm9ybSAuZmllbGQgaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICAuZm9ybS1pbm5lciBmb3JtIC5maWVsZCBpbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjogI2ZjODNiYjtcclxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggI2ZiNmFhZTsgKi9cclxuICB9XHJcbiAgLmZvcm0taW5uZXIgZm9ybSAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBmb3JtIC5maWVsZCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICB9XHJcbiAgLmZvcm0taW5uZXIgZm9ybSAucGFzcy1saW5re1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuZm9ybS1pbm5lciBmb3JtIC5zaWdudXAtbGlua3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLWlubmVyIGZvcm0gLnBhc3MtbGluayBhLFxyXG4gIC5mb3JtLWlubmVyIGZvcm0gLnNpZ251cC1saW5rIGF7XHJcbiAgICBjb2xvcjogI2ZhNDI5OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0taW5uZXIgZm9ybSAucGFzcy1saW5rIGE6aG92ZXIsXHJcbiAgLmZvcm0taW5uZXIgZm9ybSAuc2lnbnVwLWxpbmsgYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBmb3JtIC5idG57XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGZvcm0gLmJ0biAuYnRuLWxheWVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDMwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjYTQ0NWIyLCAjZmE0Mjk5LCAjYTQ0NWIyLCAjZmE0Mjk5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG4gIGZvcm0gLmJ0bjpob3ZlciAuYnRuLWxheWVye1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgZm9ybSAuYnRuIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNob3d7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIFxyXG4gIH1cclxuICAucGQtYWxlcnR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNmVtOyBcclxuICB9XHJcbiAgLmJ0bi1jbG9zZXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjdlbTtcclxuICBcclxuICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5yZWctZW1haWx7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "IGEt":
/*!************************************************************!*\
  !*** ./src/app/directives/validate-user-name.directive.ts ***!
  \************************************************************/
/*! exports provided: ValidateUserNameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateUserNameDirective", function() { return ValidateUserNameDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/customvalidation.service */ "WkmI");




class ValidateUserNameDirective {
    constructor(customValidator) {
        this.customValidator = customValidator;
    }
    validate(control) {
        return this.customValidator.userNameValidator(control);
    }
}
ValidateUserNameDirective.ɵfac = function ValidateUserNameDirective_Factory(t) { return new (t || ValidateUserNameDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"])); };
ValidateUserNameDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ValidateUserNameDirective, selectors: [["", "appValidateUserName", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ValidateUserNameDirective), multi: true }])] });


/***/ }),

/***/ "KWBv":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SideNavComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Book-Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/afteruserlogin");
} }
function SideNavComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Appointment-List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/afteruserlogin");
} }
function SideNavComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add-Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
} }
function SideNavComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/our_doctors");
} }
function SideNavComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update-Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
} }
class SideNavComponent {
    constructor(r) {
        this.r = r;
        this.user = "";
        this.email = "";
    }
    ngOnInit() {
        this.user = localStorage.getItem('Name');
        this.email = localStorage.getItem('email');
    }
    isUserlogedin() {
        if (localStorage.getItem('usertype') === 'Patient') {
            return true;
        }
    }
    isAdminlogin() {
        if (localStorage.getItem('usertype') === 'Admin') {
            return true;
        }
    }
    isDoctorlogin() {
        if (localStorage.getItem('usertype') === 'Doctor') {
            return true;
        }
    }
    logout() {
        localStorage.removeItem('usertype');
        localStorage.removeItem('Token');
        localStorage.clear();
        //OR
        sessionStorage.removeItem('usertype');
        sessionStorage.removeItem('Token');
        sessionStorage.clear();
        //STEP 3 -REDIRECTING
        this.r.navigate(['/home']);
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 40, vars: 10, consts: [[1, "sidebar", "open"], [1, "logo-details"], [1, "logo_name"], [1, "nav-list"], [1, "bx", "bx-search"], ["type", "text", "placeholder", "Search..."], [1, "tooltip"], [3, "routerLink"], [1, "bx", "bx-grid-alt"], [1, "links_name"], [1, "bx", "bx-home"], [4, "ngIf"], ["class", "fa fa-sign-in", 4, "ngIf"], [1, "bx", "bxs-contact"], [1, "profile"], [1, "profile-details"], [1, "name_job"], [1, "name"], [1, "job"], ["id", "log_out", 1, "bx", "bx-log-out", 3, "click"], [1, "bx", "bx-calendar"], [1, "bx", "bx-list-ul"], [1, "fa", "fa-sign-in"], [1, "bx", "bx-folder-plus", "bx-burst", "bx-rotate-90"], [1, "bx", "bx-doctor"], ["src", "../../assets/images/doctor icon.png", "alt", "", 2, "height", "20px", "width", "20px", "margin-bottom", "7px", "margin-left", "10px", "filter", "invert(1)"], [1, "bx", "bx-user"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Doctor Choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SideNavComponent_li_22_Template, 5, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SideNavComponent_li_23_Template, 5, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SideNavComponent_li_24_Template, 5, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SideNavComponent_li_25_Template, 6, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SideNavComponent_li_26_Template, 5, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact-Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_Template_i_click_39_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/afteruserlogin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/afteruserlogin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDoctorlogin() || ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin() || ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/afteruserlogin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\" , sans-serif;\r\n}\r\n.sidebar[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 78px;\r\n  background: #11101D;\r\n  padding: 6px 14px;\r\n  z-index: 99;\r\n  transition: all 0.5s ease;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  opacity: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  font-size: 22px;\r\n  transition: all 0.4s ease;\r\n  font-size: 23px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  height: 60px;\r\n  min-width: 50px;\r\n  font-size: 28px;\r\n  text-align: center;\r\n  line-height: 60px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  height: 100%;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin: 8px 0;\r\n  list-style: none;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: -20px;\r\n  left: calc(100% + 15px);\r\n  z-index: 3;\r\n  background: #fff;\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);\r\n  padding: 6px 12px;\r\n  border-radius: 4px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  opacity: 0;\r\n  white-space: nowrap;\r\n  pointer-events: none;\r\n  transition: 0s;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transition: all 0.4s ease;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  color: #FFF;\r\n  font-weight: 400;\r\n  outline: none;\r\n  height: 50px;\r\n  width: 100%;\r\n  width: 50px;\r\n  border: none;\r\n  border-radius: 12px;\r\n  transition: all 0.5s ease;\r\n  background: #1d1b31;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  padding: 0 20px 0 50px;\r\n  width: 100%;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translateY(-50%);\r\n  font-size: 22px;\r\n  background: #1d1b31;\r\n  color: #FFF;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover{\r\n  background: #1d1b31;\r\n  color: #FFF;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover{\r\n  background: #FFF;\r\n  color: #11101d;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  border-radius: 12px;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  transition: all 0.4s ease;\r\n  background: #11101D;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  background: #FFF;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.4s;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .links_name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n  transition: all 0.5s ease;\r\n  color: #11101D;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  line-height: 50px;\r\n  font-size: 18px;\r\n  border-radius: 12px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  height: 60px;\r\n  width: 78px;\r\n  left: 0;\r\n  bottom: -8px;\r\n  padding: 10px 14px;\r\n  background: #1d1b31;\r\n  transition: all 0.5s ease;\r\n  \r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 45px;\r\n  width: 45px;\r\n  object-fit: cover;\r\n  border-radius: 6px;\r\n  margin-right: 10px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n  white-space: nowrap;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n  background: #1d1b31;\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  border-radius: 0px;\r\n  transition: all 0.5s ease;\r\n}\r\n.sidebar.open[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  background: none;\r\n}\r\n@media (max-width: 420px) {\r\n  .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUdBQXlHO0FBQ3pHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiICwgc2Fucy1zZXJpZjtcclxufVxyXG4uc2lkZWJhcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA3OHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxMTEwMUQ7XHJcbiAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5vcGVue1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4uc2lkZWJhciAubG9nby1kZXRhaWxze1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmljb257XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgLmxvZ29fbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIub3BlbiAubG9nby1kZXRhaWxzIC5pY29uLFxyXG4uc2lkZWJhci5vcGVuIC5sb2dvLWRldGFpbHMgLmxvZ29fbmFtZXtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zaWRlYmFyIC5sb2dvLWRldGFpbHMgI2J0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLnNpZGViYXIub3BlbiAubG9nby1kZXRhaWxzICNidG57XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNpZGViYXIgaXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdi1saXN0e1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaWRlYmFyIGxpe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNpZGViYXIgbGkgLnRvb2x0aXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogY2FsYygxMDAlICsgMTVweCk7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMHM7XHJcbn1cclxuLnNpZGViYXIgbGk6aG92ZXIgLnRvb2x0aXB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4uc2lkZWJhci5vcGVuIGxpIC50b29sdGlwe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpZGViYXIgaW5wdXR7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiAjMWQxYjMxO1xyXG59XHJcbi5zaWRlYmFyLm9wZW4gaW5wdXR7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2lkZWJhciAuYngtc2VhcmNoe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogIzFkMWIzMTtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG4uc2lkZWJhci5vcGVuIC5ieC1zZWFyY2g6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzFkMWIzMTtcclxuICBjb2xvcjogI0ZGRjtcclxufVxyXG4uc2lkZWJhciAuYngtc2VhcmNoOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgY29sb3I6ICMxMTEwMWQ7XHJcbn1cclxuLnNpZGViYXIgbGkgYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogIzExMTAxRDtcclxufVxyXG4uc2lkZWJhciBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbn1cclxuLnNpZGViYXIgbGkgYSAubGlua3NfbmFtZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uc2lkZWJhci5vcGVuIGxpIGEgLmxpbmtzX25hbWV7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4uc2lkZWJhciBsaSBhOmhvdmVyIC5saW5rc19uYW1lLFxyXG4uc2lkZWJhciBsaSBhOmhvdmVyIGl7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICBjb2xvcjogIzExMTAxRDtcclxufVxyXG4uc2lkZWJhciBsaSBpe1xyXG4gIGhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4uc2lkZWJhciBsaS5wcm9maWxle1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDc4cHg7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC04cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxZDFiMzE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG59XHJcbi5zaWRlYmFyLm9wZW4gbGkucHJvZmlsZXtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLnNpZGViYXIgbGkgLnByb2ZpbGUtZGV0YWlsc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLnNpZGViYXIgbGkgaW1ne1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWRlYmFyIGxpLnByb2ZpbGUgLm5hbWUsXHJcbi5zaWRlYmFyIGxpLnByb2ZpbGUgLmpvYntcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zaWRlYmFyIGxpLnByb2ZpbGUgLmpvYntcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNpZGViYXIgLnByb2ZpbGUgI2xvZ19vdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kOiAjMWQxYjMxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG4uc2lkZWJhci5vcGVuIC5wcm9maWxlICNsb2dfb3V0e1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5zaWRlYmFyIGxpIC50b29sdGlwe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "MzDm":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");



class ServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 68, vars: 0, consts: [[1, "skills"], [1, "heading"], [1, "skill-row"], ["src", "https://img.freepik.com/premium-vector/cardiology-cardiologist-examine-human-heart-doctor-treat-heart-disease-check-patient-heartbeat-pulse-with-cardiogram-diagnosis-stroke_284092-2695.jpg?w=2000", "alt", "skill_img", 1, "left-img"], ["href", "#", 1, "btn", "btn-outline-info"], ["src", "https://img.freepik.com/free-vector/orthopedics-doctor-idea-joint-bone-treatment-human-anatomy-bone-structure-vector-illustration-cartoon-style_613284-388.jpg", "alt", "teamWork_img", 1, "right-img"], ["src", "https://img.freepik.com/free-vector/illustrated-medical-stickers-set_23-2148967488.jpg?w=2000", "alt", "skill_img", 1, "left-img"], ["src", "https://img.freepik.com/free-vector/gynecology-consultation-illustration_23-2148653151.jpg", "alt", "teamWork_img", 1, "right-img"], ["src", "https://img.freepik.com/free-vector/neurologist-concept-doctor-examine-human-brain-idea-doctor-caring-about-patient-health-medical-mri-diagnosis-consultation-vector-illustration-cartoon-style_613284-2421.jpg", "alt", "skill_img", 1, "left-img"], ["src", "https://img.freepik.com/premium-vector/annual-pediatric-visit-2d-vector-isolated-illustration_151150-5881.jpg?w=2000", "alt", "teamWork_img", 1, "right-img"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cardiology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Orthopedics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "genral Medicine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Obstetrics and Gynaecology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Neurology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pediatrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["section[_ngcontent-%COMP%]{\r\n    padding:2rem 9%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]:nth-child(even){\r\n    background: #f5f5f5;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-bottom: 2rem;\r\n    text-shadow:  .4rem .4rem 0 rgba(0, 0, 0, .2);\r\n    text-transform: uppercase;\r\n    color: #444;\r\n    font-size: 5rem;\r\n    letter-spacing: .4rem;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color:#16a085;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-top: 1rem;\r\n  padding: .5rem;\r\n  padding-left: 1rem;\r\n  border:var(--border);\r\n  border-radius: .5rem;\r\n  box-shadow: var(--box-shadow);\r\n  color:var(--green);\r\n  cursor: pointer;\r\n  font-size: 1.7rem;\r\n  background: #fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  padding:.7rem 1rem;\r\n  border-radius: .5rem;\r\n  background: var(--green);\r\n  color:#fff;\r\n  margin-left: .5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  background: var(--green);\r\n  color:#fff;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  color: var(--green);\r\n  background:#fff;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.skill-row[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin: 50px auto 50px auto;\r\n    text-align: left;\r\n    line-height: 2;\r\n  }\r\n\r\n.skill-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: rgb(61 106 9);;\r\n    font-size: 2.8rem;\r\n    text-shadow: .4rem .4rem 0 rgba(78 74 22 / 20%);\r\n  }\r\n\r\n.skill-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n.left-img[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    height: 10.6rem;\r\n    width: 28%;\r\n    float: left;\r\n    margin-right: 30px;\r\n  }\r\n\r\n.right-img[_ngcontent-%COMP%]{\r\n    border-radius: 70%;\r\n    height: 14.6rem;\r\n    width:40%;\r\n    float: right;\r\n    margin-left: 30px;\r\n   \r\n  }\r\n\r\np[_ngcontent-%COMP%] {\r\n    line-height: 2;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3Qyx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiwrQ0FBK0M7RUFDakQ7O0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjs7RUFFbkI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QiLCJmaWxlIjoic2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIHBhZGRpbmc6MnJlbSA5JTtcclxufVxyXG5cclxuc2VjdGlvbjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4gIC5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogIC40cmVtIC40cmVtIDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjRyZW07XHJcbn1cclxuXHJcbi5oZWFkaW5nIHNwYW57XHJcbiAgICBjb2xvcjojMTZhMDg1O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBib3JkZXI6dmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICBjb2xvcjp2YXIoLS1ncmVlbik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4gc3BhbntcclxuICBwYWRkaW5nOi43cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHNwYW57XHJcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuLnNraWxsLXJvdyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNraWxsLXJvdyBoM3tcclxuICAgIGNvbG9yOiByZ2IoNjEgMTA2IDkpOztcclxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IC40cmVtIC40cmVtIDAgcmdiYSg3OCA3NCAyMiAvIDIwJSk7XHJcbiAgfVxyXG4gIC5za2lsbC1yb3cgcHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQtaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMC42cmVtO1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICAgIGhlaWdodDogMTQuNnJlbTtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "N7e9":
/*!**********************************************************!*\
  !*** ./src/app/directives/password-pattern.directive.ts ***!
  \**********************************************************/
/*! exports provided: PasswordPatternDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPatternDirective", function() { return PasswordPatternDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/customvalidation.service */ "WkmI");



class PasswordPatternDirective {
    constructor(customValidator) {
        this.customValidator = customValidator;
    }
    validate(control) {
        return this.customValidator.patternValidator()(control);
    }
}
PasswordPatternDirective.ɵfac = function PasswordPatternDirective_Factory(t) { return new (t || PasswordPatternDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"])); };
PasswordPatternDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PasswordPatternDirective, selectors: [["", "appPasswordPattern", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: PasswordPatternDirective, multi: true }])] });


/***/ }),

/***/ "PDW6":
/*!********************************************************!*\
  !*** ./src/app/patientlogin/patientlogin.component.ts ***!
  \********************************************************/
/*! exports provided: PatientloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientloginComponent", function() { return PatientloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_patients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/patients */ "a3f/");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/patient.service */ "Z18w");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");








function PatientloginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invalid UID or Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientloginComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class PatientloginComponent {
    constructor(patientobj, patientserviceobj, router) {
        // this.FormDemo = this.fb.group(
        //   {
        this.patientobj = patientobj;
        this.patientserviceobj = patientserviceobj;
        this.router = router;
        //     email: ['', [Validators.required, Validators.email]],
        //     password: [
        //       '',
        //       [
        //         Validators.required,
        //       ],
        //     ],
        //   }
        // );
    }
    submitForm() {
        this.patientserviceobj.patientlogin(this.patientobj).subscribe((res) => {
            console.log('RETURN BACK');
            if (res) {
                console.log('VALID USER');
                // localStorage.setItem('Patient',JSON.stringify(res[0]));
                sessionStorage.setItem('Token', res.Token);
                sessionStorage.setItem('usertype', 'Patient');
                localStorage.setItem('usertype', 'Patient');
                sessionStorage.setItem('Name', res.getsearchdocument[0].Firstname + " " + res.getsearchdocument[0].lastname);
                localStorage.setItem('Name', res.getsearchdocument[0].Firstname + " " + res.getsearchdocument[0].lastname);
                sessionStorage.setItem('email', res.getsearchdocument[0].email);
                localStorage.setItem('email', res.getsearchdocument[0].email);
                sessionStorage.setItem('patientdetails', JSON.stringify(res.getsearchdocument[0]));
                this.router.navigate(['/afteruserlogin']);
            }
            else {
                // VISIBLE ERROR MESSAGE
                this.showmsg = true;
            }
            //CLEAR FORM
            this.patientobj.email = '';
            this.patientobj.password = '';
        });
    }
    closeAlert() {
        this.showmsg = false;
    }
    ngOnInit() {
    }
}
PatientloginComponent.ɵfac = function PatientloginComponent_Factory(t) { return new (t || PatientloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_patients__WEBPACK_IMPORTED_MODULE_1__["Patientlin"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PatientloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientloginComponent, selectors: [["app-patientlogin"]], decls: 27, vars: 9, consts: [[1, "wrapper"], ["class", " alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "title-text"], [1, "title", "login"], [1, "form-container"], [1, "form-inner"], ["name", "loginform", "novalidate", "", 1, "login", 3, "ngSubmit"], ["f", "ngForm"], [1, "field"], ["type", "text", "id", "InputEmail", "placeholder", "Email Address", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "id", "InputPassword", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], [1, "pass-link"], ["routerLink", "/reset-password"], [1, "field", "btn"], [1, "btn-layer"], ["type", "submit", "value", "Login", "id", "InputSubmit", 1, "form-control"], [1, "signup-link"], ["routerLink", "/patientReg"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "pd-alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function PatientloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientloginComponent_div_2_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Patient Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientloginComponent_Template_form_ngSubmit_8_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientloginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.patientobj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientloginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.patientobj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Not a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Signup now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.patientobj.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, _r1.submitted && _r2.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.patientobj.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, _r1.submitted && _r3.errors));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  place-items: center;\r\n\r\n}\r\n[_ngcontent-%COMP%]::selection{\r\n  background: rgb(20,164,77);\r\n  color: #fff;\r\n}\r\n.wrapper[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  margin: auto;\r\n  margin-top: 2em;\r\n  max-width: 390px;\r\n  padding: 30px;\r\n  border-radius: 5px; \r\n  box-shadow:0px 15px 15px rgba(146, 146, 42, 0.277);\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 200%;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  color: rgb(20,164,77);\r\n  opacity: .9;\r\n}\r\n.title-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover{\r\n  opacity: 1;\r\n}\r\n\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]\r\n{\r\n  text-transform: none;\r\n}\r\n.signup-link[_ngcontent-%COMP%], .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n}\r\n#signup[_ngcontent-%COMP%]:checked    ~ .slider-tab[_ngcontent-%COMP%]{\r\n  left: 50%;\r\n}\r\n#signup[_ngcontent-%COMP%]:checked    ~ label.signup[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n#signup[_ngcontent-%COMP%]:checked    ~ label.login[_ngcontent-%COMP%]{\r\n  color: #000;\r\n}\r\n#login[_ngcontent-%COMP%]:checked    ~ label.signup[_ngcontent-%COMP%]{\r\n  color: #000;\r\n}\r\n#login[_ngcontent-%COMP%]:checked    ~ label.login[_ngcontent-%COMP%]{\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.form-container[_ngcontent-%COMP%]   .form-inner[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 200%;\r\n}\r\n.form-container[_ngcontent-%COMP%]   .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  padding-left: 15px;\r\n  border-radius: 5px;\r\n  border: 1px solid lightgrey;\r\n  border-bottom-width: 2px;\r\n  font-size: 17px;\r\n  transition: all 0.3s ease;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\r\n  border-color: #fc83bb;\r\n  \r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{\r\n  color: #999;\r\n  transition: all 0.3s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder{\r\n  color: #b3b3b3;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fa4299;\r\n  text-decoration: none;\r\n}\r\n.form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .pass-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .form-inner[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\nform[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\nform[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-layer[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 300%;\r\n  position: absolute;\r\n  left: -100%;\r\n  background: -webkit-linear-gradient(right, #a445b2, #fa4299, #a445b2, #fa4299);\r\n  border-radius: 5px;\r\n  transition: all 0.4s ease;\r\n}\r\nform[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover   .btn-layer[_ngcontent-%COMP%]{\r\n  left: 0;\r\n}\r\nform[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 0;\r\n  position: relative;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n  padding-left: 0;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  box-shadow: none;\r\n}\r\n.show[_ngcontent-%COMP%]{\r\n  font-size: 1.8em;\r\n  margin-bottom: 1em;\r\n  \r\n  \r\n  height: 2em;\r\n  \r\n}\r\n.pd-alert[_ngcontent-%COMP%]{\r\n  padding-right: .6em; \r\n}\r\n.btn-close[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  padding-top: 1em;\r\n  padding-right: .7em;\r\n\r\n font-size: .8em;\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOzs7Ozs7Ozs7O0dBVUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0g7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxvQkFBb0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHdEQUF3RDtBQUMxRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhFQUE4RTtFQUM5RSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7Q0FFcEIsZUFBZTs7QUFFaEIiLCJmaWxlIjoicGF0aWVudGxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5odG1sLGJvZHl7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuOjpzZWxlY3Rpb257XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwLDE2NCw3Nyk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1heC13aWR0aDogMzkwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gIGJveC1zaGFkb3c6MHB4IDE1cHggMTVweCByZ2JhKDE0NiwgMTQ2LCA0MiwgMC4yNzcpO1xyXG59XHJcbi53cmFwcGVyIC50aXRsZS10ZXh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbn1cclxuLndyYXBwZXIgLnRpdGxle1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjAsMTY0LDc3KTtcclxuICBvcGFjaXR5OiAuOTtcclxufVxyXG4udGl0bGUtdGV4dCBoMTpob3ZlcntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi8qIC53cmFwcGVyIC5zbGlkZS1jb250cm9sc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMCAxMHB4IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0gKi9cclxuLyogLnNsaWRlLWNvbnRyb2xzIC5zbGlkZXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XHJcbn1cclxuLnNsaWRlLWNvbnRyb2xzIGxhYmVsLnNpZ251cHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uc2xpZGUtY29udHJvbHMgLnNsaWRlci10YWJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsLTAuNTUsMC4yNjUsMS41NSk7XHJcbn0gKi9cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl1cclxue1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5zaWdudXAtbGluaywucGFzcy1saW5rIGF7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbiNzaWdudXA6Y2hlY2tlZCB+IC5zbGlkZXItdGFie1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4jc2lnbnVwOmNoZWNrZWQgfiBsYWJlbC5zaWdudXB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbiNzaWdudXA6Y2hlY2tlZCB+IGxhYmVsLmxvZ2lue1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4jbG9naW46Y2hlY2tlZCB+IGxhYmVsLnNpZ251cHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4jbG9naW46Y2hlY2tlZCB+IGxhYmVsLmxvZ2lue1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ud3JhcHBlciAuZm9ybS1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZm9ybS1jb250YWluZXIgLmZvcm0taW5uZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjAwJTtcclxufVxyXG4uZm9ybS1jb250YWluZXIgLmZvcm0taW5uZXIgZm9ybXtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjY4LC0wLjU1LDAuMjY1LDEuNTUpO1xyXG59XHJcbi5mb3JtLWlubmVyIGZvcm0gLmZpZWxke1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5mb3JtLWlubmVyIGZvcm0gLmZpZWxkIGlucHV0e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uZm9ybS1pbm5lciBmb3JtIC5maWVsZCBpbnB1dDpmb2N1c3tcclxuICBib3JkZXItY29sb3I6ICNmYzgzYmI7XHJcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjZmI2YWFlOyAqL1xyXG59XHJcblxyXG4uZm9ybS1pbm5lciBmb3JtIC5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5mb3JtIC5maWVsZCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbn1cclxuLmZvcm0taW5uZXIgZm9ybSAucGFzcy1saW5re1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZm9ybS1pbm5lciBmb3JtIC5zaWdudXAtbGlua3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9ybS1pbm5lciBmb3JtIC5wYXNzLWxpbmsgYSxcclxuLmZvcm0taW5uZXIgZm9ybSAuc2lnbnVwLWxpbmsgYXtcclxuICBjb2xvcjogI2ZhNDI5OTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmZvcm0taW5uZXIgZm9ybSAucGFzcy1saW5rIGE6aG92ZXIsXHJcbi5mb3JtLWlubmVyIGZvcm0gLnNpZ251cC1saW5rIGE6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuZm9ybSAuYnRue1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuZm9ybSAuYnRuIC5idG4tbGF5ZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCwgI2E0NDViMiwgI2ZhNDI5OSwgI2E0NDViMiwgI2ZhNDI5OSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbn1cclxuZm9ybSAuYnRuOmhvdmVyIC5idG4tbGF5ZXJ7XHJcbiAgbGVmdDogMDtcclxufVxyXG5mb3JtIC5idG4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgXHJcbn1cclxuLnBkLWFsZXJ0e1xyXG4gIHBhZGRpbmctcmlnaHQ6IC42ZW07IFxyXG59XHJcbi5idG4tY2xvc2V7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IC43ZW07XHJcblxyXG4gZm9udC1zaXplOiAuOGVtO1xyXG4gXHJcbn0iXX0= */"] });


/***/ }),

/***/ "SvST":
/*!**********************************************!*\
  !*** ./src/app/doctors/doctors.component.ts ***!
  \**********************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-nav/side-nav.component */ "KWBv");


class DoctorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DoctorsComponent.ɵfac = function DoctorsComponent_Factory(t) { return new (t || DoctorsComponent)(); };
DoctorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsComponent, selectors: [["app-doctors"]], decls: 2, vars: 0, template: function DoctorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__["SideNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3JzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WkmI":
/*!******************************************************!*\
  !*** ./src/app/_service/customvalidation.service.ts ***!
  \******************************************************/
/*! exports provided: CustomvalidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function() { return CustomvalidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomvalidationService {
    constructor() { }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
    MatchPassword(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordControl.setErrors(null);
            }
        };
    }
    userNameValidator(userControl) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (this.validateUserName(userControl.value)) {
                    resolve({ userNameNotAvailable: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    validateUserName(userName) {
        const UserList = ['ankit', 'admin', 'user', 'superuser'];
        return (UserList.indexOf(userName) > -1);
    }
}
CustomvalidationService.ɵfac = function CustomvalidationService_Factory(t) { return new (t || CustomvalidationService)(); };
CustomvalidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomvalidationService, factory: CustomvalidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XLOz":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 2, vars: 0, template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Z18w":
/*!*********************************************!*\
  !*** ./src/app/_service/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PatientService {
    constructor(httpclientobj) {
        this.httpclientobj = httpclientobj;
        this._URL = 'http://localhost:5000/patient';
    }
    addNewUserUsingPost(patient1) {
        console.log(patient1.Firstname + " " + patient1.lastname);
        let url = this._URL + "/register";
        // CALL POST FUNCTION USING http
        return this.httpclientobj.post(url, patient1);
    }
    patientlogin(patient) {
        let url = this._URL + "/login";
        return this.httpclientobj.post(url, patient);
    }
    forgotPassword(patient) {
        let url = this._URL + "/forgot-password";
        return this.httpclientobj.post(url, patient);
    }
    profile() {
        let url = this._URL + "/afteruserlogin";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Authorization", `bearer ${sessionStorage.getItem('Token')}`);
        this.httpclientobj.post(url, {}, { headers }).subscribe((res) => {
        });
    }
}
PatientService.ɵfac = function PatientService_Factory(t) { return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PatientService, factory: PatientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doctors/doctors.component */ "SvST");
/* harmony import */ var _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patient-registration/patient-registration.component */ "u4Dr");
/* harmony import */ var _patientlogin_patientlogin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patientlogin/patientlogin.component */ "PDW6");
/* harmony import */ var _doctorlogin_doctorlogin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doctorlogin/doctorlogin.component */ "1KCA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_patients__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_models/patients */ "a3f/");
/* harmony import */ var _models_doctors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_models/doctors */ "fmmr");
/* harmony import */ var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/password-pattern.directive */ "N7e9");
/* harmony import */ var _directives_match_password_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/match-password.directive */ "9jgq");
/* harmony import */ var _directives_validate_user_name_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/validate-user-name.directive */ "IGEt");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "KWBv");
/* harmony import */ var _after_user_login_after_user_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./after-user-login/after-user-login.component */ "2sIq");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./demo/demo.component */ "7+xq");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "EIQW");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        _models_patients__WEBPACK_IMPORTED_MODULE_14__["patients"],
        _models_doctors__WEBPACK_IMPORTED_MODULE_15__["doctors"],
        _models_patients__WEBPACK_IMPORTED_MODULE_14__["Patientlin"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
        _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_9__["DoctorsComponent"],
        _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_10__["PatientRegistrationComponent"],
        _patientlogin_patientlogin_component__WEBPACK_IMPORTED_MODULE_11__["PatientloginComponent"],
        _doctorlogin_doctorlogin_component__WEBPACK_IMPORTED_MODULE_12__["DoctorloginComponent"],
        _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_16__["PasswordPatternDirective"],
        _directives_match_password_directive__WEBPACK_IMPORTED_MODULE_17__["MatchPasswordDirective"],
        _directives_validate_user_name_directive__WEBPACK_IMPORTED_MODULE_18__["ValidateUserNameDirective"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_19__["SideNavComponent"],
        _after_user_login_after_user_login_component__WEBPACK_IMPORTED_MODULE_20__["AfterUserLoginComponent"],
        _demo_demo_component__WEBPACK_IMPORTED_MODULE_21__["DemoComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_22__["ResetPasswordComponent"],
        _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_23__["AdminLoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]] }); })();


/***/ }),

/***/ "a3f/":
/*!*************************************!*\
  !*** ./src/app/_models/patients.ts ***!
  \*************************************/
/*! exports provided: patients, Patientlin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patients", function() { return patients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patientlin", function() { return Patientlin; });
class patients {
}
class Patientlin {
}


/***/ }),

/***/ "fmmr":
/*!************************************!*\
  !*** ./src/app/_models/doctors.ts ***!
  \************************************/
/*! exports provided: doctors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doctors", function() { return doctors; });
class doctors {
}


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Doctor's Choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nam sequi impedit voluptatibus quod placeat aliquam? Expedita voluptates blanditiis pariatur. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Doctor Consultation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lab Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Health care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "News & Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Doctor's Choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Kolkata, NewTown 700165, India");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " doctorchoice@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " + 01 234 567 88");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " + 01 234 567 89");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u00A9 2023 Copyright: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sk Badsha, All Right Reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor() { }
    ngOnInit() {
        if (localStorage.getItem('usertype') !== null) {
            this.userExist = true;
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-center", "text-lg-start", "text-white", 2, "background-color", "#1c2331"], [1, ""], [1, "container", "text-center", "text-md-start", "mt-5"], [1, "row", "mt-3"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], [1, "text-uppercase", "fw-bold"], [1, "mb-4", "mt-0", "d-inline-block", "mx-auto", 2, "width", "60px", "background-color", "#7c4dff", "height", "2px"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "#", 1, "a-hov"], ["href", "#", 1, ""], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "#!", 1, "a-hov"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], [1, "fas", "fa-home", "mr-3"], ["href", "mailto: doctorchoice@example.com"], [1, "fas", "fa-phone", "mr-3"], [1, "fas", "fa-print", "mr-3"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 63, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".he-5[_ngcontent-%COMP%] {\r\n\r\n    text-align: center !important;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%] {\r\n    margin-top: 3rem;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n   \r\n    font-size: 2rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    color: #ffff;\r\n}\r\n\r\na[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: #222222;\r\n}\r\n\r\n.p-3[_ngcontent-%COMP%]{\r\n    font-size: 1.7rem;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    border: inherit;\r\n    border-bottom: inherit;\r\n    width: inherit;\r\n    margin: inherit;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtFQUNqQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZS01IHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTQge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuaDZ7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5wPmEge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5hIDpob3ZlcntcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbi5wLTN7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/about");
} }
function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Doctors ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/our_doctors");
} }
function NavbarComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 1. Patient Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/patientReg");
} }
function NavbarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 2. Patient login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/patientlogin");
} }
function NavbarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Doctor login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/doctorlogin");
} }
function NavbarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admin login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/Admin-Login");
} }
function NavbarComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
} }
function NavbarComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Update Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
} }
function NavbarComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Appointment List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " (click)=\"logout()\" > logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(r) {
        this.r = r;
        this.menuType = 'default';
    }
    isUserlogedin() {
        if (localStorage.getItem('usertype') === 'Patient') {
            return true;
        }
    }
    isAdminlogin() {
        if (localStorage.getItem('usertype') === 'Admin') {
            return true;
        }
    }
    isDoctorlogin() {
        if (localStorage.getItem('usertype') === 'Doctor') {
            return true;
        }
    }
    logout() {
        localStorage.removeItem('usertype');
        localStorage.removeItem('Token');
        localStorage.clear();
        //OR
        sessionStorage.removeItem('usertype');
        sessionStorage.removeItem('Token');
        sessionStorage.clear();
        //STEP 3 -REDIRECTING
        this.r.navigate(['/home']);
    }
    ngOnInit() {
        // this.r.events.subscribe((val: any) => {
        //   console.log("Inside ngonIt")
        //   if (val.url) {
        //     console.warn(val.url);
        //     if (localStorage.getItem('admin') && val.url.includes('admin')) {
        //       let adminStore = localStorage.getItem('admin');
        //       let adminData = adminStore && JSON.parse(adminStore)[0];
        //       // this.adminName = adminData.name;
        //       console.log('Inside If Method');
        //       this.menuType = 'admin';
        //     }
        //      else if (
        //       localStorage.getItem('Patient')
        //     ) {
        //       let userStore = localStorage.getItem('Patient');
        //       let userData = userStore && JSON.parse(userStore);
        //       // this.patientName = userData.name;
        //       console.log('Inside else if 1 Method');
        //       this.menuType = 'Patient';
        //       // this.product.getCartList(userData.id);
        //     } else if (localStorage.getItem('doctor')) {
        //       let doctorStore = localStorage.getItem('user');
        //       let doctorData = doctorStore && JSON.parse(doctorStore);
        //       console.log('Inside else If 2 Method');
        //       this.menuType = 'doctor';
        //     }
        //     else {
        //       // this.menuType = 'default';
        //       console.log('Insid else If 3 Method');
        //     }
        //   }
        // });
        // console.log('Inside On Submit');
        // console.log("MenuType: " + this.menuType);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 28, vars: 13, consts: [[1, "menu-container"], ["type", "checkbox", "aria-label", "Toggle menu"], [1, "menu"], [1, "fa", "fa-home"], ["rel", "noopener noreferrer", 3, "routerLink"], [4, "ngIf"], ["href", "#contact", "rel", "noopener noreferrer"], [1, "right-nav"], ["class", "fa fa-sign-up mg-8", 4, "ngIf"], ["class", "fa fa-sign-in mg-8", 4, "ngIf"], ["class", "fa fa-sign-in", 4, "ngIf"], ["class", "fa fa-sign-in mg-8 ", 4, "ngIf"], ["class", "fa fa-sign-in df-1", 4, "ngIf"], [1, "fa", "fa-sign-up", "mg-8"], [3, "routerLink"], [1, "fa", "fa-sign-in", "mg-8"], [1, "fa", "fa-sign-in"], [1, "fa", "fa-sign-in", "df-1"], ["href", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_li_19_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_li_20_Template, 3, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_li_22_Template, 3, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_li_23_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_li_24_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_li_25_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_li_27_Template, 2, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserlogedin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin() || ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserlogedin() && !ctx.isAdminlogin() && !ctx.isDoctorlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserlogedin() && !ctx.isAdminlogin() && !ctx.isDoctorlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserlogedin() && !ctx.isAdminlogin() && !ctx.isDoctorlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserlogedin() && !ctx.isAdminlogin() && !ctx.isDoctorlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDoctorlogin() || ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminlogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserlogedin() || ctx.isAdminlogin() || ctx.isDoctorlogin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n    font-family: Sans-Serif;\r\n    margin: 0;\r\n    position: sticky;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%] {\r\n    position:sticky;\r\n    top: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #fe9934 !important;\r\n    padding: 15px;  z-index: 1;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .menu-logo[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n    margin: 0 20px;\r\n  }\r\n  \r\n  .menu-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 40px;\r\n    max-width: 100px;\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #001c21;\r\n    font-weight: 500;\r\n    transition: color 0.3s ease;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-shadow: 1px 1px rgba(120, 103, 103, 0.5);\r\n    color: rgb(7, 105, 148);\r\n    \r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 35px;\r\n    height: 25px;\r\n    margin: 0;\r\n    position: absolute;\r\n    cursor: pointer;\r\n   \r\n    z-index: 2; \r\n    -webkit-touch-callout: none;\r\n  }\r\n  \r\n  .fa[_ngcontent-%COMP%]{\r\n    font: normal normal normal 14px/1.5 FontAwesome;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  \r\n  \r\n  \r\n  .menu-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 33px;\r\n    height: 4px;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    background: #cdcdcd;\r\n    border-radius: 3px;\r\n    opacity: 0;\r\n    z-index: 1;\r\n    transform-origin: 4px 0px;\r\n    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                opacity 0.55s ease;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\r\n    transform-origin: 0% 0%;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    transform-origin: 0% 100%;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: rotate(45deg) translate(3px,-1px);\r\n    background: #232323;\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-child(4) {\r\n    opacity: 0;\r\n    transform: rotate(0deg) scale(0.2, 0.2);\r\n  }\r\n  \r\n  .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ span[_ngcontent-%COMP%]:nth-child(3) {\r\n    transform: rotate(-45deg) translate(-5px,11px);\r\n  }\r\n  \r\n  .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n  }\r\n  \r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 10px 0;\r\n    margin: 4px;\r\n    font-size: 19px;\r\n  }\r\n  \r\n  \r\n  \r\n  .right-nav[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n  \r\n  .right-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin: 4px;\r\n  }\r\n  \r\n  .fa-sign-up[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(0, 128, 0);\r\n    border-radius: 6px;\r\n    background-color:rgb(0, 128, 0);\r\n    \r\n  }\r\n  \r\n  .fa-sign-up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fa-sign-in[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\r\n    color: aliceblue;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .fa-sign-in[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(0, 128, 0);\r\n    border-radius: 6px;\r\n    background-color:rgb(0, 128, 0);\r\n    \r\n  }\r\n  \r\n  .right-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #010101;\r\n  }\r\n  \r\n  .mg-8[_ngcontent-%COMP%]{\r\n    margin-right: 0.5em;\r\n  }\r\n  \r\n  li.df-1[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  \r\n  \r\n  \r\n  @media only screen and (max-width: 767px) { \r\n    .menu-container[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n      align-items: flex-end;\r\n    }\r\n    \r\n    .menu-logo[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 50%;\r\n      transform: translateY(-50%);\r\n    }\r\n  \r\n    .menu-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n      max-height: 30px;\r\n    }\r\n  \r\n    .menu[_ngcontent-%COMP%] {\r\n      position:absolute;\r\n      box-sizing: border-box;\r\n      width: 300px;\r\n      right: -300px;\r\n      top: 0;\r\n      margin: -20px;\r\n      padding: 75px 50px 50px;\r\n      background: #cdcdcd;\r\n      -webkit-font-smoothing: antialiased;\r\n      \r\n      transform-origin: 0% 0%;\r\n      transform: translateX(0%);\r\n      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);\r\n    }\r\n  \r\n    .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\r\n      transform: translateX(-100%);\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  @media only screen and (min-width: 768px) { \r\n    .menu-container[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  \r\n    .menu-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    \r\n    .menu-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .menu[_ngcontent-%COMP%] {\r\n      position: relative;\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  \r\n    .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      padding: 0;\r\n    }\r\n  \r\n    .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      padding: 0 20px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhLEdBQUcsVUFBVTtJQUMxQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsNkNBQTZDO0lBQzdDLHVCQUF1Qjs7RUFFekI7O0VBSUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7R0FDaEIsMkJBQTJCO0lBQzFCLFVBQVUsRUFBRSxvQ0FBb0M7SUFDaEQsMkJBQTJCO0VBQzdCOztFQUNBO0lBQ0UsK0NBQStDO0lBQy9DLGdEQUFnRDtFQUNsRDs7RUFFQSxnQkFBZ0I7O0VBQ2hCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCOztrQ0FFOEI7RUFDaEM7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBR0E7O0tBRUc7O0VBR0g7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLCtCQUErQjs7RUFFakM7O0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsK0JBQStCOztFQUVqQzs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUEsa0JBQWtCOztFQUNsQjtJQUNFO01BQ0Usc0JBQXNCO01BQ3RCLHFCQUFxQjtJQUN2Qjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtNQUNSLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixNQUFNO01BQ04sYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsbUNBQW1DO01BQ25DLHlDQUF5QztNQUN6Qyx1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLDBEQUEwRDtJQUM1RDs7SUFFQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGOztFQUVBLG1CQUFtQjs7RUFDbkI7SUFDRTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7SUFFQSxnQkFBZ0I7SUFDaEI7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGFBQWE7TUFDYiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsVUFBVTtJQUNaOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjpzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZTk5MzQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDE1cHg7ICB6LWluZGV4OiAxO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtbG9nbyB7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubWVudS1sb2dvIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICBcclxuICAubWVudS1jb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMWMyMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAubWVudS1jb250YWluZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDEyMCwgMTAzLCAxMDMsIDAuNSk7XHJcbiAgICBjb2xvcjogcmdiKDcsIDEwNSwgMTQ4KTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIC5tZW51LWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAvKiBvcGFjaXR5OiAwOyAgaGlkZSB0aGlzICovXHJcbiAgICB6LWluZGV4OiAyOyAvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovXHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5mYXtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMS41IEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKiBCdXJnZXIgbWVudSAqL1xyXG4gIC5tZW51LWNvbnRhaW5lciBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywwLjIsMC4wNSwxLjApLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5IDAuNTVzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWNvbnRhaW5lciBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIH1cclxuICBcclxuICAubWVudS1jb250YWluZXIgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDNweCwtMXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNXB4LDExcHgpO1xyXG4gIH1cclxuICBcclxuICAubWVudSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubWVudSBsaSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcblxyXG5cclxuICAvKiAucmlnaHQtbmF2IGF7XHJcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICB9ICovXHJcblxyXG4gIFxyXG4gIC5yaWdodC1uYXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yaWdodC1uYXYgbGl7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICB9XHJcbiAgLmZhLXNpZ24tdXB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTI4LCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDEyOCwgMCk7XHJcbiAgICBcclxuICB9XHJcbiAgLmZhLXNpZ24tdXAgYSwgLmZhLXNpZ24taW4gYXtcclxuXHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmZhLXNpZ24taW57XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTI4LCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDEyOCwgMCk7XHJcbiAgICBcclxuICB9XHJcbiAgLnJpZ2h0LW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gIH1cclxuXHJcbiAgLm1nLTh7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgbGkuZGYtMSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAvKiBtb2JpbGUgc3R5bGVzICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnUtbG9nbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxuICBcclxuICAgIC5tZW51LWxvZ28gaW1nIHtcclxuICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5tZW51IHtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgcmlnaHQ6IC0zMDBweDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IC0yMHB4O1xyXG4gICAgICBwYWRkaW5nOiA3NXB4IDUwcHggNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKTtcclxuICAgIH1cclxuICBcclxuICAgIC5tZW51LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLm1lbnUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBkZXNrdG9wIHN0eWxlcyAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5tZW51LWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKiBCdXJnZXIgbWVudSAqL1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1lbnUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVudSB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWVudSBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "u4Dr":
/*!************************************************************************!*\
  !*** ./src/app/patient-registration/patient-registration.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegistrationComponent", function() { return PatientRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_patients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/patients */ "a3f/");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/patient.service */ "Z18w");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_match_password_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/match-password.directive */ "9jgq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/password-pattern.directive */ "N7e9");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");










function PatientRegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registration Completed successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientRegistrationComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This email is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientRegistrationComponent_div_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only 10 digits are Allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Your City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Your State. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter zip-code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientRegistrationComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords doesnot match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["password", "confirmpassword"]; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class PatientRegistrationComponent {
    constructor(Patientobj, patientserviceobj, router) {
        this.Patientobj = Patientobj;
        this.patientserviceobj = patientserviceobj;
        this.router = router;
        // this.FormDemo = this.fb.group(
        //   {
        //     Firstname: ['', Validators.required],
        //     lastname: ['', [Validators.required]],
        //     email: ['', [Validators.required, Validators.email]],
        //     mobileno: [
        //       '',
        //       [Validators.required, Validators.pattern('^(0)?[0-9]{10}$')],
        //     ],
        //     address1: ['', [Validators.required]],
        //     address2: ['', [Validators.required]],
        //     city: ['', [Validators.required]],
        //     state: ['', [Validators.required]],
        //     zip: ['', [Validators.required]],
        //     password: [
        //       '',
        //       [
        //         Validators.required,
        //         Validators.minLength(6),
        //         Validators.maxLength(15),
        //       ],
        //     ],
        //     termsConditionsStatus: [],
        //     confirmpassword: [null, Validators.compose([Validators.required])],
        //   },
        //   {
        //     validator: this.ConfirmedValidator('password', 'confirmpassword'),
        //   }
        // );
    }
    // ConfirmedValidator(controlName: string, matchingControlName: string) {
    //   return (formGroup: FormGroup) => {
    //     const control = formGroup.controls[controlName];
    //     const matchingControl = formGroup.controls[matchingControlName];
    //     if (
    //       matchingControl.errors &&
    //       !matchingControl.errors.confirmedValidator
    //     ) {
    //       return;
    //     }
    //     if (control.value !== matchingControl.value) {
    //       matchingControl.setErrors({ confirmedValidator: true });
    //     } else {
    //       matchingControl.setErrors(null);
    //     }
    //   };
    // }
    ngOnInit() { }
    setDataInForm() {
        // this.form.Firstname.setValue('Sk');
        // this.form.lastname.setValue('Badsha');
        // this.form.email.setValue('badshabhota@gmail.com');
        // this.form.mobileno.setValue('0123456789');
        // this.form.address1.setValue('NewTown, Kolkata');
        // this.form.address2.setValue('Purba Bardhaman, West Bengal');
        // this.form.city.setValue('Kolkata');
        // this.form.state.setValue('West Bengal 98831216845');
        // this.form.zip.setValue(' 700135');
        // this.form.termsConditionsStatus.setValue(false);
        // this.form.password.setValue('Admin@123');
        // this.form.confirmpassword.setValue('Admin@123');
        this.Patientobj.Firstname = "Sk";
        this.Patientobj.lastname = "Badsha";
        this.Patientobj.email = "badshabhota@gmail.com";
        this.Patientobj.mobileno = "0123456789";
        this.Patientobj.address1 = "NewTown, Kolkata";
        this.Patientobj.address2 = "Purba Bardhaman, West Bengal";
        this.Patientobj.city = "Kolkata";
        this.Patientobj.state = "West Bengal";
        this.Patientobj.zip = "700135";
        this.Patientobj.password = "Admin@123";
        this.Patientobj.confirmpassword = "Admin@123";
    }
    submitForm(f) {
        // if (this.FormDemo.invalid) {
        //   return;
        // }
        //FOR INSERT
        this.patientserviceobj
            .addNewUserUsingPost(this.Patientobj)
            .subscribe((res) => {
            console.log('RETURN BACK');
            console.log(res.length);
            if (res.length >= 0) {
                this.errormsg = true;
            }
            else {
                // VISIBLE REGISTRATION SUCCESS MESSAGE
                f.reset();
                //CLEAR FORM
                // this.Patientobj.Firstname = '';
                // this.Patientobj.lastname = '';
                // this.Patientobj.email = '';
                // this.Patientobj.mobileno= '';
                // this.Patientobj.address1 = '';
                // this.Patientobj.address1 = '';
                // this.Patientobj.state = '';
                // this.Patientobj.zip = '';
                // this.Patientobj.password = '';
                // this.Patientobj.confirmpassword = '';
                // this.Patientobj.city= '';
                setTimeout(function () {
                    window.location.reload();
                }, 3000);
                this.showmsg = true;
            }
            // alert(" REGISTRATION SUCCESS");
            // this.router.navigate(['/userlogin']);
        });
        console.log('First Name :- ' + this.Patientobj.Firstname);
        console.log('Last Name :- ' + this.Patientobj.lastname);
        console.log('Email :- ' + this.Patientobj.email);
        console.log('Contact No :- ' + this.Patientobj.mobileno);
        console.log('Address1 :- ' + this.Patientobj.address1);
        console.log('Address2 :- ' + this.Patientobj.address2);
        console.log('City :- ' + this.Patientobj.city);
        console.log('State :- ' + this.Patientobj.state);
        console.log('Zip :- ' + this.Patientobj.zip);
    }
    closeAlert() {
        this.showmsg = false;
        this.errormsg = false;
    }
}
PatientRegistrationComponent.ɵfac = function PatientRegistrationComponent_Factory(t) { return new (t || PatientRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models_patients__WEBPACK_IMPORTED_MODULE_1__["patients"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PatientRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientRegistrationComponent, selectors: [["app-patient-registration"]], decls: 116, vars: 62, consts: [["align", "center"], [1, "form"], ["name", "form", "novalidate", "", 1, "p-5", 3, "appMatchPassword", "ngSubmit"], ["f", "ngForm"], ["type", "button", 1, "btn", "btn-set", 3, "click"], [1, "text-success"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "form-row", "m-8"], [1, "row"], [1, "col", "col-md-6"], [1, "mb-3"], ["for", "inputFirstname"], ["type", "text", "id", "inputfistname4", "placeholder", "Enter First Name", "name", "Firstname", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["Firstname", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "inputlastname"], ["type", "text", "id", "inputlastname4", "placeholder", "Enter Last Name", "name", "lastname", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["lastname", "ngModel"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Enter Your Email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], ["type", "text", "id", "inputMobileno", "placeholder", "Enter Your Contact Number", "name", "mobileno", "required", "", "pattern", "^((\\\\+91-?)|0)?[0-9]{10}$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["mobileno", "ngModel"], [1, "form-group", "col-md-6"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", "name", "address1", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["address1", "ngModel"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", "name", "address2", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["address2", "ngModel"], [1, "form-row"], ["for", "inputCity"], ["type", "text", "id", "inputCity", "placeholder", "Enter Your City", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["city", "ngModel"], ["for", "inputState"], ["aria-label", "Default select example", "name", "state", "required", "", 1, "form-select", 3, "ngModel", "ngClass", "ngModelChange"], ["state", "ngModel"], ["ngValue", "-1", "disabled", "", 1, "dropdown-item", 3, "selected"], ["value", "West Bengal"], ["value", "Delhi"], ["value", "Mumbai"], ["for", "inputZip"], ["type", "text", "id", "inputZip", "name", "zip", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["zip", "ngModel"], ["for", "InputPassword"], ["type", "password", "id", "InputPassword", "name", "password", "required", "", "appPasswordPattern", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["password", "ngModel"], ["for", "inputConfirmPassword"], ["type", "text", "id", "inputConfirmPassword", "name", "confirmpassword", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["confirmpassword", "ngModel"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", "name", "termsConditionsStatus", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label", 2, "color", "#0b1691"], ["href", "", 2, "text-decoration", "underline", "color", "#2232ddde"], ["type", "button", "type", "submit", "data-mdb-ripple-color", "light", 1, "btn", "btn-outline-success", "btn-lg", "btn-rounded", "button-1"], [1, "container", "signin"], ["routerLink", "/patientlogin"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "pd-alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "alert", "alert-danger"]], template: function PatientRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PatientRegistrationComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.form.valid && ctx.submitForm(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientRegistrationComponent_Template_button_click_5_listener() { return ctx.setDataInForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Set Default Data In Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patient Registration Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PatientRegistrationComponent_div_9_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PatientRegistrationComponent_div_10_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_17_listener($event) { return ctx.Patientobj.Firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PatientRegistrationComponent_div_19_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_24_listener($event) { return ctx.Patientobj.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PatientRegistrationComponent_div_26_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_32_listener($event) { return ctx.Patientobj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PatientRegistrationComponent_div_34_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PatientRegistrationComponent_div_35_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mobile No*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_40_listener($event) { return ctx.Patientobj.mobileno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PatientRegistrationComponent_div_42_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PatientRegistrationComponent_div_43_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_47_listener($event) { return ctx.Patientobj.address1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_52_listener($event) { return ctx.Patientobj.address2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "City*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_58_listener($event) { return ctx.Patientobj.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PatientRegistrationComponent_div_60_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "State*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_select_ngModelChange_66_listener($event) { return ctx.Patientobj.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Select an Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, PatientRegistrationComponent_div_76_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Zip*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_81_listener($event) { return ctx.Patientobj.zip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PatientRegistrationComponent_div_83_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_89_listener($event) { return ctx.Patientobj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, PatientRegistrationComponent_div_91_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, PatientRegistrationComponent_div_92_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Confirm Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientRegistrationComponent_Template_input_ngModelChange_97_listener($event) { return ctx.Patientobj.confirmpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, PatientRegistrationComponent_div_99_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, PatientRegistrationComponent_div_100_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Agree to Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Already have a Member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sign in Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appMatchPassword", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errormsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.Firstname)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, _r0.submitted && _r3.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r3.touched) && (_r3.errors == null ? null : _r3.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.lastname)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c1, _r0.submitted && _r5.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r5.touched) && (_r5.errors == null ? null : _r5.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c1, _r0.submitted && _r7.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r7.touched || _r0.submitted) && (_r7.errors == null ? null : _r7.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && (_r7.errors == null ? null : _r7.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.mobileno)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c1, _r0.submitted && _r10.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r10.touched) && (_r10.errors == null ? null : _r10.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.touched && (_r10.errors == null ? null : _r10.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.address1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, _r0.submitted && _r13.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.address2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c1, _r0.submitted && _r14.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.city)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c1, _r0.submitted && _r15.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r15.touched) && (_r15.errors == null ? null : _r15.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.state)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c1, _r0.submitted && _r17.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r17.touched) && (_r17.errors == null ? null : _r17.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.zip)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c1, _r0.submitted && _r19.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r19.touched) && (_r19.errors == null ? null : _r19.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c1, _r0.submitted && _r21.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r21.touched) && (_r21.errors == null ? null : _r21.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.touched && (_r21.errors == null ? null : _r21.errors.invalidPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Patientobj.confirmpassword)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c1, _r0.submitted && _r24.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.submitted || _r24.touched) && (_r24.errors == null ? null : _r24.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.touched && (_r24.errors == null ? null : _r24.errors.passwordMismatch));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _directives_match_password_directive__WEBPACK_IMPORTED_MODULE_6__["MatchPasswordDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _directives_password_pattern_directive__WEBPACK_IMPORTED_MODULE_8__["PasswordPatternDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\n.btn-set[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em;\r\n  background-color: #e7c50e;\r\n  font-size: 10px;\r\n\r\n}\r\n\r\n.btn-set[_ngcontent-%COMP%]:hover {\r\n  background-color: #008CBA;\r\n  color: white;\r\n  box-shadow: none;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  float: left;\r\n  font-weight: 600;\r\n  font-size: small;\r\n\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: 1px dotted black;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  margin: 5px 0 22px 0;\r\n  line-height: 2em;\r\n  font-size: larger;\r\n  font-weight: 500;\r\n  border-radius: 15px;\r\n  text-transform: none;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .new-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\r\n  border: 1px solid lightgrey;\r\n  border-bottom-width: 2px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   .new-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  border-color: rgba(20, 164, 77, 1);\r\n  border-color: #fc83bb;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  right: 10em;\r\n  margin-bottom: 3em;\r\n\r\n}\r\n\r\n.form-check-input[_ngcontent-%COMP%], .form-check-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n\r\n}\r\n\r\n.button-1[_ngcontent-%COMP%] {\r\n  padding: 8px 36px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n \r\n}\r\n\r\n.button-1[_ngcontent-%COMP%]:hover {\r\n  background-color: #14a44d;\r\n  color: white;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   .button-1[_ngcontent-%COMP%]:disabled{\r\n  cursor: not-allowed;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #14a44d;\r\n  cursor: pointer;\r\n}\r\n\r\n.signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n  border-radius: 1.5em;\r\n  font-size: 1.07em;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  font-size: 1.2em;\r\n  \r\n}\r\n\r\n.pd-alert[_ngcontent-%COMP%]{\r\n  padding-right: .7em; \r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n  background: none;\r\n  margin-left: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBb0I7O0FBRXRCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsa0JBQWtCOzs7QUFHcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwYXRpZW50LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tc2V0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3YzUwZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcblxyXG59XHJcblxyXG4uYnRuLXNldDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuXHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5mb3JtIC5uZXctZm9ybSBpbnB1dCB7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbmZvcm0gLm5ldy1mb3JtIGlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjAsIDE2NCwgNzcsIDEpO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZjODNiYjtcclxufVxyXG5cclxuXHJcbi5yb3cge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEwZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG5cclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQsXHJcbi5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxufVxyXG5cclxuLmJ1dHRvbi0xIHtcclxuICBwYWRkaW5nOiA4cHggMzZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gXHJcbn1cclxuXHJcbi5idXR0b24tMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0YTQ0ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYnV0dG9uIC5idXR0b24tMTpkaXNhYmxlZHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5zaWduaW4gYSB7XHJcbiAgY29sb3I6ICMxNGE0NGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaWduaW4gYTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgZm9udC1zaXplOiAxLjA3ZW07XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBcclxufVxyXG4ucGQtYWxlcnR7XHJcbiAgcGFkZGluZy1yaWdodDogLjdlbTsgXHJcbn1cclxuLmNsb3Nle1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _after_user_login_after_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./after-user-login/after-user-login.component */ "2sIq");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo.component */ "7+xq");
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctors/doctors.component */ "SvST");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-registration/patient-registration.component */ "u4Dr");
/* harmony import */ var _patientlogin_patientlogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patientlogin/patientlogin.component */ "PDW6");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "EIQW");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "XLOz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
    },
    {
        path: 'service',
        component: _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"],
    },
    {
        path: 'our_doctors',
        component: _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_4__["DoctorsComponent"],
    },
    {
        path: 'patientReg',
        component: _patient_registration_patient_registration_component__WEBPACK_IMPORTED_MODULE_6__["PatientRegistrationComponent"],
    },
    {
        path: 'patientlogin',
        component: _patientlogin_patientlogin_component__WEBPACK_IMPORTED_MODULE_7__["PatientloginComponent"],
    },
    { path: 'afteruserlogin',
        component: _after_user_login_after_user_login_component__WEBPACK_IMPORTED_MODULE_2__["AfterUserLoginComponent"]
    },
    {
        path: 'Demo',
        component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]
    },
    {
        path: 'reset-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]
    },
    {
        path: 'Admin-Login',
        component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_10__["AdminLoginComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map