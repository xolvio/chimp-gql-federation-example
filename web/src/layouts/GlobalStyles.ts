import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Reset.less
   * Props to Eric Meyer (meyerweb.com) for his CSS reset file. We're using an adapted version here\tthat cuts out some of the reset HTML elements we will never need here (i.e., dfn, samp, etc).
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
html,
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
cite,
code,
del,
dfn,
em,
img,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dd,
dl,
dt,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  font-style: normal;
  font-size: 100%;
  line-height: 1;
  font-family: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol,
ul {
  list-style: none;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}
html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
a:focus {
  outline: thin dotted;
}
a:hover,
a:active {
  outline: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}
button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}
button,
input {
  line-height: normal;
  *overflow: visible;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
@font-face {
  font-family: 'Open Sans';
  src: url('/font/OpenSans-Light-webfont.eot');
  src: url('/font/OpenSans-Light-webfont.eot?#iefix') format('embedded-opentype'), url('/font/OpenSans-Light-webfont.woff') format('woff'), url('/font/OpenSans-Light-webfont.ttf') format('truetype'), url('/font/OpenSans-Light-webfont.svg#OpenSansLight') format('svg');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'Open Sans';
  src: url('/font/OpenSans-Regular-webfont.eot');
  src: url('/font/OpenSans-Regular-webfont.eot?#iefix') format('embedded-opentype'), url('/font/OpenSans-Regular-webfont.woff') format('woff'), url('/font/OpenSans-Regular-webfont.ttf') format('truetype'), url('/font/OpenSans-Regular-webfont.svg#OpenSansRegular') format('svg');
  font-weight: normal;
  font-weight: 400;
  font-style: normal;
}
.force-wrap {
  word-wrap: break-word;
  word-break: break-all;
  -ms-word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.type-light {
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}
html,
button,
input,
textarea,
select {
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  color: #333333;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 40px;
  line-height: 48px;
}
h2 {
  font-size: 28px;
  line-height: 32px;
}
h3 {
  font-size: 24px;
  line-height: 28px;
}
h4 {
  font-size: 20px;
  line-height: 24px;
}
h5 {
  font-size: 14px;
  line-height: 20px;
  color: #cccccc;
  text-transform: uppercase;
}
h6 {
  color: #aaaaaa;
}
p {
  font-size: 16px;
  line-height: 24px;
}
sub,
sup {
  font-size: .8em;
}
sub {
  bottom: -0.2em;
}
sup {
  top: -0.2em;
}
b {
  font-weight: bold;
}
em {
  font-style: italic;
}
[class^="btn-"],
[class*=" btn-"] {
  font-size: 14px;
  line-height: 20px;
  line-height: 20px !important;
  padding: 1em 1.25em;
  letter-spacing: .3em;
  text-indent: .3em;
  text-transform: uppercase;
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  color: white;
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  white-space: nowrap;
}
[class^="btn-"][class*="primary"],
[class*=" btn-"][class*="primary"] {
  background-color: #2cc5d2;
  color: white;
}
[class^="btn-"][class*="primary"]:hover,
[class*=" btn-"][class*="primary"]:hover {
  background-color: #28b1bd;
}
[class^="btn-"][class*="primary"]:active,
[class*=" btn-"][class*="primary"]:active {
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px 0 inset;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px 0 inset;
}
[class^="btn-"][class*="secondary"],
[class*=" btn-"][class*="secondary"] {
  -webkit-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  -webkit-box-shadow: #5a7ca6 0 0 0 1px inset;
  box-shadow: #5a7ca6 0 0 0 1px inset;
  color: white;
}
[class^="btn-"][class*="secondary"]:hover,
[class*=" btn-"][class*="secondary"]:hover {
  color: #eeeeee;
}
[class^="btn-"][class*="secondary"]:active,
[class*=" btn-"][class*="secondary"]:active,
[class^="btn-"][class*="secondary"].active,
[class*=" btn-"][class*="secondary"].active {
  -webkit-box-shadow: #9db1ca 0 0 0 1px inset;
  box-shadow: #9db1ca 0 0 0 1px inset;
}
[class^="btn-"][disabled],
[class*=" btn-"][disabled] {
  opacity: .5;
}
.btns-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}
.btns-group [class*="btn-"] {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.btns-group [class*="btn-"] + [class*="btn-"] {
  margin-left: -1px;
}
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  font-size: 14px;
  line-height: 20px;
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: 400;
  padding: .75rem 0;
  line-height: 1.5rem !important;
  border: none;
  border-radius: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #333333;
  outline: none;
}
input[type="text"] ::-webkit-input-placeholder,
input[type="email"] ::-webkit-input-placeholder,
input[type="password"] ::-webkit-input-placeholder,
textarea ::-webkit-input-placeholder {
  color: #778b91;
}
input[type="text"] :-ms-input-placeholder,
input[type="email"] :-ms-input-placeholder,
input[type="password"] :-ms-input-placeholder,
textarea :-ms-input-placeholder {
  color: #778b91;
}
input[type="text"] ::-ms-input-placeholder,
input[type="email"] ::-ms-input-placeholder,
input[type="password"] ::-ms-input-placeholder,
textarea ::-ms-input-placeholder {
  color: #778b91;
}
input[type="text"] ::placeholder,
input[type="email"] ::placeholder,
input[type="password"] ::placeholder,
textarea ::placeholder {
  color: #778b91;
}
input[type="text"][disabled],
input[type="email"][disabled],
input[type="password"][disabled],
textarea[disabled] {
  opacity: .5;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
.checkbox {
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  width: 44px;
}
.checkbox input[type="checkbox"] {
  font-size: 1em;
  visibility: hidden;
}
.checkbox input[type="checkbox"] + span:before {
  position: absolute;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  width: 0.85em;
  height: 0.85em;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background: transparent;
  -webkit-box-shadow: #abdfe3 0 0 0 1px inset;
  box-shadow: #abdfe3 0 0 0 1px inset;
  content: '';
  display: block;
}
.checkbox input[type="checkbox"]:checked + span:before {
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #cccccc;
  font-family: 'todos';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\e612";
}
.input-symbol {
  display: inline-block;
  position: relative;
}
.input-symbol.error [class^="icon-"],
.input-symbol.error [class*=" icon-"] {
  color: #ff4400;
}
.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
  left: 1em;
}
.input-symbol input {
  padding-left: 3em;
}
.input-symbol input {
  width: 100%;
}
.input-symbol input:focus + [class^="icon-"],
.input-symbol input:focus + [class*=" icon-"] {
  color: #2cc5d2;
}
.input-symbol [class^="icon-"],
.input-symbol [class*=" icon-"] {
  -webkit-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  background: transparent;
  color: #aaaaaa;
  font-size: 1em;
  height: 1em;
  position: absolute;
  top: 50%;
  width: 1em;
}
@font-face {
  font-family: 'todos';
  src: url('/icon/todos.eot?-5w3um4');
  src: url('/icon/todos.eot?#iefix5w3um4') format('embedded-opentype'), url('/icon/todos.woff?5w3um4') format('woff'), url('/icon/todos.ttf?5w3um4') format('truetype'), url('/icon/todos.svg?5w3um4#todos') format('svg');
  font-weight: normal;
  font-style: normal;
}
[class^="icon-"],
[class*=" icon-"] {
  font-family: 'todos';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-unlock:before {
  content: "\\e600";
}
.icon-user-add:before {
  content: "\\e604";
}
.icon-cog:before {
  content: "\\e606";
}
.icon-trash:before {
  content: "\\e607";
}
.icon-edit:before {
  content: "\\e608";
}
.icon-add:before {
  content: "\\e60a";
}
.icon-plus:before {
  content: "\\e60b";
}
.icon-close:before {
  content: "\\e60c";
}
.icon-cross:before {
  content: "\\e60d";
}
.icon-sync:before {
  content: "\\e60e";
}
.icon-lock:before {
  content: "\\e610";
}
.icon-check:before {
  content: "\\e612";
}
.icon-share:before {
  content: "\\e617";
}
.icon-email:before {
  content: "\\e619";
}
.icon-arrow-up:before {
  content: "\\e623";
}
.icon-arrow-down:before {
  content: "\\e626";
}
.icon-list-unordered:before {
  content: "\\e634";
}
a {
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  color: #5db9ff;
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  color: #239da8;
}
a:active {
  color: #555555;
}
a:focus {
  outline: none;
}
nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  width: auto;
  height: auto;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
  z-index: 10;
}
nav .nav-item {
  font-size: 20px;
  line-height: 24px;
  color: #1c3f53;
  display: inline-block;
  height: 3rem;
  text-align: center;
  width: 3rem;
}
nav .nav-item:active {
  opacity: .5;
}
nav .nav-item [class^="icon-"],
nav .nav-item [class*=" icon-"] {
  line-height: 3rem;
  vertical-align: middle;
}
nav .nav-group {
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  width: auto;
  height: auto;
  z-index: 1;
}
nav .nav-group.right {
  left: auto;
  right: 0;
}
@media screen and (min-width: 40em) {
  .page.auth .nav-group {
    display: none;
  }
  .page.not-found .nav-group {
    display: none;
  }
}
.fade-enter {
  opacity: 0.01;
}
.fade-enter.fade-enter-active {
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit.fade-exit-active {
  opacity: 0.01;
  -webkit-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
}
body {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  background-color: #315481;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#315481), to(#918e82));
  background-image: linear-gradient(to bottom, #315481, #918e82 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
`;

export default GlobalStyle;
