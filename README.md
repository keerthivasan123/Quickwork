# Quickwork
## Build an API in NodeJS using express to send emails using the Gmail REST API

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
