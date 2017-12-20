Stream1 - Frontend coding project

Purpose:
To create a backendless music page for my music profile showcasing a variety of webdesign skillsets and tools.
Semantic HTML5 used as much as possible.

Needs it fulfils:
Ability for users to sign up to the artist newsletter, or book a gig using forms (as there is no backend this currently outputs to the screen using Java Script functions).
Showcase musician profile, with centralised links to social media pages, shops, and online media.

Functionality:
Needs to have a responsive design forusing on mobile first design.

User Interface (UI):
User interface will load a separate navbar HTML page using W3's include script so Navigation bar can be adjusted in just one location, and dropped into each subsequent page.
Subscription link and social media links (including Twitter widget) will be on most pages in the Aside tag. I did not use the include script here as I did not feel all of these features should be on every page.
Initial landing page will contain all elements a user would need at a glance, and then a Bootstrap Navbar can be used to browse to subsequent pages.
I added an interactive image transition on the Bio page which rotates on hover.

User Experience (UX):
Logo:
Effect - I used a hue rotate transition on the main logo, cycled with CSS in an infinite loop to constantly rotate the hue of the image and then designed the image so there were different colours throughout it.
Scaling - Logo was manually designed and redrawn as an SVG then scaled to make the different resolution images, then rendered. Rescaling pngs was minimised as a result to only really small screens(below an iphone).
Navigation Bar - Created using bootstrap and then customised using Hover CSS by Ian Lunn. This effect varies from mobile(Background with image) to desktop (without image).
Carousel for images on the media page created using Jquery to cycle the images. Transparent background applied with black border to account for images with different aspect ratios.
Users looking to buy music will be redirected to a variety of online retailers from the stores HTML page.

Technologies used:
Javascript
JQuery
HTML5
CSS3
Bootstrap 3
Twitter Widget
W3 Javascript
W3 Include HTML
Font Awesome
Hover CSS by Ian Lunn (Licence paid)

Deployment method:

Testing:

Accreditation:

Mockup file:
Initial mockup for mobile and tablet devices:
/mockup/mobileipad.png
Initial mockup for desktops:
/mockup/Mockup-desktop.png

Requirements:
Create a website of around 4-5 pages.
Incorporate main navigation and grid layout.
Include at least one form with validation. Since you are not expected to build a backend for the project, all this form needs to do is inform the user of whether or not the data was submitted successfully (i.e. passed validation)
Whenever possible, strive to use semantic HTML5 elements to better structure your HTML code.
Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers.
The site should contain your own custom JavaScript logic – include at least one interactive component on your site that is based on non-trivial javascript logic. You can write this logic either inside an Angular controller/service, or in a separate js file.
You should conduct and document tests to ensure that all of you websites functionality works well. Automated testing using frameworks such as Jasmine are preferable, but properly documented manual tests are also acceptable.
Write a README.md file for your project (in Markdown format) that explains what the project does and the need that it fulfils. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based off other code, explain what was kept and/or how it was changed to fit your need. A project submitted without a README.md file will FAIL.
In addition to the README.md file, you may include in your repository supplementary documentation and/or other relevant supporting material for the assessor in any format that is automatically handled by web browsers, such as html, pdf, jpg, etc. Files in proprietary formats such as Microsoft doc/docx will be ignored; but this is generally not a hindrance, since the vast majority of formats can be easily exported to PDF.
Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.
Deploy the final version of your code to a hosting platform such as GitHub Pages.
ADDITIONAL ADVICE

We advise that you create wireframes before embarking on full blown development.
Incorporate as much as you have learned in our lessons.
The site can also make use of CSS and JavaScript libraries/frameworks such as jQuery/Angular, just make sure you maintain a clear separation between the library code and your own code.
Please refer back to your mentor to get constant feedback as you progress
Don’t forget to use your mentor’s help. Your mentor can act as:
Your client
Your technical consultant