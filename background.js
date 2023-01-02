let jobTitle = 'Software Developer';
let location = 'San Francisco, CA';
let resume = 'resume.pdf';
let coverLetter = 'cover_letter.pdf';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'updateSettings') {
    jobTitle = request.jobTitle;
    location = request.location;
    resume = request.resume;
    coverLetter = request.coverLetter;
  }
});

async function searchAndApply() {
  try {
    // Use the LinkedIn API to search for jobs matching the specified job title and location
    const searchResults = await searchJobs(jobTitle, location);

    // Iterate through the search results and apply to each job
    for (const job of searchResults) {
      await applyToJob(job, resume, coverLetter);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second before applying to the next job
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
}

chrome.browserAction.onClicked.addListener(() => {
  searchAndApply();
});
