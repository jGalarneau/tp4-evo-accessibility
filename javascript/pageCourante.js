function currentPage()
{
	if(document.getElementById('titre').textContent === "Nous joindre"){
		document.getElementById('Nous_joindre').setAttribute("class", "PrincipalActive");
	}
	else{

	}
	document.getElementById(document.getElementById('titre').textContent).setAttribute("class", "PrincipalActive");
}