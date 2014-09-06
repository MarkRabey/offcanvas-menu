offcanvas-menu
==============

Off Canvas Menu
___
Check out my [blog post](http://markrabey.com/blog/2014/04/13/off-canvas-navigation/) on building this menu.

##Requirements
I used jQuery 1.11.0, but in that the only thing I'm doing with jQuery is toggling a class, you can get away with a _much_ older version.

##Usage
This is all subject to change! I plan to not use jQuery for this, or at least write the code in pure JS at some point.
A working sample is available in the download, in the 'dist' folder.

###The HTML
Menu Item links in a `<ul>` inside of a `<nav>`, and a link with id `#nav-toggle` :
```html
<nav>
	<ul>
		<li><a href="#">Item 1</a></li>
		<li><a href="#">Item 2</a></li>
		<li><a href="#">Item 3</a></li>
		<li><a href="#">Item 4</a></li>
		<li><a href="#">Item 5</a></li>
	</ul>
</nav>
<a id="nav-toggle" href="#" class="nav-toggle">Menu</a>
```
###The CSS
```css
html,
body {
  margin: 0;
}
nav {
  background-color: #2d2f33;
  display: block;
  height: 100%;
  overflow: auto;
  position: fixed;
  left: -20em;
  font-size: 15px;
  top: 0;
  width: 20em;
  z-index: 2000;
  transition: left 0.3s ease-in-out 0s;
  -webkit-transition: left 0.3s ease-in-out 0s;
  -moz-transition: left 0.3s ease-in-out 0s;
  -o-transition: left 0.3s ease-in-out 0s;
}
nav ul {
  padding: 0;
}
nav ul li {
  list-style-type: none;
  padding-left: 5px;
}
nav a {
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
}
nav li:hover {
  background-color: #757a84;
}
.nav-expanded nav {
  left: 0;
}
.nav-toggle {
  background-color: #2d2f33;
  color: #ffffff;
  padding: 10px;
  text-decoration: none;
  display: block;
  position: fixed;
  left: 0;
  transition: left 0.3s ease-in-out 0s;
  -webkit-transition: left 0.3s ease-in-out 0s;
  -moz-transition: left 0.3s ease-in-out 0s;
  -o-transition: left 0.3s ease-in-out 0s;
}
.nav-expanded {
  margin-left: 0;
  transition: left 0.3s ease-in-out 0s;
  -webkit-transition: left 0.3s ease-in-out 0s;
  -moz-transition: left 0.3s ease-in-out 0s;
  -o-transition: left 0.3s ease-in-out 0s;
}
.nav-expanded .nav-toggle {
  left: 18.7em;
}
```
###The jQuery
```javascript
$(document).ready(function() {
	$('#nav-toggle').on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
});
```
