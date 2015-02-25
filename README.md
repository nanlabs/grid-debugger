# Grid Debugger

Tool for debugging bootstrap grid and its utilization in webpages. It displays a 12 columns grid highlighting borders, paddings (@grid-gutter-width variable in Twitter Bootstrap, default to 30px, 15px each side) and content.

This is a tool for testing and debugging so it's recommended to install it using the following command:

```
bower install https://github.com/nanlabs/grid-debugger --save-dev
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

## Dependencies

Just Twitter Bootstrap styles. It doesn't need jQuery neither Twitter Bootstrap javascript files.

## API

Public API exposed through **window.gridDebugger** object.

- **init**: Initializes the tool and displays the buttons at the top of the page. It doesn't show the grid by default.
- **toggleShow**: Shows/hides the grid.
- **changeToFluidGrid**: Changes the grid to the fluid one. Using **.container** bootstrap class.
- **changeToFixedGrid**: Changes the grid to the fixed one. Using **.container-fluid** bootstrap class.
