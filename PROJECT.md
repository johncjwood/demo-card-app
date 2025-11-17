**Three Tiered Application for Trading Card Game**

**Get stack up**
sudo snap install docker
docker compose up -d

**Access tools in the stack**
Frontend: http://localhost:4200
REST API: http://localhost:3001
TinyAuth: http://localhost:3000
PostgreSQL: localhost:5432

**Purpose**
This is an application designed to mimic elements of a normal enterprise application.
Some choices, such as using Angular and having a REST API instead of doing server-side rendering are consistent with that goal.

**Auth**
The first thing one might note is that we are publishing the auth credentials in our setup.
This includes a secret key and usernames / passwords.
This is by design, as our goal was to use an auth service that we could setup and initialize programatically.
We did not want an auth service that needed manual intervention or a persistent docker volume / file share / database to function.
This is obviously not a model for emulation, but rather an standard speedbump for enterprise app development (and potentially one that the system could trip on) - integrating with whatever IDAM and Auth provider is provided by the firm.


