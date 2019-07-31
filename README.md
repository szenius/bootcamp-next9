# Deploying a Web Application + DB

<br>

###  1. Setup

Create an `.env` file in `root` folder with the following properties:

```
DB=sample-local-db
DB_USERNAME=sample-local-user
DB_PASSWORD=sample-local-password
DB_HOST=127.0.0.1
DB_PORT=3306
```

Install the required dependencies for this web app by running:

```
npm install
```

Finally, run this command to create a local dockerized version of MySQL in your machine:

```
npm run db:local
```

### 2a. Running a production version locally 

To get the *feel* of how your application behaves in production, you can run this command to spin up the application locally with production settings 
```
npm run prod
```
`Tip`: to utilise the DB, you have to run `npm run db:local` with the correct `.env` keys in the previous step 
<br>

### 2b. Running tests  

To illustrate the point of deploying untested code to an environment, we will not use the default `npm test` command, but instead:
```
npm run unit:test
```
<br>

## Sample deployment flow
![deployment flow](deploy-flowchart.png "deployment flow")


