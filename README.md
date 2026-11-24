## DOM vs HTML source
- DOM is the live interactive tree of objects that the browser builds in memory from an HTML source and it can be changed or edited live on the browser while HTML source is the text file which cannot be changed.

## Event listener vs Inline listener
- Event listeners keeps the javascript logic strictly inside Javascript files while allowing using multiple functions in one event and it is generally recommended while Inline listener mixes the javascript with HTML tags and does not support having multiple functions to it at the same time as the current one will overwrite the previous one.

## why preventDefault() is used for the demo form
- preventDefault() is used to stop the browser from reloading the page when the form is submitted so JavaScript can run custom validation and display an demo confirmation without wiping out the user's inputs.

## how validation messages are shown
- I used .trim() method on contactName, contactMail and contactMessage which are the variables holding the names, the email account and the message section of the contact form respectively to remove empty spaces in the beginning and the end of the input of the user.

- for the name section, if the trimmed input returns an empty strings, the error message reads 'Please enter your name.' and sets the aria-invalid attribute of the name section to true to tell screen readers that the input does not match the required or expected input type. Once the user types the valid input, the span element having the name-error id in the HTML clears the error message.

- if the email section returns an empty string or does not match the required format for writing an email address, the error message reads 'Enter a valid email address!'. Once the user types the valid input, the span element having the email-error id in the HTML clears the error message and removes the aria-invalid attribute.

- for the message section, if the trimmed input returns an empty strings, the error message reads 'Please enter a message.' and sets the aria-invalid attribute of the message section to true to tell screen readers that the input does not match the required or expected input type. Once the user types the valid input, the span element having the message-error id in the HTML clears the error message.

- If the user happens to click on the submit button while having one or more invalid input in the required sections of the form, the isValid variable is set to false in the invalid sections and the firstInvalid variable in script.js is assigned the value of the first section to be invalid in the form and .focus() returns the cursor to the input box of that first invalid method.

- if the user does not have any invalid inputs in the required section of the form and clicks on the submit button, error messages all clear out and the submitStatus variable sends a personalised message to the user confirming the success of the submission.

## what aria-expanded communicates
- It tells assistive technologies or screen readers whether a collapsible element is currently expanded or not.

## Debugging
- When at 375px, I discovered that if a user types an input that is a long string of unbroken texts, the error message overflows the screen and forces an horizontal scroll bar. I fixed it by using box-sizing:border-box to to tell the browser to keep the padding and border within the specified width and changing to minmax(0, 1fr) and adding min-width: 0 on form with overflow-wrap: anywhere to force an unbreakable string of text to wrap onto a new line at any point in order to fix it.

## Implementation Decisions 
- Every interactive feature in script.js wraps its event listeners inside explicit null checks to verify that target elements exist in the DOM before calling .addEventListener() which prevents runtime TypeError.

- The contact form listener calls event.preventDefault() to handle validation manually in JavaScript. It trims whitespace from inputs, validates email formatting, toggles aria-invalid="true",moves cursor to the first invalid field , and shows successful demo submissions because managing validation using lines of code ensures consistent error styling, immediate keyboard recovery when an input fails, and clear screen reader feedback without relying on inconsistent browser default pop ups.

- The dark mode toggle match the visual style CSS class (dark-theme and body) with a corresponding aria-pressed state to ensures assistive technologies announce the changes to the visual state  and changes the text on the  theme button to show what theme will be shown when you click the button.

## Testing (375px / 768px / 1440px)
- At 375 and 768 px, Single column layout, the menu toggle button is visible and toggles the navigation buttons vertically on top of each other. There is no horizontal overflow

- At 1440 px, Content remains centered within max-width size, Skills and Projects render in a 3 column layout, full horizontal navigation bar displays and menu toggle button is hidden.

## Limitation
- The contact form performs client-side validation and displays a confirmation message "Thank you [Name]! Your message has passed validation demo. No email was sent", but it does not actually send an email because this is a static frontend site without a backend server

## AI Disclosure
- AI was used to explain and break down new DOM concepts that I do not understand and also to break down the assignment in a step by step walkthrough without giving me the code directly.
- Accepted Suggestion: Added novalidate to form in index.html in order to bypass the browser default validation pop ups and use script.js to handle invalid form submission.