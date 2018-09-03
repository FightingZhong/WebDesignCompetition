var img = new Array(4);
	img[0] = "images/1-1-01.jpg";
	img[1] = "images/1-1-02.jpg";
	img[2] = "images/1-1-03.jpg";
	img[3] = "images/1-1-04.jpg";
	var i = 0;
	var time = 0;
	var holder,holder;
	
	function winload(){
		if(time==3)
			clearTimeout(holder2);	
		if(i==4)
			i=0;
		img2.src = img[i];
		i++;	
		holder = setTimeout(winload,3000);
	}
	function btclick(a){
		img2.src = img[a];
		i = a;
	}
	function divonmouseenter(){
		clearTimeout(holder);
	}
	function waitTime(){		
		time++;	
		if(time==3){
			winload();
		}
		holder2 = setTimeout(waitTime,1000);
	}
	function divonmouseleave(){
		time = 0;
		waitTime();
	}



	