/ Import the LinkedIn API client
import { Client } from 'linkedin-private-api';

// Read the username and password from the environment variables
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
// Get references to the form and results div
const form = document.querySelector("#job-form");
const resultsDiv = document.querySelector("#job-results");

// Add a submit event listener to the form
form.addEventListener("submit", async (event) => {
event.preventDefault();
// Get the job title and location from the form
const jobTitle = document.querySelector("#job-title").value;
const location = document.querySelector("#location").value;

// Get the resume and cover letter files from the form
const resume = document.querySelector("#resume").files[0];
const coverLetter = document.querySelector("#cover-letter").files[0];

// Login to LinkedIn
const client = new Client();
await client.login.userPass({ username, password });

// Search for jobs matching the specified job title and location
const searchResults = await client.search.searchJobs({
  keywords: jobTitle,
  filters: { location },
});

// Iterate through the search results and apply to each job
for (const job of searchResults) {
  await client.job.applyToJob({
    jobId: job.hitInfo.jobPosting.id,
    resume,
    coverLetter,
  });
}
});
});
