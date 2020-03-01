**IMPORTANT: As the Api wont run on the same folder as the build or the react app**
**please MAKE SURE you replace the correct adress in `api/index.php` at line 10**

## API

The api folder contains an api written in PHP MVC.
Make sure the DatabaseConn file informations are correct

### Start the server in order to run the API

```bash
php -S localhost:8080 -t api
you can change the port ex : 8082 8083 etc
```

### To Exit the Server

```bash
CTRL C
```

## DEV

The dev folder contain the React Application source Code.
If you have no `node_module` folder, you must run `npm install` inside the dev folder in order to have all the packages

## FOR DEVELOPPERS

English only please
Name your variables in `camelCase` and they should be super intuitive
