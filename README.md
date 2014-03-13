# angular-eyesight

Directives to set the focus and blur of an element based on an angular expression.

## Usage

Include eyesight module within your code:

```javascript
var app = angular.module('app', ['eyesight']);
```

Include directive with expression within your markup:

```html
<input type="text" focus-if="isFocused == true" />
```

When `isFocused` is true, a focus call on the provided element will be set. Please note this will only happen until the value of isFocused is changed away and back to true.
