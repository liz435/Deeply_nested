const box = document.createElement('div');
box.classList.add("box");
document.body.appendChild(box);

var randomGenerate ={
    id:true
};

let info;

fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-07&end_date=2022-09-08&api_key=kEUozmDTguvnQPEtSsYX6J0zXWJjQ5tKapgRwbct')
.then(res =>res.json())
.then(data => collectData(data))

function collectData(data){
const listAll = data;
for(let i=0; i<data.near_earth_objects.length; i++){
    console.log(data.near_earth_objects[i]);
}
console.log(data);
console.log(data.near_earth_objects[0]);

  const countElement = document.createElement("h1");
  countElement.innerHTML = data.element_count;
  document.body.appendChild(countElement);

  let date = "2022-09-07";
  const obj_id = document.createElement("h1");
  obj_id.innerHTML = data.near_earth_objects[0][0];
  document.body.appendChild(obj_id);
}

