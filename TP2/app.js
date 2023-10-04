//https://randomuser.me/api/?results=5
fetch('https://randomuser.me/api/?results=5')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de requête : ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    let users = data.results;
    let output = '<h2>Liste des utilisateurs</h2>';
    
    users.forEach(user => {
        output += '<img src="' + user.picture.large + '" alt="Photo de profil">';
        output += '<h3>' + user.name.title + ' ' + user.name.first + ' ' + user.name.last + '</h3>';
        output += '<p>Email : ' + user.email + '</p>';
        
    });

    
    document.getElementById('container').innerHTML = output;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });