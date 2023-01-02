document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#job-form");
  const resultsDiv = document.querySelector("#job-results");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const jobTitle = document.querySelector("#job-title").value;
    const location = document.querySelector("#location").value;
    const resume = document.querySelector("#resume").files[0];
    const coverLetter = document.querySelector("#cover-letter").files[0];

    // Use the Chrome Extension API and LinkedIn API to search for jobs and apply
  });
});
