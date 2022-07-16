```
----- HTML -----

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pendaftaran</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Estonia&family=Open+Sans:wght@700;800&family=Roboto&display=swap" rel="stylesheet">
</head>
<body>
    <section>
        <main>
            <h1>Form Pendaftaran</h1>
            <form>
                <div>
                    <label for="username">Username</label><br>
                    <input type="text" id="username" name="namaDepan">
                    <div id="username_err"></div>
                </div>
                <div>
                    <label for="email">Email</label><br>
                    <input type="email" name="email" id="email">
                    <div id="email_err"></div>
                </div>
                <div>
                    <label for="nomorTlpn">Nomor Telepon</label><br>
                    <input type="text" id="nomorTlpn" name="nomorTlpn" placeholder="contoh: 081123091234">
                    <div id="nmrT_err"></div>
                </div>
                <div>
                    <label for="password">Password</label><br>
                    <input type="password" name="password" id="password">
                    <div id="password_err"></div>
                </div>
                <div>
                    <label for="ulang">Ulangi Password</label><br>
                    <input type="password" name="ulangPassword" id="ulangP">
                    <div id="ulangP_err"></div>
                </div>
                <button type="submit">Daftar</button>
            </form>
        </main>
    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/jquery/main.js"></script>
</body>
</html>
```

```
----- SCSS -----

*{
    margin: 0;
    padding: 0;
}
section{
    height: auto;
    padding: 40px 0;
    width: 100%;
    display: flex;
    background: linear-gradient(135deg, #71b7e6, #9b5966);
    main{
        width: 400px;
        margin: auto;
        background: white;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        h1{
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            font-size: 2.3rem;
            padding-top: 20px;
            text-shadow: 2px 2px 2px silver;
        }
        form{
            padding: 20px 40px;
            div{
                margin: 10px 0;
                label{
                    color: #777;
                    font-family: 'Roboto', sans-serif;
                }
                label.error{
                    font-size: 15px;
                }
                input{
                    padding: 7px;
                    width: 100%;
                    margin-top: 5px;
                    border-radius: 8px;
                    border: 2px solid #f0f0f0;
                }
                input:focus{
                    outline: 0;
                    border-color: #777;
                }
                div{
                    margin-top: -2px;
                    font-size: 14px;
                    font-family: 'Open Sans', sans-serif;
                    color: red;
                }
            }
            button{
                outline: none;
                margin-top: 10px;
                width: 105%;
                padding: 8px;
                background: linear-gradient(135deg, #71b7e6, #9b5966);
                color: white;
                border: none;
                border-radius: 20px;
                font-size: 17px;
                font-family: 'Open Sans', sans-serif;
                font-weight: lighter;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }
}
```

```
----- jQuery -----

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
```