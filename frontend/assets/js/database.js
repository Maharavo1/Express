function addUser(data) {
  const body_table = document.querySelector("#table_body");

  data.map((values) => {
    let tabData = "";
    tabData += `<tr>
      <td>${values.id}</td>
      <td>${values.first_name}</td>
      <td>${values.last_name}</td>
      
    </tr>`;
    body_table.innerHTML += tabData;
  });
}

function addAllinformation() {
  fetch("http://localhost:8000/index")
    .then((data) => {
      return data.json(); //convert to object
    })
    .then((data) => {
      addUser(data);
    })
    .catch((data) => alert(data));
}
addAllinformation();
