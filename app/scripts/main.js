
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
			    valy = theWindow.height()+$('nav').height()+$('.members').outerHeight()+30;
			    			    		
			function resizeBg() {
				var h= theWindow.height()+"px";
				valy = theWindow.height()+$('nav').height()+$('.members').outerHeight()+30;
				var hs= (theWindow.height()/2)-($bg.children().height()/2);
				if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {

				    $bg
				    	.css({"height":"100%",
				    		"width":"auto"
				    	});

				    	$bg.children().css("margin-top", hs);

				    	$('nav').css("margin-top",h);
				} 
				else {

				    $bg
				    	.css({
				    		"width":"100%",
				    		"height":"auto"		
				    });
				    	$bg.children().css("margin-top", hs);

				    	$('nav').css("margin-top",h);
				}
							
			}
			                   			
			theWindow.resize(resizeBg).trigger("resize");
			//in progress--clickable members
			
			function cal(i){
				return valy+(200*i)+"px";
			}
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
						isopen.css({
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
			

				if($(this).index()<4){


					if(theWindow.width()>768){
					//check if it is the 1st 2nd or 3rd elem
					if($(this).index()==1){

						console.log("Im 1");
						$(this).css({
							width:'50%',
							height:"600px",
							"margin-left": "25%"
						}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
						$($('.btn').get(1)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px"
						});
						$($('.btn').get(2)).css({
							width:'25%'
						});
						$($('.btn').get(3)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px",
							top: cal(1)
						});
						$($('.btn').get(4)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px",
							top: cal(2)
						});

					}
					else if($(this).index()==2){
						console.log("Im 2");	
						$(this).css({
							width:'50%',
							height:"600px"
						}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
						$($('.btn').get(0)).css({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(2)).css({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(3)).css({
							position:'absolute',
							left:'0',
							top: cal(1)
						});
						$($('.btn').get(4)).css({
							position:'absolute',
							left:'0',
							top: cal(2)
						});
					}
					else{
						console.log("Im 3");
						$(this).css({
							width:'50%',
							height:"600px",
							"margin-left": "25%"
						}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
						$($('.btn').get(0)).css({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(1)).css({
							width:'25%',
							height: "200px"
						});
						$($('.btn').get(3)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							right:"25%",
							top: cal(0)
						});
						$($('.btn').get(4)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							right:"0px",
							top: cal(0)
						});
						$($('.btn').get(5)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px",
							top: cal(1)
						});
						$($('.btn').get(6)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px",
							top: cal(2)
						});
						$($('.btn').get(7)).css({
							width:'25%',
							height: "200px",
							position: "absolute",
							left:"0px",
							top: cal(3)
						});
					}//end check index of elem within parent
				}
				else{

					$(this).css({
								
								height:"400px"
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
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
								top: cal(2)
							});

						}

						else if($(this).index()==6){

							$($('.btn').get(6)).css({
								position:'absolute',
								left:'0',
								top: cal(2)
							});

							$($('.btn').get(7)).css({
								position:'absolute',
								left:'25%',
								top: cal(2)
							});

						}

						else if($(this).index()==7){

							$($('.btn').get(7)).css({
								position:'absolute',
								right:'0',
								top: cal(1)
							});

						}
						else if($(this).index()==9){console.log("was me");

							$($('.btn').get(10)).css({
								top:cal(3),
								position:"absolute",
								left:'0'
							});

						}

						else if($(this).index()==10){

							$($('.btn').get(10)).css({
								top:"0px",
								position:"relative"
							});

							$($('.btn').get(10)).css({
								top:-200
							});

						}
						$(this).css({
								width:'50%',
								height:"400px"
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
					}


					else if(theWindow.width()>767){
						
							if($(this).index()==4){
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
							else if($(this).index()==5){

								$($('.btn').get(5)).css({
								position:'absolute',
								right:'0',
								top: cal(1)
							});

							}

							else if($(this).index()==7){
								$($('.btn').get(7)).css({
									position:'absolute',
									left:'0',
									top: cal(3)
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
							else if($(this).index()==9){
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
						if($(this).index()%2==1){
							console.log((($(this).index()-5)*100)+"yeah");
							$($('.btn').get($(this).index())).css({
									position:'absolute',
									right:'0',
									top: valy+600+(($(this).index()-5)*100)+"px"
								}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
						}
						$(this).css({
								width:'100%',
								height:"400px"
							}).delay(400).velocity("scroll", 500).velocity({ opacity: 1 });
					}

						
				}
						
					
				
		
		
//console.log(arr+"");
		
		
		isopen=$(this);
	});

});