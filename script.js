function showSection(id) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });

  // Show the clicked one
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional scroll reset
  } else {
    console.error(`Section "${id}" not found, dipshit.`);
  }
}
