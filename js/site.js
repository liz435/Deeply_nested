const useriD = "Z";
const psd = "0124";
const verson = "v1"
const run = true;
var psdIn = "";
var idIn = "";
var sayWhat = ""
var sayStay = [];
var saySome = true;
var done = "";


const createId = function(newId, newPsd){
    var savedId = newId;
    var savedPsd = newPsd;
    console.log(" Hi!" + savedId);
    logged();

}

const login = function(idIn, psdIn){

    if(idIn!=useriD){
        console.log("wrong ID");
        console.log("you can create username and ID createId(newId, newPsd)");
        
    }else if(psdIn!=psd){
        console.log("wrong password");
        console.log("you can create username and ID createId(newId, newPsd)");
    }else{
        var log={
            stored:[],
            storedId:[],
            status: false,
            store:function(){
                var nowtime = currentDate.getDate()
                stored.push(this.nowTime);
                return this.stored;
            }
        }
        logged(idIn);

    }
}

function logged(idIn){
    console.log("you logged in!");
    var access = {
            computer:"old",
            disk:"full",
            oven:"hot",
            milk: true,
            red:true,
            }
    function next(idIn){
        for( i=0;i<Math.random()*24;i++){
            let output = [];
            console.log("idIn");
            const thisV = 3;

        }
    }
    
}

const book ={
    name:"Byme",
    author:"By me",
    yes: "yes",
    read:function(){
        console.log("i can't read");
        console.log("more and more");
        const more = function(){
            console.log("i can't")
        yes = "no";
        return yes
        }
    },
    moreandmore:"please",
        
}

const setting ={
    mode:"normal",
    base:"e",
    people:[],
    true: true,
    check:function(){
        if(check === true){
            var saved={
                checkStat:this.true,
            }
            return "checked"
        }
    },
    modeChange:function(modeSet){
        mode = modSet;
        return mode
    },
    baseChange:function(baseSet){
        base = baseSet;
        return base
    },
    addPeople:function(addPpl){
        people = addPpl;
        return base
    },

    
        
}

