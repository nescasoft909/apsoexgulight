/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('init');
        document.addEventListener("backbutton", onBackKeyDown, false);
        //ajustarObjetos();
        initFacebook();
    },
    capturePhotoEdit: function() {
        //try {
        var pictureSource=navigator.camera.PictureSourceType;
        var destinationType=navigator.camera.DestinationType;
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
        /*}catch(err){
            alert(err.message);
        }*/
    },
    
     onFail: function(message) {
      alert('Failed because: ' + message);
    },
    
 onPhotoDataSuccess: function(imageData) {
      // Uncomment to view the base64 encoded image data
      //console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
};
function ajustarObjetos(){
        var id = $( ":mobile-pagecontainer").pagecontainer( "getActivePage" ).attr('id');
        var cw = $("#"+id+' .simplerow').width();
        $("#"+id+' .simplerow').css({'height':cw+'px'}); 
        $("#"+id+' .twothird').css({'height':cw+'px'}); 
        $("#"+id+' .onethird').css({'height':cw+'px'}); 
        cw = $("#"+id+' .doble').width();
        $("#"+id+' .doble').css({'height':cw/2+'px'});
        cw = $("#"+id+' .doble-square').width();
        //$("#"+id+' .doble-square').css({'height':(cw+60)+'px'});
        $("#"+id+' .doble-square').css({'height':'auto'});
        cw = $("#"+id+' .doble-middle').width();
        $("#"+id+' .doble-middle').css({'height':(cw/4)+'px'});
        $.each($('.icono [class*="icon-"]'),function(i,obj){
            $(obj).css("line-height",$(obj).parent().height()+"px");
            //$(obj).style['font-size']= ($(obj).parent().height()/2)+"px";
            $(obj).css("font-size",($(obj).parent().height()/3)+"px");
        });
}
function cambiarPagina(url){
    location.href=url;
    //$.mobile.changePage( url, { transition: "slide" });
}
function externalUrl(url){
    window.open(url,'_system');
}

function loadMenu(){
    $('#menuToggle').click(function(){
        var $parent = $(this).parent('nav');
        $parent.toggleClass("open");
        var navState = $parent.hasClass('open') ? "hide" : "show";
        $(this).attr("title", navState + " navigation");
        // Set the timeout to the animation length in the CSS.
        setTimeout(function(){
        console.log("timeout set");
        $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
        }, 200);
        //e.preventDefault();
    });
}

function unloadMenu(){
    $( "#menuToggle").unbind( "click" );
}

// Para la camara
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    
    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      //console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('largeImage');
      var socialshare = document.getElementById('sharePicture');
      // Unhide image elements
      //
      smallImage.style.display = 'block';

      socialshare.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
        console.log('Imagen Capturada');
        smallImage.src = "data:image/jpeg;base64," + imageData;
        var fileurl = document.getElementById('file_url');
        fileurl.value = "data:image/png;base64," + imageData;
        /*console.log('Imagen Asignada');
        //Watermark
        canvasDom = $("#cameraPicture")[0];
        //console.log(canvasDom);
        canvas = canvasDom.getContext("2d");
        watermark = new Image();
        watermark.src = "img/ccg.png";
        var img = new Image();
        img.src=fileurl.value;
        //img.src='img/concierto.jpg';
        img.onload = function(e) {
            console.log('onload');
            canvas.drawImage(img, 0, 0,img.width,img.height);
            canvas.drawImage(watermark, canvasDom.width-watermark.width, canvasDom.height - watermark.height);
            console.log('fin');
        }*/

    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      //console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');
      var socialshare = document.getElementById('sharePicture');

      // Unhide image elements
      //
      largeImage.style.display = 'block';
      socialshare.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
        var fileurl = document.getElementById('file_url');
        fileurl.value = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      //navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URI });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
    
    //Funciones para manejo de sesión
    function initFacebook(){
        try{
            openFB.init({appId: '1522197638019163'});        
        }catch(e){
            console.log(e.message);
        }
    }
    function facebookLogin() {
        try{
            openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        openFB.api({
                            path: '/me',
                            success: function(data) {
                                usuario={
                                        'nombre':data.first_name,
                                        'apellido':data.last_name,
                                        'email':data.email,
                                };
                                registrarLocal(usuario);
                                $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
                            },
                            error: errorHandler});
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email'});
        }catch(e){
            console.log(e.message);
        }
        
    }

    function getFacebookData() {
        var usuario;
        openFB.api({
            path: '/me',
            success: function(data) {
                //console.log(JSON.stringify(data));
                //document.getElementById("userName").innerHTML = data.name;
                //document.getElementById("userPic").src = 'http://graph.facebook.com/' + data.id + '/picture?type=small';
                usuario={
                        'nombre':data.first_name,
                        'apellido':data.last_name,
                        'email':data.email,
                };
                //registrarLocal(usuario);
            },
            error: errorHandler});
        return usuario;
    }

    function share() {
        openFB.api({
            method: 'POST',
            path: '/me/feed',
            params: {
                message: 'Testing Facebook APIs'
            },
            success: function(data) {
                alert('the item was posted on Facebook');
            },
            error: errorHandler});
    }

    function facebookRevoke() {
        openFB.revokePermissions(
                function() {
                    //alert('Permissions revoked');
                },
                errorHandler);
    }

    function facebookLogout(){
        //openFB.logout();
        openFB.logout(
                function() {
                    //alert('Logout successful');
                },
                errorHandler);
    }

    function errorHandler(error) {
        alert(error.message);
    }

    function registrarLocal(usuario){
        try{
            localStorage.setItem("ccg_nombre", usuario.nombre);
            localStorage.setItem("ccg_apellido", usuario.apellido);
            localStorage.setItem("ccg_ciudad", usuario.ciudad);
            localStorage.setItem("ccg_email", usuario.email);
            localStorage.setItem("ccg_actividad", usuario.actividad);
            localStorage.setItem("ccg_fecha_nacimiento", usuario.fecha_nacimiento);
        }catch(e){
            console.log(e.message);
        }
        
        enviarIntegrador(usuario);
    }
    //Obtiene los datos registrados del usuario registrado en el celular.
    function obtenerLocal(){
        $("#reg_nombre").val(localStorage.getItem("ccg_nombre")=='undefined'?'':localStorage.getItem("ccg_nombre"));
        $('#reg_apellido').val(localStorage.getItem("ccg_apellido")=='undefined'?'':localStorage.getItem("ccg_apellido"));
        $('#reg_ciudad').val(localStorage.getItem("ccg_ciudad")=='undefined'?'':localStorage.getItem("ccg_ciudad"));
        $('#reg_email').val(localStorage.getItem("ccg_email")=='undefined'?'':localStorage.getItem("ccg_email"));
        $('#reg_actividad').val(localStorage.getItem("ccg_actividad")=='undefined'?'':localStorage.getItem("ccg_actividad"));
        $('#reg_nacimiento').val(localStorage.getItem("ccg_fecha_nacimiento")=='undefined'?'':localStorage.getItem("ccg_fecha_nacimiento"));
    }
    //verifica si esta logeado a la aplicación.
    function detectaLogin(){
        if (localStorage.getItem("ccg_email")=='undefined' || localStorage.getItem("ccg_email")=='' ||localStorage.getItem("ccg_email")==null || localStorage.getItem("ccg_email")=='null'){
            $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#login", { role: "page",transition:"slide",reload:true } );
        }
    }
    function detectAlreadyLogin(){
        if (localStorage.getItem("ccg_email")!='undefined' && localStorage.getItem("ccg_email")!='' &&localStorage.getItem("ccg_email")!=null && localStorage.getItem("ccg_email")!='null'){
            $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
        }
    }

    //Funcion para hacer logout
    function logout(){
        localStorage.removeItem("ccg_nombre");
        localStorage.removeItem("ccg_apellido");
        localStorage.removeItem("ccg_ciudad");
        localStorage.removeItem("ccg_email");
        localStorage.removeItem("ccg_actividad");
        localStorage.removeItem("ccg_fecha_nacimiento");
        //Si hizo login con facebook debe salir
        try{
            facebookRevoke();
            facebookLogout();
        }catch(e){
            console.log(e.message);
        }
        stopInterval();
        //window.plugin.backgroundMode.disable();
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#login", { role: "page",transition:"slide",reload:true } );
    }
    
    //Agrega un evento al calendario
    function agregarCalendario(evento){
        //alert('enviado');
        //
        // Start date and time of the event
        var startDate = new Date(evento.fecha+' '+evento.hora_inicio);
        // End date and time of the event 
        var endDate = new Date(evento.fecha+' '+evento.hora_fin);
        // Title of the event 
        var title = evento.nombre;
        // Location of the event 
        var location = evento.locacion;
        // Description about the event 
        var notes = evento.notas;

        var success = function(message) {
        //alert("Event added successfully doge."+message);
        };
        var error = function(message) { 
        //alert("Error occurred while adding the event."+message);
        };

        window.plugins.calendar.createEventInteractively(title,location,notes,startDate,endDate,success,error);
  
        //window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
        //window.plugins.calendar.createEvent(title, loc, notes, startDate, endDate, onSuccess, onError);
        return true;
    }

    function enviarIntegrador(data){
        
    }

    //Integrar con Instagram
    function obtenerInstagram(){
        //https://api.instagram.com/v1/users/1407430697/media/recent/?client_id=267de12f78e54b9a8172c742329b0e22&count=3
        $.ajax({
            url : "https://api.instagram.com/v1/users/1407430697/media/recent/?client_id=267de12f78e54b9a8172c742329b0e22&count=1",
            type: "GET",
            cache: false,
            dataType: 'jsonp',
            //data : formData,
            success: function(data, textStatus, jqXHR)
            {
                var line='';
                console.log(data);
                $.each(data['data'],function(indice,objeto){
                    //console.log(objeto.images.low_resolution.url);
                    line = line+ '<div class="tile-content image full"><img src="'+objeto.images.low_resolution.url+'"></div>';
                });
                line=line+'<div class="tile-status bg-dark opacity"><span class="name">Ahora en Instagram</span></div>';
                $("#instagram_display").html(line);
                
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    }
    function keepAlive(){
        //alert('Im alive');
        console.log('Im alive');
    }
    function startService(){
        stopInterval();
        setInterval("keepAlive()",1000*60*30);
        //window.plugin.backgroundMode.enable();
    }
    function stopInterval(){
        var noofTimeOuts = setTimeout('');
        for (var i = 0 ; i < noofTimeOuts ; i++) clearTimeout(i);
    }
    


function onBackKeyDown() {
    // Handle the back button
    var current_page = $.mobile.activePage[0].id;
    if(current_page == 'content-page'){
        exitApplication();
    }else if(current_page == 'login'){
        exitApplication();
    }else {
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
    }
        /*if(current_page == 'calendario' ){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
    }
    else if(current_page == 'camara' ){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
    }
    else if(current_page == 'calendario' ){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
    }else if(current_page == 'pases_eventos' ){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#content-page", { role: "page",transition:"slide",reload:true } );
    }else if(current_page == 'lista_eventos' ){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#calendario", { role: "page",transition:"slide",reload:true } );
    }else{
        history.back();
    }*/
}
function exitApplication(){
    //navigator.app.exitApp()
    try{
        navigator.Backbutton.goHome(function() {
          console.log('success')
        }, function() {
          console.log('fail')
        });    
    }catch(e){
        console.log('fail');
    }
}
//Funciones Ajax
function cargarEventos(){
    /*
    $.ajax({
            url : "https://api.instagram.com/v1/users/1407430697/media/recent/?client_id=267de12f78e54b9a8172c742329b0e22&count=1",
            type: "GET",
            cache: false,
            dataType: 'jsonp',
            //data : formData,
            success: function(data, textStatus, jqXHR)
            {
                var line='';
                console.log(data);
                $.each(data['data'],function(indice,objeto){
                    //console.log(objeto.images.low_resolution.url);
                    line = line+ '<div class="tile-content image full"><img src="'+objeto.images.low_resolution.url+'"></div>';
                });
                line=line+'<div class="tile-status bg-dark opacity"><span class="name">Ahora en Instagram</span></div>';
                $("#instagram_display").html(line);
                
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log(errorThrown);
            }
        });
    */
}
function cargaProximoEvento(){
    showLoading();
    var evento = {
                "evento": [{
                        "id": 1,
                        "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                    }]
            };
    $("#evento_principal_imagen").attr("src",evento.evento[0].imagen);
    $("#evento_principal").attr("evento_id",evento.evento[0].id);
    hideLoading();
}

function cargarEventoMes(mes){
    //$.urlParam('param1');
    showLoading();
    var eventos = {
        "eventos": [{
                "id": 1,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "PARTICIPA por 2 entradas para el #ZOMBIELAND FEST contestando la pregunta en nuestro fan page. \u003c\u003chttp:\/\/bit.ly\/centrodeconvenciones\u003e\u003e",
            }, {
                "id": 2,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "Segundo evento #DOGELAND",
            },
        ]
    };
    $("#listado_eventos").html('');
    var contenido = '';
    $.each(eventos.eventos,function(indice,objeto){
        $("#evento_hidden #evento_imagen").attr("src",objeto.imagen);
        $("#evento_hidden #evento_desripcion").html(objeto.text);
        contenido = contenido + $("#evento_hidden").html();
    });
    $("#listado_eventos").html(contenido);
    linkListaEventos();
    hideLoading();
}
function buscarEventos(text){
    //$.urlParam('param1');
    showLoading();
    var eventos = {
        "eventos": [{
                "id": 1,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "PARTICIPA por 2 entradas para el #ZOMBIELAND FEST contestando la pregunta en nuestro fan page. \u003c\u003chttp:\/\/bit.ly\/centrodeconvenciones\u003e\u003e",
            }, {
                "id": 2,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "Segundo evento #DOGELAND",
            },
        ]
    };
    $("#listado_eventos").html('');
    var contenido = '';
    $.each(eventos.eventos,function(indice,objeto){
        $("#evento_hidden #evento_imagen").attr("src",objeto.imagen);
        $("#evento_hidden #evento_desripcion").html(objeto.text);
        contenido = contenido + $("#evento_hidden").html();
    });
    $("#listado_eventos").html(contenido);
    hideLoading();
}
function cargarEventoCategoria(categoria){
    //$.urlParam('param1');
    showLoading();
    var eventos = {
        "eventos": [{
                "id": 1,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "PARTICIPA por 2 entradas para el #ZOMBIELAND FEST contestando la pregunta en nuestro fan page. \u003c\u003chttp:\/\/bit.ly\/centrodeconvenciones\u003e\u003e",
            }, {
                "id": 2,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "Segundo evento #DOGELAND",
            },
        ]
    };
    $("#listado_eventos").html('');
    var contenido = '';
    $.each(eventos.eventos,function(indice,objeto){
        $("#evento_hidden #evento_imagen").attr("src",objeto.imagen);
        $("#evento_hidden #evento_desripcion").html(objeto.text);
        contenido = contenido + $("#evento_hidden").html();
    });
    $("#listado_eventos").html(contenido);
    hideLoading();
}
function obtenerCategorias(){
    
}
function cargarDetalleEvento(id){
    //$.urlParam('param1');
    var evento = {
        "evento": [{
                "id": 1,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "url": "http:\/\/www.instagram.com\/",
                "text": "PARTICIPA por 2 entradas para el #ZOMBIELAND FEST contestando la pregunta en nuestro fan page. \u003c\u003chttp:\/\/bit.ly\/centrodeconvenciones\u003e\u003e",
            }, 
        ]
    };
    $("#evento_descripcion").html(evento.evento[0].text);
    $("#evento_url").html(evento.evento[0].url);
    $("#id_evento").val(evento.evento[0].id);
    $("#texto_share").val(evento.evento[0].text);
}

function cargarListaTickets(){
    //$.urlParam('param1');
    showLoading();
    var eventos = {
        "eventos": [{
                "id": 1,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "PARTICIPA por 2 entradas para el #ZOMBIELAND FEST contestando la pregunta en nuestro fan page. \u003c\u003chttp:\/\/bit.ly\/centrodeconvenciones\u003e\u003e",
            }, {
                "id": 2,
                "imagen": "http:\/\/photos-g.ak.instagram.com\/hphotos-ak-xap1\/928320_328084784013494_634156974_a.jpg",
                "text": "Segundo evento #DOGELAND",
            },
        ]
    };
    $("#listado_tickets").html('');
    var contenido = '';
    $.each(eventos.eventos,function(indice,objeto){
        $("#evento_hidden #evento_imagen").attr("src",objeto.imagen);
        $("#evento_hidden #evento_desripcion").html(objeto.text);
        contenido = contenido + $("#evento_hidden").html();
    });
    $("#listado_tickets").html(contenido);
    hideLoading();
}
function cargarTicket(id){
    //$.urlParam('param1');
    
}

//Funciones para mostrar y ocultar loading

function showLoading(){
    var msgText = ' ';
    var textVisible = ' ';
    var theme = 'b';
    $.mobile.loading( 'show', {
      text: msgText,
      textVisible: textVisible,
      theme: theme,
    });
}

function hideLoading(){
    $.mobile.loading( "hide" );
}
                    
//Funciones para links
function linkListaEventos(){
    $(".evento").click(function(){
        $( ":mobile-pagecontainer" ).pagecontainer( "change", "newmain.html#detalle_evento?evento"+$(this).attr("id"), { role: "page",transition:"slide",reload:true } );
    });
}
