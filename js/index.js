var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("SiteURL");
var mt = document.getElementById("mt");
var hottelBooked;
if (localStorage.getItem("hottels") == null) {
  hottelBooked = [];
} else {
  hottelBooked = JSON.parse(localStorage.getItem("hottels"));
  display();
}
function submit() {
   if (
    siteNameInput.classList.contains("is-valid") &&
    siteUrlInput.classList.contains("is-valid")
  ) {
    var hottel = {
      hottelName: siteNameInput.value,
      hottelUrl: siteUrlInput.value,
    };
    hottelBooked.push(hottel);
    localStorage.setItem("hottels", JSON.stringify(hottelBooked));
    clear();
    display();
  } else {
    alert("Not valed Data");
  }
}
function clear() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
}
function display() {
  var cartona = "";
  for (var i = 0; i < hottelBooked.length; i++) {
    cartona += `<tr>
    <td>${hottelBooked[i].hottelName}
      
      </td>
    <td>${hottelBooked[i].hottelUrl}
       </td>
    <td><button class="btn px-5 bg-primary">Visit</button></td>
    <td><button onclick="deletehottle(${i})" class="btn px-5 bg-danger">Delet</button></td>
  </tr>`;
  }
  mt.innerHTML = cartona;
}
function deletehottle(deletindex) {
  hottelBooked.splice(deletindex, 1);

  display();
  localStorage.setItem("hottels", JSON.stringify(hottelBooked));
}
function valdiation(element) {
  var regex = {
    siteName: /^[A-Z][a-z]{3,10}$/,
    SiteURL: /^https:[a-z]$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}
