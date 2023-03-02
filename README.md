# The World Quiz

[View the live project here](https://louibens.github.io/The-World-Quiz/)

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
        6. As a First Time Visitor, I want to be able to easily navigate to social media pages.
        
    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to be able to access and view the quiz quickly and easily.

    -   #### Frequent Visitor Goals
    
        1. As a Frequent Visitor, I want to be able to find new categories to keep me entertained and learn new facts.
      
## Features

#### Existing Features

- __F01 Title__

    - The title is capitalised with a shadow to make it stand out against the background.
    
- __F02 Home screen__

    - The user lands on the home screen which includes the title along with an area to display the rules/how to play, an input field where the user enters their name and a start button to begin the quiz.
    The design is simple with a sky background in line with the quiz relating to the world. All elements include the shadow to make the elements stick out on the page.
    ![image](https://user-images.githubusercontent.com/119696542/222521631-97a4d752-079d-45ca-843b-52e2646bf6e0.png)

    - The cursor is automatically loaded in the input field to enable user to enter their name with minimal touch. The user will be alerted to enter their name if they try to start without first entering their name in the input field.
    ![image](https://user-images.githubusercontent.com/119696542/222521738-ea938d08-b4aa-47b5-947c-d67f18d82d8e.png)

    
- __F03 Quiz screen__
    
    - When the user clicks on the start button on the home screen, the game screen will appear. The quiz screen has 4 elements - the question number and current score, the question, the 4 possible answers and a button to move to the next question. These elements have been styled in line with the home screen to maintain the overall design. 
    ![image](https://user-images.githubusercontent.com/119696542/222513714-34f7e226-d17e-4397-aad0-eaf8d1faf474.png)

    - When the user clicks an answer the buttons will change color and a relevant fact will replace the question  - the correct answer will be green and the incorrect answers will be red. This helps the user to learn as they play the quiz as they can see what the correct answer is.
    The score will increase if the customer gets the answer correct.
    ![image](https://user-images.githubusercontent.com/119696542/222514242-1078d393-a002-4081-88ce-e388ec485c36.png)

    - The user is unable to select an answer again and must move to the next question. The NEXT button will start to jiggle after 4 seconds to indicate to the user to move on to the next question
    
    https://user-images.githubusercontent.com/119696542/222521937-7990f061-dfa2-471b-a216-c3219b538e0a.mp4

    - When the user has answered the final question, the next button changes to "END" and the results screen is automatically displayed
    
- __F04 Results screen__
    
    - The results screen includes an area to display the final score and a message to the user which includes the name they entered on the home screen. The message displayed will vary depending on the final score.
    There is also a play again button which will bring you back to question 1 or a home button which brings the user back to the home screen.
    ![image](https://user-images.githubusercontent.com/119696542/222516595-5fd378de-603c-4760-8f4c-d3bc2f657c41.png)


## Design

-   ### Title
    -   Title info here
    -   World icons were used on either side of the title which were taken from Font Awesome
    
    ![image](https://user-images.githubusercontent.com/119696542/221643736-1f9bbe47-5621-4713-a9a4-168b70392e64.png)

-   ### Imagery
    -   The background image selected is a blue sky to give a positive feel on landing on the site and it is the biggest part of the world - recognisable from anywhere :laughing:
. This image was sourced from pexels.com

-   ### Typography
    -   Google Fonts were used to import Unbounded font into styles.css.  This was chosen to maintain a simple and modern feel that is easy to read throughout the site.


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

-   [Google Fonts:](https://fonts.google.com/) was used to import the 'Unbounded' and 'Lilita' fonts into the style.css file. However only Unbounded is used across the project.
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
    
### Testing
