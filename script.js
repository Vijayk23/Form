document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('data-form');
  const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

  form.addEventListener('submit', function (e) {
      e.preventDefault();


      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.getElementById('gender').value;
      const food = [...document.getElementById('food').selectedOptions].map(option => option.value).join(', ');
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;


      const newRow = table.insertRow(table.rows.length);
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
      const cell5 = newRow.insertCell(4);
      const cell6 = newRow.insertCell(5);
      const cell7 = newRow.insertCell(6);
      const cell8 = newRow.insertCell(7);

      cell1.innerHTML = firstname;
      cell2.innerHTML = lastname;
      cell3.innerHTML = address;
      cell4.innerHTML = pincode;
      cell5.innerHTML = gender;
      cell6.innerHTML = food;
      cell7.innerHTML = state;
      cell8.innerHTML = country;


      form.reset();
  });
});
