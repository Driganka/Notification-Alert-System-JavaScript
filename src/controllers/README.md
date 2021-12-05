REST API is created using NodeJS, ExpressJS Router concepts.

Following Architecture used for REST API :-
![alt text](mvc_express.png "Title")

Files and Purpose of the same :-
1) 'config' folder contains the database configuration file
2) 'src' folder has 3 subfolder named 'controllers', 'models', 'routes'
     a) 'controllers' - Controller functions to get the requested data from the models folder
     b) 'models' - Contains model files
     c) 'routes' - Containing files to forward the supported requests to the appropriate controller    
        functions.