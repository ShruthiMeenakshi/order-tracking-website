function toggleDropdown(id) {
    var dropdownContent = document.getElementById(`dropdown-content-${id}`);
    var readMoreBtn = event.target;
    
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      readMoreBtn.textContent = "Read More";
    } else {
      dropdownContent.style.display = "block";
      readMoreBtn.textContent = "Read Less";
    }
  }
  