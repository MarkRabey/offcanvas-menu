Off Canvas Menu
==============
[![Gitter chat](https://badges.gitter.im/MarkRabey/offcanvas-menu.png)](https://gitter.im/MarkRabey/offcanvas-menu "Gitter chat")

[![devDependencies](https://david-dm.org/MarkRabey/offcanvas-menu/dev-status.svg)](https://david-dm.org/MarkRabey/offcanvas-menu#info=devDependencies&view=table)
___

A working demo exists inside the `dist` folder.

##Requirements
To use it - nothing really. A web browser. No dependency on jQuery, just plain old JavaScript.

##Usage
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

##Development
Feel free to do what you'd like with this. Clone or fork the repo, type `npm install` and have your way with it.

##Coming soon
* Fallback CSS for older versions of IE - maybe.
* Bower and/or NPM packages
* Not much other than that. This thing is pretty basic I think...
