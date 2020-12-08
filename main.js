(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Project001\src\main.ts */"zUnb");


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


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 133, vars: 0, consts: [["id", "home", 1, "hero", "is-primary", "is-fullheight"], [1, "hero-body"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "782.28px", "height", "511.19px", "viewBox", "0 0 782.28 511.19", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 782.28 511.19", "margin", "auto"], ["d", "M300.09,383.12", 1, "st0"], ["d", "M370.63,242.74c-11.96,8.5-27.01,21.52-41.03,40.96c-31.05,43.1-37.46,90.67-39.14,111.83\n\tc70.77,1.29,141.55,2.57,212.32,3.86c2.73-13.7,6.5-41.62-2.59-73.35c-16.71-58.31-63-81.13-70.54-84.68\n\tC409.98,241.83,390.31,242.29,370.63,242.74z", 1, "st1"], ["transform", "matrix(0.9582 -0.286 0.286 0.9582 -76.5983 150.0427)", "cx", "475.34", "cy", "337.24", "rx", "27.07", "ry", "56.99", 1, "st2"], ["transform", "matrix(0.286 -0.9582 0.9582 0.286 -85.5827 559.6232)", "cx", "332.74", "cy", "337.24", "rx", "56.99", "ry", "27.07", 1, "st2"], ["d", "M430.36,248.6c-1.11,17.96-13.8,32.11-28.99,32.63c-15.6,0.54-29.23-13.43-30.73-31.84\n\tc0.35-2.76,1.37-8.08,5-12.61c3.31-4.14,7.06-5.46,11.58-6.97c11.29-3.78,20.66-1.78,27.08-0.32c9.6,2.18,11.93,5.01,12.81,6.23\n\tC430.34,240.22,430.47,245.89,430.36,248.6z", 1, "st3"], ["cx", "400.52", "cy", "237.61", "rx", "17.54", "ry", "17.75", 1, "st4"], ["x", "384.09", "y", "195.89", "width", "32.25", "height", "46.86", 1, "st4"], ["d", "M437.59,172.84c0,20.29-9.5,41.15-24.3,49.22c-2.29,1.25-7.24,3.87-13.71,3.54\n\tc-18.08-0.93-38.01-24.4-38.01-52.75c0-29.14,17.02-52.75,38.01-52.75C420.57,120.08,437.59,143.7,437.59,172.84z", 1, "st4"], ["d", "M437.59,172.84c0,20.29-9.5,41.15-24.3,49.22c-2.29,1.25-7.24,3.87-13.71,3.54\n\tc-18.08-0.93-37.99-24.4-38.01-52.75c-0.02-25.55,16.12-52.75,38.01-52.75C420.57,120.08,437.59,143.7,437.59,172.84z", 1, "st5"], ["d", "M363.65,181.45l8.55-49.44l24-6.16c5.11,1.1,10.22,2.2,15.33,3.3c1.72,0.43,4.05,1.27,6.53,3.04\n\tc4.39,3.14,6.8,7.47,7.91,9.8c3.61,11.56,7.23,23.12,10.84,34.69c0.49-0.49,1.16-1.3,1.62-2.49c0.48-1.24,0.67-2.72-1.51-12.66\n\tc-0.28-1.28-0.82-3.73-1.66-6.9c-0.33-1.26-0.27-0.99-0.42-1.58c-0.49-1.96-1.2-5.35-1.38-9.58c-0.04-0.84-0.04-1.54-0.04-2.01\n\tc0-0.33,0-0.57,0-0.59c0.13-11.95-13.74-29.16-13.74-29.16c-1.18-1.47-3.01-3.65-5.4-6.15c-7.23-0.37-12.19-0.26-12.3,0.73\n\tc-0.08,0.71,2.39,1.42,2.3,2.1c-0.09,0.66-2.57,1.01-13.99,0.08c-3.96-0.32-7.25-0.66-9.56-0.91c-2.9,4.17-5.8,8.35-8.7,12.52\n\tc-1.93,2.02-4.14,4.72-6.25,8.23c-3.92,6.53-5.74,12.99-6.65,17.35c-0.05,2.55-0.25,13.58,0.79,21.88c0.41,3.29,0.93,5.47,1.17,6.43\n\tC361.9,177.23,362.9,179.77,363.65,181.45z", 1, "st6"], ["d", "M437.59,177.16c0.97-1.01,1.91-1.61,2.51-1.94c0.44,0.82,0.88,1.63,1.33,2.45c0.24,3.44,0.16,6.3,0.01,8.34\n\tc-0.32,4.59-0.96,5.99-1.51,6.85c-0.21,0.34-1.95,3.02-3.68,2.49c-1.3-0.4-1.9-2.4-2.18-3.32\n\tC432.65,187.28,434.09,180.81,437.59,177.16z", 1, "st4"], ["id", "eyebrows_1_"], ["d", "M391.2,160.28h-14.92c-0.32,0-0.57-0.26-0.57-0.57v-2.59c0-0.32,0.26-0.57,0.57-0.57h14.92c0.32,0,0.57,0.26,0.57,0.57\n\t\tv2.59C391.78,160.02,391.52,160.28,391.2,160.28z"], ["d", "M423.8,160.28h-14.92c-0.32,0-0.57-0.26-0.57-0.57v-2.59c0-0.32,0.26-0.57,0.57-0.57h14.92c0.32,0,0.57,0.26,0.57,0.57\n\t\tv2.59C424.38,160.02,424.12,160.28,423.8,160.28z"], ["cx", "382.78", "cy", "168.53", "rx", "0.96", "ry", "1.19", 1, "st6"], ["cx", "414.86", "cy", "168.53", "rx", "0.96", "ry", "1.19", 1, "st6"], ["d", "M358.27,178.28c-1.24,0.46-1.41,0.44-1.71,0.68c-0.71,0.57-1.42,1.97-1.21,5.81\n\tc-0.41,4.66,1.14,8.85,3.89,10.74c0.53,0.36,2.92,2.01,4.52,0.78c3.7-2.86,0.23-19-2.48-19.22\n\tC360.86,177.04,360.63,177.4,358.27,178.28z", 1, "st4"], ["d", "M399.29,167.93c-1.09,14.94-2.21,20.2,0,17.99c2.21-2.21,2.21-2.21,2.21-2.21l1.1-0.83l-2.29-2.91v-9.65", 1, "st7"], ["d", "M387.81,199.5c7.69,5.4,16.26,7.05,21.98,3.83c1.23-0.69,2.8-1.88,4.16-3.96", 1, "st8"], ["points", "437.14,178.75 438.73,177.16 440.15,177.16 440.15,180.41 440.15,182.7 ", 1, "st9"], ["d", "M361.56,181.45l-1.23-2.49l-3.21,1.25c0,0-0.84,2.91-0.84,3.53c0,0.62,0.84,2.66,0.84,2.66l0.67,1.9", 1, "st9"], ["d", "M385.67,221.93l9.04,9.65c3.24,0.35,5.85,0.74,7.62,1.04c3.9,0.65,5.41,1.09,7.62,0.31\n\tc1.48-0.52,3.67-1.3,4.35-3.42c0.62-1.93-0.37-3.84,0.69-6.75c0.21-0.57,0.43-1,0.57-1.25c-1.45,0.83-3.57,1.98-6.21,3.15\n\tc-3.75,1.66-5.71,1.93-7.34,2.61c-2.26,0.93-11.05-3.74-11.05-3.74l-4.82-2.52c-0.61,0-1.22,0-1.83,0", 1, "st10"], ["d", "M379.89,217.15", 1, "st11"], ["d", "M423.32,237.49", 1, "st3"], ["d", "M352.9,429.42l-47.6-14.94c-10.92-3.43-17.39-16.52-14.45-29.24l0.69-2.99c2.94-12.72,14.17-20.26,25.09-16.83\n\tl47.6,14.94c10.92,3.43,17.39,16.52,14.45,29.24l-0.69,2.99C375.05,425.31,363.82,432.85,352.9,429.42z", 1, "st1"], ["d", "M442.32,426.48l47.6-14.94c10.92-3.43,17.39-16.52,14.45-29.24l-0.69-2.99c-2.94-12.72-14.17-20.26-25.09-16.83\n\tl-47.6,14.94c-10.92,3.43-17.39,16.52-14.45,29.24l0.69,2.99C420.16,422.37,431.4,429.91,442.32,426.48z", 1, "st1"], ["d", "M450.03,429.06c-30.28,0-60.55,0-90.83,0c-5.45-33.87-10.9-67.74-16.35-101.61h123.08\n\tC460.63,361.32,455.33,395.19,450.03,429.06z", 1, "st12"], ["d", "M450.01,429.06h-90.63c-1.23,0-2.22-0.99-2.22-2.22v-8.61c0-1.23,0.99-2.22,2.22-2.22h90.63\n\tc1.23,0,2.22,0.99,2.22,2.22v8.61C452.23,428.07,451.24,429.06,450.01,429.06z", 1, "st8"], ["y", "425.79", "width", "782.28", "height", "11.64", 1, "st13"], ["id", "cofee_1_"], ["cx", "261.33", "cy", "391.88", "rx", "14.87", "ry", "4.2", 1, "st14"], ["cx", "260.68", "cy", "390.04", "rx", "18.15", "ry", "6.05", 1, "st15"], ["points", "242.53,388.86 246.47,424.3 274.45,424.3 278.82,388.86 \t", 1, "st15"], ["d", "M277.73,397.73c2.26,0.01,4.52,0.02,6.78,0.03l-2.84,11.76h-5.47C276.71,405.59,277.22,401.66,277.73,397.73z\n\t\t", 1, "st15"], ["id", "cofee-smoke_1_"], ["d", "M249.38,381.34c0,0,2.33-0.45,2.04-5.37c-0.29-4.93-9.04-6.94-6.41-11.2c2.62-4.25,2.62-4.25,2.62-4.25", 1, "st15"], ["d", "M260.68,379.18c0,0,2.4-6.64,0.66-8.25s-3.06-3.85-0.66-5.64c2.4-1.79-1.31-6.94-1.31-6.94", 1, "st15"], ["d", "M272.7,381.34c0,0,1.46,0.3,0-4.41c-1.46-4.7,4.66-7.06,6.12-9.24c1.46-2.18,0-6.21,0-6.21", 1, "st15"], ["id", "low-left_1_"], ["x", "136.53", "y", "212.44", "width", "119.06", "height", "104.54", 1, "st16"], ["x1", "149.4", "y1", "244.66", "x2", "179.71", "y2", "244.66", 1, "st17"], ["x1", "157.16", "y1", "260.65", "x2", "241.05", "y2", "260.65", 1, "st17"], ["x1", "149.4", "y1", "275.55", "x2", "241.05", "y2", "275.55", 1, "st17"], ["x1", "149.4", "y1", "289.52", "x2", "241.05", "y2", "289.52", 1, "st17"], ["id", "low-right_1_"], ["x", "517.4", "y", "199.55", "width", "122.78", "height", "144.05", 1, "st18"], ["x", "535.15", "y", "223.13", "width", "26.42", "height", "27.78", 1, "st16"], ["x", "535.15", "y", "260.02", "width", "26.42", "height", "27.78", 1, "st16"], ["x", "535.15", "y", "296.91", "width", "26.42", "height", "27.78", 1, "st16"], ["points", "545.03,237.02 549.56,240.02 567.18,227.87 \t", 1, "st19"], ["points", "545.03,276.75 549.56,279.75 567.18,267.6 \t", 1, "st19"], ["points", "545.03,313.64 549.56,316.65 567.18,304.49 \t", 1, "st19"], ["d", "M578.79,237.02", 1, "st20"], ["x1", "616.16", "y1", "234.18", "x2", "570.51", "y2", "234.18", 1, "st21"], ["x1", "570.51", "y1", "242.39", "x2", "622.46", "y2", "242.39", 1, "st21"], ["x1", "616.16", "y1", "271.07", "x2", "570.51", "y2", "271.07", 1, "st21"], ["x1", "570.51", "y1", "279.29", "x2", "622.46", "y2", "279.29", 1, "st21"], ["x1", "616.16", "y1", "307.96", "x2", "570.51", "y2", "307.96", 1, "st21"], ["x1", "570.51", "y1", "316.18", "x2", "622.46", "y2", "316.18", 1, "st21"], ["id", "top-right_1_"], ["x", "507.48", "y", "0.5", "width", "167", "height", "132.11", 1, "st18"], ["x", "522.43", "y", "19.64", "width", "134.95", "height", "15.52", 1, "st18"], ["x", "522.43", "y", "52.1", "width", "71.37", "height", "65.79", 1, "st18"], ["x", "610.95", "y", "52.1", "width", "46.42", "height", "14.46", 1, "st18"], ["x", "610.95", "y", "76.44", "width", "46.42", "height", "8.55", 1, "st18"], ["x", "610.95", "y", "99.2", "width", "46.42", "height", "9.53", 1, "st18"], ["id", "top-left_1_"], ["x", "106.74", "y", "6.94", "width", "162.45", "height", "169.26", 1, "st18"], [1, "st22"], ["d", "M163.8,59.15c2.44,8.61-4.88,18.78-13.57,18.8c-8.71,0.02-16.08-10.18-13.64-18.8\n\t\t\tc1.53-5.41,6.93-10.18,13.6-10.18C156.87,48.97,162.26,53.73,163.8,59.15z", 1, "st1"], ["d", "M157.14,80.7c-4.82-0.01-9.64-0.01-14.46-0.02c-0.6-4.71-1.19-9.42-1.79-14.13h18.61\n\t\t\tC158.72,71.27,157.93,75.98,157.14,80.7z", 1, "st1"], ["d", "M156.81,82.65c-4.68,0-9.36,0-14.03,0c-0.19-0.37-0.37-0.74-0.56-1.11h15.21\n\t\t\tC157.22,81.91,157.02,82.28,156.81,82.65z", 1, "st1"], ["points", "143.34,83.9 143.34,85.78 149.82,92.43 155.86,86.45 155.86,83.9 \t\t", 1, "st23"], ["x1", "150.2", "y1", "45.2", "x2", "149.6", "y2", "23.91", 1, "st24"], ["x1", "159.5", "y1", "45.2", "x2", "168.5", "y2", "32.34", 1, "st24"], ["x1", "138.98", "y1", "45.2", "x2", "131.82", "y2", "32.34", 1, "st24"], ["x1", "168.5", "y1", "54.51", "x2", "180.93", "y2", "46.4", 1, "st24"], ["x1", "127.8", "y1", "54.51", "x2", "117.94", "y2", "48.97", 1, "st24"], ["x1", "131.82", "y1", "66.55", "x2", "122.43", "y2", "71.81", 1, "st24"], ["x1", "168.5", "y1", "66.55", "x2", "178.33", "y2", "71.81", 1, "st24"], ["x1", "201.35", "y1", "60.88", "x2", "255.39", "y2", "60.88", 1, "st18"], ["x1", "196.06", "y1", "77.95", "x2", "255.39", "y2", "77.95", 1, "st18"], ["x1", "180.93", "y1", "95.67", "x2", "255.39", "y2", "95.67", 1, "st18"], ["x", "178.33", "y", "116.04", "width", "77.05", "height", "47.73", 1, "st18"], ["x1", "122.43", "y1", "116.04", "x2", "164", "y2", "116.04", 1, "st18"], ["x1", "122.87", "y1", "146.17", "x2", "164.28", "y2", "146.17", 1, "st18"], ["x1", "122.87", "y1", "134.11", "x2", "164", "y2", "134.11", 1, "st18"], ["x1", "122.43", "y1", "158.97", "x2", "164.28", "y2", "158.97", 1, "st18"], ["d", "M205.63,451.83v11.28h13.04v-11.28h3.52v26.96h-3.52v-12.64h-13.04v12.64h-3.48v-26.96H205.63z", 1, "st8"], ["d", "M232.42,453.99c0.04,1.2-0.84,2.16-2.24,2.16c-1.24,0-2.12-0.96-2.12-2.16c0-1.24,0.92-2.2,2.2-2.2\n\t\tC231.58,451.79,232.42,452.75,232.42,453.99z M228.51,478.79v-19.36h3.52v19.36H228.51z", 1, "st8"], ["d", "M237.19,476.75c0-1.44,1-2.48,2.36-2.48c1.44,0,2.36,1.04,2.36,2.48c0,1.4-0.92,2.48-2.36,2.48\n\t\tC238.15,479.23,237.19,478.15,237.19,476.75z M238.18,471.03l-0.56-19.2h3.84l-0.56,19.2H238.18z", 1, "st8"], ["d", "M259.14,451.83v26.96h-3.48v-26.96H259.14z", 1, "st8"], ["d", "M269.34,451.39c-0.92,3.36-2.64,7.64-3.76,9.48l-2.24,0.28c0.88-2.36,1.92-6.52,2.36-9.4L269.34,451.39z", 1, "st8"], ["d", "M271.62,464.67c0-2-0.04-3.64-0.16-5.24h3.08l0.16,3.12h0.12c1.08-1.84,2.88-3.56,6.08-3.56\n\t\tc2.64,0,4.64,1.6,5.48,3.88h0.08c0.6-1.08,1.36-1.92,2.16-2.52c1.16-0.88,2.44-1.36,4.28-1.36c2.56,0,6.36,1.68,6.36,8.4v11.4\n\t\th-3.44v-10.96c0-3.72-1.36-5.96-4.2-5.96c-2,0-3.56,1.48-4.16,3.2c-0.16,0.48-0.28,1.12-0.28,1.76v11.96h-3.44v-11.6\n\t\tc0-3.08-1.36-5.32-4.04-5.32c-2.2,0-3.8,1.76-4.36,3.52c-0.2,0.52-0.28,1.12-0.28,1.72v11.68h-3.44V464.67z", 1, "st8"], ["d", "M313.58,452.19c1.76-0.36,4.28-0.56,6.68-0.56c3.72,0,6.12,0.68,7.8,2.2c1.36,1.2,2.12,3.04,2.12,5.12\n\t\tc0,3.56-2.24,5.92-5.08,6.88v0.12c2.08,0.72,3.32,2.64,3.96,5.44c0.88,3.76,1.52,6.36,2.08,7.4h-3.6c-0.44-0.76-1.04-3.08-1.8-6.44\n\t\tc-0.8-3.72-2.24-5.12-5.4-5.24h-3.28v11.68h-3.48V452.19z M317.06,464.47h3.56c3.72,0,6.08-2.04,6.08-5.12c0-3.48-2.52-5-6.2-5.04\n\t\tc-1.68,0-2.88,0.16-3.44,0.32V464.47z", 1, "st8"], ["d", "M352.66,468.95c0,7.16-4.96,10.28-9.64,10.28c-5.24,0-9.28-3.84-9.28-9.96c0-6.48,4.24-10.28,9.6-10.28\n\t\tC348.9,458.99,352.66,463.03,352.66,468.95z M337.3,469.15c0,4.24,2.44,7.44,5.88,7.44c3.36,0,5.88-3.16,5.88-7.52\n\t\tc0-3.28-1.64-7.44-5.8-7.44S337.3,465.47,337.3,469.15z", 1, "st8"], ["d", "M357.1,464.67c0-2-0.04-3.64-0.16-5.24h3.12l0.2,3.2h0.08c0.96-1.84,3.2-3.64,6.4-3.64\n\t\tc2.68,0,6.84,1.6,6.84,8.24v11.56h-3.52v-11.16c0-3.12-1.16-5.72-4.48-5.72c-2.32,0-4.12,1.64-4.72,3.6\n\t\tc-0.16,0.44-0.24,1.04-0.24,1.64v11.64h-3.52V464.67z", 1, "st8"], ["d", "M401.86,466.15h-10.48v9.72h11.68v2.92H387.9v-26.96h14.56v2.92h-11.08v8.52h10.48V466.15z", 1, "st8"], ["d", "M407.46,465.47c0-2.28-0.04-4.24-0.16-6.04h3.08l0.12,3.8h0.16c0.88-2.6,3-4.24,5.36-4.24\n\t\tc0.4,0,0.68,0.04,1,0.12v3.32c-0.36-0.08-0.72-0.12-1.2-0.12c-2.48,0-4.24,1.88-4.72,4.52c-0.08,0.48-0.16,1.04-0.16,1.64v10.32\n\t\th-3.48V465.47z", 1, "st8"], ["d", "M424.62,453.99c0.04,1.2-0.84,2.16-2.24,2.16c-1.24,0-2.12-0.96-2.12-2.16c0-1.24,0.92-2.2,2.2-2.2\n\t\tC423.78,451.79,424.62,452.75,424.62,453.99z M420.7,478.79v-19.36h3.52v19.36H420.7z", 1, "st8"], ["d", "M443.86,478.07c-0.92,0.48-2.96,1.12-5.56,1.12c-5.84,0-9.64-3.96-9.64-9.88c0-5.96,4.08-10.28,10.4-10.28\n\t\tc2.08,0,3.92,0.52,4.88,1l-0.8,2.72c-0.84-0.48-2.16-0.92-4.08-0.92c-4.44,0-6.84,3.28-6.84,7.32c0,4.48,2.88,7.24,6.72,7.24\n\t\tc2,0,3.32-0.52,4.32-0.96L443.86,478.07z", 1, "st8"], ["d", "M451.46,468.31h0.08c0.48-0.68,1.16-1.52,1.72-2.2l5.68-6.68h4.24l-7.48,7.96l8.52,11.4h-4.28l-6.68-9.28\n\t\tl-1.8,2v7.28h-3.48v-28.4h3.48V468.31z", 1, "st8"], ["d", "M475.34,452.19c1.76-0.36,4.28-0.56,6.68-0.56c3.72,0,6.12,0.68,7.8,2.2c1.36,1.2,2.12,3.04,2.12,5.12\n\t\tc0,3.56-2.24,5.92-5.08,6.88v0.12c2.08,0.72,3.32,2.64,3.96,5.44c0.88,3.76,1.52,6.36,2.08,7.4h-3.6c-0.44-0.76-1.04-3.08-1.8-6.44\n\t\tc-0.8-3.72-2.24-5.12-5.4-5.24h-3.28v11.68h-3.48V452.19z M478.82,464.47h3.56c3.72,0,6.08-2.04,6.08-5.12c0-3.48-2.52-5-6.2-5.04\n\t\tc-1.68,0-2.88,0.16-3.44,0.32V464.47z", 1, "st8"], ["d", "M514.42,468.95c0,7.16-4.96,10.28-9.64,10.28c-5.24,0-9.28-3.84-9.28-9.96c0-6.48,4.24-10.28,9.6-10.28\n\t\tC510.66,458.99,514.42,463.03,514.42,468.95z M499.06,469.15c0,4.24,2.44,7.44,5.88,7.44c3.36,0,5.88-3.16,5.88-7.52\n\t\tc0-3.28-1.64-7.44-5.8-7.44S499.06,465.47,499.06,469.15z", 1, "st8"], ["d", "M535.58,450.39v23.4c0,1.72,0.04,3.68,0.16,5h-3.16l-0.16-3.36h-0.08c-1.08,2.16-3.44,3.8-6.6,3.8\n\t\tc-4.68,0-8.28-3.96-8.28-9.84c-0.04-6.44,3.96-10.4,8.68-10.4c2.96,0,4.96,1.4,5.84,2.96h0.08v-11.56H535.58z M532.06,467.31\n\t\tc0-0.44-0.04-1.04-0.16-1.48c-0.52-2.24-2.44-4.08-5.08-4.08c-3.64,0-5.8,3.2-5.8,7.48c0,3.92,1.92,7.16,5.72,7.16\n\t\tc2.36,0,4.52-1.56,5.16-4.2c0.12-0.48,0.16-0.96,0.16-1.52V467.31z", 1, "st8"], ["d", "M541.42,465.47c0-2.28-0.04-4.24-0.16-6.04h3.08l0.12,3.8h0.16c0.88-2.6,3-4.24,5.36-4.24\n\t\tc0.4,0,0.68,0.04,1,0.12v3.32c-0.36-0.08-0.72-0.12-1.2-0.12c-2.48,0-4.24,1.88-4.72,4.52c-0.08,0.48-0.16,1.04-0.16,1.64v10.32\n\t\th-3.48V465.47z", 1, "st8"], ["d", "M558.58,453.99c0.04,1.2-0.84,2.16-2.24,2.16c-1.24,0-2.12-0.96-2.12-2.16c0-1.24,0.92-2.2,2.2-2.2\n\t\tC557.74,451.79,558.58,452.75,558.58,453.99z M554.66,478.79v-19.36h3.52v19.36H554.66z", 1, "st8"], ["d", "M580.7,459.43c-0.08,1.4-0.16,2.96-0.16,5.32v11.24c0,4.44-0.88,7.16-2.76,8.84c-1.88,1.76-4.6,2.32-7.04,2.32\n\t\tc-2.32,0-4.88-0.56-6.44-1.6l0.88-2.68c1.28,0.8,3.28,1.52,5.68,1.52c3.6,0,6.24-1.88,6.24-6.76v-2.16h-0.08\n\t\tc-1.08,1.8-3.16,3.24-6.16,3.24c-4.8,0-8.24-4.08-8.24-9.44c0-6.56,4.28-10.28,8.72-10.28c3.36,0,5.2,1.76,6.04,3.36h0.08\n\t\tl0.16-2.92H580.7z M577.06,467.07c0-0.6-0.04-1.12-0.2-1.6c-0.64-2.04-2.36-3.72-4.92-3.72c-3.36,0-5.76,2.84-5.76,7.32\n\t\tc0,3.8,1.92,6.96,5.72,6.96c2.16,0,4.12-1.36,4.88-3.6c0.2-0.6,0.28-1.28,0.28-1.88V467.07z", 1, "st8"], ["d", "M602.58,473.51c0,2,0.04,3.76,0.16,5.28h-3.12l-0.2-3.16h-0.08c-0.92,1.56-2.96,3.6-6.4,3.6\n\t\tc-3.04,0-6.68-1.68-6.68-8.48v-11.32h3.52v10.72c0,3.68,1.12,6.16,4.32,6.16c2.36,0,4-1.64,4.64-3.2c0.2-0.52,0.32-1.16,0.32-1.8\n\t\tv-11.88h3.52V473.51z", 1, "st8"], ["d", "M610.38,469.75c0.08,4.76,3.12,6.72,6.64,6.72c2.52,0,4.04-0.44,5.36-1l0.6,2.52c-1.24,0.56-3.36,1.2-6.44,1.2\n\t\tc-5.96,0-9.52-3.92-9.52-9.76s3.44-10.44,9.08-10.44c6.32,0,8,5.56,8,9.12c0,0.72-0.08,1.28-0.12,1.64H610.38z M620.7,467.23\n\t\tc0.04-2.24-0.92-5.72-4.88-5.72c-3.56,0-5.12,3.28-5.4,5.72H620.7z", 1, "st8"], ["d", "M626.26,476.75l8.76-11.4c0.84-1.04,1.64-1.96,2.52-3v-0.08h-10.48v-2.84h14.76l-0.04,2.2l-8.64,11.24\n\t\tc-0.8,1.08-1.6,2.04-2.48,3.04v0.08h11.32v2.8h-15.72V476.75z", 1, "st8"], ["d", "M328.49,493.93c0.76-0.16,1.96-0.28,3.18-0.28c1.74,0,2.86,0.3,3.7,0.98c0.7,0.52,1.12,1.32,1.12,2.38\n\t\tc0,1.3-0.86,2.44-2.28,2.96v0.04c1.28,0.32,2.78,1.38,2.78,3.38c0,1.16-0.46,2.04-1.14,2.7c-0.94,0.86-2.46,1.26-4.66,1.26\n\t\tc-1.2,0-2.12-0.08-2.7-0.16V493.93z M330.23,499.45h1.58c1.84,0,2.92-0.96,2.92-2.26c0-1.58-1.2-2.2-2.96-2.2\n\t\tc-0.8,0-1.26,0.06-1.54,0.12V499.45z M330.23,505.91c0.34,0.06,0.84,0.08,1.46,0.08c1.8,0,3.46-0.66,3.46-2.62\n\t\tc0-1.84-1.58-2.6-3.48-2.6h-1.44V505.91z", 1, "st8"], ["d", "M344.63,507.23l-0.14-1.22h-0.06c-0.54,0.76-1.58,1.44-2.96,1.44c-1.96,0-2.96-1.38-2.96-2.78\n\t\tc0-2.34,2.08-3.62,5.82-3.6v-0.2c0-0.8-0.22-2.24-2.2-2.24c-0.9,0-1.84,0.28-2.52,0.72l-0.4-1.16c0.8-0.52,1.96-0.86,3.18-0.86\n\t\tc2.96,0,3.68,2.02,3.68,3.96v3.62c0,0.84,0.04,1.66,0.16,2.32H344.63z M344.37,502.29c-1.92-0.04-4.1,0.3-4.1,2.18\n\t\tc0,1.14,0.76,1.68,1.66,1.68c1.26,0,2.06-0.8,2.34-1.62c0.06-0.18,0.1-0.38,0.1-0.56V502.29z", 1, "st8"], ["d", "M355.81,506.87c-0.46,0.24-1.48,0.56-2.78,0.56c-2.92,0-4.82-1.98-4.82-4.94c0-2.98,2.04-5.14,5.2-5.14\n\t\tc1.04,0,1.96,0.26,2.44,0.5l-0.4,1.36c-0.42-0.24-1.08-0.46-2.04-0.46c-2.22,0-3.42,1.64-3.42,3.66c0,2.24,1.44,3.62,3.36,3.62\n\t\tc1,0,1.66-0.26,2.16-0.48L355.81,506.87z", 1, "st8"], ["d", "M359.61,501.99h0.04c0.24-0.34,0.58-0.76,0.86-1.1l2.84-3.34h2.12l-3.74,3.98l4.26,5.7h-2.14l-3.34-4.64\n\t\tl-0.9,1v3.64h-1.74v-14.2h1.74V501.99z", 1, "st8"], ["d", "M368.23,502.71c0.04,2.38,1.56,3.36,3.32,3.36c1.26,0,2.02-0.22,2.68-0.5l0.3,1.26\n\t\tc-0.62,0.28-1.68,0.6-3.22,0.6c-2.98,0-4.76-1.96-4.76-4.88c0-2.92,1.72-5.22,4.54-5.22c3.16,0,4,2.78,4,4.56\n\t\tc0,0.36-0.04,0.64-0.06,0.82H368.23z M373.39,501.45c0.02-1.12-0.46-2.86-2.44-2.86c-1.78,0-2.56,1.64-2.7,2.86H373.39z", 1, "st8"], ["d", "M377.27,500.17c0-1-0.02-1.82-0.08-2.62h1.56l0.1,1.6h0.04c0.48-0.92,1.6-1.82,3.2-1.82\n\t\tc1.34,0,3.42,0.8,3.42,4.12v5.78h-1.76v-5.58c0-1.56-0.58-2.86-2.24-2.86c-1.16,0-2.06,0.82-2.36,1.8\n\t\tc-0.08,0.22-0.12,0.52-0.12,0.82v5.82h-1.76V500.17z", 1, "st8"], ["d", "M396.73,493.03v11.7c0,0.86,0.02,1.84,0.08,2.5h-1.58l-0.08-1.68h-0.04c-0.54,1.08-1.72,1.9-3.3,1.9\n\t\tc-2.34,0-4.14-1.98-4.14-4.92c-0.02-3.22,1.98-5.2,4.34-5.2c1.48,0,2.48,0.7,2.92,1.48h0.04v-5.78H396.73z M394.97,501.49\n\t\tc0-0.22-0.02-0.52-0.08-0.74c-0.26-1.12-1.22-2.04-2.54-2.04c-1.82,0-2.9,1.6-2.9,3.74c0,1.96,0.96,3.58,2.86,3.58\n\t\tc1.18,0,2.26-0.78,2.58-2.1c0.06-0.24,0.08-0.48,0.08-0.76V501.49z", 1, "st8"], ["d", "M403.94,493.93c1.06-0.16,2.32-0.28,3.7-0.28c2.5,0,4.28,0.58,5.46,1.68c1.2,1.1,1.9,2.66,1.9,4.84\n\t\tc0,2.2-0.68,4-1.94,5.24c-1.26,1.26-3.34,1.94-5.96,1.94c-1.24,0-2.28-0.06-3.16-0.16V493.93z M405.68,505.85\n\t\tc0.44,0.08,1.08,0.1,1.76,0.1c3.72,0,5.74-2.08,5.74-5.72c0.02-3.18-1.78-5.2-5.46-5.2c-0.9,0-1.58,0.08-2.04,0.18V505.85z", 1, "st8"], ["d", "M418.26,502.71c0.04,2.38,1.56,3.36,3.32,3.36c1.26,0,2.02-0.22,2.68-0.5l0.3,1.26\n\t\tc-0.62,0.28-1.68,0.6-3.22,0.6c-2.98,0-4.76-1.96-4.76-4.88c0-2.92,1.72-5.22,4.54-5.22c3.16,0,4,2.78,4,4.56\n\t\tc0,0.36-0.04,0.64-0.06,0.82H418.26z M423.43,501.45c0.02-1.12-0.46-2.86-2.44-2.86c-1.78,0-2.56,1.64-2.7,2.86H423.43z", 1, "st8"], ["d", "M427.98,497.55l1.9,5.44c0.32,0.88,0.58,1.68,0.78,2.48h0.06c0.22-0.8,0.5-1.6,0.82-2.48l1.88-5.44h1.84\n\t\tl-3.8,9.68h-1.68l-3.68-9.68H427.98z", 1, "st8"], ["d", "M437.7,502.71c0.04,2.38,1.56,3.36,3.32,3.36c1.26,0,2.02-0.22,2.68-0.5l0.3,1.26\n\t\tc-0.62,0.28-1.68,0.6-3.22,0.6c-2.98,0-4.76-1.96-4.76-4.88c0-2.92,1.72-5.22,4.54-5.22c3.16,0,4,2.78,4,4.56\n\t\tc0,0.36-0.04,0.64-0.06,0.82H437.7z M442.87,501.45c0.02-1.12-0.46-2.86-2.44-2.86c-1.78,0-2.56,1.64-2.7,2.86H442.87z", 1, "st8"], ["d", "M446.74,493.03h1.76v14.2h-1.76V493.03z", 1, "st8"], ["d", "M460.23,502.31c0,3.58-2.48,5.14-4.82,5.14c-2.62,0-4.64-1.92-4.64-4.98c0-3.24,2.12-5.14,4.8-5.14\n\t\tC458.35,497.33,460.23,499.35,460.23,502.31z M452.54,502.41c0,2.12,1.22,3.72,2.94,3.72c1.68,0,2.94-1.58,2.94-3.76\n\t\tc0-1.64-0.82-3.72-2.9-3.72S452.54,500.57,452.54,502.41z", 1, "st8"], ["d", "M462.44,500.71c0-1.24-0.04-2.24-0.08-3.16h1.58l0.08,1.66h0.04c0.72-1.18,1.86-1.88,3.44-1.88\n\t\tc2.34,0,4.1,1.98,4.1,4.92c0,3.48-2.12,5.2-4.4,5.2c-1.28,0-2.4-0.56-2.98-1.52h-0.04v5.26h-1.74V500.71z M464.18,503.29\n\t\tc0,0.26,0.04,0.5,0.08,0.72c0.32,1.22,1.38,2.06,2.64,2.06c1.86,0,2.94-1.52,2.94-3.74c0-1.94-1.02-3.6-2.88-3.6\n\t\tc-1.2,0-2.32,0.86-2.66,2.18c-0.06,0.22-0.12,0.48-0.12,0.72V503.29z", 1, "st8"], ["d", "M474.8,502.71c0.04,2.38,1.56,3.36,3.32,3.36c1.26,0,2.02-0.22,2.68-0.5l0.3,1.26\n\t\tc-0.62,0.28-1.68,0.6-3.22,0.6c-2.98,0-4.76-1.96-4.76-4.88c0-2.92,1.72-5.22,4.54-5.22c3.16,0,4,2.78,4,4.56\n\t\tc0,0.36-0.04,0.64-0.06,0.82H474.8z M479.96,501.45c0.02-1.12-0.46-2.86-2.44-2.86c-1.78,0-2.56,1.64-2.7,2.86H479.96z", 1, "st8"], ["d", "M483.84,500.57c0-1.14-0.02-2.12-0.08-3.02h1.54l0.06,1.9h0.08c0.44-1.3,1.5-2.12,2.68-2.12\n\t\tc0.2,0,0.34,0.02,0.5,0.06v1.66c-0.18-0.04-0.36-0.06-0.6-0.06c-1.24,0-2.12,0.94-2.36,2.26c-0.04,0.24-0.08,0.52-0.08,0.82v5.16\n\t\th-1.74V500.57z", 1, "st8"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ellipse", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ellipse", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ellipse", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ellipse", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ellipse", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "polyline", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "rect", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ellipse", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ellipse", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polyline", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "rect", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "line", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rect", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "rect", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "rect", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "polyline", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "polyline", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "polyline", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "line", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "line", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "line", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "line", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "line", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "line", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "rect", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "g", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "polyline", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "line", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "line", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "line", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "line", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "line", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "line", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "line", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "line", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "line", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "rect", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "line", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "line", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "line", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "line", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    font-size:65%;\r\n}\r\n\r\n.st0[_ngcontent-%COMP%]{fill:#264677;}\r\n\r\n.st1[_ngcontent-%COMP%]{fill:#244575;}\r\n\r\n.st2[_ngcontent-%COMP%]{fill:#21406C;}\r\n\r\n.st3[_ngcontent-%COMP%]{fill:#1D3B63;}\r\n\r\n.st4[_ngcontent-%COMP%]{fill:#D6B294;stroke:#D6B294;stroke-miterlimit:10;}\r\n\r\n.st5[_ngcontent-%COMP%]{fill:#D6B294;stroke:#050404;stroke-width:0.3;stroke-miterlimit:10;}\r\n\r\n.st6[_ngcontent-%COMP%]{fill:#050404;stroke:#000000;stroke-miterlimit:10;}\r\n\r\n.st7[_ngcontent-%COMP%]{fill:#755746;stroke:#D6B294;stroke-width:0.5;stroke-linejoin:round;stroke-miterlimit:10;}\r\n\r\n.st8[_ngcontent-%COMP%]{fill:#FFFFFF;}\r\n\r\n.st9[_ngcontent-%COMP%]{fill:#D6B294;stroke:#000000;stroke-width:0.3;stroke-miterlimit:10;}\r\n\r\n.st10[_ngcontent-%COMP%]{fill:#2C3035;stroke:#D6B294;stroke-miterlimit:10;}\r\n\r\n.st11[_ngcontent-%COMP%]{stroke:#D6B294;stroke-miterlimit:10;}\r\n\r\n.st12[_ngcontent-%COMP%]{fill:#4C70AD;}\r\n\r\n.st13[_ngcontent-%COMP%]{fill:#6A6E75;}\r\n\r\n.st14[_ngcontent-%COMP%]{stroke:#000000;stroke-miterlimit:10;}\r\n\r\n.st15[_ngcontent-%COMP%]{fill:none;stroke:#000000;stroke-miterlimit:10;}\r\n\r\n.st16[_ngcontent-%COMP%]{opacity:0.5;fill:#244575;}\r\n\r\n.st17[_ngcontent-%COMP%]{opacity:0.5;fill:#244575;stroke:#3B5172;stroke-miterlimit:10;}\r\n\r\n.st18[_ngcontent-%COMP%]{opacity:0.5;fill:#244575;stroke:#385887;stroke-miterlimit:10;}\r\n\r\n.st19[_ngcontent-%COMP%]{opacity:0.5;fill:#244575;stroke:#FA0F0C;stroke-miterlimit:10;}\r\n\r\n.st20[_ngcontent-%COMP%]{fill:#244575;stroke:#244575;stroke-miterlimit:10;}\r\n\r\n.st21[_ngcontent-%COMP%]{opacity:0.5;fill:#244575;stroke:#244575;stroke-miterlimit:10;}\r\n\r\n.st22[_ngcontent-%COMP%]{opacity:0.5;}\r\n\r\n.st23[_ngcontent-%COMP%]{fill:#244575;stroke:#385887;stroke-miterlimit:10;}\r\n\r\n.st24[_ngcontent-%COMP%]{fill:none;stroke:#385887;stroke-miterlimit:10;}\r\n\r\n.svgBox[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.svgBox-content[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n  \r\n}\r\n\r\n#top-right_1_[_ngcontent-%COMP%]{\r\n    animation: 2s fade-in-left;\r\n  \r\n    \r\n}\r\n\r\n#low-right_1_[_ngcontent-%COMP%]{\r\n    animation: 5s fade-in-left;\r\n}\r\n\r\nsvgContainer[_ngcontent-%COMP%]{\r\n    height:782.28 ;\r\n    width: 437.43;\r\n}\r\n\r\n#eyebrows_1_[_ngcontent-%COMP%]{\r\n\r\n    animation: 1s eyebrow infinite;\r\n    animation-direction: alternate;\r\n\r\n}\r\n\r\n#top-left_1_[_ngcontent-%COMP%]{\r\n    animation: 3s fade-in-right;\r\n}\r\n\r\n#low-left_1_[_ngcontent-%COMP%]{\r\n\r\n    animation: 4.5s fade-in-right;\r\n}\r\n\r\n#cofee-smoke_1_[_ngcontent-%COMP%]{\r\n\r\n    animation: 1s fade-out-anim infinite;\r\n}\r\n\r\n@keyframes fade-out-anim{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n\r\n}\r\n\r\n@keyframes eyebrow{\r\n    0%{\r\n\r\n        transform: translateY(0%);\r\n    }\r\n    100%{\r\n        transform:translateY(-0.5%);\r\n    }\r\n}\r\n\r\n@keyframes fade-in-right {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(-50%, 0, 0);\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fade-in-left {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(50%, 0, 0);\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsS0FBSyxZQUFZLENBQUM7O0FBQ2pCLEtBQUssWUFBWSxDQUFDOztBQUNsQixLQUFLLFlBQVksQ0FBQzs7QUFDbEIsS0FBSyxZQUFZLENBQUM7O0FBQ2xCLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDdEQsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDOztBQUN2RSxLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7O0FBQ3RELEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDN0YsS0FBSyxZQUFZLENBQUM7O0FBQ2xCLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDdkUsTUFBTSxZQUFZLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDOztBQUN2RCxNQUFNLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDMUMsTUFBTSxZQUFZLENBQUM7O0FBQ25CLE1BQU0sWUFBWSxDQUFDOztBQUNuQixNQUFNLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDMUMsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDOztBQUNwRCxNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUM7O0FBQy9CLE1BQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7O0FBQ25FLE1BQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7O0FBQ25FLE1BQU0sV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7O0FBQ25FLE1BQU0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDdkQsTUFBTSxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDbkUsTUFBTSxXQUFXLENBQUM7O0FBQ2xCLE1BQU0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDdkQsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDOztBQUVyRDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSwwQkFBMEI7OztBQUc5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0FBRWxDOztBQUdBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBO0lBQ0k7O1FBRUkseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFHQTtJQUNJO01BQ0UsVUFBVTtNQUNWLGtDQUFrQztJQUNwQzs7SUFFQTtNQUNFLFVBQVU7TUFDVixlQUFlO0lBQ2pCO0VBQ0Y7O0FBR0Y7SUFDSTtNQUNFLFVBQVU7TUFDVixpQ0FBaUM7SUFDbkM7O0lBRUE7TUFDRSxVQUFVO01BQ1YsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBmb250LXNpemU6NjUlO1xyXG59XHJcblxyXG4uc3Qwe2ZpbGw6IzI2NDY3Nzt9XHJcblx0LnN0MXtmaWxsOiMyNDQ1NzU7fVxyXG5cdC5zdDJ7ZmlsbDojMjE0MDZDO31cclxuXHQuc3Qze2ZpbGw6IzFEM0I2Mzt9XHJcblx0LnN0NHtmaWxsOiNENkIyOTQ7c3Ryb2tlOiNENkIyOTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cdC5zdDV7ZmlsbDojRDZCMjk0O3N0cm9rZTojMDUwNDA0O3N0cm9rZS13aWR0aDowLjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cdC5zdDZ7ZmlsbDojMDUwNDA0O3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuXHQuc3Q3e2ZpbGw6Izc1NTc0NjtzdHJva2U6I0Q2QjI5NDtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcblx0LnN0OHtmaWxsOiNGRkZGRkY7fVxyXG5cdC5zdDl7ZmlsbDojRDZCMjk0O3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cdC5zdDEwe2ZpbGw6IzJDMzAzNTtzdHJva2U6I0Q2QjI5NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcblx0LnN0MTF7c3Ryb2tlOiNENkIyOTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cdC5zdDEye2ZpbGw6IzRDNzBBRDt9XHJcblx0LnN0MTN7ZmlsbDojNkE2RTc1O31cclxuXHQuc3QxNHtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcblx0LnN0MTV7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuXHQuc3QxNntvcGFjaXR5OjAuNTtmaWxsOiMyNDQ1NzU7fVxyXG5cdC5zdDE3e29wYWNpdHk6MC41O2ZpbGw6IzI0NDU3NTtzdHJva2U6IzNCNTE3MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcblx0LnN0MTh7b3BhY2l0eTowLjU7ZmlsbDojMjQ0NTc1O3N0cm9rZTojMzg1ODg3O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuXHQuc3QxOXtvcGFjaXR5OjAuNTtmaWxsOiMyNDQ1NzU7c3Ryb2tlOiNGQTBGMEM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cdC5zdDIwe2ZpbGw6IzI0NDU3NTtzdHJva2U6IzI0NDU3NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcblx0LnN0MjF7b3BhY2l0eTowLjU7ZmlsbDojMjQ0NTc1O3N0cm9rZTojMjQ0NTc1O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuXHQuc3QyMntvcGFjaXR5OjAuNTt9XHJcblx0LnN0MjN7ZmlsbDojMjQ0NTc1O3N0cm9rZTojMzg1ODg3O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuXHQuc3QyNHtmaWxsOm5vbmU7c3Ryb2tlOiMzODU4ODc7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG5cclxuLnN2Z0JveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN2Z0JveC1jb250ZW50e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgXHJcbn1cclxuXHJcbiN0b3AtcmlnaHRfMV97XHJcbiAgICBhbmltYXRpb246IDJzIGZhZGUtaW4tbGVmdDtcclxuICBcclxuICAgIFxyXG59XHJcblxyXG4jbG93LXJpZ2h0XzFfe1xyXG4gICAgYW5pbWF0aW9uOiA1cyBmYWRlLWluLWxlZnQ7XHJcbn1cclxuXHJcbnN2Z0NvbnRhaW5lcntcclxuICAgIGhlaWdodDo3ODIuMjggO1xyXG4gICAgd2lkdGg6IDQzNy40MztcclxufVxyXG5cclxuI2V5ZWJyb3dzXzFfe1xyXG5cclxuICAgIGFuaW1hdGlvbjogMXMgZXllYnJvdyBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuXHJcbn1cclxuXHJcblxyXG4jdG9wLWxlZnRfMV97XHJcbiAgICBhbmltYXRpb246IDNzIGZhZGUtaW4tcmlnaHQ7XHJcbn1cclxuXHJcbiNsb3ctbGVmdF8xX3tcclxuXHJcbiAgICBhbmltYXRpb246IDQuNXMgZmFkZS1pbi1yaWdodDtcclxufVxyXG5cclxuI2NvZmVlLXNtb2tlXzFfe1xyXG5cclxuICAgIGFuaW1hdGlvbjogMXMgZmFkZS1vdXQtYW5pbSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLW91dC1hbmlte1xyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXllYnJvd3tcclxuICAgIDAle1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC41JSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDUwJSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _classes_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/post */ "U2kE");
/* harmony import */ var _app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/freeapi.service */ "yDDU");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










class AppComponent {
    constructor(_freeApiService) {
        this._freeApiService = _freeApiService;
        this.title = 'App';
    }
    ngOnInit() {
        //Get data from server
        this._freeApiService.getComments()
            .subscribe(data => {
            this.listComments = data;
        });
        //Get data from server with parameter
        this._freeApiService.getCommentByParam()
            .subscribe(data => {
            this.listPosts = data;
        });
        //Insert data from server
        let newPost = new _classes_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
        newPost.body = 'lorem ipsumwakak';
        newPost.title = 'gago';
        newPost.id = 777;
        this._freeApiService.post(newPost)
            .subscribe(data => {
            this.objPosts = data;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aboutme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["AboutmeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_2__["freeApiService"] }]; }, null); })();


/***/ }),

/***/ "U2kE":
/*!*********************************!*\
  !*** ./src/app/classes/post.ts ***!
  \*********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
}


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
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/email.service */ "cfV7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/services/freeapi.service */ "yDDU");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-typed-js */ "pRTP");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_5__["freeApiService"],
        _services_email_service__WEBPACK_IMPORTED_MODULE_0__["emailService"]
    ], imports: [[
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_14__["NgxTypedJsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["AboutmeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], imports: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_14__["NgxTypedJsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["AboutmeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
                ],
                imports: [
                    ngx_typed_js__WEBPACK_IMPORTED_MODULE_14__["NgxTypedJsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [
                    _app_services_freeapi_service__WEBPACK_IMPORTED_MODULE_5__["freeApiService"],
                    _services_email_service__WEBPACK_IMPORTED_MODULE_0__["emailService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "b2u2":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutmeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 29, vars: 0, consts: [["id", "about", 1, "hero", "is-medium"], [1, "hero-body"], [1, "container", "columns", 2, "margin", "auto", "padding", "0"], [1, "column"], [1, "image", "is-128x128", "imgCenter"], ["src", "../../assets/desktop.png"], [1, "container", "abtContent"], [1, "title"], ["src", "../../assets/headphone.png"], [1, "typing"], ["src", "../../assets/gamepad.png"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Programmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " After graduating in 2019 with Bachelor's Degree of Information System. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I spend my time creating pet projects to enhance my programming skills. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Musician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " I play musical instruments such as guitar, piano and violin as a past time hobby. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gamer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Other than playing musical instruments, I also love to play video games on console, pc and mobile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size:2rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n}\r\n\r\n.abtContent[_ngcontent-%COMP%]{\r\n    margin-top:40px; \r\n    text-align: center; \r\n    padding-bottom: 20px;\r\n}\r\n\r\n.imgCenter[_ngcontent-%COMP%]{\r\n    padding:0;\r\n    margin:auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2YiLCJmaWxlIjoiYWJvdXRtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbi5hYnRDb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmltZ0NlbnRlcntcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _classes_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../classes/email */ "uqUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/email.service */ "cfV7");





class ContactComponent {
    constructor(fb, _emailService) {
        this.fb = fb;
        this._emailService = _emailService;
        this.form = this.fb.group({
            name: [''],
            emailAdd: [''],
            subject: [''],
            message: ['']
        });
    }
    ngOnInit() { }
    resetForm() {
        this.form.reset();
    }
    sendEmail() {
        var _a, _b, _c, _d;
        var objEmail = new _classes_email__WEBPACK_IMPORTED_MODULE_0__["Email"]();
        objEmail.name = (_a = this.form.get("name")) === null || _a === void 0 ? void 0 : _a.value;
        objEmail.email = (_b = this.form.get("emailAdd")) === null || _b === void 0 ? void 0 : _b.value;
        objEmail.subject = (_c = this.form.get("subject")) === null || _c === void 0 ? void 0 : _c.value;
        objEmail.message = (_d = this.form.get("message")) === null || _d === void 0 ? void 0 : _d.value;
        this._emailService.post(objEmail)
            .subscribe((response) => console.log(response), (error) => console.log(error));
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_email_service__WEBPACK_IMPORTED_MODULE_3__["emailService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 53, vars: 1, consts: [["id", "contact", 1, "hero", "is-large"], [1, "hero-body", 2, "margin-top", "-10%"], [1, "container"], [1, "title"], [1, "subtitle"], [2, "border-top", "1.5px solid #407093"], [2, "border-top", "1px solid #4C70AD"], [1, "columns"], [1, "column"], ["ngForm", "", 3, "formGroup", "ngSubmit"], [1, "field"], [1, "label"], [1, "control", "form-group"], ["formControlName", "name", "type", "text", "placeholder", "John Dough", 1, "input"], [1, "control", "has-icons-left", "has-icons-right", "form-group"], ["formControlName", "emailAdd", "required", "", "type", "email", "placeholder", "Enter email-address", "value", "", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-exclamation-triangle"], [1, "select"], ["formControlName", "subject"], [1, "control", "form-control"], ["formControlName", "message", "placeholder", "Your message here", 1, "textarea"], [1, "field", "is-grouped"], ["type", "submit", 1, "button", "is-link"], [1, "control"], [1, "button", "is-link", "is-light", 3, "click"], [1, "column", 2, "overflow", "hidden"], ["src", "../../assets//shake-hand.png"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Send me a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_12_listener() { return ctx.sendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Job Opportunity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Just dropping by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_49_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    font-size:3rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDF7XHJcbiAgICBmb250LXNpemU6M3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_email_service__WEBPACK_IMPORTED_MODULE_3__["emailService"] }]; }, null); })();


/***/ }),

/***/ "cfV7":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: emailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailService", function() { return emailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class emailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.CON_URL = "http://localhost:3000/send_email";
    }
    post(newEmail) {
        return this.httpClient.post(this.CON_URL, newEmail);
    }
}
emailService.ɵfac = function emailService_Factory(t) { return new (t || emailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
emailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: emailService, factory: emailService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](emailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 37, vars: 0, consts: [["id", "navbarHead", 1, "navbar", "is-transparent", "is-fixed-top"], [1, "navbar-brand"], ["data-target", "burgerItems", 1, "navbar-burger", "burger"], ["id", "burgerItems", 1, "navbar-menu"], [1, "navbar-start"], ["href", "#home", 1, "navbar-item"], ["href", "#about", 1, "navbar-item"], ["href", "#project", 1, "navbar-item"], ["href", "#contact", 1, "navbar-item"], [1, "navbar-end"], [1, "navbar-item"], [1, "field", "is-grouped"], [1, "control"], ["target", "_blank", "href", "https://github.com/rrodriguez04?tab=repositories", 1, "bd-tw-button", "button"], [1, "icon"], [1, "fab", "fa-github"], ["target", "_blank", "href", "https://www.linkedin.com/in/ron-erick-rodriguez-475975119/", 1, "bd-tw-button", "button"], [1, "fab", "fa-linkedin"], ["href", "../../assets/Docs/cv2020.pdf", 1, "button", "is-primary"], [1, "fas", "fa-download"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#navbarHead[_ngcontent-%COMP%]{\r\n    transition: 1.5s ease-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhckhlYWR7XHJcbiAgICB0cmFuc2l0aW9uOiAxLjVzIGVhc2Utb3V0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uqUP":
/*!**********************************!*\
  !*** ./src/app/classes/email.ts ***!
  \**********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
class Email {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yDDU":
/*!*********************************************!*\
  !*** ./src/app/services/freeapi.service.ts ***!
  \*********************************************/
/*! exports provided: freeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeApiService", function() { return freeApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class freeApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.CON_URL = "https://jsonplaceholder.typicode.com/comments";
        this.CON_URLPOST = "https://jsonplaceholder.typicode.com/posts";
    }
    getComments() {
        return this.httpClient.get(this.CON_URL);
    }
    getCommentByParam() {
        let param1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("userId", "1");
        return this.httpClient.get(this.CON_URLPOST, { params: param1 });
    }
    post(newPost) {
        return this.httpClient.post(this.CON_URLPOST, newPost);
    }
}
freeApiService.ɵfac = function freeApiService_Factory(t) { return new (t || freeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
freeApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: freeApiService, factory: freeApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](freeApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, consts: [["id", "project", 1, "hero", "is-primary", "is-large"], [1, "hero-body"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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