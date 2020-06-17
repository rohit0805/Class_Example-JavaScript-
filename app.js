//ES6
class Element{
    constructor(name,buildyear){
        this.name=name;
        this.buildyear=buildyear;
    }
};  

class Park extends Element{
    constructor(name,buildyear,numTrees,area){
        super(name,buildyear);
        this.numTrees=numTrees;
        this.area=area;
    }
    TreeDensity(){
        var str=`The ${this.name} has Tree Density of ${(this.numTrees/this.area).toFixed(2)} trees per square km.`;
        console.log(str);
    }
    CalAge(){
        var now=new Date().getFullYear();
        return now-this.buildyear;
    }
};

class Street extends Element{
    constructor(name,buildyear,length,size=3){
        super(name,buildyear);
        this.length=length;
        this.size=size;
    }
    Description(){
        console.log(`${this.name}, built in ${this.buildyear}, is a ${this.Classification()} street`);
    }
    Classification(){
        var type=new Map();
        type.set(1,'tiny');
        type.set(2,'small');
        type.set(3,'normal');
        type.set(4,'big');
        type.set(5,'huge');
        return type.get(this.size);
    }
};


const allParks=[new Park('Green Park',1987,214,0.2),
new Park('National Park',1894,3541,2.9),
new Park('Oak Park',1953,949,0.4)];


const allStreets=[new Street('Ocean Avenue',1999,1.1,4),
new Street('Evergreen Street',2008,2.7,2),
new Street('3rd Street',2015,0.8),
new Street('Sunset boulevard',1982,2.5,5)];


function ParkReport(p){
    console.log('-----PARK REPORT-----');
    //Tree Density of Each Park(formula:numTree/area)
    p.forEach((current)=>{
        current.TreeDensity();
    });
    //Average age of Each Town Park(fromula:sum of all ages/number of Parks)
    var sum=0,x=[];
    p.forEach((current)=>{
        sum+=current.CalAge();
        if(current.numTrees>1000){
            x.push(current.name);
        }
    }); 
    sum=(sum/p.length).toFixed(2);  
    console.log(`Our ${p.length} park have an average age of ${sum} years.`)
    //the name of park that has more than 1000 trees
    x.forEach((current)=>{
        console.log(`${current} has more than 1000 trees`);
    });
};

function StreetReport(s){
    console.log("------STREETS REPORT-----");
    //Total and average length of the town's streets
    var total=0;
    s.forEach((current)=>{
        total+=current.length;
    });
    console.log(`Our ${s.length} streets has total length of ${(total).toFixed(2)} km, with an average of ${(total/s.length).toFixed(2)} km.`)
    //Size classification of Each streets(for undefined set to 'normal' default)
    s.forEach((current)=>{
        current.Description();
    });
};

//initializing the Report

ParkReport(allParks);
StreetReport(allStreets);
