
# Ace Academy - [LIVE LINK](https://ace-academy.live/)

It is a website where where Edtech companies or teacher can sell their course, mainly
of Class 11 & 12.
The main concept of making this website is, there are no such tutors, and academy
available if a student want to learn a specific topic or category of a subject.
Here, the student have option to buy courses on specific topics, on which he/she
is interested. Academy can also sell courses covering entire subject if they want.

Also Pro Plans have been launched, so that student can get additional benefits,
and so does the teacher.

## Tech Stacks used:
    1. ReactJs -  Frontend
    2. MaterialUI - For UI Components
    3. Firebase - For Realtime Database, Google Authentication, and Hosting.   
    4. Cloudinary - For Cloud storage, for media files (images).






## Run Locally

Clone the project

```bash
  git clone https://github.com/shubhamymodi/Ace-Academy.git
```

Go to the project directory

```bash
  cd crytics
```

Install dependencies

```bash
  npm install
```

Go to https://console.firebase.google.com/ and create a new project for Web App,
and register for Google Authentication, Realtime Database, and Hosting Services.

Read Docs for implementation: https://firebase.google.com/
or you can also watch youtube tutorials.

On successfull registration you will receive Firebase configuration object containing keys and identifiers for your app.

Paste your keys and identifiers as values to the object:
```bash
var firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
  };
```

Start the server

```bash
  npm start
```

  
## Screenshots

### Homepage
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627729636/home_no2ozh.jpg)



### Course Details
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627729635/buy_ssdedq.jpg)




  