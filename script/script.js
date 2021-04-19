// apparition formulaire de d'inscription

$(document).on("click", '#crea_compte' ,function () {

    $("#form").empty();
    $('.msg').empty();  
    $.ajax({
        type: "GET",
        url: "pages/inscription.php",

    success: function (response) {
            $("#form").append(response)
        }
    });
})
// apparition formulaire de connexion 

$(document).on("click", '.se_connecter' ,function () {

    $("#form").empty();
    $('.msg').empty();  
    $.ajax({
        type: "GET",
        url: "pages/connexion.php",

    success: function (response) {
            $("#form").append(response)
        }
    });
})

// inscription 

$(document).on('click' , '#btn_inscription', function (){

    $('.msg').empty(); 

    var login = $('#login').val() 
    var pass = $('#pass').val()
    var confirm_pass = $('#confirm_pass').val() 

    $.ajax({
        type: "POST",
        url: "pages/traitement_inscription.php",
        data: {login : login , pass : pass , confirm_pass: confirm_pass},
        dataType: "html",
        success: function (response) {
            if(response == "yes"){
               $('.msg').append("<p class=\"success\"> Inscription réussie !</p><p class=\"se_connecter\"> Se connecter </p>");
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

//connexion

$(document).on('click' , '#btn_connexion', function (){

    $('.msg').empty(); 

    var login = $('#login').val() 
    var pass = $('#pass').val()

    $.ajax({
        type: "POST",
        url: "pages/traitement_connexion.php",
        data: {login : login , pass : pass},
        dataType: "html",
        success: function (response) {
            console.log(response)
            if(response == "ok")
            {
                
                $('.msg').append("<p class=\"success\"> Connexion réussi ! Vous allez être redirigé vers votre Todolist </p>");
                sessionStorage.setItem("login", login) ; 

                setTimeout(function () {
                    window.location = "pages/todolist.php"; 
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

//------------------------------ todolist 

// Ajout tache touche Enter

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

// ajoute la tache dans le ul + met a jour le contenu en session storage

$("#add_task").click(function (e) { 
    e.preventDefault(); 
    $('.error_msg').empty() ; 
    
    
    if($('#task').val() == "")
    {
        // $('.error_msg').empty() ; 
        $('.error_msg').append('<p class="error"> Veuillez écrire une tache </p>') ;
    }
    else{
        $('#todo_list').append('<li id="li_task"><p class="my_taks"><span id="txt_tache">'+ $('#task').val() +'</span><span id="txt_date"> le ' + date_complete +'</span></p><p class="cross_check"><i class="fa fa-check" id="check"></i><i class="fa fa-times" id="croix"></i></p></li>') ;
        var list = encodeURIComponent($('#todo_list').html()) ;
        $.ajax({
            type: "GET",
            url: "addlist_bdd.php",
            data: "list=" + list,
            dataType: "html",
            success: function (response) {
                // $('#todo_list').append(response);
                // sessionStorage.clear() ; 
                console.log(response); 
            }
        });
        $("#task").val('') ; 

        sessionStorage.setItem("session_task" , $('#todo_list').html()) ; // ajout session storage des tasks 
    }
});



window.addEventListener("load", function(event) {
    $('.titre_todo').append("<p id=\"msg_bonjour\"> Bonjour, " + sessionStorage.getItem("login") + "</p>") ; // Nom de la personne connecter 
    // $('#todo_list').append(sessionStorage.getItem("session_task")) ; 
});

//deco 

$('#deco').on("click" , function (e) {

    var list = encodeURIComponent($('#todo_list').html()) ;
    $.ajax({
        type: "GET",
        url: "addlist_bdd.php",
        data: "list=" + list,
        dataType: "html",
        success: function (response) {
            // $('#todo_list').append(response);
            sessionStorage.clear() ; 
            window.location = 'logout.php' ; 
        }
    });
})

// remove une tache 

$(document).on("click" , "#croix" , (e) => {
    
    e.currentTarget.parentElement.parentElement.classList.add("animate__animated","animate__bounceOutDown");
        setTimeout(() => {
            // $("#croix").parent().parent().remove() ; 
            e.currentTarget.parentElement.parentElement.remove() ; 
            e.currentTarget.parentElement.parentElement.classList.remove("animate__animated","animate__bounceOutDown");
            // sessionStorage.setItem("session_task", $('#todo_list').html());
            console.log($('#todo_list').html()) ;
            var list = encodeURIComponent($('#todo_list').html()) ;
            $.ajax({
                type: "GET",
                url: "addlist_bdd.php",
                data: "list=" + list,
                dataType: "html",
                success: function (response) {
                    sessionStorage.setItem("session_task" , $('#todo_list').html()) ; 
                }
            })
        },900) 
  
  
})


// recupération des task dans la bdd + append dans le ul 

window.addEventListener("load", function(event) {
    $.ajax({
        type: "GET",
        url: "get_task.php",
        dataType: "json",
        success: function (response) {
            console.log(response)
            $('#todo_list').append(response.description); 
        }
    });
});

window.addEventListener("load", function(event) {
    $.ajax({
        type: "GET",
        url: "get_finish_task.php",
        dataType: "json",
        success: function (response) {
            console.log(response)
            $('#list_finish').append(response.finish_tasks); 
        }
    });
});

// tache check 

$(document).on("click" , "#check" , (e) => {
    // e.currentTarget.parentElement.parentElement.append("#list_finish") ; 
    // console.log(e.currentTarget.parentElement.parentElement) ;
    $('#list_finish').append(e.currentTarget.parentElement.parentElement) ;
    e.currentTarget.parentElement.parentElement.append(date_complete);  
    console.log(e.currentTarget.parentElement.parentElement) ;

    var list_check = encodeURIComponent($('#list_finish').html()); 

    $.ajax({
        type: "GET",
        url: "add_finish_list.php",
        data: "list=" + list_check ,
        dataType: "html",
        success: function (response) {
            var list = encodeURIComponent($('#todo_list').html()) ;
            $.ajax({
                type: "GET",
                url: "addlist_bdd.php",
                data: "list=" + list,
                dataType: "html",
                success: function (response) {
                    sessionStorage.setItem("session_task" , $('#todo_list').html()) ;
                }
            })
        }
    });
})

// deroulage de la liste des taches terminées 

$(document).on("click" , "#click_finish", (e) => {
  
    if($('#finish_task').attr('style') == "display: none ;")
    {
        $('#finish_task').attr("style" , "display: flex ;"); 
    }
    else{
        $('#finish_task').attr("style" , "display: none ;");
    }
})

$(document).on("click", "#supp_task", (e) => {
   $('#list_finish li').remove(); 
   var list_check = encodeURIComponent($('#list_finish').html()); 

    $.ajax({
        type: "GET",
        url: "add_finish_list.php",
        data: "list=" + list_check ,
        dataType: "html",
        success: function (response) {
            var list = encodeURIComponent($('#todo_list').html()) ;
            $.ajax({
                type: "GET",
                url: "addlist_bdd.php",
                data: "list=" + list,
                dataType: "html",
                success: function (response) {
                    sessionStorage.setItem("session_task" , $('#todo_list').html()) ;
                }
            })
        }
    });
})





