<?php

session_start() ; 
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/style.css">
        <title> Compte </title>
    </head>

    <body>
        <header>
            <section id="btn_choice">
                <button id="crea_compte"> Créez un compte </button>
                <button id="ins_compte" class="se_connecter"> Se connecter </button>
            </section>
            <div class="logo_todo">
                <img src="images/logo.svg" alt="logo">
            </div>
        </header>        

        <main>

            <section id="form">
            </section>
            <div class="msg"></div>
           
        </main>

        <footer>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="script/script.js"></script>
    </body>
</html>