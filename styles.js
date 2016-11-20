module.exports = `
html,
body {
    margin: 0;
    padding: 0
}
.rg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}
.guide {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9991;
    font-size: 0
}
.guide.v {
    width: 1px;
    height: 7000px;
    border-right: solid 1px #00f;
    cursor: col-resize
}
.guide.h {
    width: 3000px;
    height: 1px;
    border-bottom: solid 1px #00f;
    cursor: row-resize
}
.info {
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    position: relative;
    font-size: 13px;
    background-color: #eee;
    border: solid 1px #ccc;
    color: #000
}
.guide.v .info {
    left: 2px
}
.guide.h .info {
    top: 2px
}
.unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
}
.ruler {
    background-color: #ccc;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9990
}
.ruler .label {
    font: 12px Arial;
    color: #000
}
.ruler,
.ruler span {
    font-size: 0
}
.ruler.h {
    width: 3000px;
    left: 41px;
    padding-top: 14px;
    border-bottom: solid 1px #000
}
.ruler.v {
    height: 7000px;
    top: 31px;
    padding-left: 16px;
    width: 25px;
    border-right: solid 1px #000
}
.ruler.h span {
    border-left: solid 1px #999;
    height: 9px;
    width: 1px;
    vertical-align: bottom;
    display: inline-block;
    *display: inline;
    zoom: 1
}
.ruler.v span {
    display: block;
    margin-left: auto;
    margin-right: 0;
    border-top: solid 1px #999;
    width: 9px;
    height: 1px
}
.ruler.v span.major {
    border-top: solid 1px #000;
    width: 13px
}
.ruler.v span.milestone {
    position: relative;
    border-top: solid 1px #000;
    width: 17px
}
.ruler.v span.label {
    border: 0;
    font-size: 9px;
    position: absolute;
    text-align: center;
    width: 9px
}
.ruler.h span.major {
    border-left: solid 1px #000;
    height: 13px
}
.ruler.h span.milestone {
    position: relative;
    border-left: solid 1px #000;
    height: 17px
}
.ruler.h span.label {
    border: 0;
    font-size: 9px;
    position: absolute;
    text-align: center;
    top: -14px;
    width: 9px
}
.ruler.h .l10 {
    left: -5px
}
.ruler.h .l100 {
    left: -7px
}
.ruler.h .l1000 {
    left: -10px
}
.ruler.v .l10,
.ruler.v .l100,
.ruler.v .l1000 {
    top: -7px
}
.ruler.v .l10 {
    left: -12px
}
.ruler.v .l100 {
    left: -17px
}
.ruler.v .l1000 {
    left: -23px
}
.menu-btn {
    position: fixed;
    left: 3px;
    top: 2px;
    line-height: 9px;
    z-index: 9998;
    width: 20px;
    height: 20px;
    background-color: red;
    opacity: .5;
    font-size: 20px;
    text-align: left;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border-radius: 2px
}
.rg-menu {
    position: fixed;
    top: 22px;
    left: 3px;
    padding: 0;
    margin: 0;
    list-style: 0;
    display: none;
    font: 13px Arial;
    z-index: 9999;
    box-shadow: 2px 2px 10px #ccc
}
.rg-menu li {
    text-align: left;
    border-bottom: solid 1px #999;
    padding: 0
}
.rg-menu a {
    background-color: #777;
    display: block;
    padding: 5px;
    text-decoration: none;
    color: #fff;
    line-height: 18px
}
.rg-menu a:hover,
.rg-menu a.selected {
    color: #fff;
    background-color: #3b94ec
}
.rg-menu a.disabled {
    color: #ccc
}
.rg-menu .desc {
    display: inline-block;
    width: 170px
}
.dialog {
    position: fixed;
    background-color: #777;
    z-index: 9999;
    color: #fff;
    font-size: 13px;
    display: none;
    box-shadow: 2px 2px 10px #ccc
}
.dialog button {
    border: 0;
    color: #333;
    cursor: pointer;
    background-color: #eaeaea;
    background-image: linear-gradient(#fafafa, #eaeaea);
    background-repeat: repeat-x;
    border-radius: 3px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .9)
}
.dialog input,
.dialog select,
.dialog button {
    font-size: 13px;
    margin: 3px;
    padding: 3px
}
.dialog .title-bar {
    padding: 5px;
    background-color: #aaa;
    font-weight: 700
}
.dialog .wrapper {
    padding: 10px
}
.open-dialog select,
.open-dialog button {
    float: left;
    display: block
}
.open-dialog .ok-btn,
.open-dialog .cancel-btn {
    margin: 10px 3px
}
.open-dialog .ok-btn {
    clear: both
}
.snap-dialog label {
    font-weight: 700;
    padding: 3px
}
.snap-dialog .ok-btn {
    margin-left: 18px
}
.snap-dialog .ok-btn,
.snap-dialog .cancel-btn {
    margin-top: 10px
}
.snap-dialog .rg-y-label {
    margin-left: 10px
}
#rg-x-snap,
#rg-y-snap {
    width: 50px
}
.info-block-wrapper {
    position: absolute;
    z-index: 9989
}
.info-block {
    position: absolute;
    text-align: left
}
.info-block.even {
    background: 0 0;
    background-color: rgba(0, 0, 255, .2);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#330000FF, endColorstr=#330000FF);
    zoom: 1
}
.info-block.odd {
    background: 0 0;
    background-color: rgba(255, 0, 0, .2);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#33FF0000, endColorstr=#33FF0000);
    zoom: 1
}
.info-block-txt {
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    background-color: #777;
    color: #fff;
    font-size: 13px;
    *display: inline;
    zoom: 1
}
.rg-overlay {
    pointer-events: none;
}
.rg-overlay .draggable {
    pointer-events: all;
}
`
