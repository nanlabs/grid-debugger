# Grid Debugger

Tool for debugging bootstrap grid and its utilization in webpages. It displays a 12 columns grid highlighting borders, paddings (@grid-gutter-width variable in Twitter Bootstrap, default to 30px, 15px each side) and content.

This is a tool for testing and debugging so it's recommended to install it using the following command:

```
bower install git@github.com:nanlabs/grid-debugger.git --save-dev
```

## [Live Demo](http://nanlabs.github.io/grid-debugger)

## Screenshots

### Fixed Container Grid
![screen shot 2015-02-25 at 10 42 13 am](https://cloud.githubusercontent.com/assets/876864/6371504/3b86beba-bcdb-11e4-9b8f-469d7b24d5ac.png)

### Fluid Container Grid
![screen shot 2015-02-25 at 10 42 26 am](https://cloud.githubusercontent.com/assets/876864/6371506/418d4568-bcdb-11e4-836d-3c5fe52303de.png)

## How to use it

Just add the script to your webpage and initialize the tool.

```javascript
<script type="text/javascript" src="/grid-debugger/dist/grid-debugger.min.js"></script>
<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function() {
    gridDebugger.init();
    gridDebugger.toggleShow();
  });
</script>
```

## Bookmarklet Code

You can use this code snippet to add a bookmarklet in your browser.

```
javascript:!function(){function a(a,b,c){var d=document.createElement(a);return b&&(d.id=b),c&&(d.className=c),d}function b(b,c,d,e){var f=a(c,d,e);return b.appendChild(f),f}function c(){var a=document.createElement("style");return a.appendChild(document.createTextNode("")),document.head.appendChild(a),a.sheet}function d(a,b,c,d){"insertRule"in a?a.insertRule(b+"{"+c+"}",d):"addRule"in a&&a.addRule(b,c,d)}function e(){var a=c();d(a,"#grid-container","position: fixed; top: 0; left: 0; height: 100%; width: 100%;"),d(a,"#grid-debugger .container, #grid-debugger .container-fluid, #grid-debugger .row","height: 100%; opacity: .5;"),d(a,"#grid-debugger .row > div","opacity: .7; height: 100%; border: 1px solid yellow; background-image:linear-gradient(to bottom, rgba(240, 255, 40, 1) 0%, rgba(240, 255, 40, 1) 100%), linear-gradient(to bottom, rgba(240, 40, 40, 1) 0%, rgba(240, 40, 40, 1) 100%); background-clip: content-box, padding-box;"),d(a,"#grid-debugger .btn-group","position: fixed; top: 0; z-index: 99999;")}function f(){for(var c=a("div","grid-debugger"),d=b(c,"div","grid-container"),e=b(d,"div",null,"container"),f=b(e,"div",null,"row"),g=0;12>g;g++)b(f,"div",null,"col-xs-1");document.body.insertBefore(c,document.body.childNodes[0])}function g(){var a=document.getElementById("grid-debugger"),c=b(a,"div",null,"btn-group"),d=b(c,"button",null,"btn btn-default glyphicon glyphicon-th"),e=b(c,"button",null,"btn btn-default glyphicon glyphicon-resize-full"),f=b(c,"button",null,"btn btn-default glyphicon glyphicon-resize-small");frontBtn=b(c,"button",null,"btn btn-default glyphicon glyphicon-chevron-up"),backBtn=b(c,"button",null,"btn btn-default glyphicon glyphicon-chevron-down"),d.onclick=i,e.onclick=k,f.onclick=j,frontBtn.onclick=l,backBtn.onclick=m}function h(a,b){var c=document.getElementById("grid-debugger"),d=c.getElementsByClassName(a)[0];d&&(d.className=b)}function i(){var a=document.getElementById("grid-container");a.style.display="none"!=a.style.display?"none":"block"}function j(){h("container-fluid","container")}function k(){h("container","container-fluid")}function l(){document.getElementById("grid-container").style.zIndex=100}function m(){document.getElementById("grid-container").style.zIndex=-100}window.gridDebugger={init:function(){e(),f(),g(),i()},toggleShow:i,changeToFluidGrid:k,changeToFixedGrid:j}}();gridDebugger.init();gridDebugger.toggleShow();
```

## Dependencies

Just Twitter Bootstrap styles. It doesn't need jQuery neither Twitter Bootstrap javascript files.

## API

Public API exposed through **window.gridDebugger** object.

- **init**: Initializes the tool and displays the buttons at the top of the page. It doesn't show the grid by default.
- **toggleShow**: Shows/hides the grid.
- **changeToFluidGrid**: Changes the grid to the fluid one. Using **.container** bootstrap class.
- **changeToFixedGrid**: Changes the grid to the fixed one. Using **.container-fluid** bootstrap class.
