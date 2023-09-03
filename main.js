var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()
var Textbox = document.getElementById("textbox");
function start() 
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) 
{    
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    Textbox.innerHTML = Content;
    //llamar la función speak que declararemos a continuación
    speak();
}

//Declara la función speak 
function speak (){
    //usaremos un API para convertir el texto en voz
    var synth = window.speechSynthesis;

    //para obtener su valor lo almacenaremos dentro de una variable 
    //ver linea 31 CE
    speak_data=document.getElementById("textbox").value;

    //utterThis es la variable que almacena el texto convertido a voz
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    //new : cada texto nuevo debemos convertirlo a voz
    //SpeechSynthesisUtterance - es la función de la API que convertirá el texto a voz.

    synth.speak(utterThis);

    //Activa la cámara
    Webcam.attach(camera);
}

//Agregamos el código para la función de la camara web
Webcam.set({
    //establecemos sus propiedades
    width:360,
    height:250,
    image_format:"png",
    png_quality:90,
});
camera=document.getElementById("camera");
