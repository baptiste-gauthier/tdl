<?php
session_start() ; 
?>

<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="style/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <title> To do list </title>
    </head>

    <body>
        <header>
            <button id="deco"> deconnexion </button>
        </header>    

        <body>
            <section id="todo">
                <article class="contenu_todo">
                    <div class="titre_todo">
                        <h1> Ma todolist </h1>
                    </div>
                    <div class="barre_todo">
              
                            <label for="task"> Ajouter un tache </label>
                            <input type="text" name="task" id="task">

                            <input type="button" value="add" id="add_task">
                        
                    </div>
                    <div class="list">
                        <ul id="todo_list">
            
                        </ul>
                        <div class="error_msg"></div>
                    </div>
                </article>
            </section>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="script.js"></script>
        </body>

        <footer>
            Le footer
        </footer>
    </body>

</html>