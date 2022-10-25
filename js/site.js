let today = new Date();
today = today.getDate();
console.log(today);

let apiDateEnd = "2022-09-"+today;
let apiDateStart = "2022-09"+today-6;

var rotation;
var moveH;
var moveW;
var H = 0;
var W = 0;
var moveX;
var moveY;
var X =0;
var Y =0;
var degrees = 0;
var num =0;
var number;
var random;
var RGBA =['255','255','255','0'];
var API;
var feed = "";

API = setInterval(function(){
    
},20)

fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-17&end_date='+ apiDateEnd +'&api_key=kEUozmDTguvnQPEtSsYX6J0zXWJjQ5tKapgRwbct')
.then(res =>res.json())
.then(NASAdata => collectData(NASAdata))

function collectData(NASAdata){
const listAll = NASAdata;
console.log(listAll);

//   const countElement = document.createElement("h1");
//   countElement.innerHTML = NASAdata.element_count;
//   document.body.appendChild(countElement);

  let IDs =[];
  for(let i=0, len = NASAdata.near_earth_objects[apiDateEnd].length; i<len; i++){
    let newID = NASAdata.near_earth_objects[apiDateEnd][i].id;
    IDs.push(newID);
  }
  console.log(IDs)
  loopFunc(IDs,num);
}

const loopFunc= setInterval(function(IDs,num){
    generateRandom(IDs,num);
    num++;
},2000);

const generateRandom = function(IDs,num){
    var now = [];
    
    // for(let i =0; i<IDs.length;i++){
    //     console.log(IDs[i]);
    //     for(let p=0, len = IDs[i].length; i<len; i++){
    //         // console.log(IDs[i]);
    //     }
    // }

    IDs.forEach(element => {
        for(let i=0, len = element.length; i<len; i++){
            now.push(element[i]);
        }
    });

    random = setInterval(function(){
        feed = now[num];
            
    
    },2000)
    console.log(now);
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
    shape.style.zIndex="0";
    moveX = setInterval(function(){
        if(X >=700){
            X +=0.3*feed;
            shape.style.marginLeft=""+feed+"px";
        }else if(X >=0){
            X=0.3*feed;
            shape.style.marginLeft=""+feed+"px";
        }
    },20)
    moveY = setInterval(function(){
        
            // Y +=1;
            // shape.style.marginLeft=""+Y+"px";

        
    },20)

    rotation = setInterval(function(){
        degrees+=0.2*feed;
        shape.style.webkitTransform = 'rotate(' + degrees*0.3*feed + 'deg)';
    },100)

    moveH = setInterval(function(){
        let Hi;
        Hi+=feed;
        shape.style.height= ""+ Hi*feed +"px";
    },120)

    moveW = setInterval(function(){
        let Wi;
        Wi+=feed;
        shape.style.Weight= ""+ Wi*0.5*feed +"px";
    },120)

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
    shapeTwo.style.borderRadius="50%";
    shapeTwo.style.webkitTransform = 'rotate(-30deg)';
    document.body.appendChild(shapeTwo);

    moveW = setInterval(function(){
        let wid;
        wid +=feed;
        shapeTwo.style.width= ""+ wid +"px";
    },20)
    
    generateShapeThree();
}

const generateShapeThree = function(){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.marginLeft="500px";
    
    box.style.border="30px solid white";
    box.style.backgroundColor="transparent";
    // box.style.borderRadius="10%";

    moveH = setInterval(function(){
        H=30*feed;
        box.style.height= ""+ H*feed +"px";
    },20)

    moveW = setInterval(function(){
        W=50*feed;
        box.style.Weight= ""+ W*0.5*feed +"px";
    },20)

    document.body.appendChild(box);

    generateShapeFour();
}

const generateShapeFour = function(){
    const shapeFour = document.createElement('div');
    shapeFour.classList.add('shapeFour');
    shapeFour.style.marginLeft="900px";
    shapeFour.style.marginTop="200px";
    shapeFour.style.background ="radial-gradient(circle, rgba("+RGBA[0]+","+ +RGBA[1] +","+ +RGBA[2]+","+RGBA[0]+") 0%, rgba(0,0,0,0) 80%)";
    shapeFour.style.borderRadius="50%";

    moveH = setInterval(function(){
        let B;
        B +=feed;
        shapeFour.style.height= ""+ B*feed +"px";
    },20)


    moveW = setInterval(function(){
        let F;
        F +=1*feed;
        shapeFour.style.Weight= ""+ F*2 +"px";
    },20)

    document.body.appendChild(shapeFour);

    generateRandom();
    
}


