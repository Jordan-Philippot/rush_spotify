**Note: As the Api wont run on the same folder as the build or the react app, please make sure you replace the correct port in the api index file**
We will maybe make an .htaccess file to allow all origins

## API

The api folder contains an api written in PHP MVC.
Make sure the DatabaseConn file informations are correct

### Start the server

```bash
php -S localhost:8080 -t api
you can change the port ex : 8082 8083 etc
```

### Quitter le serveur

```bash
CTRL C
```

## DEV

The dev folder contain the React Application source Code.
If you have no `node_module` folder, you must run `npm install` inside the dev folder

## FOR DEVELOPPERS

English only please
Name your variables in `camelCase` and they should be super intuitive
