        var userForm = document.getElementById('userForm');
        var userTable = document.getElementById('userTable'); 
        var tableBody = document.getElementById('tableBody');

        userForm.addEventListener('submit', function(event) {
            event.preventDefault();

         
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;

         
            var newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${name}</td><td>${email}</td>`;

          
            tableBody.appendChild(newRow);

        
            userTable.classList.remove('d-none');

          
            userForm.reset();

          });