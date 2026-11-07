1. 
## Problem: 
The <html> tag did not declare the language of the page.    
## Fix: 
I updated it to <html lang="en">.
## Why: 
Declaring the language is important for accessibility and screen reader

2. 
## Problem: 
The main <h1>Tech Club</h1> tag was placed inside the <head> element.
## Fix: 
I moved the <h1> tag out of the <head> and placed it inside a <header> tag within the <body>.
## Why: 
The <head> is only for metadata and is not visible to the user. All visible text must be placed inside the <body>.

3. 
## Problem: 
The document was does not have important metadata, including character encoding.
## Fix: 
I added <meta charset="UTF-8"> inside the <head>.
## Why: 
Declaring the character encoding ensures the browser knows exactly how to show text and special characters correctly.

4. 
## Problem: 
The internal links at the top of the page were wrapped in a generic <div>.
## Fix: 
I replaced the <div> with a semantic <nav> tag.
## Why: 
A <div> is just an empty box with no meaning. Using <nav> explicitly tells browsers and screen readers that this area contains the primary navigation links for the webpage.

5. 
## Problem: 
The "Upcoming Events" heading used an <h1> tag, even though there was already an <h1> for the page title.
## Fix: 
I changed the <h1> to an <h2>.
## Why: 
A webpage should usually only have one <h1> that acts as the title of the document. Other heading should follow an hierarchical outline.

6. 
## Problem: 
The listed events used wrong heading levels ( <h4> for the HTML Workshop and <h2> for Git Practice).
## Fix: 
I changed both to <h3> tags.
## Why: 
Headings must follow a logical hierarchy. Since they sit inside the "Upcoming Events" <h2> section, the items inside that section should be one level down (<h3>).

7. 
## Problem:
 There were <article> tags placed directly inside a <ul> tag.
## Fix: 
I moved the <article> tags to inside the <li> tag.
## Why: 
HTML rules dictate that a <ul> or <ol> can only have <li> tags as its direct children. Putting other elements directly inside a list gives a wrong the document structure.

8. 
## Problem: 
The "Events" and "Join" sections were wrapped in generic <div> tags.
## Fix: 
I changed these <div> tags to <section> tags.
## Why: 
Semantic tags like <section> group related items together to make the code easier to read and improving the structure for assistive technologies.

9. 
## Problem: 
The image had alt="image", which provides no actual value.
## Fix: 
I changed it to alt="Club members collaborating".
## Why: 
Alt text is read aloud to visually impaired users. Using "image" is redundant because the screen reader already knows it is an image. The alt text needs to describe what is actually happening in the photo.

10. 
## Problem: 
The form inputs had text before to them, but no <label> tags.
## Fix: 
I wrapped the text descriptions in <label> tags and connected them to their corresponding <input> tags using the for and id attributes.
## Why: 
Labels are required for web accessibility. They allow users to click the text itself to highlight the input box.

11. 
## Problem: 
<h3 id="about">About Us</h3> is technically not incorrect but it is lacking good semantics.
## Fix:I wrapped it to <section id="about"> tag around the About us section.
## Why: 
It helps screen readers to understand that this is a section containing related items.

12. 
## Problem: 
The email field was using a generic <input type="text">.
## Fix: 
I changed the input type to <input type="email">.
## Why: 
Using type="email" ,the browser will automatically warn the user if they try to submit the form without a valid email address.

13. 
## Problem: 
The "Why do you want to join?" field used a <input type="text">, which only allows a single line of text.
## Fix: 
I replaced the <input> tag with a <textarea> tag.
## Why: 
An <input> tag is meant for short, one-line answers Asking someone "why they want to join" usually requires a paragraph-length answer, a <textarea> is the correct semantic choice because it allows for multi line text and lets the user  see everything they are typing.

14. 
Problem: The main content of the page was just in the <body> without a semantic tag.
Fix: I wrapped the main page content inside a <main> tag, sitting between the <header> and <footer>.
Why: The <main> tag explicitly tells browsers and screen readers where the primary content of the page begins.

15. 
Problem: The submit button at the bottom of the form was just written as <button>Send</button>.
Fix: I added the attribute type="submit" to make it <button type="submit">Send</button>.
Why: While a button inside a form always defaults to submit, explicitly defining the type attribute has a better code structure and leaves no room for ambiguity about what the button does.

16. 
Problem: The navigation menu did not have label.
Fix: I added aria-label="Main Menu" to the <nav> tag.
Why: If a page ends up having multiple <nav> elements , aria-label help screen reader users distinguish between them.

17. 
Problem: The original document had no useful metadata to describe the page.
Fix: I added <meta name="author"> and <meta name="description"> tags.
Why: The description meta tag is what search engines often display in their search results under the page link, making it essential for SEO.
