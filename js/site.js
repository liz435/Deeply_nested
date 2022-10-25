let today = new Date();
today = today.getDate();
console.log(today);

let apiDateEnd = "2022-09-"+today;
let apiDateStart = "2022-09"+today-6;

var rotation;
var moveH;
var moveW;
var moveHT;
var moveWT;
var wid =0;
var H = 0;
var W = 0;
var HT = 0;
var WT = 0;
var moveX;
var moveY;
var X =0;
var Y =0;
var degrees =0;
var num =0;
var random;
var RGBA =['255','255','255','0'];
var API;
var IDs =[];
var feed;
var modFeed;
var rev;
var floatC;
var C=0;
var moveC;
var R=400;
var moveCC;
var RR=0;


fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-20&end_date='+ apiDateEnd +'&api_key=kEUozmDTguvnQPEtSsYX6J0zXWJjQ5tKapgRwbct')
.then(res =>res.json())
.then(NASAdata => collectData(NASAdata))

function collectData(NASAdata){
    generateShape();
const listAll = NASAdata;
// console.log(listAll);

//   const countElement = document.createElement("h1");
//   countElement.innerHTML = NASAdata.element_count;
//   document.body.appendChild(countElement);
 
  for(let i=0, len = NASAdata.near_earth_objects[apiDateEnd].length; i<len; i++){
    let newID = NASAdata.near_earth_objects[apiDateEnd][i].id;
    IDs.push(newID);
  }
  loopFunc();
}

const loopFunc= function(){
    let run = setInterval(function(){
        generateRandom();
    num+=1;

    },4000)
    
}

const generateRandom = function(){
    var now = [];
    IDs.forEach(element => {
        for(let i=0, len = element.length; i<len; i++){
            now.push(element[i])
        }
    })
        // console.log(num);
        feed =now[num];
        modFeed = Number(feed)/22;
        if(isNaN(modFeed)){
            // console.log("NNNNNN")
            modFeed = 0.01; 
        }else{}
}

const generateShape = function(){
    let width = "350px";
    const shape = document.createElement('div');
    shape.classList.add('shape')
    shape.style.background ="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 90%)";
    shape.style.height ="50px";
    shape.style.width= width;
    shape.style.marginLeft="auto";
    shape.style.marginRight="auto";
    shape.style.marginTop="50px";
    shape.style.borderRadius="10px";
    shape.style.zIndex="0";

    moveX = setInterval(function(){
        let status = true;
        if(status ===false){
                X -=10*modFeed;
                // console.log(X);
                // console.log(modFeed);
                shape.style.marginLeft=""+X+"px";
            if(X<=10){
                status = true;
                
            }
        }

        if(X>=0&&status===true){
            if(X >= 700){status = false;}else{
                X+=10*modFeed;
                
                shape.style.marginLeft=""+X+"px";
            }
        }
    },50)

    moveY = setInterval(function(){
            // Y +=1;
            // shape.style.marginLeft=""+Y+"px";
    },20)

    rotation = setInterval(function(){
        degrees+= modFeed;
        shape.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },10)

    // moveH = setInterval(function(){
    
    //     H+=feed;
    //     shape.style.height= ""+ H*feed +"px";
    // },10)

    // moveW = setInterval(function(){
    //     let Wi;
    //     Wi+=feed;
    //     shape.style.Weight= ""+ Wi*0.5*feed +"px";
    // },120)

    document.body.appendChild(shape);
    
    generateShapeTwo();
}

const generateShapeTwo = function(){
    const shapeTwo = document.createElement('div');
    shapeTwo.classList.add('shapeTwo');
    shapeTwo.style.zIndex= "1";
    shapeTwo.style.background ="radial-gradient(circle, rgba("+RGBA[0]+","+ +RGBA[1] +","+ +RGBA[2]+","+RGBA[0]+") 0%, rgba(0,0,0,0) 80%)";
    shapeTwo.style.height ="35px";
    shapeTwo.style.width="300px";
    shapeTwo.style.webkitTransform = 'rotate(-30deg)'
    shapeTwo.style.marginLeft="700px";
    document.body.appendChild(shapeTwo);

    moveW = setInterval(function(){
        if(modFeed<=0.25){
            wid +=modFeed;
            shapeTwo.style.width= ""+ wid +"px";
        }else{
            if(wid>=0){
                wid -=modFeed;
                shapeTwo.style.width= ""+ wid +"px";
                
            }else{}
            
        }
        // console.log("wid" + modFeed)
    },20)
    
    generateShapeThree();
}

const generateShapeThree = function(){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.marginLeft="650px";
    
    box.style.border="30px solid rgba(255,255,255,0.9)";
    box.style.backgroundColor="transparent";
    // box.style.borderRadius="10%";

    moveH = setInterval(function(){
        
        if(modFeed<=0.12){
            H+=20*modFeed;
            box.style.height= ""+ H +"px";
            rev = true;
        }else{
            if(H>=0){
                H -=modFeed;
                box.style.height= ""+ H +"px";
            }else{}
        }
    },20)

    moveW = setInterval(function(){

        if(modFeed<=0.12){
            W+=20*modFeed;
            box.style.width= ""+ W +"px";
        }else{
            if(W>=0){
                W -=modFeed;
                box.style.width= ""+ W +"px";
            }else{}
        }
    },20)
    document.body.appendChild(box);
    generateShapeBox();

}


    const generateShapeBox = function(){
        const boxTwo = document.createElement('div');
        boxTwo.classList.add('boxTwo');
        boxTwo.style.marginLeft="300px";
        boxTwo.style.marginTop="150px";
        
        boxTwo.style.border="15px solid rgba(255,255,255,0.6)";
        boxTwo.style.backgroundColor="transparent";
        moveHT = setInterval(function(){
            if(modFeed<=0.12){
                HT+=15*modFeed;
                boxTwo.style.height= ""+ HT +"px";
            }else{
                if(H>=0){
                    HT -=modFeed;
                    boxTwo.style.height= ""+ HT +"px";
                }else{}
            }
        },20)
    
        moveWT = setInterval(function(){
    
            if(modFeed<=0.18){
                WT+=15*modFeed;
                boxTwo.style.width= ""+ WT +"px";
            }else{
                if(W>=0){
                    WT -=3*modFeed;
                    boxTwo.style.width= ""+ WT +"px";
                }else{}
            }
        },20)
    
        document.body.appendChild(boxTwo);

    generateShapeFour();
    }

const generateShapeFour = function(){
    const shapeFour = document.createElement('div');
    shapeFour.classList.add('shapeFour');
    shapeFour.style.marginLeft="120px";
    shapeFour.style.marginTop="250px";
    shapeFour.style.background ="radial-gradient(circle, rgba("+RGBA[0]+","+ +RGBA[1] +","+ +RGBA[2]+","+RGBA[0]+") 0%, rgba(0,0,0,0) 90%)";
    shapeFour.style.borderRadius="50%";
 
    floatC = setInterval(function(){
        C+=0.03;
        let newC = 100*Math.sin(C);
        shapeFour.style.height=""+newC+"px";
        shapeFour.style.width=""+newC+"px";
    },20)
    document.body.appendChild(shapeFour);
    generateFive();
}

const generateFive = function(){
    const shapeFive = document.createElement('div');
    shapeFive.classList.add('five');
    shapeFive.style.marginLeft="500px";
    shapeFive.style.borderRadius="50%";
    shapeFive.style.border="8px dotted rgba(255,255,255,1)";
    shapeFive.style.height="300px";
    shapeFive.style.width="300px";
    document.body.appendChild(shapeFive);


    moveC = setInterval(function(){
        if(modFeed<=0.1){
            R-=2*modFeed;
            shapeFive.style.height= ""+ R +"px";
            shapeFive.style.width= ""+ R +"px";
        }else{
            if(R>=0){
            R +=modFeed;
            shapeFive.style.height= ""+ R +"px";
            shapeFive.style.width= ""+ R +"px";
            }else{}
        }
    },20)



    generateSix();
}

const generateSix = function(){
    const shapeFive = document.createElement('div');
    shapeFive.classList.add('five');
    shapeFive.style.marginLeft="800px";
    shapeFive.style.borderRadius="50%";
    shapeFive.style.border="8px dotted rgba(0,0,0,1)";
    shapeFive.style.height="300px";
    shapeFive.style.width="300px";
    document.body.appendChild(shapeFive);


    moveCC = setInterval(function(){
        if(modFeed<=0.2){
            RR+=5*modFeed;
            shapeFive.style.height= ""+ RR +"px";
            shapeFive.style.width= ""+ RR +"px";
        }else{
            if(RR>=0){
            RR -=8*modFeed;
            shapeFive.style.height= ""+ RR +"px";
            shapeFive.style.width= ""+ RR +"px";
            console.log(RR);
            }else{
                RR=0;
            }
        }
    },20)
    generateRandom();
}


