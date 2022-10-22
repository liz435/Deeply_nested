let today = new Date();
today = today.getDate();
console.log(today);

let apiDateEnd = "2022-09-"+today;
let apiDateStart = "2022-09"+today-6;

var rotation;
var move;
var XY = 0;
var degrees = 0;
var num;
var number;



fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-17&end_date='+ apiDateEnd +'&api_key=kEUozmDTguvnQPEtSsYX6J0zXWJjQ5tKapgRwbct')
.then(res =>res.json())
.then(NASAdata => collectData(NASAdata))

function collectData(NASAdata){
const listAll = NASAdata;
console.log(listAll);

  const countElement = document.createElement("h1");
  countElement.innerHTML = NASAdata.element_count;
  document.body.appendChild(countElement);

  let IDs =[];
  for(let i=0, len = NASAdata.near_earth_objects[apiDateEnd].length; i<len; i++){
    let newID = NASAdata.near_earth_objects[apiDateEnd][i].id;
    IDs.push(newID);
  }
  console.log(IDs)
  generateRandom(IDs);
}

const generateRandom = function(IDs){
    var now;
    for(let i =0; i<IDs.length;i++){
        console.log(IDs[i]);
        for(let p=0, len = IDs[i].length; i<len; i++){
            num = setInterval(function(){
                now = IDs[i][p];
            },20)
            
        }
    }
    generateShape();
}

const generateShape = function(){
    let width = "250px";
    const shape = document.createElement('div');
    shape.style.background ="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 80%)";
    shape.style.height ="50px";
    shape.style.width= width;
    shape.style.marginLeft="auto";
    shape.style.marginRight="auto";
    shape.style.marginTop="50px";
    shape.style.borderRadius="50%";
    shape.style.zIndex="6";

    rotation = setInterval(function(){
        degrees++;
        shape.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },20)

    move = setInterval(function(){
        XY++;
        shape.style.height= ""+XY +"px";
    },20)

    document.body.appendChild(shape);

}
