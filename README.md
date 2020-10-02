# Quickwork
## Build an API in NodeJS using express to send emails using the Gmail REST API

**Auth Api**
----
  These apis are used to authenticate the users to signin, signout, and handle callbacks from google.

  *   **URL**

    `/auth/signin`

  *   **Method:**

    `GET`

    None

  *   **Success Response:**
      `on successful login redirects to auth/signin/callback`
   
  *   **URL**

    `/auth/signin/callback`

  *   **Method:**

    `GET`

    None

  *   **Success Response:**

        * **Code:** 200 <br />
        **Content:** `successfully logged In`

        * **Error Response:**

        * **Code:** 400<br />
        **Content:** `error in signing In`
        
  *   **URL**

    `/auth/signin/signout`

  *   **Method:**

    `GET`

    None

  *   **Success Response:**

        * **Code:** 200 <br />
        **Content:** `signout successfully`

        * **Error Response:**

        * **Code:** 400<br />
        **Content:** `Pls Signin.` 
