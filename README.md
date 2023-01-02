# ext-linkedin

 Here's a table outlining the files for this program and their use cases:

File	Use Case	Interactions
manifest.json	Declares the extension's name, version, and required permissions	N/A
background.js	Manages the extension's background tasks and communicates with the content script	Sends and receives messages from the content script
content.js	Injects the user interface into the LinkedIn job listings page and communicates with the background script	Sends and receives messages from the background script
index.html	Contains the HTML code for the user interface	N/A
style.css	Contains the CSS code for styling the user interface	N/A
The background script and content script communicate with each other through the chrome.runtime.sendMessage and chrome.runtime.onMessage APIs. The background script sends messages to the content script to update the user interface, and the content script sends messages to the background script to initiate job searches and apply to jobs.
