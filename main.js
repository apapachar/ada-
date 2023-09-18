

const MiAPi = async (pag)=>
{
    let url = "https://rickandmortyapi.com/api/character/?page/" + pag;
    const api = await fetch(url);
    const datos=await api.json(); 
    lista = document.getElementById('lista');

    datos.results.map(personaje=>{
    tarjeta= document.createElement('div') ;

    tarjeta.innerHTML =`<div class="tarjeta" style="width: 15rem;display:flex;text-align: center;margin-left :5%;margin-top :5%;" id="tarj">
    <img src="${personaje.image}" style="width:60%;margin:auto;height:100px;" alt="${personaje.name}">
    <div style="">
      <h5 > Personaje: ${personaje.name} </h5>
      <h6 >Género: ${personaje.gender} </h6>
      <h6 >Especie: ${personaje.species} </h6>
      <h6 >Estado: ${personaje.status} </h6>
      <h6 >Origen: ${JSON.stringify(personaje.origin.name)} </h6>
      <h6 >Lugar: ${JSON.stringify(personaje.location.name)} </h6>

    </div>
</div>`
lista.append(tarjeta);



    })
}

MiAPi(2);

