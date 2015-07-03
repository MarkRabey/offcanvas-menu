(function(document) {
	var methods = {
		toggleClass: function(element, className) {
			var classString = element.className,
					nameIndex = classString ? classString.indexOf(className): -1;

			if (nameIndex == -1) {
				classString += ' ' + className;
			}
			else {
					classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
			}

			element.className = classString;
		}
	}
	document.getElementById('nav-toggle').addEventListener('click', function() {
		var menu = document.querySelector('.offcanvas-nav'),
				toggle = document.querySelector('.offcanvas-nav__toggle')

		methods.toggleClass(menu, 'offcanvas-nav--expanded');
		methods.toggleClass(toggle, 'offcanvas-nav__toggle--expanded');
	});

})(document);
