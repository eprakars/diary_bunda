import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  width: 100%;
}
body {
  font-family: 'Montserrat', sans-serif;
}

button, input, select, textarea {
  background-color: transparent;
  margin: 0;
  border: none;
}

.kyc {
  width: 360px;
  height: 240px;
  object-fit: contain;
}
p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: #40507b;
}

.navbar{
  background-color: #ffffff;
  z-index: 1000;
  width: 100%;
}

.height-130 {
  height: 130px
}
.height-80 {
  height: 80px;
}
.padding-35{
  padding: 35px !important;
}

//////////////////////////////////////////////////////
//                                                  //
//    ////////  /////////   ////    //  ////////    //
//    //        //     //   // //   //     //       //
//    //////    //     //   //  //  //     //       //
//    //        //     //   //   // //     //       //
//    //        /////////   //    ////     //       //
//                                                  //
//////////////////////////////////////////////////////

:root {
  --fira-sans         : 'Fira Sans', sans-serif;
  --abril-fatface     : 'Abril Fatface', cursive;
  --font-style-normal : normal;
  --font-weight-400   : 400;
  --font-weight-700   : 700;
  --font-weight-800   : 800;
  --font-size-14      : 14px;
  --font-size-18      : 18px;
  --font-size-24      : 24px;
  --font-size-32      : 32px;
  --font-size-48      : 48px;
  --font-size-64      : 64px;
  --font-size-21      : 21px;
  --line-height-27    : 27px;
  --line-height-40    : 40px;
  --line-height-64    : 64px;
  --line-height-82    : 82px;
}

.body-text {
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-18);
  line-height: var(--line-height-27);
  color: var(--black);
}

.body-text-bold {
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-18);
  line-height: var(--line-height-27);
  color: var(--black);
}

.note {
  font-family: var(--fira-sans) !important;
  font-style: var(--font-style-normal) !important;
  font-weight: var(--font-weight-400) !important;
  font-size: var(--font-size-14) !important;
  line-height: var(--line-height-21) !important;
}

.note-bold {
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-14);
  line-height: var(--line-height-27);
}

.heading-1 {
  font-family: var(--abril-fatface);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-64);
  line-height: var(--line-height-82);
}

.heading-2 {
  font-family: var(--abril-fatface);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-48);
  line-height: var(--line-height-64);
}

.heading-3 {
  font-family: var(--abril-fatface);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-32);
  line-height: var(--line-height-40);
}

.subheadline {
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-24);
  line-height: var(--line-height-36);
}

.subheadline-bold {
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-24);
  line-height: var(--line-height-36);
  color: #000000;
}

p,
label {
  font-family: 'Source Sans Pro-ExtraLight', sans-serif;
  line-height: 1.5em;
  font-weight: 300;
  color: #4b4b4b;
  font-size: 14px;
}


h1 {
  font-family: Montserrat;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.79;
  letter-spacing: 0.2px;
  color: #1e3163;
}
h2 {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin-top:40px;
  margin-bottom:40px;
}

h2 span {
   background:#fff;
   padding-right:10px;
}
h3 {
  font-family: Montserrat;
  font-size: 19px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.89;
  letter-spacing: 0.1px;
  text-align: center;
  color: #1e3163;
}

h4 {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: 0.1px;
  color: #1e3163;
}

h7{
  width: 441px;
  height: 90px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  color: #40507b;
}

a {
  color: #1ece86
}

.bold {
  font-weight: bold;
}


//////////////////////////////////////////////////////
//                                                  //
//    ////////  /////////   ////    //  ////////    //
//    //        //     //   // //   //     //       //
//    //////    //     //   //  //  //     //       //
//    //        //     //   //   // //     //       //
//    //        /////////   //    ////     //       //
//                                                  //
//////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//                                                       //
//    //////  /////////   //       /////////   ///////   //
//    //      //     //   //       //     //   //    //  //
//    //      //     //   //       //     //   ///////   //
//    //      //     //   //       //     //   //  //    //
//    //////  /////////   ///////  /////////   //   //   //
//                                                       //
///////////////////////////////////////////////////////////

:root {
  --black-2         : #fafafa;
  --black-10        : #e5e5e5;
  --black-20        : #CCCCCC;
  --black-40        : #999999;
  --black-60        : #666666;
  --black-80        : #333333;
  --black           : #000000;
  --white           : #FFFFFF;
  --likuid-red-20   : #FFA096;
  --likuid-red-40   : #FF8173;
  --likuid-red      : #FF6150;
  --likuid-red-80   : #E55748;
  --likuid-red-100  : #CC4E40;
  --likuid-green-20 : #98E4C4;
  --likuid-green-40 : #76DBB1;
  --likuid-green    : #54D29D;
  --likuid-green-80 : #4CBD8D;
  --likuid-green-100: #43A87E;
  --likuid-blue-20  : #98E4F3;
  --likuid-blue-40  : #76DBEF;
  --likuid-blue     : #54D2EB;
  --likuid-blue-80  : #4CBDD3;
  --likuid-blue-100 : #43A8BC;
  --likuid-yellow-20: #FFE066;
  --likuid-yellow-40: #FFD533;
  --likuid-yellow   : #FFCB00;
  --likuid-yellow-80: #E5B700;
  --likuid-yellow-100: #CCA200;
  --likuid-navy     : #1E3163;
  --likuid-grey     : #999999;
}

.black {
  color: var(--black) !important;
}

.black-2 {
  color: var(--black-2) !important;
}

.black-2-background {
  background: var(--black-2) !important;
}

.black-10 {
  color: var(--black-10) !important;
}

.black-20 {
  color: var(--black-20) !important;
}

.black-40 {
  color: var(--black-40) !important;
}

.black-60 {
  color: var(--black-60) !important;
}

.black-80 {
  color: var(--black-80) !important;
}

.white{
  color: var(--white) !important;
}

.likuid-red {
  color: var(--likuid-red) !important;
}

.likuid-red-background {
  background: var(--likuid-red) !important;
}

.likuid-green {
  color: var(--likuid-green) !important;
}

.likuid-green-background {
  background: var(--likuid-green) !important;
}

.likuid-yellow {
  color: var(--likuid-yellow) !important;
}

.likuid-yellow-background {
  background: var(--likuid-yellow) !important;
}

.likuid-blue {
  color: var(--likuid-blue) !important;
}

.likuid-blue-background {
  background: var(--likuid-blue) !important;
}

.likuid-blue-80-background {
  background: var(--likuid-blue-80);
}

.likuid-green-80-background {
  background: var(--likuid-green-80);
}

.likuid-navy {
  color: var(--likuid-navy) !important;
}

.likuid-navy-background {
  background: var(--likuid-navy) !important;
}

.filter-likuid-green {
  filter: invert(71%) sepia(50%) saturate(449%) hue-rotate(102deg) brightness(95%) contrast(83%)
}

.filter-likuid-blue {
  filter: invert(73%) sepia(57%) saturate(523%) hue-rotate(152deg) brightness(94%) contrast(96%);
}

.filter-likuid-yellow {
  filter: invert(80%) sepia(37%) saturate(2196%) hue-rotate(358deg) brightness(101%) contrast(105%);
}

///////////////////////////////////////////////////////////
//                                                       //
//    //////  /////////   //       /////////   ///////   //
//    //      //     //   //       //     //   //    //  //
//    //      //     //   //       //     //   ///////   //
//    //      //     //   //       //     //   //  //    //
//    //////  /////////   ///////  /////////   //   //   //
//                                                       //
///////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
//                                                                 //
//    //////  ///////    ////     //////  //  ////   //  ////////  //
//    //      //   //   //  //    //          // //  //  //        //
//    //////  ///////  ///////    //      //  //  // //  //  ////  //
//        //  //      //     //   //      //  //   ////  //    //  //
//    //////  //     //       //  //////  //  //     //  ////////  //
//                                                                 //
/////////////////////////////////////////////////////////////////////

:root {
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 20px;
  --spacing-lg: 32px;
  --spacing-xl: 52px;

  --layout-xs : 8px;
  --layout-sm : 16px;
  --layout-md : 24px;
  --layout-lg : 40px;
  --layout-xl : 64px;
  --layout-xxl : 104px;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARGIN ALL

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.margin-0 {
  margin: 0px !important;
}

.margin-xs {
  margin: var(--layout-xs);
}
.margin-sm {
  margin: var(--layout-sm);
}
.margin-md {
  margin: var(--layout-md);
}
.margin-lg {
  margin: var(--layout-lg);
}
.margin-xl {
  margin: var(--layout-xl);
}
.margin-xxl {
  margin: var(--layout-xxl);
}

.margin-20{
  margin: 20px;
}
.margin-auto {
  margin: auto;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARGIN TOP

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.margin-top-xs {
  margin-top: var(--layout-xs);
}
.margin-top-sm {
  margin-top: var(--layout-sm);
}
.margin-top-md {
  margin-top: var(--layout-md);
}

.margin-top-lg {
  margin-top: var(--layout-lg);
}

.margin-top-xl {
  margin-top: var(--layout-xl);
}

.margin-top-xxl {
  margin-top: var(--layout-xxl);
}

.margin-top-5 {
  margin-top: 5px;
}

.margin-top--50{
  margin-top: -50px;
}
.margin-top--18{
  margin-top: -18px;
}

.margin-top--20{
  margin-top:-20px;
}

.margin-top--30{
  margin-top:-30px;
}

.margin-top-0 {
  margin-top: 0 !important;
}

.margin-top-15 {
  margin-top: 15px;
}

.margin-top-20{
  margin-top:20px;
}
.margin-top-xxl {
  margin-top: 100px;
}
.margin-top-40{
  margin-top:40px;
}

.margin-top-50{
  margin-top:50px;
}

.margin-top-60{
  margin-top:60px;
}

.margin-top-10-percent {
  margin-top: 10%;
}

.margin-top-100 {
  margin-top: 100px;
}

.margin-top-16{
	margin-top: 16px;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARGIN_BOTTOM

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////


.margin-bottom-xs {
  margin-bottom: var(--layout-xs);
}
.margin-bottom-sm {
  margin-bottom: var(--layout-sm);
}
.margin-bottom-md {
  margin-bottom: var(--layout-md);
}
.margin-bottom-lg {
  margin-bottom: var(--layout-lg);
}
.margin-bottom-xl {
  margin-bottom: var(--layout-xl);
}
.margin-bottom-xxl {
  margin-bottom: var(--layout-xxl);
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-bottom-16{
  margin-bottom:16px;
}

.margin-bottom-20{
  margin-bottom: 20px;
}

.margin-bottom-30{
  margin-bottom:30px;
}

.margin-bottom-40{
  margin-bottom: 40px;
}

.margin-bottom-100 {
  margin-bottom: 100px;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARGIN-RIGHT

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.margin-right-xs {
  margin-right: var(--layout-xs);
}
.margin-right-sm {
  margin-right: var(--layout-sm);
}
.margin-right-md {
  margin-right: var(--layout-md);
}
.margin-right-lg {
  margin-right: var(--layout-lg);
}
.margin-right-xl {
  margin-right: var(--layout-xl);
}
.margin-right-xxl {
  margin-right: var(--layout-xxl);
}

.margin-right-10 {
  margin-right: 10px;
}

.margin-right-20 {
  margin-right:20px;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARGIN-LEFT

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.margin-left-xs {
  margin-left: var(--layout-xs);
}
.margin-left-sm {
  margin-left: var(--layout-sm);
}
.margin-left-md {
  margin-left: var(--layout-md);
}
.margin-left-lg {
  margin-left: var(--layout-lg);
}
.margin-left-xl {
  margin-left: var(--layout-xl);
}
.margin-left-xxl {
  margin-left: var(--layout-xxl);
}

.margin-left-28{
  margin-left:28px;
}

.margin-left--14{
  margin-left: -14px;
}

.margin-left-40{
  margin-left:40px;
}
.width-xl {
  width: var(--layout-xl);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//PADDING ALL

// --spacing-xs: 8px;
// --spacing-sm: 12px;
// --spacing-md: 20px;
// --spacing-lg: 32px;
// --spacing-xl: 52px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.padding-auto {
  padding: auto;
}
.padding-0 {
  padding: 0px !important;
}

.padding-xs {
  padding: var(--spacing-xs);
}
.padding-sm {
  padding: var(--spacing-sm);
}
.padding-md {
  padding: var(--spacing-md);
}
.padding-lg {
  padding: var(--spacing-lg);
}
.padding-xl {
  padding: var(--spacing-xl);
}

.padding-xs {
  padding:10px;
}

.padding-10 {
  padding:10px;
}
.padding-20{
  padding:20px;
}

.padding-top-2{
  padding-top: 2px;
}

.padding-lg-important{
  padding: var(--spacing-lg) !important;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//PADDING-TOP

//--spacing-xs: 8px;
//--spacing-sm: 12px;
//--spacing-md: 20px;
//--spacing-lg: 32px;
//--spacing-xl: 52px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.padding-top-0 {
  padding-top: 0;
}

.padding-top-xs {
  padding-top: var(--spacing-xs);
}
.padding-top-sm {
  padding-top: var(--spacing-sm);
}
.padding-top-md {
  padding-top: var(--spacing-md);
}
.padding-top-lg {
  padding-top: var(--spacing-lg);
}
.padding-top-xl {
  padding-top: var(--spacing-xl);
}

.padding-top-2{
  padding-top: 2px;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//PADDING BOTTOM

//--spacing-xs: 8px;
//--spacing-sm: 12px;
//--spacing-md: 20px;
//--spacing-lg: 32px;
//--spacing-xl: 52px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.padding-bottom-xs {
  padding-bottom: var(--spacing-xs);
}
.padding-bottom-sm {
  padding-bottom: var(--spacing-sm);
}
.padding-bottom-md {
  padding-bottom: var(--spacing-md);
}
.padding-bottom-lg {
  padding-bottom: var(--spacing-lg);
}
.padding-bottom-xl {
  padding-bottom: var(--spacing-xl);
}

.padding-bottom-20 {
  padding-bottom: 20px;
}

.padding-bottom-30 {
  padding-bottom: 30px;
}

.padding-bot-20 {
  padding-bottom: 20px;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//PADDING LEFT

//--spacing-xs: 8px;
//--spacing-sm: 12px;
//--spacing-md: 20px;
//--spacing-lg: 32px;
//--spacing-xl: 52px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

.padding-left-xs {
  padding-left: var(--spacing-xs);
}
.padding-left-sm {
  padding-left: var(--spacing-sm);
}
.padding-left-md {
  padding-left: var(--spacing-md);
}
.padding-left-lg {
  padding-left: var(--spacing-lg);
}
.padding-left-xl {
  padding-left: var(--spacing-xl);
}

.padding-left-sm-important {
  padding-left: 16px !important;
}

.padding-left-0 {
  padding-left: 0 !important;
}

.padding-right-0 {
  padding-right: 0 !important;
}

.padding-right-sm-important padding-left-sm-important {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

.padding-left-right-16 {
  padding-left: 16px !important;
  padding-right: 16px !important;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//PADDING-RIGHT

//--spacing-xs: 8px;
//--spacing-sm: 12px;
//--spacing-md: 20px;
//--spacing-lg: 32px;
//--spacing-xl: 52px;
//////////////////////////////////////////////////////////////////////////////////////////////////////////


.padding-right-xs {
  padding-right: var(--spacing-xs);
}
.padding-right-sm {
  padding-right: var(--spacing-sm);
}
.padding-right-md {
  padding-right: var(--spacing-md);
}
.padding-right-lg {
  padding-right: var(--spacing-lg);
}
.padding-right-xl {
  padding-right: var(--spacing-xl);
}

.padding-right-sm-important {
  padding-right: 12px !important;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//WIDTH

// --layout-xs : 8px;
// --layout-sm : 16px;
// --layout-md : 24px;
// --layout-lg : 40px;
// --layout-xl : 64px;
// --layout-xxl : 104px;
////////////////////////////////////////////////////////////////////////////////////////////////

.width-xs {
  width: var(--layout-xs);
}
.width-sm {
  width: var(--layout-sm);
}
.width-md {
  width: var(--layout-md);
}
.width-lg {
  width: var(--layout-lg);
}
.width-xl {
  width: var(--layout-xl);
}

.width-100{
  width:100%;
}

.height-100{
  height:100%;
}

.width-80 {
  width: 80px
}

.full-width {
  width: 100%;
}

/////////////////////////////////////////////////////////////////////
//                                                                 //
//    //////  ///////    ////     //////  //  ////   //  ////////  //
//    //      //   //   //  //    //          // //  //  //        //
//    //////  ///////  ///////    //      //  //  // //  //  ////  //
//        //  //      //     //   //      //  //   ////  //    //  //
//    //////  //     //       //  //////  //  //     //  ////////  //
//                                                                 //
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
//Positioning
/////////////////////////////////////////////////////////////////////

//position
.position-absolute {
  position: absolute;
}

.display-inline {
  display: inline-block;
}
.position-relative {
  position: relative;
}

//display

.display-flex {
  display: flex;
}

.flex-1-center {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.display-block {
  display: block;
}

.flex-dir-row-rev {
  flex-direction: row-reverse;
}
.bottom-0{
  bottom: 0;
}
.right-0{
  right:0;
}

.float-right{
  float: right;
}

.container{
  width:100%;
  margin-bottom: 100px;
}
/////////////////////////////////////////////////////////////////////
//POSITIONING END
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
//                                                                 //
//    //////   //   //  ////////  ////////  ///////  ////   //     //
//    //   //  //   //     //        //     //   //  // //  //     //
//    //////   //   //     //        //     //   //  //  // //     //
//    //   //  //   //     //        //     //   //  //   ////     //
//    //////   ///////     //        //     ///////  //     //     //
//                                                                 //
/////////////////////////////////////////////////////////////////////

//Primary Button
.btn-liku-primary{
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-18);
  line-height: var(--line-height-27);
  color: var(--black);
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-lg);
  background-color: var(--likuid-green);
}
.btn-liku-primary:disabled{
  color: var(--black-40);
  background-color: var(--black-20);
}
.btn-liku-primary:active:enabled{
  outline: none;
  background-color: var(--likuid-green-80);
}
.btn-liku-primary:hover:enabled{
  outline: none;
  background-color: var(--likuid-green-40);
}
.btn-liku-primary:focus:enabled{
  outline: none;
  background-color: var(--likuid-green-80);
}

// Secondary Button
.btn-liku-secondary{
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-18);
  line-height: var(--line-height-27);
  color: var(--likuid-green);
  padding: 10px 18px 10px 18px;
  border: solid 2px var(--likuid-green);
}
.btn-liku-secondary:disabled{
  outline: none;
  color: var(--black-40);
  border: solid 2px var(--black-20);
}
.btn-liku-secondary:active:enabled{
  outline: none;
  background-color: var(--likuid-green-80);
}
.btn-liku-secondary:hover:enabled{
  outline: none;
  background-color: var(--likuid-green-40);
  color: var(--white);
}
.btn-liku-secondary:focus:enabled{
  outline: none;
  background-color: var(--likuid-green-80);
  color: var(--white);
}

// Secondary Button Without Border
.btn-liku-secondary-borderless{
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700);
  font-size: var(--font-size-18);
  line-height: var(--line-height-27);
  color: var(--likuid-green);
  padding: 10px 18px 10px 18px;
}
.btn-liku-secondary-borderless:disabled{
  outline: none;
}
.btn-liku-secondary-borderless:active:enabled{
  outline: none;
}
.btn-liku-secondary-borderless:hover:enabled{
  outline: none;
}
.btn-liku-secondary-borderless:focus:enabled{
  outline: none;
}

.btn-liku-primary-small {
  font-family: var(--fira-sans) !important;
  font-style: var(--font-style-normal) !important;
  font-weight: var(--font-weight-700) !important;
  font-size: var(--font-size-14) !important;
  line-height: var(--line-height-27) !important;
  padding: 8px 16px 8px 16px !important;
}

.btn-liku-secondary-small {
  font-family: var(--fira-sans) !important;
  font-style: var(--font-style-normal) !important;
  font-weight: var(--font-weight-700) !important;
  font-size: var(--font-size-14) !important;
  line-height: var(--line-height-27) !important;
  padding: 6px 14px 6px 14px !important;
}

.btn-liku-secondary-small-borderless{
  font-family: var(--fira-sans);
  font-style: var(--font-style-normal);
  font-weight: var(--font-weight-700) !important;
  font-size: var(--font-size-14) !important;
  line-height: var(--line-height-27) !important;
  color: var(--likuid-green);
  padding: 6px 14px 6px 14px !important;
}

.btn-google {
  font-familiy: var(--fira-sans) !important;
  font-style: var(--font-style-normal) !important;
  font-size: var(--font-size-18) !important;
  font-weight: var(--font-weight-700) !important;
  line-height: var(--line-height-27) !important;
  padding: var(--spacing-sm) var(--spacing-md) !important;
  border: 2px solid var(--black);
}

/////////////////////////////////////////////////////////////////////
//                                                                 //
//    //////   //   //  ////////  ////////  ///////  ////   //     //
//    //   //  //   //     //        //     //   //  // //  //     //
//    //////   //   //     //        //     //   //  //  // //     //
//    //   //  //   //     //        //     //   //  //   ////     //
//    //////   ///////     //        //     ///////  //     //     //
//                                                                 //
/////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//                                      //
//    //      //  ///   //  //   ///    //
//    //          ////  //  // ///      //
//    //      //  // // //  ////        //
//    //      //  //  ////  // ///      //
//    //////  //  //   ///  //  ///     //
//                                      //
//////////////////////////////////////////
.nav {
  border-bottom: 1px solid var(--black-20);
}

.nav-borderless-bottom {
  border-bottom: 0px solid;
}

.nav-link {
  font-family: var(--fira-sans);
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-400);
  font-style: var(--font-style-400);
  line-height: var(--line-height-27);
  text-align: center;
  color: var(--likuid-black);
  border-radius: 0px;
}

.nav-link:hover {
  color: var(--likuid-blue);
}

.nav-link.disabled{
  color: var(--black-40)
}

.nav-pills .nav-link.active {
  background-color: transparent;
  font-family: var(--fira-sans);
  font-size: var(--font-size-18);
  font-weight: var(--font-weight-700);
  font-style: var(--font-style-400);
  text-align: center;
  border-radius: 0px !important;
  color: var(--likuid-blue);
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  border-bottom: 5px solid var(--likuid-blue);
}

//////////////////////////////////////////
//                                      //
//    //      //  ///   //  //   ///    //
//    //          ////  //  // ///      //
//    //      //  // // //  ////        //
//    //      //  //  ////  // ///      //
//    //////  //  //   ///  //  ///     //
//                                      //
//////////////////////////////////////////

/////////////////////////////////////////////
//                                         //
//    //////     ////   //////  ///////    //
//    //        //  //  //   // //    //   //
//    //       ///////  //////  //     //  //
//    //      //    //  // //   //    //   //
//    ////// //     //  //  //  ///////    //
//                                         //
/////////////////////////////////////////////

.likuid-card {
  height: 500px;
  position: relative;
  display: flex;
  max-width: 384px;
  text-align: left;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.06);
}

.likuid-card-content {
  position: absolute;
  top: 200px;
  width: 100%;
  padding: var(--spacing-lg);
}

.likuid-card-footer {
  position: absolute;
  bottom: 0px;
  width: 100%
}

.footer-fill{
  filter: invert(66%) sepia(100%) saturate(0%) hue-rotate(52deg) brightness(50%) contrast(100%);
}

.ribbon {
  padding: var(--spacing-xs);
  border-radius: 4px;
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
}

.card-image {
  width: 64px;
  height: 64px;
  border-radius: 4px;
}

.card-image-position {
  position: absolute;
  top: 163px;
  left: 32px;
}

.card-tag-group {
  margin: var(--spacing-lg);
}

.card-tag {
  padding: var(--spacing-xs);
  border: solid 1px var(--black-20);
  display: inline-block;
  border-radius: 4px;
  margin-right: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.notification-ellipse {
  display: inline-block;
  background-color: var(--likuid-blue);
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

.progress{
  height: var(--spacing-xs);
  background-color: var(--black-20);
  border-radius: 0px;
}

.progress-bar{
  height: var(--spacing-xs);
}

.progress-upload{
  height: 8px;
  border-radius: 2px;
}

/////////////////////////////////////////////
//                                         //
//    //////     ////   //////  ///////    //
//    //        //  //  //   // //    //   //
//    //       ///////  //////  //    //  //
//    //      //    //  // //   //    //   //
//    ////// //     //  //  //  ///////    //
//                                         //
/////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//                                                           //
//    ///////  ////////  //////  ///////   ///////  //////   //
//    //   //  //    //  //   // //    //  //       //   //  //
//    /////    //    //  //////  //    //  ////     //////   //
//    //   //  //    //  // //   //   //   //       // //    //
//    ///////  ////////  //  //  //////    ///////  //  //   //
//                                                           //
///////////////////////////////////////////////////////////////
.border-none {
  border: none
}

.border-radius-10 {
  border-radius: 10px !important;
}

.border-small{
  border: solid 1px #e9ebf0;
  margin-top:40px;
  padding:33.5px;
}
.border {
  border: 1px solid var(--black-20);
}

.border-bottom {
  border-bottom: 1px solid var(--black-20);
}

.border-right {
  border-right: 1px solid var(--black-20);
}

.registration-line-title{
  display: flex;
  flex-direction: row-reverse;
}

.registration-line-title:before {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid var(--black-20);
  margin: auto;
  margin-left: var(--spacing-sm)
}

.registration-line-dashed{
  display: flex;
  flex-direction: row-reverse;
}

.registration-line-dashed:before {
  content: "";
  flex: 1 1;
  border: 1px dashed var(--black-10);
}

.border-bottom-none {
  border-bottom: none !important;
}

///////////////////////////////////////////////////////////////
//                                                           //
//    ///////  ////////  //////  ///////   ///////  //////   //
//    //   //  //    //  //   // //    //  //       //   //  //
//    /////    //    //  //////  //    //  ////     //////   //
//    //   //  //    //  // //   //   //   //       // //    //
//    ///////  ////////  //  //  //////    ///////  //  //   //
//                                                           //
///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
//                                                //
//    //  ///    //  ////////  //    // ////////  //
//        // //  //  //    //  //    //    //     //
//    //  //  // //  ////////  //    //    //     //
//    //  //   ////  //        //    //    //     //
//    //  //    ///  //        ////////    //     //
//                                                //
////////////////////////////////////////////////////

.likuid-input{
  border-bottom: 1px solid var(--black-10);
  opacity: 1;
  color: var(--black);
}

.likuid-info {
  top: -2px;
  padding-left: var(--spacing-xs);
}

.likuid-input-error {
  border-bottom: 1px solid var(--likuid-red);
}

.likuid-error-box {
  position: absolute;
  bottom: 18px;
  right: 0px;
  height: var(--layout-md);
  width: var(--layout-md);
  background: var(--likuid-red);
}


.likuid-success-box {
  position: absolute;
  bottom: 18px;
  right: 0px;
  height: var(--layout-md);
  width: var(--layout-md);
  background: var(--likuid-green);
}

.likuid-input:focus {
  outline: none
  border-bottom: 1px solid var(--likuid-blue);
}

.likuid-input:disabled {
  color: var(--black-60);
}

::-webkit-input-placeholder {
  color: var(--black-60);
  opacity: 1;
}

.border-radius-2 {
  border-radius: 2px;
}

.likuid-select {
  height: 55px;
  width: 100%;
  border-bottom: 1px solid var(--black-10);
  opacity: 1;
  color: var(--black);
}

.likuid-select:disabled {
  color: var(--black-20);
}

// .likuid-select select {
//   overflow: auto;
//   outline: none;
// }

// select option {
//   overflow: auto;
//   margin: 40px;
//   text-shadow: 30 20px 0 rgba(0, 0, 0, 0.4);
// }

.likuid-select:focus {
  outline: none;
}

////////////////////////////////////////////////////
//                                                //
//    //  ///    //  ////////  //    // ////////  //
//        // //  //  //    //  //    //    //     //
//    //  //  // //  ////////  //    //    //     //
//    //  //   ////  //        //    //    //     //
//    //  //    ///  //        ////////    //     //
//                                                //
////////////////////////////////////////////////////

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
}

.content-body {
  margin: auto;
  max-width: 1280px;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align :left;
}

.text-right {
  text-align: right;
}

.vertical-align {
  display: table;
  height: 100%
}

.vertical-align-middle {
  display: table-cell;
  vertical-align: middle;
}

.vertical-align-middle-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.height-inherit{
  height: inherit;
}

.image-height-600 {
  height: 600px;
}

.image-height-300 {
  height: 300px;
}



/////////////////////////////////////////////////////////////
//                                                         //
//    ///     ///   /////    //////   //  //      ///////  //
//    // //  ////  //    //  //   //      //      //       //
//    //   //  //  //    //  /////    //  //      //////   //
//    //       //  //    //  //   //  //  //      //       //
//    //       //   /////    //////   //  //////  ///////  //
//                                                         //
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//990
/////////////////////////////////////////////////////////////
@media (max-width: 990px) {
  .non-mobile-only {
    display: none !important;
  }

  .padding-top-bottom {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .home-illustration{
    left: 0;
  }
}

@media (min-width: 990px) {
  .border-right{
    border-right: solid 1px #e9ebf0;
  }
}



/////////////////////////////////////////////////////////////
//990 end
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//576 start
/////////////////////////////////////////////////////////////


@media screen and (min-width: 576px){
  .modal-dialog {
    max-width: 797px;
    margin: 1.75rem auto;
    margin-top: 10%;
  }
  .withdraw-all-btn {
    position: relative;
    top: 70px;
    height: 50px;
  }
  .margin-normal-top-60{
    margin-top:60px;
  }

  .card-img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    left: 40%;
    right:40%;
    top: 100px;
    margin-top: 100px;
    background: white;
    object-fit: contain;
  }

  .campaign-rightContent {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .about-card-profile{
    border-radius:6px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: center;
    color: #40507b;
    width:250px;
    height: 650px;
  }
  .text{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: #40507b;
  }
  .angels-img{
    margin-top:-20px;
    width:100%;
    z-index:-10;
  }
  .home-img{
    width:100%;
  }
  .how-does-it-work-img{
    width:406px;
  }
  .right-center-section{
    text-align:right;
  }
  .mobile-only {
    display: none !important;
  }
  .background-image{
    height:150px;
    width:375px;
    z-index:-10;
  }
  collapsenav{
    display: flex!important;
    justify-content: flex-end!important;
  }
}

@media (max-width: 576px){
  .border-mobile-only {
    border-top: 1px solid rgb(233, 235, 240);
    margin-left: 0px !important;
  }

  //BALANCE PAGE MOBILE START
  .margin-lg-mobile {
    margin: var(--layout-lg);
  }

  .padding-top-xl-mobile {
    padding-top: var(--spacing-xl);
  }

  .withdraw-all-btn {
    position: relative;
    left: -14px;
    height: 50px;
  }
  //BALANCE PAGE MOBILE END

  //REFERRAL PAGE MOBILE START
    .btn-copy-mobile {
      position: relative;
      bottom: 61px;
      margin-left: 60%;
    }

    .social-button-container {
      max-width: 224px;
      padding: 0;
    }
  //REFERRAL PAGE MOBILE END

  .modal-dialog {
    max-width: 320px;
    margin: 6.75rem auto;
  }
  .border-none {
    border: none !important;
  }
  .text-center-mobile {
    text-align: center;
  }
  .inputStyle-portofolio {
    height: 54px;
    border-radius: 4px;
    border: solid 1px #e9ebf0;
    background-color: #fdfdfd;
    opacity: 1;
    color: #40507b;
    position: relative;
  }
  .vertical-align {
    display: table;
    height: 100%;
  }

  .margin-left-0-mobile {
    margin-left: 0;
  }

  .text-left-mobile {
    text-align: left;
    padding-left: 24px;
  }

  .desktop-only {
    display: none;
  }

  .group-progress-mobile {
    display: inline-block;
    margin-right: var(--spacing-md)
  }

  .bar-progress-line{
    width: 200px;
    height: 3px;
    background-color: #c7ccd8;
    margin-top:-15px;
    z-index: -10;
  }

  .scrolling-horizontally {
    display: flex;
    padding: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;

    .scroll-hozirontal-item {
      padding: 20px;
      display: inline-block;
      width: 280px;
      flex: 0 0 auto;
      margin-right: 10px;
      background-color: #f7fafc;
      border-radius: 5px;
      border-bottom-right-radius: 50px 50px;
    }
  }

  :root {
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 20px;
    --spacing-lg: 32px;
    --spacing-xl: 52px;

    --layout-xs : 4px;
    --layout-sm : 8px;
    --layout-md : 16px;
    --layout-lg : 24px;
    --layout-xl : 40px;
    --layout-xxl : 64px;
  }

  .padding-0-mobile {
    padding: 0px !important;
  }

  .padding-left-md-mobile {
    padding-left: var(--layout-md) !important;
  }

  .padding-left-sm-mobile {
    padding-left: var(--layout-sm) !important;
  }


  .padding-right-md-mobile {
    padding-right: var(--layout-md) !important;
  }

  .margin-left-sm-mobile {
    margin-left: var(--layout-sm);
  }

  .margin-top-sm-mobile {
    margin-top: var(--layout-sm);
  }

  .margin-bottom-sm-mobile {
    margin-bottom: var(--layout-sm);
  }

  .margin-top-md-mobile {
    margin-top: var(--layout-md);
  }

  .margin-bottom-md-mobile {
    margin-bottom: var(--layout-md);
  }

  .margin-left-lg-mobile {
    margin-left: var(--layout-lg);
  }

  .margin-top-lg-mobile {
    margin-top: var(--layout-lg);
  }

  .heading-1 {
    font-size: var(--font-size-48);
    line-height: var(--line-height-64);
  }

  .heading-2 {
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

  .heading-3 {
    font-size: var(--font-size-24);
    line-height: var(--line-height-32);
  }
  .content-body-thin {
    padding-left: 20px;
    padding-right: 20px;
  }
  .sticky-navbar-campaign {
    display: none !important;
  }

  //REGISTRATION VU MOBILE START

  .registration-line-title-mobile-only {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 35px;
  }

  .text-otp {
    position: relative;
    bottom: 62px;
    margin-left: 140px;
  }

  .upload-document-area {
    width: 260px;
    text-align: center;
    position: relative;
    right: 6px;
  }

  .document-details {
    padding: 10px;
    text-align: center;
    position: relative;
    left: 5px;
  }

  //REGISTRATION VU MOBILE END

  .margin-top-20-mobile-only{
    margin-top: 20px !important;
  }

  .margin-0-mobile-only {
    margin: 0px !important
  }
  .heading-3-mobile-only {
    font-family: var(--abril-fatface);
    font-style: var(--font-style-normal);
    font-weight: var(--font-weight-400);
    font-size: var(--font-size-32);
    line-height: var(--line-height-40);
  }

  .padding-right-0{
    padding-right:0px;
  }
  h1 {
    font-size:24px;
  }
  .navbar{
    background-color: #ffffff;
    z-index: 101;
    width: 100%;
  }

  .scrolling-wrapper-value, .scrolling-wrapper-flexbox-value {
    height: 325px;
    margin-bottom: 20px;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .campaign-rightContent {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .bar-progress-line-short{
    width: 19%;
    height: 3px;
    background-color: #c7ccd8;
    margin-top:-15px;
    z-index: -10;
  }
  .progress-margin-auto-short{
    margin-top:10px;
    margin-bottom:20px;
  }
  .about-card-profile{
    border:solid 1px #e9ebf0;
    border-radius:6px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.14;
    letter-spacing: normal;
    text-align: center;
    color: #40507b;
    width:500px;
    height: 1000px;
  }



  .home-img{
    width:100%;
  }
  .right-center-section{
    text-align:center;
  }
  .mobile-margin-top-40{
    margin-top:40px;
  }
  .mobile-text-center{
    display: block;
    text-align:center;
    margin-left:auto;
    margin-right: auto;
  }
}
/////////////////////////////////////////////////////////////
//576 end
/////////////////////////////////////////////////////////////

@media screen and (max-width: 350px) {

  .padding-right-0{
    padding-right:0px;
  }

  h1 {
    font-size:24px;
  }

  .scrolling-wrapper-value, .scrolling-wrapper-flexbox-value {
    height: 500px;
    margin-bottom: 20px;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

/////////////////////////////////////////////////////////////
//                                                         //
//    ///     ///   /////    //////   //  //      ///////  //
//    // //  ////  //    //  //   //      //      //       //
//    //   //  //  //    //  /////    //  //      //////   //
//    //       //  //    //  //   //  //  //      //       //
//    //       //   /////    //////   //  //////  ///////  //
//                                                         //
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//HOME PAGE START
/////////////////////////////////////////////////////////////

.liku-icon-size {
  width: 80px;
  height: 80px;
}

.home-illustration {
  position: absolute;
  z-index: 0;
}

.home-video {
  position: absolute;
  background: var(--black-2);
}

.background-how-to-invest-mobile {
  right: 26px;
  margin-top: -110px;
}

.media-background {
  height: 85px;
}

.mailing-list-height {
  height: 131px;
}
.mailing-list ::-webkit-input-placeholder {
  color: var(--black-60);
  opacity: 1;
}

.mailing-list ::placeholder {
  color: var(--black-60);
  opacity: 1;
}

.mailing-list ::-ms-input-placeholder {
  color: var(--black-60);
  opacity: 1;
}

.mailing-list ::-moz-placeholder{
  color: var(--black-60);
  opacity: 1;
}

.mailing-list-input {
  border-bottom: 1px solid var(--black-60);
  width: 384px;
  opacity: 1;
  color: var(--black);
}

.mailing-list-input-mobile {
  border-bottom: 1px solid var(--black-60);
  width: 100%;
  opacity: 1;
  color: var(--black);
}

.mailing-list-input:focus {
  border-bottom: 1px solid black;
  width: 384px;
  opacity: 1;
  color: var(--black);
}

.mailing-list-input-mobile:focus {
  border-bottom: 1px solid black;
  width: 100%;
  opacity: 1;
  color: var(--black);
}

.mailing-list-button {
  background: var(--black);
  padding: 12px 32px;
  color: var(--white);
}

.mailing-list-message {
  position: absolute;
  margin-top: -20px;
}

@media (min-width: 1280px) {
  .home-mobile-only {
    display: none;
  }
  .home-video {
    position: absolute;
    width: 532px;
    background: var(--black-2);
  }
}

@media (max-width: 1280px) {
  .home-desktop-only {
    display: none;
  }
  .home-video {
    margin-top: -4%;
    margin-left: 4%;
    width: 88%;
    background: var(--black-2);
    height: 330px;
    position: absolute;
  }

  .home-illustration{
    max-width: 500px;
  }

  .home-video-height {
    height: 280px;
  }
}

@media (max-width: 700px) {
  .home-video-height {
    height: calc(80vw/2) ;
  }
  .home-video {
    margin-top: -4%;
    margin-left: 4%;
    width: 88%;
    background: var(--black-2);
    height: 100%;
    position: absolute;
  }
}



.home-content-mobile {
  max-width: 650px;
  width: 80vw;
  margin: auto;
}

/////////////////////////////////////////////////////////////
//HOME PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//TESTIMONY PAGE START
/////////////////////////////////////////////////////////////



.testimony-card-big {
  height: 318px;
  padding: 0;
}

.testimony-card-small {
  height: 396px;
  padding: 0;
}

.testimony-card-big-content {
  padding: 34px;
  height:100%;
}

.testimony-card-small-content {
  padding: 25.92px;
  height:100%;
}

.testimony-card-big-content-bottom {
  position: absolute;
  bottom:0;
  padding-bottom: 32px;
}

.testimony-card-small-content-bottom {
  position: absolute;
  bottom:0;
  padding-bottom: 25.92px;
}

.testimony-card-big-content-text {
  padding-top: 7px;
}

.testimony-card-small-content-text {
  padding-top: 2px;
}

.testimony-star {
  filter: invert(74%) sepia(19%) saturate(2162%) hue-rotate(1deg) brightness(107%) contrast(103%);
  margin-left: 4px;
}

.testimony-background2 {
  position: absolute;
}

.testimony-background1 {
  position: absolute;
  right: 0;
  margin-right: 15px;
  margin-top: 159px;
}

.testimony-background1-mobile {
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 237px;
}

.testimony-background1-small {
  position: absolute;
  right: 0;
  margin-right: 0px;
  margin-top: 237px;
}


/////////////////////////////////////////////////////////////
//TESTIMONY PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//REFERRAL PAGE DESKTOP START
/////////////////////////////////////////////////////////////

.icon-box {
  display: inline-block;
  margin-right: 20px;
  width: 320px;
  border-radius: 5px;
  border-bottom-right-radius: 50px 50px;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: center;
}

/////////////////////////////////////////////////////////////
//REFERRAL PAGE DESKTOP END
/////////////////////////////////////////////////////////////

.icon-waitlist {
  height: 70px;
  width: 70px;
}

.range-text {
  position: relative;
  left: 15px;
}

//REGISTRATION VU START

.dark-grey {
  color: #A7A7A7;
}

.content-body-registration {
  margin: auto;
  max-width: 1200px;
}

img.img-size-popup {
  width: 80%;
}

.title-center {
  margin-left: 24%;
}

.half-width {
  width: 382px;
  height: 51px;
}

.btn-center {
  margin-left: 24%;
}

.text-align-center {
  margin-left: 25%;
  text-align: center;
}

.hide-modal {
  overflow: hidden;
}

.icon-warning-size {
  width: 20px;
  height: 20px;
}

.btn-finance-next {
  margin-left: 10%;
}

.btn-administration-next {
  margin-left: 18%;
}

.btn-administration-cancel {
  margin-left: 35%;
}

.btn-finance-cancel {
  margin-left: 33%;
}

::placeholder {
  color: #CCCCCC;
}

//REGISTRATION VU END

/////////////////////////////////////////////////////////////
//HEADER START
/////////////////////////////////////////////////////////////

.banner-height {
  height: 60px;
}

.exclamation-mark-position {
  position: relative;
  top: -4px;
}

/////////////////////////////////////////////////////////////
//HEADER END
/////////////////////////////////////////////////////////////
.intext-line{
  width: 100%;
  height: 3px;
  background-color: #E9EBF0;
  margin-top: 18px;
  z-index: -10;
}
/////////////////////////////////////////////////////////////
//BALANCE PAGE START
/////////////////////////////////////////////////////////////

.balance-icon-small {
  height: 20px;
  width: 20px;
}
.border-bottom-grey:after {
  content: "";
  display: block;
  padding-top: var(--spacing-lg);
  border-bottom: 1px solid var(--black-20);
}
.content-line:after {
  content: "";
  display: block;
  width: 24px;
  padding-top: var(--spacing-md);
  border-bottom: 1px solid var(--black-10);
}
.header-line:after {
  content: "";
  display: block;
  width: 20px;
  padding-top: var(--spacing-xs);
  border-bottom: 4px solid var(--black-40);
}

.right-align {
  display: flex;
  justify-content: flex-end;
}
.withdraw-field-line:after {
  content: "";
  display: block;
  width: 24px;
  padding-top: var(--spacing-sm);
  border-bottom: 2px solid var(--likuid-blue);
}

/////////////////////////////////////////////////////////////
//BALANCE PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//PROFILE PAGE START
/////////////////////////////////////////////////////////////

.green-border {
  border: 2px solid var(--likuid-green);
}

.image-contain {
  object-fit: contain;
}

.image-size-196 {
  height: 196px;
  width: 196px;
}

.profile-name-section {
  min-width: 504px;
}

.tab-icon .icon-active {
  filter: invert(71%) sepia(49%) saturate(480%) hue-rotate(145deg) brightness(94%) contrast(96%);
}

.tab-icon .icon-disabled {
  filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(275deg) brightness(103%) contrast(109%);
}

.text-align-last-left {
  text-align-last: left;
}

.vertical-center {
  margin-top: auto;
  margin-bottom: auto;
}

.z-index-1 {
  z-index: 1;
}

/////////////////////////////////////////////////////////////
//PROFILE PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//PORTFOLIO & TRANSACTION HISTORY PAGE START
/////////////////////////////////////////////////////////////

.border-tab {
  border: 1px solid var(--black-20);

  .active {
    background: #F7FAFC;
    border-left: 3px solid #005A9D;
  }
}

.tab-link {
  padding: var(--layout-sm);
}


/////////////////////////////////////////////////////////////
//PORTFOLIO & TRANSACTION HISTORY PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//FAQ PAGE END
/////////////////////////////////////////////////////////////

.faq-tabs {
  .active {
    font-weight: var(--font-weight-700);
  }
}

.faq-tab-link {
  text-decoration: none;
  width: 100%;
  text-align: left;
  padding: var(--layout-sm) var(--layout-xs);
}

.faq-tab-link:active {
  background: var(--black-2);
}

.faq-tab-link-active {
  border-bottom: 1px solid var(--likuid-blue);
}

.faq-tab-link-not-active {
  border-bottom: 1px solid var(--black-20);
}

/////////////////////////////////////////////////////////////
//FAQ PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//INVESTOR VERIFIED SIGNATURE PAGE START
/////////////////////////////////////////////////////////////

.digital-signature-container{
  height: 246px;
  width: 100%;
}

.sig-canvas {
  position: absolute;
  border-radius:5px;
  border: solid 1px #e9ebf0;
  text-align: center;
  height: 246px;
  width: 100%;
  top: 0;
  left: 0;
}

/////////////////////////////////////////////////////////////
//INVESTOR VERIFIED SIGNATURE PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//FOOTER PAGE START
/////////////////////////////////////////////////////////////
.footer-border-bottom {
  border-bottom: 1px solid var(--black-80);
}

.float-right {
  float: right;
}

.footer {
  width: 100%;
  bottom: x0px;
  background-color: #000000;
}

.footer-top {
  margin-top: 50px;
  margin-bottom: 45px;
}

.footer-bot {
  margin-top:40px;
  height: 90px;
}

.height-256{
  height: 256px;
}
.object-fit{
  object-fit: contain;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:80px;
	right:5px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.icon-footer{
  width: 24px;
  height: 24px;
}

/////////////////////////////////////////////////////////////
//FOOTER PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//INVESTMENT VA PAGE START
/////////////////////////////////////////////////////////////

.bank-logo-height {
  height: 50px
}

/////////////////////////////////////////////////////////////
//INVESTMENT VA PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//INVESTMENT DETAILS PAGE START
/////////////////////////////////////////////////////////////

.certificate{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 380px;
  height: 285px;
}

.icon-document-mobile {
  margin-left: -25px;
}

.inputStyle-investment {
  height: 54px;
  border-radius: 4px;
  border: solid 1px #e9ebf0;
  background-color: #fdfdfd;
  opacity: 1;
  color: #40507b;
  margin-top: -25px;
}

.certificate-mobile{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 285px;
}

.divider-row {
  height: 1px;
  background: #E9EBF0;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.divider-middle{
  height: 1px;
  background: #E9EBF0;
  margin-top: -10px;
  margin-left: auto;
  margin-right: auto;
}

.img-report-right {
  margin-left: 90%;
  margin-top: -185px;
}

.text-bottom {
  margin-top: -20px;
}

/////////////////////////////////////////////////////////////
//INVESTMENT DETAILS PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//MISCELLANEOUS START
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//MISCELLANEOUS END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//REGISTER LANDING START
/////////////////////////////////////////////////////////////

.selectionCard{
  border-radius: 6px;
  border: solid 1px #e9ebf0;
}

@media (max-width: 576px) {
  .selectionCardImage{
    height: 104px;
    object-fit: contain;
  }
}

@media (min-width: 576px) {
  .selectionCardImage{
    height: 167px;
    object-fit: contain;
  }
}

/////////////////////////////////////////////////////////////
//REGISTER LANDING END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//REGISTER GU START
/////////////////////////////////////////////////////////////

.verify-page {
  max-width: 600px;
}

/////////////////////////////////////////////////////////////
//REGISTER GU END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//INVESTMENT FINALIZE PAGE START
/////////////////////////////////////////////////////////////

.content-body-thin {
  margin: auto;
  max-width: 768px;
}

.cursor-pointer {
  cursor: pointer;
}

.height-inherit {
  height: inherit;
}


/////////////////////////////////////////////////////////////
//INVESTMENT FINALIZE PAGE END
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//CAMPAIGN PAGE START
/////////////////////////////////////////////////////////////

.sticky-navbar-campaign {
  display: flex;
}

.display-none {
  display: none !important;
}

.profile-creator-social-button {
  filter: invert(77%) sepia(5%) saturate(3974%) hue-rotate(106deg) brightness(94%) contrast(86%);
}

.campaign-title-color {
  color: #FFABA5;
}

.card-cover-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/////////////////////////////////////////////////////////////
//CAMPAIGN PAGE END
/////////////////////////////////////////////////////////////
`;

export default GlobalStyle;
