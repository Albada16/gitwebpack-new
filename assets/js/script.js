import $ from 'jquery';
import bird from '../images/bird.jpg';
import mouse from '../images/squirrel.jpg';

$('#img-bird').attr("src",bird);
$('#img-mouse').attr("src",mouse);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
