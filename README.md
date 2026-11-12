## what I built
This is a basic Developer profile webpage built using just HTML

## the main sections of the website
- Introduction
- Skills
- Projects
- Education
- Contact

## Semantic HTML choices I made and why
- I used header for the webpage top of the web page. This part represents the introductory part of the page and helps assistive technologies understand that clearly
- I used main for the primary content of the webpage which contains the main sections inside the page such as Introduction, Skills, Projects, Education and Contact 
- I used nav for the top navigation which linked to all major sections of the page. It tells the screen reader that this is a navigation area of the page
- I used alt in the image tags because it helps communicate the image purpose when the image can not load or when using a screen reader

## one thing I found confusing or interesting while building it
- The thing I found interesting was why some HTML tags require a closing tag and some do not. I found out that the HTML tags that require a closing tag do so because they are wrapping around texts and other elements so they act like a container that specifies where the texts or elements start and end.
The ones that do not require a closing tag are used to insert a single standalone object.

## whether and how I used AI
- Yes I used AI .I used it to break down the assignment information into smaller pieces I can easily understand before I write the code. I also used AI to explain to me why the article tag can not stay inside a dl tag.

## ------------------------------------------------

## WEEK 6 LEARNING CHECK

## When would you choose Flexbox instead of Grid?
- Flexbox is good for arranging things up in either a single row or a single column ,it is used for simpler micro layouts like navigation buttons while CSS Grid is used to control both rows and columns at the same time and it is used for things like an overall page structure

## What does box-sizing: border-box change?
- box-sizing: border-box help to keep the content within the specified measurement of the parent container. It makes sizing things more predictable.

## What is the difference between margin and padding?
- padding is the space between the content and the border while margin is the space from the border to other outside elements.

## What does a media query do?
- Media query attaches a conditional style to a webpage based on the size of the screen displaying it.  

## Why is max-width: 100% useful for images?
- Using max-width:100% for images ensure that the images does not overflow beyond its container in case the container is too small for it.

## Mention one CSS behaviour from the videos that initially confused you and explain how you understand it now.
- Flexbox and CSS Grid layouts initially confused me. How I understand it now is that Flexbox can be used to align very particular parts of a webpage like navigation or a single section and is one dimensional while Grid are used for elements like a parent container and is two dimensional.

==============

## Design decision
- I chose a light blue color as the main pallette to make the webpage pop.
- I added a hover effect to the navigation at the top of the webpage and the submit button to make it look responsive and interactive when there is a cursor on it.
- I added border around individual skills and individual projects in both Skills and Projects section respectively to make it standout in each of the section and separate it from other elements in the same card

## Flexbox vs Grid
- I used grid in body and main containers to stack the different sections inside them on each other using grid-template-columns: 1fr. I also used Grid for .three-columns container to and set it to create a row of card divided into four sections.
- I used Grid inside the individual portfolio sections (#Intro, #Skills, #Projects) to align their internal elements using things like place-items: start and justify-items: center;
- I used Flexbox for the nav element and centered the navigation links in a single row using justify-content: center and flex-wrap: wrap to force them to a new line if the display gets too small for them.

## Responsive behaviour
- In the desktop version of the webpage, the navigation links are centered in a single row but in the mobile version, the move to multiple lines depending on the display size
- In the desktop version of the page, the cards in the skills and project sections are in a single row but in the media query, I stacked them on top of each other to have just one columns using grid-template-columns: 1fr

## Hardest CSS problem
- The hardest CSS problem I encountered was distinguishing between when to use Flexbox and CSS Grid. I fixed it by asking AI to explain the concept to me and break it down properly. I understand a bit better now but not fully.

## AI disclosure
- I used AI to explain various CSS syntaxes to me so I can understand how they work and what type of value they accept. I also used it to explain Flexbox and CSS Grid.
- One suggestion I accepted was reducing the size of the width in .column item in order to get rid of the horizontal scrolling and the overflowing that was happening at specific display size and chrome tab size.