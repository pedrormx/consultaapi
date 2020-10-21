
async function consulta(ncep){
	const search =  document.getElementById("search").value
        const response  = await fetch(`https://viacep.com.br/ws/${search}/json/`)
        const json = await response.json()
	document.getElementById("demo").innerHTML =
	`<br><h2>Logradouro: ${json.logradouro}</h2>
        <h2>Bairro: ${json.bairro}</h2>`

}

