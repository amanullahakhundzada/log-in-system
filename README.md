# Basic Login Concept 

This is a basic concept of persistent login that provides a login page for users, accepts requests for user login via credentials stored in a csv file, and determines access to a home page based on authentication.

## Implementations

1. Via localStorage, as shown in the main branch of this repo
2. Via cookie storage, which may be shown on a later branch

It's important to note that real authentication via an Express server such as this would probably involve both local storage and cookie storage for persistent login functionality and session management. More would be written on the server to actually _securely_ validate user credentials. Passwords would of course be encrypted where they are stored.
