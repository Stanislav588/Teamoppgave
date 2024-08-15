var selectedItems = [];

function addToCart (item){
    const itemName = item.textContent.trim();
    const itemImg = item.getAttribute('data-img');
    
    const dropdownContent = document.getElementById("myDropdown");

    if (!document.getElementById(item.id + "-dropdown")) {
        const newItem = document.createElement("div");
        newItem.id = item.id + "-dropdown";
        newItem.classList.add("dropdown-item");

       
        const imgElement = document.createElement("img");
        imgElement.src = itemImg;
        imgElement.alt = itemName;
        imgElement.style.width = "30px";
        imgElement.style.height = "30px";
        imgElement.style.marginRight = "10px";

       
        const textElement = document.createTextNode(itemName);

      
        newItem.appendChild(imgElement);
        newItem.appendChild(textElement);

        
        dropdownContent.appendChild(newItem);
    }
}


function updateDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.innerHTML = '';

    selectedItems.forEach(function(item) {
        const newItem = document.createElement("div");
        newItem.id = item.id + "-dropdown";
        newItem.classList.add("dropdown-item");

        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = item.name;
        imgElement.style.width = "30px";
        imgElement.style.height = "30px";
        imgElement.style.marginRight = "10px";

        const textElement = document.createTextNode(item.name);
        newItem.appendChild(imgElement);
        newItem.appendChild(textElement);
        dropdownContent.appendChild(newItem);
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectItem(item) {
    document.querySelector(".dropButton").textContent = item;
}

function payUp() {
    alert("Takk for kjøpet, vi kommer ikke til å bruke kjøpsinformasjonen din! Joda kanskje");
    selectedItems = [];
    updateDropdown();
}