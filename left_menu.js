
// All event menu 
// menu_click =function (){

// 	stt_mouse =  document.getElementById('mouse_poit');
// 	blur = document.getElementById('blur').classList.toggle('to_left_blur');
// 	icon_bar = document.getElementsByClassName('icon-bar');
// 	content_menu = document.getElementById('image').classList.toggle('to_left');
// 	list_content = document.getElementById('content_list').classList.toggle('to_left');
// 	content_list =document.getElementById('list').classList.toggle('sl_to_left');
// 	mouse_poit = document.getElementById('mouse_poit');
// 	for (var i = 0; i < icon_bar.length; i++) {
// 			icon_bar[0].classList.toggle('rotate_white_1');
// 			icon_bar[1].classList.toggle('rotate_white_2');
// 			icon_bar[2].classList.toggle('hide');
// 		}

// 	var list_menu = document.querySelectorAll('#list.list li');
// 	for (var i = 0; i < list_menu.length; i++) {
// 		list_menu[i].classList.toggle('sl_to_left')
// 	}
// 	stt_mouse.classList.toggle('circle');

// 	}

	// event mouse

	function showCoords(event) {
	  var x = event.clientX - 10;
	  var y = event.clientY -10;
	  mouse_poit.style.left = x+'px';
	  mouse_poit.style.top = y+'px';
	}
	menu = document.getElementById('menu');
	menu.addEventListener("mouseenter",function(){
		this.classList.add('bg_stt_2');
		
	});
	menu.addEventListener("mouseleave",function(){
		this.classList.remove('bg_stt_2');
		
	});

	list_item_menu = document.querySelectorAll('#list li');
	for (var i = 0; i <list_item_menu.length; i++) {
		list_item_menu[i].addEventListener("mouseenter",function(){
			let data = this.getAttribute("data_attribute");
			console.log(document.getElementById(data).previousElementSibling);
			
			document.getElementById(data).classList.add('to_right');
			this.style.cursor='pointer'
		});
		 list_item_menu[i].addEventListener("mouseleave",function(){
		let data = this.getAttribute("data_attribute");
		document.getElementById(data).classList.remove('to_right');
		})
	}

	list_menu = document.getElementById('list_menu');
	icon_menu = document.getElementById('icon_menu');
	icon_menu.addEventListener("click",function(){
		list_menu.classList.toggle('show_menu');
	});