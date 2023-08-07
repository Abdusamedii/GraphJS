
let print = console.log;

document.getElementById("Decode").onclick = function(){
    document.getElementById("Output").innerText = "";
    let x = document.getElementById("Decoder").value;
    decode(x);

}
document.getElementById("Encode").onclick = function(){
    document.getElementById("Output").innerText = "";
    let x = document.getElementById("Encoder").value;
    encode(x);

}


function encode(x){
    let tekst = x + "";
    let output = "";
    for(let i = 0;i<tekst.length + 1;i++){
        if(i%2==0){
            output = output + String.fromCharCode((tekst.charCodeAt(i) + 1));
            
        }

        output = output + String.fromCharCode((tekst.charCodeAt(i) + 2));

        //if(output.length%10==0){
        //    output = output + "\n";
        //}
    }

    
    
    document.getElementById("Output").innerText = output;
    

}









function decode(x){
    let output = "";
    let qeThjeshtohet = "";
    
    let skip = 0;
    for(let i = 0; i<x.length;i++){
        if(!(skip%2==0)){
            i++;
        }
        qeThjeshtohet = qeThjeshtohet + String.fromCharCode(x.charCodeAt(i));
        skip++;
    }
    
    print(qeThjeshtohet);

    for(let i = 0;i<qeThjeshtohet.length;i++){
        if(i%2==0){
            output = output + String.fromCharCode(qeThjeshtohet.charCodeAt(i) - 1);
        }
        else{
            output = output + String.fromCharCode(qeThjeshtohet.charCodeAt(i) - 2);
        }

        //if(output.length%10==0){
        //    output = output + "\n";
        //}
    }
    
    document.getElementById("Output").innerText = "";
    document.getElementById("Output").innerText = output;



}