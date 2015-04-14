function currentPage()
{

  	var liens;
	if(document.getElementById('titre').textContent === "Nous joindre"){
		document.getElementById('Nous_joindre').setAttribute("class", "PrincipalActive");
	}
	else{
			document.getElementById(document.getElementById('titre').textContent).setAttribute("class", "PrincipalActive");
	}

		liens = document.getElementsByClassName("PrincipalActive")[0];
		var l = liens.getElementsByTagName("a")[0];
		  l.setAttribute("alt", "vous êtes ici");
}