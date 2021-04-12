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
                sessionStorage.setItem("login", login) ; 
                sessionStorage.setItem("pass", pass) ; 

                setTimeout(function () {
                    window.location = "todolist.php"; 
                 }, 2000); 
            }
            else if(response == "error_log")
            {
                $('.msg').append("<p class=\"error\"> Login ou mot de passe incorrect. </p>");
            }
            else if(response == "champs_vides")
            {
                $('.msg').append("<p class=\"error\"> Veuillez remplir tous les champs </p>");
            }
        }
    });
})

// todolist 

$('#task').keydown(function(e) {
    if(e.key == 'Enter')
    {
        $('#add_task').click() ; 
    } 
});

// date 

var now = new Date() ; 

var options = { weekday: 'long'};
var day = new Intl.DateTimeFormat('FR', options).format(now);

var date_complete = day + ' ' + now.getDate() + ' ' + now.getFullYear() + ' à ' + now.getHours() + 'h' + now.getMinutes();

console.log("hours", now.getHours());  
console.log("minutes", now.getMinutes());  




$("#add_task").click(function (e) { 
    e.preventDefault();
    console.log($('#task').val()) ; 
    if($('#task').val() == "")
    {
        $('.error_msg').empty() ; 
        $('.error_msg').append('<p class="error"> Veuillez écrire une tache </p>') ;
    }
    else{
        $('#todo_list').append('<li id="li_task">'+ $('#task').val() +' le ' + date_complete +'<i class="fa fa-times"></i></li>') ;
    }
});

$('#test_json').click( function (e) {

    $.ajax({
        type: "GET",
        url: "utilisateurs_json.php",
        dataType: "json",
        success: function (response) {
            console.log("oh") ; 
            console.log(response) ; 

            var nom = response[0].login ; 
            $('.test_json').append("<p>" + nom + "</p>") ; 
        }
        
    });
})


window.addEventListener("load", function(event) {
    $('.titre_todo').append("<p> Bonjour, " + sessionStorage.getItem("login") + "</p>") ; 
  });


