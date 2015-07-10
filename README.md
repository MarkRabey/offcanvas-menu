Off Canvas Menu
==============
[![Gitter chat](https://badges.gitter.im/MarkRabey/offcanvas-menu.png)](https://gitter.im/MarkRabey/offcanvas-menu "Gitter chat")

[![devDependencies](https://david-dm.org/MarkRabey/offcanvas-menu/dev-status.svg)](https://david-dm.org/MarkRabey/offcanvas-menu#info=devDependencies&view=table) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Issues](http://img.shields.io/github/issues/MarkRabey/offcanvas-menu.svg)]( https://github.com/MarkRabey/offcanvas-menu/issues )
___

Check [here](http://markrabey.github.io/offcanvas-menu/) for a demo.
Uses [Less Burger](https://github.com/MarkRabey/less-burger) icon.

## Installation
### Bower

	bower install offcanvas-menu --save

### NPM

	npm install offcanvas-menu --save

After Bower or NPM install, copy the files from `dist/css` and `dist/js` to your project's assets folder.

### Without a Package Manager
Clone repo, or download [zip](https://github.com/MarkRabey/offcanvas-menu/archive/master.zip).

## Usage
A working sample is available in the download, in the 'dist' folder.
Eventually I'll have a Bower and/or NPM installation available. For now clone the repo or download the `.zip` and copy the CSS and JS files from inside the `dist` folder, to wherever in your project you would like.

Here is the expected HTML structure:

```html
...
<head>
	...
	<link rel="stylesheet" href="path/to/css/offcanvas-nav.min.css">
</head>

<nav class="offcanvas-nav">
	<ul class="offcanvas-nav__list">
		<li class="offcanvas-nav__item">
			<a href="#" class="offcanvas-nav__link">Item 1</a>
		</li>
		<li class="offcanvas-nav__item">
			<a href="#" class="offcanvas-nav__link">Item 2</a>
		</li>
		<li class="offcanvas-nav__item">
			<a href="#" class="offcanvas-nav__link">Item 3</a>
		</li>
		<li class="offcanvas-nav__item">
			<a href="#" class="offcanvas-nav__link">Item 4</a>
		</li>
		<li class="offcanvas-nav__item">
			<a href="#" class="offcanvas-nav__link">Item 5</a>
		</li>
	</ul>
</nav>

<a id="nav-toggle" href="#" class="offcanvas-nav__toggle">Menu</a>
...

	<script src="path/to/js/offcanvas-nav.min.js"></script>
</body>
```

## Development
Feel free to do what you'd like with this. Clone or fork the repo, type `npm install` and have your way with it. Use `grunt build` to compile Less to CSS, and lint and minify JS, and update the `dist` folder. Use `grunt default` to run the build, and continue to watch the Less and JavaScript files for changes.

## Coming soon
* Fallback CSS for older versions of IE - maybe.
* ~~Bower and/or NPM packages~~
* Not much other than that. This thing is pretty basic I think...

---
**Off-canvas Menu** © 2014-2015, Mark Rabey. Released under the [MIT] License.<br>
Authored and maintained by Mark Rabey

> [markrabey.com](http://markrabey.com) &nbsp;&middot;&nbsp;
> GitHub [@MarkRabey](https://github.com/MarkRabey) &nbsp;&middot;&nbsp;
> Twitter [@MarkRabey](https://twitter.com/MarkRabey)

[MIT]: http://mit-license.org/
