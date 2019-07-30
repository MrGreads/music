var audio, context, analyser, src, array, logo, logo1, logo2;

logo =document.getElementById("logo").style;
logo1=document.getElementById("logo1").style;
logo2=document.getElementById("logo2").style;

audio =document.getElementById("audio");

window.onclick = function(){
    preparation();
    audio.play();

}

function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
}

function loop() {
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    logo2.height= (array[100])+"px";
    logo2.width= (array[100])+"px";
    logo1.height= (100+array[250])+"px";
    logo1.width= (100+array[250])+"px";
    logo.height= (200+array[500])+"px";
    logo.width= (200+array[500])+"px";
}