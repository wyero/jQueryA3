$(function(){
    $('#username_err').hide()
    $('#email_err').hide()
    $('#nmrT_err').hide()
    $('#password_err').hide()
    $('#ulangP_err').hide()
    
    var username_err = false
    var email_err = false
    var nmrT_err = false
    var password_err = false
    var ulangP_err = false

    $('#username').focusout(function(){
        check_username()
    })

    $('#email').focusout(function(){
        check_email()
    })

    $('#nomorTlpn').focusout(function(){
        check_nomorTlpn()
    })

    $('#password').focusout(function(){
        check_password()
    })

    $('#ulangP').focusout(function(){
        check_ulangPassword()
    })

    function check_username(){
        var user = $('#username').val().length
        if(user < 5 || user >10){
            $('#username_err').html('username minimal 5-10 karakter')
            $('#username_err').show()
            username_err = true
        }else{
            $('#username_err').hide()
        }
    }
    function check_email(){
        var pattern = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
        if(pattern.test($('#email').val())){
            $('#email_err').hide()
        }else{
            $('#email_err').html('masukkan alamat email yang valid')
            $('#email_err').show()
            email_err = true
        }
    }
    function check_nomorTlpn(){
        var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
        if(phone.test($('#nomorTlpn').val())){
            $('#nmrT_err').hide()
        }else{
            $('#nmrT_err').html('masukkan nomor telepon yang benar')
            $('#nmrT_err').show()
            nmrT_err = true
        }
    }
    function check_password(){
        var pass = $('#password').val().length
        if(pass < 7){
            $('#password_err').html('password minimal 7 karakter')
            $('#password_err').show()
            password_err = true
        }else{
            $('#password_err').hide()
        }
    }
    function check_ulangPassword(){
        var pass = $('#password').val()
        var ulangPass = $('#ulangP').val()
        if(pass != ulangPass){
            $('#ulangP_err').html('masukkan password yang sama')
            $('#ulangP_err').show()
            ulangP_err = true
        }else{
            $('#ulangP_err').hide()
        }
    }
    $('form').submit(function(){
        username_err = false
        email_err = false
        nmrT_err = false
        password_err = false
        ulangP_err = false

        check_username()
        check_email()
        check_nomorTlpn()
        check_password()
        check_ulangPassword()

        if(username_err == false && email_err == false && nmrT_err == false &&  password_err == false && ulangP_err == false){
            return true
        }else{
            return false
        }
    })
})