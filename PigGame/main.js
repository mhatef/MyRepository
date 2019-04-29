// in the name of Allah
var turn =2;
var fus=0;
var sus=0;
var DiceNumber=0;
var fpn;
var spn;
var tfus=0;
var tsus=0;
var DiceNumber1=0;
var DiceNumber2 =0;
var max=0;

turndiplay();
setnames();

function submit(){

    document.getElementById("dicebtn").style="cursor:not-allowed"
    document.getElementById("holdbtn").style="cursor:not-allowed"

}


function submax(){
    max = parseInt(document.getElementById("max").value)+0;
    console.log(max);
    if(max==true||max>0){
        document.getElementById("max").disabled=true;
        document.getElementById("submax").disabled=true;
        document.getElementById("submax").style="cursor:not-allowed";
        document.getElementById("dicebtn").style="cursor:pointer";
        document.getElementById("holdbtn").style="cursor:pointer";
    }
    
    
    return max
}



function dicebtn(){
    console.log(max);
    if(max==true||max>0){
        var cookie = document.cookie;
        console.log("cookie is : "+cookie);
        dicefunction();
        console.log(DiceNumber);
        
        if(turn%2==0){
            document.getElementById("firstbox").style="border: 5px solid #ff66ff ; box-shadow: 0px 0px 10px #33cc33,0px 0px 3px black;"
            document.getElementById("secondbox").style="border: 5px solid #ff66ff;"
            if(DiceNumber==2){
                tfus=tfus-fus;
                totalscore();
                fus = 0;
                turn+=1;
                turndiplay();
                
                document.getElementById("firstcorrectscore").innerText=fus;
            }else{
                fus = fus + DiceNumber;
                
                document.getElementById("firstcorrectscore").innerText=fus;
            }

        }else{
            document.getElementById("secondbox").style="border: 5px solid #ff66ff; box-shadow: 0px 0px 10px #33cc33,0px 0px 3px black;"
            document.getElementById("firstbox").style="border: 5px solid #ff66ff"
            if(DiceNumber==2){
                tsus=tsus-sus;
                totalscore();
                sus = 0;
                turn+=1;
                turndiplay();
                
                document.getElementById("secondcorrectscore").innerText=sus;
            }else{
                sus = sus + DiceNumber;
                document.getElementById("secondcorrectscore").innerText=sus;
            }
        }
        winbox();
        return fus , sus ,tfus,tsus
    }
}




function dicefunction(){
    DiceNumber1= (Math.floor(Math.random()*6))+1;
    DiceNumber2= (Math.floor(Math.random()*6))+1;
    DiceNumber = DiceNumber1+DiceNumber2;
    //document.getElementById("dicenumber").innerText=DiceNumber;
    document.getElementById("Dice1").src="./Images/Dice-"+DiceNumber1+".png";
    document.getElementById("Dice1").style="width:30px;height:30px;";
    document.getElementById("Dice2").src="./Images/Dice-"+DiceNumber2+".png";
    document.getElementById("Dice2").style="width:30px;height:30px;";
    return DiceNumber
}

function holdfunction(){
    console.log(max);
    if(max==true||max>0){
        totalscore();
        winbox();
        turn+=1;
        turndiplay();
        fus=0;
        sus=0;
        document.getElementById("firstcorrectscore").innerText=fus;
        document.getElementById("secondcorrectscore").innerText=sus;
    }
    return turn,fus,sus,tfus,tsus
}


function winbox(){
    console.log('the first score is : '+fus+'the second score is : '+sus)

    var arr=document.cookie.split('=');
    var firstname = arr[0];
    var secondname = arr[1];
    
    if(tfus>=max){
        document.getElementById("winbox").innerHTML=" <p class='resbox'> "+firstname+" Is Winner </p> <br> <input type='button' id='resetbtn' onclick='reset()' value='Play Again'> <a id='resetgame'  href='./GamePage.html'>Reset Game </a> "
        document.getElementById("dicebtn").style="cursor:not-allowed"
        document.getElementById("holdbtn").style="cursor:not-allowed"
        document.getElementById("dicebtn").onclick=""
        document.getElementById("holdbtn").onclick=""
    }

    if(tsus>=max){
        document.getElementById("winbox").innerHTML=" <p class='resbox'> "+secondname+" Is Winner </p> <br> <input type='button' id='resetbtn' onclick='reset()' value='Play Again'> <a id='resetgame'  href='./GamePage.html'>Reset Game </a>"
        document.getElementById("dicebtn").style="cursor:not-allowed"
        document.getElementById("holdbtn").style="cursor:not-allowed"
        document.getElementById("dicebtn").onclick=""
        document.getElementById("holdbtn").onclick=""    
    }
}


function reset(){
    DiceNumber=0;
    document.getElementById("dicenumber").innerText='';
    fus=0;
    document.getElementById("firstuserscore").innerText=fus;
    document.getElementById("firstcorrectscore").innerText=fus;
    sus=0;
    document.getElementById("seconduserscore").innerText=sus;
    document.getElementById("secondcorrectscore").innerText=sus;
    turn=2;
    document.getElementById("winbox").innerHTML="";
    document.getElementById("dicebtn").style="cursor:pointer";
    document.getElementById("holdbtn").style="cursor:pointer";
    document.getElementById("dicebtn").onclick="dicebtn()";
    document.getElementById("holdbtn").onclick="holdfunction()";
    location.reload();
    return DiceNumber,fus,sus,turn 
}


function turndiplay(){
    temp=0;
    if(turn%2==0){
        document.getElementById("firstbox").style="border: 5px solid #ff66ff ; box-shadow: 0px 0px 10px #33cc33 ,0px 0px 3px black;"
        document.getElementById("secondbox").style="border: 5px solid #ff66ff;"
    }else{
        document.getElementById("secondbox").style="border: 5px solid #ff66ff; box-shadow: 0px 0px 10px #33cc33 ,0px 0px 3px black;"
        document.getElementById("firstbox").style="border: 5px solid #ff66ff"
    }
    return temp;
}


function test(){
    fpn = document.getElementById("fname").value;
    spn = document.getElementById("sname").value;

    document.cookie = fpn+"="+spn;

    console.log(fpn);
    console.log(spn);
    console.log(document.cookie);

}

function setnames(){

    var arr=document.cookie.split('=');
    var firstname = arr[0];
    var secondname = arr[1];
    document.getElementById("fpn").innerText=firstname;
    document.getElementById("spn").innerText=secondname;

    
}

function deleteAllCookies() { // in tabe ham tatame cookie va meghdar count o qesmate html namayesh ro sefr mikone
    
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

        console.log(document.cookie);
    }

}

function showcookie(){
    console.log(document.cookie);
}


function totalscore(){
    tfus=tfus+fus;
    tsus=tsus+sus;

    document.getElementById("firstuserscore").innerText=tfus;
    document.getElementById("seconduserscore").innerText=tsus;

    console.log("first total is :" + tfus);
    console.log("second total is : "+tsus);
    return tfus,tsus
}