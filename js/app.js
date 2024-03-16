$(document).ready(function(){
			let storage = {}
			Object.keys(sessionStorage).forEach((key) => {
			    storage[key] = sessionStorage.getItem(key);
			    $("#Save").append(storage[key])
			});
			$("#Save a").off()
				$("#Save a").click(function(){
					var data = $(this).attr("data")
					const split = data.split('/');
					validForm(split[0],true,data)
					$("#btnSave i.fa-times").css("display","none")
					$("#btnSave i.fa-save").css("display","block")
					$("#btnSave").css("transform","translateY(0px) scale(1)")
					$("#Save").css("transform","translateX(100%)")
					$("#btnSave").css("z-index","7")
					stateSave = true
				})
		})

		$("#btnStart").click(function(){
			$("#btnStart span").css("transform", "translateX(450px)").delay(600).queue(function(next){
				$("#outerNews").hide()
				next();
			});
		})


		const form = document.querySelector("#formVariable");
		var state = true;
		var stateSave = true;
		var nbrNotif =0
		var tableau


		$("#cercle").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Rayon du cercle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","rayonC");
			input.setAttribute("required","required");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);

			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)

			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('cercle')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#rectangle").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Longueur du rectangle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","longueurR");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Largeur du rectangle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","largeurR");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('rectangle')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#triangle").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Hauteur du triangle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","hauteurT");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Base du triangle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","baseT");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Décalage de la base du triangle");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","decalT");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('triangle')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#fonction").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Coefficient directeur de la fonction");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","coeffD");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Exponentiation de la fonction");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","expF");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Décalage aux ordonnées de la fonction");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","decalF");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('fonction')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#cylindre").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Rayon du cylindre");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","rayonCy");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Hauteur du cylindre");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","hautCy");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('cylindre')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#cone").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Rayon du cône");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","rayonCo");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Hauteur du cône");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","hautCo");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('cone')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#sphere").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Rayon de la sphère");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","rayonS");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('sphere')");
			div.appendChild(a);
			form.appendChild(div);
		});
		$("#parallelepipede").click(function(){
			$("#formVariable").slideDown();
			animatePanel()
			addInput()
			content = document.createTextNode("Largeur du parallélépipède");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","largeurP");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Longueur du parallélépipède");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","longueurP");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			content = document.createTextNode("Hauteur du parallélépipède");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","hauteurP");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);
			a = document.createElement("a");
			content = document.createTextNode("Dessiner");
			a.appendChild(content)
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			a.setAttribute("id","btnDraw");
			a.setAttribute("onclick","validForm('parallelepipede')");
			div.appendChild(a);
			form.appendChild(div);
		});

		function validForm(type, saved, retrieveData){

				if($("input").length > 0) {

					if ($("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='rayonC']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='largeurR']").val() && $("input[name*='longueurR']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='hauteurT']").val() && $("input[name*='baseT']").val() && $("input[name*='decalT']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='coeffD']").val() && $("input[name*='expF']").val() && $("input[name*='decalF']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='hautCy']").val() && $("input[name*='rayonCy']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='hautCo']").val() && $("input[name*='rayonCo']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='rayonS']").val() || $("input[name*='nomF']").val() && $("input[name*='codeF']").val() && $("input[name*='largeurP']").val() && $("input[name*='longueurP']").val() && $("input[name*='hauteurP']").val()){
						checkedInput(type,saved,retrieveData)
					} else {
						alert("Veuillez remplir tous les champs !!")
					}
				} else {
					checkedInput(type,saved,retrieveData)
				}

				function checkedInput(type, saved, retrieveData){
					if(saved){
					var splitData = retrieveData.split('/');
					$("#ctnCanvas").empty();
					$("#result").empty()
					animatePanel()
				} 
				$("#formVariable").slideUp();
			

				switch(type) {
				  case "cercle":
				  		if (!saved) {
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='rayonC']").val();
					    	
				  		} else {
				  			var val1 = splitData[1];
					  		var val2 = splitData[2];
					  		var val3 = splitData[3];
				  		}
				  		var data = "typeF=cercle&codefigure="+val2+"&nomfigure="+val1+"&rayon="+val3;
						tableau = ["cercle",val1,val2,val3];
				  		
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawCircle(val3);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "rectangle":
				  		if (!saved) {
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='largeurR']").val();
					  		var val4 = $("input[name*='longueurR']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
				  		}
						
				    	var data = "typeF=rectangle&codefigure="+val2+"&nomfigure="+val1+"&largeur="+val3+"&longueur="+val4;
				    	tableau = ["rectangle",val1,val2,val3,val4];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawRectangle(val3,val4);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       		
					       }
						});
				    break;
				  case "triangle":
				    	if (!saved) {
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='hauteurT']").val();
					  		var val4 = $("input[name*='baseT']").val();
					  		var val5 = $("input[name*='decalT']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
					  		var val5 = splitData[5]
				  		}
						
				    	var data = "typeF=triangle&codefigure="+val2+"&nomfigure="+val1+"&hauteur="+val3+"&base="+val4+"&decal="+val5;
				    	tableau = ["triangle",val1,val2,val3,val4,val5];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawTriangle(val3,val5,val4);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "fonction":
				  		if(!saved){
							var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='coeffD']").val();
					  		var val4 = $("input[name*='expF']").val();
					  		var val5 = $("input[name*='decalF']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
					  		var val5 = splitData[5]
				  		}
				  	
				   		var data = "typeF=fonction&codefigure="+val2+"&nomfigure="+val1+"&a="+val3+"&n="+val4+"&b="+val5;
				   		tableau = ["fonction",val1,val2,val3,val4,val5];
				   		$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "cylindre":
				  		if (!saved){
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='hautCy']").val();
					  		var val4 = $("input[name*='rayonCy']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
				  		}
				  		
				    	var data = "typeF=cylindre&codefigure="+val2+"&nomfigure="+val1+"&hauteur="+val3+"&rayon="+val4;
				    	tableau = ["cylindre",val1,val2,val3,val4];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawCylinder(val4,val3);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "cone":
				  		if(!saved){
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='hautCo']").val();
					  		var val4 = $("input[name*='rayonCo']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
				  		}

				    	var data = "typeF=cone&codefigure="+val2+"&nomfigure="+val1+"&hauteur="+val3+"&rayon="+val4;
				    	tableau = ["cone",val1,val2,val3,val4];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawCone(val4,val3);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "sphere":
				  		if(!saved){
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='rayonS']").val();
				  		} else {
				  			var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
				  		}

				    	var data = "typeF=sphere&codefigure="+val2+"&nomfigure="+val1+"&rayon="+val3;
				    	tableau = ["sphere",val1,val2,val3];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawSphere(val3);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;
				  case "parallelepipede":
				  		if(!saved) {
				  			var val1 = $("input[name*='nomF']").val();
					  		var val2 = $("input[name*='codeF']").val();
					  		var val3 = $("input[name*='largeurP']").val();
					  		var val4 = $("input[name*='longueurP']").val();
					  		var val5= $("input[name*='hauteurP']").val();
					  	} else {
					  		var val1 = splitData[1]
					  		var val2 = splitData[2]
					  		var val3 = splitData[3]
					  		var val4 = splitData[4]
					  		var val5 = splitData[5]
					  	}
				  		
				    	var data = "typeF=parallelepipede&codefigure="+val2+"&nomfigure="+val1+"&largeur="+val3+"&longueur="+val4+"&hauteur="+val5;
				    	tableau = ["parallelepipede",val1,val2,val3,val4,val5];
				    	$.ajax({
							url : 'php/init.php',
					       	type : 'POST', 
					       	data : data, 
					       dataType : 'html',
					       success: function(data){
					       		$("#result").html(data+"<div id='ctnBtnPanel3'><a id='btnNewFigure'><i class='fas fa-plus'></i> Nouvelle figure</a><a id='btnSaveFigure'><i class='fas fa-save'></i> Sauvegarder</a></div>")
					       		drawParallelepiped(val3,val4,val5);
					       		AddConsole();
					       		if (saved) {
					       			ifAlreadySaved()
					       		}
					       }
						});
				    break;      
				 	default:
				    	alert("Erreur: Fonction validForm sans paramètre (type)")
					}
				}

		}
		function animatePanel() {
			$("#panel1").css("transform","translateX(-3000px)");
			$("#panel1").css("opacity","0");
			$("#panel1").hide();
			$("#panel2").css("transform","translateX(0) translateY(0px)");
			$("#panel2").css("opacity","1");
		}
		function ifAlreadySaved() {
			$("#btnSaveFigure").css("background","#20CE51")
				$("#btnSaveFigure").empty()
				$("#btnSaveFigure").html("<i class='fas fa-check'></i> Sauvegardée")
		}
		function AddConsole(){
			var putInConsole = $(".destruct").html()
       		var maDate = new Date()
       		var DateFormat = maDate.getDate()+"/"+maDate.getMonth()+1+"/"+maDate.getFullYear()+" "+maDate.getHours()+":"+maDate.getMinutes()+":"+maDate.getSeconds()
       		var p = $("<p></p>").html("<b>"+DateFormat+": </b>"+putInConsole);
       		var li = $("<li></li>").html(p)
       		$("#Console ul").append(li)
       		$(".destruct").remove()
       		nbrNotif += 1
       		$("#notifBtn").html(nbrNotif)
       		$("#notifBtn").css("display", "flex")

       		$("#btnNewFigure").click(function(){
				$("#panel2").css("transform","translateX(3000px) translateY(0px)");
				$("#panel2").css("opacity","0");

				$("#panel1").show()
				$("#panel1").css("transform","translateX(0px)");
				$("#panel1").css("opacity","1");

				$("#formVariable").css("transform","translateY(0px)")
				$("#formVariable").css("opacity","1")

				$("#result").css("transform","translateY(0px)")
				$("#ctnCanvas").css("transform","translateY(0px)")

				$("#ctnCanvas").empty();
				$("#result").empty()
				$(".ctnInput").remove();
			});

			$("#btnSaveFigure").click(function(){
				$("#btnSaveFigure").css("background","#20CE51")
				$("#btnSaveFigure").empty()
				$("#btnSaveFigure").html("<i class='fas fa-check'></i> Sauvegardée")

				switch(tableau[0]){
					case "cercle":
						var elementPush = '<a data="cercle/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'"><div class="ctnFigureSaved"><img src="assets/cercle.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Rayon: '+tableau[3]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "rectangle":
						var elementPush = '<a data="rectangle/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'/'+tableau[4]+'"><div class="ctnFigureSaved"><img src="assets/rectangle.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Largeur: '+tableau[3]+'</p><p>Longueur: '+tableau[4]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "triangle":
						var elementPush = '<a data="triangle/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'/'+tableau[4]+'/'+tableau[5]+'"><div class="ctnFigureSaved"><img src="assets/triangle.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Hauteur: '+tableau[3]+'</p><p>Base: '+tableau[4]+'</p><p>Décalage de la base: '+tableau[5]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "fonction":
						var elementPush = '<a data="fonction/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'/'+tableau[4]+'/'+tableau[5]+'"><div class="ctnFigureSaved"><img src="assets/fonction.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Coefficient directeur: '+tableau[3]+'</p><p>Exponentiation: '+tableau[4]+'</p><p>Décalage aux ordonnées: '+tableau[5]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "cylindre":
						var elementPush = '<a data="cylindre/'+tableau[1]+'/'+tableau[2]+'/'+tableau[4]+'/'+tableau[3]+'"><div class="ctnFigureSaved"><img src="assets/cylindre.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Rayon: '+tableau[3]+'</p><p>Hauteur :'+tableau[4]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "cone":
						var elementPush = '<a data="cone/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'/'+tableau[4]+'"><div class="ctnFigureSaved"><img src="assets/cone.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Rayon: '+tableau[4]+'</p><p>Hauteur :'+tableau[3]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "sphere":
						var elementPush = '<a data="sphere/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'"><div class="ctnFigureSaved"><img src="assets/sphere.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Rayon: '+tableau[3]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
					case "parallelepipede":
						var elementPush = '<a data="parallelepipede/'+tableau[1]+'/'+tableau[2]+'/'+tableau[3]+'/'+tableau[4]+'/'+tableau[5]+'"><div class="ctnFigureSaved"><img src="assets/parallelepipede.png"><div class="figure-data"><div class="figure-head"><h3>'+tableau[1]+'</h3><p class="sub-name">'+tableau[2]+'</p></div><div class="figure-body"><p>Largeur: '+tableau[3]+'</p><p>Longueur: '+tableau[4]+'</p><p>Hauteur: '+tableau[5]+'</p></div></div></div></a>';
						sessionStorage.setItem(tableau[2],elementPush)
						$("#Save").append(elementPush)
						$("#Save a").off()
						$("#Save a").click(function(){
							var data = $(this).attr("data")
							const split = data.split('/');
							validForm(split[0],true,data)
							$("#btnSave i.fa-times").css("display","none")
							$("#btnSave i.fa-save").css("display","block")
							$("#btnSave").css("transform","translateY(0px) scale(1)")
							$("#Save").css("transform","translateX(100%)")
							$("#btnSave").css("z-index","7")
							stateSave = true
						})
					break;
				}
			})


		}

		$("#btnConsole").click(function(){
			switch(state){
				case true: 
					$("#btnConsole").css("z-index","10")
					$("#btnSave").css("z-index","7")
					$("#btnConsole i.fa-tv").css("display","none")
					$("#btnConsole i.fa-times").css("display","block")
					$("#Console").css("transform","translateX(0%)")
					$("#notifBtn").empty()
					$("#notifBtn").css("display","none")
					nbrNotif = 0
					state = false
				break;
				case false:
					$("#btnConsole i.fa-times").css("display","none")
					$("#btnConsole i.fa-tv").css("display","block")
					$("#Console").css("transform","translateX(100%)")
					state = true
				break;
			}
		});
		$("#btnSave").click(function(){
			switch(stateSave){
				case true: 
					$("#btnSave").css("z-index","10")
					$("#btnConsole").css("z-index","7")
					$("#btnSave").css("transform","translateY(70px) scale(1)")
					$("#btnSave i.fa-save").css("display","none")
					$("#btnSave i.fa-times").css("display","block")
					$("#Save").css("transform","translateX(0%)")
					stateSave = false
				break;
				case false:
					$("#btnSave i.fa-times").css("display","none")
					$("#btnSave i.fa-save").css("display","block")
					$("#btnSave").css("transform","translateY(0px) scale(1)")
					$("#Save").css("transform","translateX(100%)")
					$("#btnSave").css("z-index","7")
					stateSave = true
				break;
			}
		});

		$("#btnRetour").click(function(){
			$("#panel2").css("transform","translateX(3000px) translateY(0px)");
			$("#panel2").css("opacity","0");

			$("#panel1").show()
			$("#panel1").css("transform","translateX(0px)");
			$("#panel1").css("opacity","1");
			$(".ctnInput").remove();
		})

		function addInput() {
			var label = document.createElement("label");
			var input = document.createElement("input");
			var div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			input.setAttribute("type","text");
			var content = document.createTextNode("Nom de la figure");
			label.appendChild(content);
			input.setAttribute("name","nomF");
			input.setAttribute("required","required");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);

			content = document.createTextNode("Code de la figure");
			label = document.createElement("label");
			input = document.createElement("input");
			div = document.createElement("div");
			div.setAttribute("class","ctnInput");
			label.appendChild(content);
			input.setAttribute("name","codeF");
			input.setAttribute("required","required");
			div.appendChild(label);
			div.appendChild(input);
			form.appendChild(div);

		}

		$("#Save #save-head button").click(function(){
			sessionStorage.clear();
			$("#Save a").remove()
			$("#btnSave i.fa-times").css("display","none")
			$("#btnSave i.fa-save").css("display","block")
			$("#btnSave").css("transform","translateY(0px) scale(1)")
			$("#Save").css("transform","translateX(100%)")
			$("#btnSave").css("z-index","7")
			stateSave = true
		})
