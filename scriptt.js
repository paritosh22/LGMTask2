function onFormSubmit(event) {
    event.preventDefault(); 
  
    
    const gender = document.querySelector('input[name="male-female"]:checked').value;
    const studentName = document.getElementById("studentName").value;
    const collegeName = document.getElementById("collegeName").value;
    const email = document.getElementById("Email").value;
    const imageUrl = document.getElementById("url").value;
    
  
    
    const skills = [];
    const skillCheckboxes = document.querySelectorAll('.checkbox:checked');
    skillCheckboxes.forEach(checkbox => {
      skills.push(checkbox.value);
    });
  
    
    if (!imageUrl || !studentName || !collegeName || !email || !gender || skills.length === 0) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td><img src="${imageUrl}" alt="Student Image" width="100"></td>
    <td>${studentName}</td>
      <td>${collegeName}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${skills.join(", ")}</td>  
    `;
  
    
    const tableBody = document.querySelector("#storeList tbody");
    tableBody.appendChild(newRow);
  
    
    document.querySelector("form").reset();
  }
  
  
document.querySelector("form").addEventListener("submit", onFormSubmit);
  