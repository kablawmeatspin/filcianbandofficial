// Open modal
document.getElementById("updatesBtn").onclick = function() {
    document.getElementById("updatesModal").style.display = "block";
  };
  
  // Close modal
  document.querySelector(".close").onclick = function() {
    document.getElementById("updatesModal").style.display = "none";
  };
  
  // Close if clicked outside modal-content
  window.onclick = function(e) {
    const modal = document.getElementById("updatesModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Sub-image click
  const subImages = document.querySelectorAll(".sub-img");
  const previewImg = document.getElementById("previewImg");
  const textDetail = document.getElementById("textDetail");
  
  subImages.forEach(img => {
    img.addEventListener("click", () => {
      previewImg.src = img.src;
      textDetail.textContent = img.dataset.text;
    });
  });
  