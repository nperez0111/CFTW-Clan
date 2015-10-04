
$( document ).ready(function() {
/*bolt kicking*/
var firster=true;
	$("body").append("<div id='overlay'>BOLT WILL BE KICKED!!</div><audio id='sound'><source src='http://www.cepheid.org/~cobra/music/2b0d44_Pacman_Dies_Sound_Effect.mp3' type='audio/mpeg'></audio>");
	$('.bolt').css({'transition': 'all 1500ms ease-out'});
		$("#overlay").click(function(){
			if(firster){firster=false;
			document.getElementById('sound').play();}
			$('.bolt').css({'transform':'rotate(1800deg) scale(0)'});
			 var docHeight = $(document).height();   

   $(this)
      .height(docHeight)
      .css({
         'opacity' : 0.4,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 5000,
         'font-size': '10em',
         'color':'red'
      });

		});
		$("#overlay").click(function(){

			if($(this).html()=="BOLT WILL BE KICKED!!"){
				$(this).html("BOLT WILL BE KICKED!!!");
			}
			else if($(this).html()=="BOLT WILL BE KICKED!!!"){
				$(this).html("Yes KICKED!! Feel free to use the page without BOLT...");$('.bolt').remove();
			}

			else{
				$("#overlay").remove();
			}

		});

		//end bolt kicking
		
			//scrolling links
		$('li').click(function(e){
			e.preventDefault();
			$($(this).children().attr('href')).velocity("scroll", 1000)
		  .velocity({ opacity: 1 });
		});
		$('.perfboom').click(function(e){
			e.preventDefault();
			$($(this).children().attr('href')).velocity("scroll", 1000)
		  .velocity({ opacity: 1 }).trigger("click");
		});

		//full page bg
			var theWindow        = $(window),
			    $bg              = $(".container-fluid"),
			    aspectRatio      = $bg.width() / $bg.height(),
			    valy = theWindow.height()+$('nav').height()+$('.members').outerHeight();
			    			    		
			function resizeBg() {
				var h= theWindow.height()+"px";
				valy = theWindow.height()+$('nav').height()+$('.members').outerHeight();
				var hs= (theWindow.height()/2)-($bg.children().height()/2);
				
				    	$bg.children().css("margin-top", hs);

				    	$('nav').css("margin-top",h);
				if($bg.width()<480){
					$bg.backstretch("../images/idksmall.jpg");
				}
				else{
					$bg.backstretch("../images/idk.jpg");
					valy += 30;
				}
							
			}
			
			                   			
			theWindow.resize(resizeBg).trigger("resize");
			//in progress--clickable members
			var memheight=$(".btn").height();
			function cal(i){
				return valy+(memheight*i)+"px";
			}
			function cal(i,x){
				return valy+(memheight*i)+$('.main_guys').outerHeight()-153+"px";
			}
			var isopen=null;

			function resetter(str){$(isopen).children("p").removeAttr("style");
				
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
							if($(isopen).index('.btn')<3){
								widthy ='33.3333333%';
							}
							else if($(isopen).index('.btn')>2){
								widthy = '25%';
							}
						}
						else if(theWindow.width()>767){
							if($(isopen).index('.btn')<4){
								widthy ='50%';
							}
							else if($(isopen).index('.btn')>3){
								widthy = '25%';
							}

						}
						else{

							if($(isopen).index('.btn')<4){
								widthy ='100%';
							}
							else if($(isopen).index('.btn')>3){
								widthy = '50%';
							}
						}
						$('.main_guys').removeAttr("style");
						console.log(widthy);
						isopen.css({
							width: widthy
						});
			if(str=="n"){
				$('.btn').each(function() {
					
				  		$( this ).removeAttr("style");
				});
			}return widthy;

				
			}
//var arr = $('.btn').parent().children().size()-1;
var first = true;
	$('.btn').click(function(){
		if(isopen==null){
			isopen=$(this);
			console.log('was null');
		}
		else if($(this).is(isopen) && first){
			resetter("n");
			first = false;
			console.log('set first to false resetter with n');
			return;
						
		}
		else if($(this).is(isopen)){
			first = true;
			console.log('first to true continue');
			
		}
		else{
			resetter("n");
			console.log('resetter empty');
		}
			

				if($(this).index('.btn')<3){


					if(theWindow.width()>768 && $(this).is("#Perf") || $(this).is("#Boom") || $(this).is("#Zukko")){console.log($(this).index('.btn'));
					//check if it is the 1st 2nd or 3rd elem
					$('.main_guys').css({'margin-bottom':'200px'});
					if($(this).index()==0){
						$($('.btn').get(2)).css({
							width:'25%'
						});

						console.log("Im 1");
						$(this).css({
							width:'50%',
							height:"600px",
							"margin-left": '25%'
						}).delay(400).velocity("scroll", 500);

						$($('.btn').get(1)).css({
							width: '25%',
							position: "absolute",
							left:"0px"
						});
						

					}
					else if($(this).index()==1){
						console.log("Im 2");	
						$(this).css({
							width:'50%',
							height:"600px"
						}).delay(400).velocity("scroll", 500);
						$($('.btn').get(0)).css({
							width:'25%'
						});
						$($('.btn').get(2)).css({
							width:'25%'
						});
					}
					else{
						console.log("Im 3");
						$($('.btn').get(0)).css({
							width:'25%'
						});
						$(this).css({
							width:'50%',
							height:"600px"
						}).delay(400).velocity("scroll", 500);

						$($('.btn').get(1)).css({
							width: '25%',
							position: "absolute",
							right:"0px"
						});
					}//end check index of elem within parent
				}
				else{

					$(this).css({
								width:'50%'
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
				}

				}
				//if they are the other members
				else if($(this).index('.btn')>2){
					//only if the size of the window is big
					if(theWindow.width()>991){console.log($(this).index('.btn')+"    ");var memb =$(this).index('.btn');

						if(memb==3){
							$(this).css({
								'margin-left':'25%'
							});
							$($('.btn').get(4)).css({
								position:'absolute',
								left:'0',
								top: cal(1,0)
							});
						}
						else if(memb==7){
							$(this).velocity({
								'margin-left':'25%'
							});
							$($('.btn').get(8)).css({
								position:'absolute',
								left:'0',
								top: cal(2,0)
							});
						}
						else if(memb==4|| memb==8){
							/*$($('.btn').get(5)).css({
								position:'absolute',
								left:'0',
								top: cal(2)
							});*/

						}
						else if(memb==5){

							$($('.btn').get(memb-1)).css({
								position:'absolute',
								right:'0',
								top: cal(1,0)
							});
							$($('.btn').get(memb+1)).css({
								'clear': 'left'
							});

						}
						else if(memb==9){

							$($('.btn').get(memb-1)).css({
								position:'absolute',
								right:'0',
								top: cal(2,0)
							});
							$($('.btn').get(memb+1)).css({
								'clear': 'left'
							});

						}

						

						else if(memb==6){
							$(this).css({
								'margin-right':'25%'
							});

							$($('.btn').get(memb-2)).css({
								position:'absolute',
								right:'0',
								top: cal(1,0)
							});

							$($('.btn').get(memb-1)).css({
								position:'absolute',
								left:'0',
								top: cal(2,0)
							});
							$($('.btn').get(memb+1)).css({
								'margin-left':"25%"
							});

						}
						else if(memb==10){
							$(this).css({
								'margin-left':'25%'
							});

						}
						$(this).css({
								width:'50%'
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
					}


					else if(theWindow.width()>767){
						
							if(memb==4){
								resetter("n");
								$($('.btn').get(4)).css({
									position:'absolute',
									left:'0',
									top: cal(2)
								});
								$($('.btn').get(5)).css({
									position:'absolute',
									left:'25%',
									top: cal(2)
								});

							}
							else if(memb==5){

								$($('.btn').get(5)).css({
								position:'absolute',
								right:'0',
								top: cal(1)
							});

							}

							else if(memb==7){
								$($('.btn').get(7)).css({
									position:'absolute',
									left:'0',
									top: cal(3)
								});
								
							}
							else if(memb==8){

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

							$($('.btn').get(8)).css({
								top:-200
							});
							

							$($('.btn').get(9)).css({
								top:-200
							});
							$($('.btn').get(10)).css({
								left:"-50%"
							});
							

							}
							else if(memb==9){
								$($('.btn').get(9)).css({
									position:'absolute',
									right:'0',
									top: cal(2)
								});
								
							}
							$(this).css({
								width:'50%',
								height:"400px"
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
					}
					else{
						if(memb%2==1){
							console.log(((memb-5)*100)+"yeah");
							$($('.btn').get(memb)).css({
									position:'absolute',
									right:'0',
									top: valy+600+((memb-5)*100)+"px"
								}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
						}
						$(this).css({
								width:'100%',
								height:"400px"
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
					}

						
				}
						
					
				
		
		
//console.log(arr+"");
		
		$(this).css({'text-indent': '0px'});
		$(this).children("p").css({'background-color':'rgba(0,0,0,0.6)'});
		isopen=$(this);
	});

});