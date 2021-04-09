// apparition formulaire de connexion 

$(document).on("click", '#crea_compte' ,function () {

    $("#form").empty();
    $('.msg').empty();  
    $.ajax({
        type: "GET",
        url: "inscription.php",

    success: function (response) {
            $("#form").append(response)
        }
    });
})

$(document).on("click", '#ins_compte' ,function () {

    $("#form").empty();
    $('.msg').empty();  
    $.ajax({
        type: "GET",
        url: "connexion.php",

    success: function (response) {
            $("#form").append(response)
        }
    });
})



// $('#btn_connexion').on("click", function (){
//     alert("yo");
// });

$(document).on('click' , '#btn_inscription', function (){

    $('.msg').empty(); 

    var login = $('#login').val() 
    var pass = $('#pass').val()
    var confirm_pass = $('#confirm_pass').val() 

    $.ajax({
        type: "POST",
        url: "traitement_inscription.php",
        data: {login : login , pass : pass , confirm_pass: confirm_pass},
        dataType: "html",
        success: function (response) {
            if(response == "yes"){
               $('.msg').append("<p class=\"success\"> Inscription réussie !</p>");
            }
            else if(response == "mdp_diff")
            {
                $('.msg').append("<p class=\"error\"> Les mot de passes sont différents !</p>");
            }
            else if(response == "champs_vide")
            {
                $('.msg').append("<p class=\"error\"> Veuillez remplir tous les champs </p>");
            }
            else if(response == "error_login")
            {
                $('.msg').append("<p class=\"error\"> Ce login est déjà pris </p>");
            }
            else
            {
                $('.msg').append(response);
            }
        }
    });
})

$(document).on('click' , '#btn_connexion', function (){

    $('.msg').empty(); 

    var login = $('#login').val() 
    var pass = $('#pass').val()

    $.ajax({
        type: "POST",
        url: "traitement_connexion.php",
        data: {login : login , pass : pass},
        dataType: "html",
        success: function (response) {
            if(response == "ok")
            {
                $('.msg').append("<p class=\"success\"> Connexion réussi ! Vous allez être redirigé vers votre Todolist </p>");
            }
            else if(response == "error_log")
            {
                $('.msg').append("<p class=\"error\"> Login ou mot de passe incorrect. </p>");
            }
        }
    });
})

