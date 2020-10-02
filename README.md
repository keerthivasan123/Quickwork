# Quickwork
## Build an API in NodeJS using express to send emails using the Gmail REST API

**Auth Api**
----
  These apis are used to authenticate the users to signin, signout, and handle callbacks from google.

*   **URL**

  /auth/signin

*   **Method:**

  `GET`

  None

*   **Success Response:**

      * **Code:** 200 <br />
      **Content:** `successfully logged In`
 
      * **Error Response:**

      * **Code:** 400<br />
      **Content:** `error in signing In`
