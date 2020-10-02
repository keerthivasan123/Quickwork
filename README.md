# Quickwork
## Build an API in NodeJS using express to send emails using the Gmail REST API

**Get Started**
----
  Steps to start the project.
  *   **1) npm install**
  *   **2) Download the credentials.json file from Google Develope Console. Save the file in root folder of the project**
  *   **3) npm start**
  *   **4) Use the below APIs defined for signIn, signOut, sendEmails etc.
  
**Auth Api**
----
  These apis are used to authenticate the users to signin, signout, and handle callbacks from google.

  *   **1) Signin**

    `/auth/signin`

  *   **Method:**

    `GET`


  *   **Success Response:**
      `on successful login redirects to auth/signin/callback`
   
  *   **2) Signin Callback**

    `/auth/signin/callback`

  *   **Method:**

    `GET`


  *   **Success Response:**

        * **Code:** 200 <br />
        **Content:** `successfully logged In`

        * **Error Response:**

        * **Code:** 400<br />
        **Content:** `error in signing In`
        
  *   **3) Signout**

    `/auth/signin/signout`

  *   **Method:**

    `GET`

  *   **Success Response:**

        * **Code:** 200 <br />
        **Content:** `signout successfully`

        * **Error Response:**

        * **Code:** 400<br />
        **Content:** `Pls Signin.` 
        
**Email Api**
----
  These apis are used to authenticate the users to signin, signout, and handle callbacks from google.

  *   **1) Send Email**

    `/api/sendEmail`

  *   **Method:**

    `POST`
  *   **Data Params:**
       **Required:**<br />
      ```
      { 
          "to" : "example@gmail.com", 
          "subject" : "Example Subject", 
          "body" : "abc def ghi jkl etc..." 
      }
      ```

  *   **Success Response:**<br />
        ```
        {
          "res": {
              "id": "174e80b1323c9539",
              "threadId": "174e80b1323c9539",
              "labelIds": [
                  "UNREAD",
                  "SENT",
                  "INBOX"
              ]
          },
          "message": "Email Sent Successfully"
        }
        ```
  *   **Error Response:**<br />

  *   **Code:** 422<br />
      **Content:** `{ error : "required data params missing" }`      
  *   **Code:** 404<br />
      **Content:** `Error in sending the Email.`   
