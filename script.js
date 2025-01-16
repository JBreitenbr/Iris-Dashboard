let irisUrl="https://raw.githubusercontent.com/JBreitenbr/Iris-Dashboard/refs/heads/main/iris.json";

let rndDict={"rand1":[],"rand2":[],"rand3":[],"rand4":[]}
for(let j=1;j<5;j++){
  let ex="rand"+j;
  for(let i=0;i<150;i++){
  rnd=Math.random();
  rndDict[ex].push(rnd);
}
}
console.log(rndDict);
let varDict={};
varDict["Virginica"]="blue";
varDict["Setosa"]="red";
varDict["Versicolor"]="green";
let box=d3.select("#box");
let w=+d3.select("#box").style("width").slice(0,-2);
let h=+d3.select("#box").style("height").slice(0,-2); 
let pad=w/10;
let xScale1=d3.scaleLinear().domain([0,1]).range([pad,w/4-0.5*pad]);
let yScale1 = d3.scaleLinear().domain([0,10]).range([h-pad,pad]);



let xAxis1=d3.axisBottom(xScale1);
let yAxis1=d3.axisLeft(yScale1);
box.append('g').style("font", "10px arial").call(yAxis1).attr('transform','translate('+pad+',0)');
d3.json(irisUrl).then(
  (data,error) => {
    if(error){
      console.log(error);
    }
    else {		
      for(let i=0;i<data.length;i++){
      data[i]["rand1"]=rndDict["rand1"][i];
      data[i]["rand2"]=rndDict["rand2"][i];
      data[i]["rand3"]=rndDict["rand3"][i];
      data[i]["rand4"]=rndDict["rand4"][i];
      }
      console.log(data[4]);
      box.selectAll("circle1").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand1)).attr("cy",(item) => yScale1(item.sepal_length)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
      box.selectAll("circle2").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand2)+w/4).attr("cy",(item) => yScale1(item.sepal_width)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
      box.selectAll("circle3").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand3)+w/2).attr("cy",(item) => yScale1(item.petal_length)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
box.selectAll("circle4").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand4)+3*w/4).attr("cy",(item) => yScale1(item.petal_width)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
		}});

