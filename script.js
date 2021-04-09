// apparition formulaire de connexion 

$(document).on("click", '#crea_compte' ,function () {

    $("#form").empty(); 
    $.ajax({
        type: "GET",
        url: "inscription.php",

    success: function (response) {
            $("#form").append(response)
        }
    });
})

// $('#btn_connexion').on("click", function (){
//     alert("yo");
// });

$(document).on('click' , '#btn_inscription', function (){

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
               $('.msg').append("<p class=\"sucess\"> Inscription réussie !</p>");
            }
        }
    });
})

