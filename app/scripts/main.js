
$( document ).ready(function() {

			//scrolling links
		$('li').click(function(e){
			e.preventDefault();
			console.log($(this).find("href").attr('id'));
			$($(this).children().attr('href')).velocity("scroll", 1000)
		  .velocity({ opacity: 1 });
		});

		//full page bg
			var theWindow        = $(window),
			    $bg              = $(".container-fluid"),
			    aspectRatio      = $bg.width() / $bg.height();
			    			    		
			function resizeBg() {
				var h= theWindow.height()+"px";
				var hs= (theWindow.height()/2)-($bg.children().height()/2);
				if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
				    $bg
				    	.css({"height":"100%","width":"auto"
				    	});
				    	$bg.children().css("margin-top", hs);
				    	$('nav').css("margin-top",h);
				} else {
				    $bg
				    	.css({"width":"100%","height":"auto"		
				    });$bg.children().css("margin-top", hs);
				    	$('nav').css("margin-top",h);
				}
							
			}
			                   			
			theWindow.resize(resizeBg).trigger("resize");
			//in progress--clickable members
			var isopen=null;
			function resetter(str){
				
							var widthy;
						/*if(Math.abs($(cur).width()-Math.floor(theWindow.width()*0.3333333))<40){
							widthy = '33.3333333%';					
						}
						else if(Math.abs($(cur).width()-Math.floor(theWindow.width()*0.25))<40){
							widthy = '25%';
						}
						else if(Math.abs($(cur).width()-Math.floor(theWindow.width()*0.50))<40){
							*/
						if(theWindow.width()>991){	
							if($(isopen).index()<4){
								widthy ='33.3333333%';
							}
							else if($(isopen).index()>3){
								widthy = '25%';
							}
						}
						else if(theWindow.width()>767){
							if($(isopen).index()<4){
								widthy ='50%';
							}
							else if($(isopen).index()>3){
								widthy = '25%';
							}

						}
						else{

							if($(isopen).index()<4){
								widthy ='100%';
							}
							else if($(isopen).index()>3){
								widthy = '50%';
							}
						}
						/*}
						else{
							
						}*/
						console.log(widthy);
						isopen.velocity({
							width: widthy,
							height:"200px"
						});
			if(str=="n"){
				$('.btn').each(function() {
				  $( this ).removeAttr("style");
				});
			}

				
			}
//var arr = $('.btn').parent().children().size()-1;
var first = true;
	$('.btn').click(function(){
		if(isopen==null){
			isopen=$(this);
		}
		else if($(this).is(isopen) && first){
			resetter("n");
			first = false;
			return;
						
		}
		else if($(this).is(isopen) && !first){
			resetter("n");
			first = true;
			
		}
		else{
			resetter("n");
		}
			

				if(/*Math.abs($(this).width()-Math.floor(theWindow.width()*0.3333333))<40*/
					$(this).index()<4){
					if(theWindow.width()>768){
					//check if it is the 1st 2nd or 3rd elem
					if($(this).index()==1){

						console.log("Im 1");
						$(this).velocity({
							width:'50%',
							height:"600px"
						});
						$($('.btn').get(1)).velocity({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(2)).velocity({
							width:'25%',
							height: "200px"
						});

					}
					else if($(this).index()==2){
						console.log("Im 2");	
						$(this).velocity({
							width:'50%',
							height:"600px"
						});
						$($('.btn').get(0)).velocity({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(2)).velocity({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(3)).css({
							position:'absolute',
							left:'0',
							top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+230+"px"
						});
						$($('.btn').get(4)).css({
							position:'absolute',
							left:'0',
							top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
						});
					}
					else{
						console.log("Im 3");
						$(this).velocity({
							width:'50%',
							height:"600px"
						});
						$($('.btn').get(0)).velocity({
							width:'50%',
							height: "200px"
						});
						$($('.btn').get(1)).velocity({
							width:'50%',
							height: "200px"
						});
					}//end check index of elem within parent
				}
				else{

					$(this).velocity({
								
								height:"400px"
							});
				}

				}
				//if they are the other members
				else if($(this).index()>3){
					//only if the size of the window is big
					if(theWindow.width()>991){

						if($(this).index()==5){

							$($('.btn').get(5)).css({
								position:'absolute',
								left:'0',
								top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
							});

						}

						else if($(this).index()==6){

							$($('.btn').get(6)).css({
								position:'absolute',
								left:'0',
								top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
							});

							$($('.btn').get(7)).css({
								position:'absolute',
								left:'25%',
								top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
							});

						}

						else if($(this).index()==7){

							$($('.btn').get(7)).css({
								position:'absolute',
								right:'0',
								top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+230+"px"
							});

						}

						else if($(this).index()==10){

							$($('.btn').get(10)).css({
								top:"0px",
								position:"relative"
							});

							$($('.btn').get(10)).velocity({
								top:-200
							});

						}
						$(this).velocity({
								width:'50%',
								height:"400px"
							});
					}


					else if(theWindow.width()>767){
						
							if($(this).index()==4){
								resetter("n");
								$($('.btn').get(4)).css({
									position:'absolute',
									left:'0',
									top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
								});
								$($('.btn').get(5)).css({
									position:'absolute',
									left:'25%',
									top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
								});

							}
							else if($(this).index()==5){

								$($('.btn').get(5)).css({
								position:'absolute',
								right:'0',
								top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+230+"px"
							});

							}

							else if($(this).index()==7){
								$($('.btn').get(7)).css({
									position:'absolute',
									left:'0',
									top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+630+"px"
								});
								
							}
							else if($(this).index()==8){

							$($('.btn').get(8)).css({
								top:"0px",
								position:"relative"
							});
							$($('.btn').get(9)).css({
								top:"0px",
								position:"relative"
							});
							$($('.btn').get(10)).css({
								left:"0%",
								position:"relative"
							});

							$($('.btn').get(8)).velocity({
								top:-200
							});
							

							$($('.btn').get(9)).velocity({
								top:-200
							});
							$($('.btn').get(10)).velocity({
								left:"-50%"
							});
							

							}
							else if($(this).index()==9){
								$($('.btn').get(9)).css({
									position:'absolute',
									right:'0',
									top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+430+"px"
								});
								
							}
							$(this).velocity({
								width:'50%',
								height:"400px"
							});
					}
					else{
						if($(this).index()%2==1){
							console.log("fired");
							$($('.btn').get($(this).index())).css({
									position:'absolute',
									right:'0',
									top: theWindow.height()+$('nav').height()+$('.members').outerHeight()+630+(($(this).index()-5)*100)+"px"
								});
						}
						$(this).velocity({
								width:'100%',
								height:"400px"
							});
					}

						
				}
						
					
				
		
		
//console.log(arr+"");
		
		
		isopen=$(this);
	});

});