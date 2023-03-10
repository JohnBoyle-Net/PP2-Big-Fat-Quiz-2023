# The World Quiz

[View the live project here](https://louibens.github.io/PP2-The-World-Quiz/)

![image](https://user-images.githubusercontent.com/119696542/223071778-edfb4a5f-1885-420c-b094-7ac3c40e4f84.png)

This website is for a trivia quiz focussed on facts from different countries around the world. The purpose of this website is to test the users geographical knowledge 
in a fun way. This website is one page which updates based on the user interacting by entering their name, starting and playing along with the quiz that contains 10 questions. At the end the user will see their results and have the option to Replay or Go Home.


## Index – Table of Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals
        1. As a First Time Visitor, I want to easily understand the main purpose of the site.
        2. As a First Time Visitor, I want to be able to easily view the instructions on how to play.
        3. As a First Time Visitor, I want to be able to easily interact with the site to login and play the quiz.
        4. As a First Time Visitor, I want to be able to easily see how many questions there are and what my score is throughout the quiz.
        5. As a First Time Visitor, I want to be able to easily see my quiz results and either play again or go to the home screen.
        
    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to be able to access and view the quiz quickly and easily.

    -   #### Frequent Visitor Goals
    
        1. As a Frequent Visitor, I want to be able to find new categories to keep me entertained and learn new facts.
      
## Features

#### Existing Features

- __F01 Title__

    - The title is capitalised with a shadow to make it stand out against the background.
    - Icons from Font Awesome are used to emphasise the title.
    - A user can click on the title to go back to the home screen at any point in the game.

![image](https://user-images.githubusercontent.com/119696542/223072951-a0d19ca8-e231-4c35-9fea-c981c42557e8.png)

    
- __F02 Home screen__

    - The user lands on the home screen which includes the title along with an area to display the rules/how to play, an input field where the user enters their name and a start button to begin the quiz.
    The design is simple with a sky background in line with the quiz relating to the world. All elements include the shadow to make the elements stick out on the page.
    ![image](https://user-images.githubusercontent.com/119696542/223074217-4cbfe71d-bb91-404f-bf68-c1fd0c9d5fab.png)

    - The cursor is automatically loaded in the input field to enable user to enter their name with minimal touch. The user will be alerted to enter their name if they try to start without first entering their name in the input field.
    ![image](https://user-images.githubusercontent.com/119696542/223074285-75d44841-7898-4255-85e7-82c5109f7cac.png)

    
- __F03 Quiz screen__
    
    - When the user clicks on the start button on the home screen, the game screen will appear. The quiz screen has 4 elements - the question number and current score, the question, the 4 possible answers and a button to move to the next question. These elements have been styled in line with the home screen to maintain the overall design. 
    ![image](https://user-images.githubusercontent.com/119696542/223075111-e447b490-9ab9-4140-a48f-ea05e960c21c.png)

    - When the user clicks an answer the buttons will change color and a relevant fact will replace the question  - the correct answer will be green and the incorrect answers will be red. This helps the user to learn as they play the quiz as they can see what the correct answer is.
    The score will increase if the customer gets the answer correct.
    ![image](https://user-images.githubusercontent.com/119696542/223075645-f97bf5d4-7fee-4fdf-ad7c-2533fbb30470.png)

    - The user is unable to select an answer again and must move to the next question. The NEXT button will start to jiggle after 4 seconds to indicate to the user to move on to the next question.

    https://user-images.githubusercontent.com/119696542/223076427-f999c2c9-b67b-4e4b-ba1a-65acc034d062.mp4

    - When the user has answered the final question, the next button changes to "END" and the results screen is automatically displayed
    
- __F04 Results screen__
    
    - The results screen includes an area to display the final score and a message to the user which includes the name they entered on the home screen. The message displayed will vary depending on the final score.
    There is also a play again button which will bring you back to question 1 or a home button which brings the user back to the home screen.
   
    ![image](https://user-images.githubusercontent.com/119696542/223076790-dad231b1-d1ef-4b12-85d0-cd16e0d9b0cf.png)
    
- __F05 404 page__
    
    - The 404 page has been designed in line with the quiz design and will direct the user to the home screen either by clicking the title logo or the text in the box container.
    
    ![image](https://user-images.githubusercontent.com/119696542/223081796-c3e3434e-9773-4468-9b84-c4a6b3fe0030.png)

#### Future Features

- Categories can be added for future development to ensure return users are getting value and finding new things to keep them interested

![image](https://user-images.githubusercontent.com/119696542/223089348-6d589583-090b-44a2-a23a-859bb803f5bb.png)


## Design

-   ### Title/Logo
    -   The title logo uses Lilita One font from Google Fonts. This was chosen to give a fun feel to the game and is easy to read.
    -   World icons were used on either side of the title which were taken from Font Awesome

-   ### Imagery
    -   The background image selected is a blue sky to give a positive feel on landing on the site and it is the biggest part of the world - recognisable from anywhere :laughing:
. This image was sourced from pexels.com

-   ### Typography
    -   Google Fonts were used to import Lilita font into styles.css.  This was chosen to give a fun feel throughout.


-   ### Wireframes

#### Home Screen Wireframes
![image](https://user-images.githubusercontent.com/119696542/222509604-c3f30d2e-2e80-42de-ac97-2467344fa70c.png)

#### Quiz Screen Wireframes
![image](https://user-images.githubusercontent.com/119696542/222509692-30f78732-8970-4871-b743-d39de55aef9d.png)

#### Results Screen Wireframes
![image](https://user-images.githubusercontent.com/119696542/222507708-55b0a8c0-d66d-407b-8f43-f4937334da50.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

-   [Google Fonts:](https://fonts.google.com/) was used to import the 'Unbounded' and 'Lilita' fonts into the style.css file. However only Lilita is used across the project.
-   [Font Awesome:](https://fontawesome.com/) was used to add icons for the title and social media websites.
-   [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
-   [TinyPNG](https://tinypng.com/) was used for compressing images.
-   [Convertio](https://convertio.co/) was used to convert image files from jpg to avif.
-   [Balsamiq:](https://balsamiq.com/) was used to create the wireframes.
-   [Cloud Convert:](https://cloudconvert.com/) was used to convert image files from jpg to webp.
-   [Favicon:](https://favicon.io/favicon-converter/) was used to convert icon to a favicon.
-   [Photopea:](https://www.photopea.com/) was used to remove white background from favicon icon.
-   Chrome dev tools to troubleshoot, test and check responsiveness of features.
    
## Testing

### Manual Test Cases and Results

- The below tables detail the test cases that were used, the results and a cross-reference to the Feature ID that each test case exercises.

![image](https://user-images.githubusercontent.com/119696542/223388076-bf16ad4b-5aff-4f8b-a320-239f497fa4d8.png)

![image](https://user-images.githubusercontent.com/119696542/223388552-b8e6cd5b-67eb-4600-9e47-ac873874f9f4.png)

- Testing has been carried out on the following browsers :

    - Chrome Version 110.0.5481.178 (Official Build) (64-bit)
    - Firefox Version Version 110.0.1 (64-bit)
    - Edge Version 110.0.1587.57 (Official build) (64-bit)


- Testing on Chrome browser shows an alert when user clicks on the title logo - Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'. 
![image](https://user-images.githubusercontent.com/119696542/223702426-28757631-dfc9-4683-9edb-3a7b6b0475c7.png)
This does not affect the usability of the site.
Following research of this error it appears it is due to github blocking data being gathered for FLoC. Further information can be found [here](https://www.positioniseverything.net/error-with-permissions-policy-header-unrecognized-feature-interest-cohort)

### Responsivity

- iPad – 768px x 1024px

![image](https://user-images.githubusercontent.com/119696542/224321830-97f8ceb5-0ecd-4f8b-b8f1-f9381de4e248.png)

- iPhone SE – 375px x 667px
    
![image](https://user-images.githubusercontent.com/119696542/224322032-f8add55e-6603-4a22-8ba1-effe915217ed.png)

 ### Automated Validator Testing

- [HTML Validator](https://validator.w3.org/)

    - result for index.html

    ![image](https://user-images.githubusercontent.com/119696542/222734653-86205292-5ca3-4e59-bb06-36b4d87d91be.png)

    - result for 404.html

    ![image](https://user-images.githubusercontent.com/119696542/222734810-f14475c0-927e-4067-a86c-dde2281c2d00.png)

 - [CSS Validator](https://jigsaw.w3.org/css-validator/)

    ![image](https://user-images.githubusercontent.com/119696542/222750348-175d9e3b-c452-4bec-b56f-fdf2377a57b2.png)

- [JSHint Validator](https://jshint.com/)

    - script.js
- Missing semicolons flagged have been put in place and now no errors are reported
- The undefined questions variable are defined in the data.js file.
- The undefined oldScore and finalScore variables are used to reset and increment score.

    ![image](https://user-images.githubusercontent.com/119696542/222754721-d10796fd-eae8-4db5-a56f-1d96963f8939.png)

    - data.js
- The unused variable is used in the data.js file

    ![image](https://user-images.githubusercontent.com/119696542/222756524-279a6e1f-13ca-4fdb-883f-47b060d5b555.png)


- [PageSpeed Insights](https://pagespeed.web.dev/)

![image](https://user-images.githubusercontent.com/119696542/223680687-3cb955cc-c721-463c-9bba-0cf01dd11154.png)
![image](https://user-images.githubusercontent.com/119696542/223680865-cfb8ec7e-e663-442a-bd56-fe38757b4d93.png)


## Deployment

### How this site was deployed

- Login to Github
- Click on the GitHub repository for this project (https://louibens.github.io/PP2-The-World-Quiz/)
- Click on the Settings tab, then choose Pages from the left hand menu 
- From the source section drop-down menu, select the Main Branch
- Once the main branch has been selected, click save.
- The page will refresh with a notification that” Your site is live”
- Any changes pushed to the master branch will take effect on the live project

  The live link can be found here - [The World Quiz](https://louibens.github.io/PP2-The-World-Quiz/) 
  
### How to clone the repository

- Go to the https://louibens.github.io/PP2-The-World-Quiz/ repository on GitHub 
- Click the "Fork" button in the top right corner

### How to clone the repository

- Go to the https://louibens.github.io/PP2-The-World-Quiz/ repository on GitHub 
- Click the "Code" button to the right of the screen, click HTTPs and copy the link there
- Open a GitBash terminal and navigate to the directory where you want to locate the clone
- On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process

## Credits

### Content

- All content was written by the creator based off information researched from The World Book by Joe Fullman and Rose Blake and Google.

### Code research

- Some elements of the javascript code were researched on a youtube tutorial by Web Dev Simplified [Link](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1124s)

### Acknowledgements

- Thank you to my family that have made the time for me to get my head around javascript (to some extent). And for continually testing and providing feedback so I could push myself and improve my knowledge along with the site.
- A massive thanks also goes to my mentor, Elaine Roche, who continues to support me and help me to grow with her excellent feedback and expertise which has been much appreciated throughout the development of this project.
