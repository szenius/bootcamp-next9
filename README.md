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

### 2. Running a prod version locally 

```
npm run prod
```
<br>

## Sample deployment flow
![deployment flow](deploy-flowchart.png "deployment flow")


