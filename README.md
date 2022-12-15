![Screenshot (78)](https://user-images.githubusercontent.com/108424256/204846207-454244ba-7b20-4336-936a-653708518795.png)


TITLE: CMS Blog Site

AUTHOR: Scott Rinaberger

LINKS:

    ** Video HTTP URL Link: 
            Users: https://drive.google.com/file/d/1WkwI2YjESrkbI6ezMFzX8E2ujwcRU2Q1/view
            Thoughts: https://drive.google.com/file/d/1-Mz1mKwgXkp-cj_ufEwsfA0zLUQhNFgu/view
    ** GitHub URL: https://github.com/Rinaberger/ch18_SocialNetworkAPI.git

USER STORY

    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data

ACCEPTANCE CRITERIA

    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database

    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON

    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database

    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

