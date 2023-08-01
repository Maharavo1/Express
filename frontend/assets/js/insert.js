function addUserToserver(data) {
    const formData = new FormData(data);
    const userData = {
      id: formData.get("id"),
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName')
    };
  
    fetch('http://localhost:8000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((response) => {
      if (response.ok) {
        alert("reussie")
        // Effectuer d'autres actions après l'insertion réussie
      } else {
        throw new Error('Erreur lors de l\'insertion');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
  
    addUserToserver(event.target);
  });
  