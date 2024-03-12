async function consultar() {
  let resultado = await fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => data);
  console.log(resultado);

  console.log("El nombre del usuario es " + resultado.results[0].name.first);

  const userPicture = resultado.results[0].picture.large;
  const userGender = resultado.results[0].gender;
  const userName = resultado.results[0].name.first;
  const userLast = resultado.results[0].name.last;
  const userEmail = resultado.results[0].email;
  const userUserName = resultado.results[0].login.username;
  const userPhone = resultado.results[0].phone;
  const userCity = resultado.results[0].location.city;
  const userCountry = resultado.results[0].location.country;
  const userPostcode = resultado.results[0].location.postcode;

  // Mostrar la información en el HTML
  $("#imagenUser").html(`
    <img class="position-relative top-25" src="${userPicture}">`),
    $("#buscadorUsuario").html(`
    
    <h3>${userName} ${userLast}</h3> 
    <h3>${userGender}</h3>
    <h4>Email: ${userEmail}</h4>
    <h4>Nombre de Usuario: ${userUserName}</h4>
    <h4>Teléfono: ${userPhone}</h4>
    <h4>Ciudad: ${userCity}</h4>
    <h4>País: ${userCountry}</h4>
    <h4>Código Postal: ${userPostcode}</h4>
    `);
}
consultar();
