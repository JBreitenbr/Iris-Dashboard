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
let scatter1=d3.select("#scatter1");
let scatter2=d3.select("#scatter2");
let w=+d3.select("#box").style("width").slice(0,-2);
let h=+d3.select("#box").style("height").slice(0,-2); 
let pad=w/8;
let xScale1=d3.scaleLinear().domain([0,1]).range([pad,w/4-0.3*pad]);
let yScale1 = d3.scaleLinear().domain([0,9]).range([h-pad,pad]);
let xScale2=d3.scaleLinear().domain([0,5]).range([pad,w/2-0.3*pad]);
let yScale2 = d3.scaleLinear().domain([0,9]).range([h-pad,pad]);
let xScale3=d3.scaleLinear().domain([0,3]).range([pad,w/2-0.3*pad]);
let yScale3 = d3.scaleLinear().domain([0,7]).range([h-pad,pad]);
let xAxis1=d3.axisBottom(xScale1);
let yAxis1=d3.axisLeft(yScale1);
let xAxis2=d3.axisBottom(xScale2).ticks(5);
let yAxis2=d3.axisLeft(yScale2);
let xAxis3=d3.axisBottom(xScale3).ticks(3);
let yAxis3=d3.axisLeft(yScale3).ticks(7);
box.append('g').style("font", "10px arial").call(yAxis1).attr('transform','translate('+pad+',0)');
scatter1.append('g').style("font", "10px arial").call(yAxis2).attr('transform','translate('+pad+',0)');
scatter1.append('g').style("font", "10px arial").call(xAxis2).attr('transform','translate(0,'+(h-pad)+')');
scatter2.append('g').style("font", "10px arial").call(yAxis3).attr('transform','translate('+pad+',0)');
scatter2.append('g').style("font", "10px arial").call(xAxis3).attr('transform','translate(0,'+(h-pad)+')');
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
box.append("text").style("font","10px arial").attr("x",xScale1(0.3)).attr("y",h/8).text("Sepal Length");
box.append("text").style("font","10px arial").attr("x",xScale1(0.3)+0.8*w/4).attr("y",h/8).text("Sepal Width");
      box.append("text").style("font","10px arial").attr("x",xScale1(0.3)+1.6*w/4).attr("y",h/8).text("Petal Length");
box.append("text").style("font","10px arial").attr("x",xScale1(0.3)+2.4*w/4).attr("y",h/8).text("Petal Width");
box.append("circle").style("fill",varDict["Virginica"]).attr("cx",xScale1(0.6)).attr("cy",yScale1(0)+h/9).attr("r",5).style("opacity",0.6);
box.append("text").style("font","12px arial").attr("x",xScale1(0.9)).attr("y",yScale1(0)+h/8).text("Virginica");
box.append("circle").style("fill",varDict["Setosa"]).attr("cx",xScale1(0.6)+0.8*w/4).attr("cy",yScale1(0)+h/9).attr("r",5).style( "opacity",0.6);
box.append("text").style("font","12px arial").attr("x",xScale1(0.9)+0.8*w/4).attr("y",yScale1(0)+h/8).text("Setosa");
box.append("circle").style("fill",varDict["Versicolor"]).attr("cx",xScale1(0.6)+1.6*w/4).attr("cy",yScale1(0)+h/9).attr("r",5).style("opacity",0.6);
box.append("text").style("font","12px arial").attr("x",xScale1(0.9)+1.6*w/4).attr("y",yScale1(0)+h/8).text("Versicolor");
for(let i=0;i<4;i++){
box.append("line").style("stroke", "grey").attr("x1", xScale1(0.4)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(0.4)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]])); 
box.append("line").style("stroke", "grey").attr("x1", xScale1(1.9)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(1.9)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]]));
} box.selectAll("circle1").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand1)+w/16).attr("cy",(item) => yScale1(item.sepal_length)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
box.selectAll("circle2").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand2)+0.8*w/4+w/16).attr("cy",(item) => yScale1(item.sepal_width)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
      box.selectAll("circle3").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand3)+1.6*w/4+w/16).attr("cy",(item) => yScale1(item.petal_length)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
box.selectAll("circle4").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand4)+2.4*w/4+w/16).attr("cy",(item) => yScale1(item.petal_width)).attr("r",2).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);

scatter1.selectAll("circle5").data(data).enter().append("circle").attr("cx",(item)=>(xScale2(item.sepal_width))).attr("cy",(item) => yScale2(item.sepal_length)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style( "stroke","grey").style("stroke-width",1);
scatter1.append("text").style("font","10px arial").attr("x",xScale2(0.3)+w/8).attr("y",yScale2(0)+h/8).text("Sepal Width (cm)");
scatter1.append("text").style("font","10px arial").attr( "x",xScale2(0)-w/20).attr("y",yScale2(10)).text("Sepal Length (cm)");
scatter2.selectAll("circle6").data(data).enter().append("circle").attr( "cx",(item)=>(xScale3(item.petal_width))).attr("cy",(item) => yScale3(item.petal_length)).attr("r",4).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","grey").style("stroke-width",1);
scatter2.append("text").style("font","10px arial").attr("x",xScale3(0)+w/7).attr("y",yScale3(0)+h/8).text("Petal Width (cm)");
scatter2.append("text").style("font","10px arial").attr("x",xScale3(0)-w/20).attr("y",yScale2(10)).text("Petal Length (cm)");
		}});

