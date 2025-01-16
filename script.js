let irisUrl="https://raw.githubusercontent.com/JBreitenbr/Iris-Dashboard/refs/heads/main/iris.json";
let disp={"sepal_length":{"mean":5.843,"std":0.828,"min":4.3,"25%":5.1,"50%":5.8,"75%":6.4,"max":7.9},"sepal_width":{"mean":3.057,"std":0.436,"min":2.0,"25%":2.8,"50%":3.0,"75%":3.3,"max":4.4},"petal_length":{"mean":3.758,"std":1.765,"min":1.0,"25%":1.6,"50%":4.35,"75%":5.1,"max":6.9},"petal_width":{"mean":1.199,"std":0.762,"min":0.1,"25%":0.3,"50%":1.3,"75%":1.8,"max":2.5}}
let bij={0:"sepal_length",1:"sepal_width",2:"petal_length",3:"petal_width"}
let rndDict={"rand1":[],"rand2":[],"rand3":[],"rand4":[]};
let bij2={0:"25%",1:"50%",2:"75%",3:"min",4:"max",5:"mean",6:"std"};
for(let j=1;j<5;j++){
  let ex="rand"+j;
  for(let i=0;i<150;i++){
  rnd=Math.random();
  rndDict[ex].push(rnd);
}
}
console.log(rndDict);
let varDict={};
varDict["Virginica"]="cornflowerblue";
varDict["Setosa"]="darksalmon";
varDict["Versicolor"]="darkgreen";
let box=d3.select("#box");
let w=+d3.select("#box").style("width").slice(0,-2);
let h=+d3.select("#box").style("height").slice(0,-2); 
let pad=w/8;
let xScale1=d3.scaleLinear().domain([0,1]).range([pad,w/4-0.3*pad]);
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
for(let i=0;i<4;i++){
  for(let j=0;j<3;j++){
box.append("line")         
        .style("stroke", "grey") 
        .attr("x1", xScale1(0.4)+i*0.8*w/4 ).attr("y1", yScale1(disp[bij[i]][bij2[2-j]]))             .attr("x2", xScale1(1.9)+i*0.8*w/4 )  
        .attr("y2", yScale1(disp[bij[i]][bij2[2-j]]));       }   
 } 
for(let i=0;i<4;i++){
  /*for(let j=0;j<3;j++){*/
box.append("line").style("stroke", "grey").attr("x1", xScale1(0.4)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(0.4)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]])); 
box.append("line").style("stroke", "grey").attr("x1", xScale1(1.9)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(1.9)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]]));
  /*}     */
} box.selectAll("circle1").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand1)+w/16).attr("cy",(item) => yScale1(item.sepal_length)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
box.selectAll("circle2").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand2)+0.8*w/4+w/16).attr("cy",(item) => yScale1(item.sepal_width)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
      box.selectAll("circle3").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand3)+1.6*w/4+w/16).attr("cy",(item) => yScale1(item.petal_length)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
box.selectAll("circle4").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand4)+2.4*w/4+w/16).attr("cy",(item) => yScale1(item.petal_width)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
		}});

