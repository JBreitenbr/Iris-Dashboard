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

let varDict={};
varDict["Virginica"]="mediumblue";
varDict["Setosa"]="darkviolet";
varDict["Versicolor"]="skyblue";
let box=d3.select("#box");
let scatter1=d3.select("#scatter1");
let scatter2=d3.select("#scatter2");
let w=+d3.select("#box").style("width").slice(0,-2);
let h=+d3.select("#box").style("height").slice(0,-2); 
let pad=w/8;
let toolTip1=d3.select("#tooltip1");
let toolTip2=d3.select("#tooltip2");
let toolTip3=d3.select("#tooltip3");
let toolTip4=d3.select("#tooltip4");
let toolTip5=d3.select("#tooltip5");
let toolTip6=d3.select("#tooltip6");
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
box.append('g').style("font", `${Math.min(w,h)/350*12}px arial`).call(yAxis1).attr('transform','translate('+pad+',0)');
scatter1.append('g').style("font", `${Math.min(w,h)/350*12}px arial`).call(yAxis2).attr('transform','translate('+pad+',0)');
scatter1.append('g').style("font",`${Math.min(w,h)/350*12}px arial`).call(xAxis2).attr('transform','translate(0,'+(h-pad)+')');
scatter2.append('g').style("font", `${Math.min(w,h)/350*12}px arial`).call(yAxis3).attr('transform','translate('+pad+',0)');
scatter2.append('g').style("font", `${Math.min(w,h)/350*12}px arial`).call(xAxis3).attr('transform','translate(0,'+(h-pad)+')');
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
let mouseover1 = (d,item)=>{toolTip1.style("visibility","visible").html("Sepal Length (cm): "+item.sepal_length+" , Species: "+ item.variety).style("left",event.pageX-30+"px").style("top",event.pageY-28+"px").style("font",`${Math.min(w,h)/350*8}px arial`);
}
let mouseover2 = (d,item)=>{toolTip2.style("visibility","visible").html("Sepal Width (cm): "+item.sepal_width+" , Species: "+ item.variety).style("left",event.pageX-30+"px").style("top",event.pageY-28+"px").style( "font",`${Math.min(w,h)/350*8}px arial`);
  }
let mouseover3 = (d,item)=>{toolTip3.style("visibility","visible").html("Petal Length (cm): "+item.petal_length+" , Species: "+ item.variety ).style("left",event.pageX-30+"px").style( "top",event.pageY-28+"px").style( "font",`${Math.min(w,h)/350*8}px arial`);
}
let mouseover4 = (d,item)=>{toolTip4.style("visibility","visible").html("Petal Width (cm): "+item.petal_width+" , Species: "+ item.variety).style("left",window.innerWidth-w/2-30+"px").style( "top",event.pageY-28+"px").style( "font",`${Math.min(w,h)/350*8}px arial`);
}
let mouseover5 = (d,item)=>{toolTip5.style("visibility","visible").html("Sepal Length (cm): "+item.sepal_length+", Sepal Width (cm): "+item.sepal_width+" , Species: "+ item.variety).style("left",event.pageX-30+"px").style( "top",event.pageY-50+"px").style( "font",`${Math.min(w,h)/350*8}px arial`);
  }
let mouseover6 = (d,item)=>{toolTip6.style("visibility","visible").html("Petal Length (cm): "+item.petal_length+", Petal Width (cm): "+item.petal_width +" , Species: "+ item.variety).style("left",window.innerWidth/2-w/2+20+"px").style("top",event.pageY-28+"px").style("font",`${Math.min(w,h)/350*8}px arial`);
   }                         
for(let i=0;i<4;i++){
  for(let j=0;j<3;j++){
box.append("line")         
        .style("stroke", "grey") 
        .attr("x1", xScale1(0.4)+i*0.8*w/4 ).attr("y1", yScale1(disp[bij[i]][bij2[2-j]]))             .attr("x2", xScale1(1.9)+i*0.8*w/4 )  
        .attr("y2", yScale1(disp[bij[i]][bij2[2-j]]));       }   
 }
box.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale1(0.3)).attr("y",h/8).text("Sepal Length");
box.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale1(0.3)+0.8*w/4).attr("y",h/8).text("Sepal Width");
      box.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale1(0.3)+1.6*w/4).attr("y",h/8).text("Petal Length");
box.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale1(0.3)+2.4*w/4).attr("y",h/8).text("Petal Width");
box.append("circle").style("fill",varDict["Setosa"]).attr("cx",xScale1(0.6)).attr("cy",yScale1(0)+h/9).attr("r",Math.min(w,h)/60).style("opacity",0.6).attr("stroke","black").style("stroke-width","1px");
box.append("text").style("font",`${Math.min(w,h)*3/70}px arial`).attr("x",xScale1(0.9)).attr("y",yScale1(0)+h/8).text("Setosa");
box.append("circle").style("fill",varDict["Versicolor"]).attr("cx",xScale1(0.6)+0.8*w/4).attr("cy",yScale1(0)+h/9).attr("r",Math.min(w,h)/60).style( "opacity",0.6).attr("stroke","black").style("stroke-width","1px");
box.append("text").style("font",`${Math.min(w ,h)*3/70}px arial`).attr("x",xScale1(0.9)+0.8*w/4).attr("y",yScale1(0)+h/8).text("Versicolor");
box.append("circle").style("fill",varDict["Virginica"]).attr("cx",xScale1(0.6)+1.7*w/4).attr("cy",yScale1(0)+h/9).attr("r",Math.min(w,h)/60).style("opacity",0.6).attr("stroke","black").style("stroke-width","1px");
box.append("text").style("font",`${Math.min(w,h)*3/70}px arial`).attr("x",xScale1(0.9)+1.7*w/4).attr("y",yScale1(0)+h/8).text("Virginica");
for(let i=0;i<4;i++){
box.append("line").style("stroke", "grey").attr("x1", xScale1(0.4)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(0.4)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]])); 
box.append("line").style("stroke", "grey").attr("x1", xScale1(1.9)+i*0.8*w/4).attr("y1", yScale1(disp[bij[i]][bij2[2]])).
attr("x2",xScale1(1.9)+i*0.8*w/4).attr("y2",yScale1(disp[bij[i]][bij2[0]]));
} box.selectAll("circle1").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand1)+w/16).attr("cy",(item) => yScale1(item.sepal_length)).attr("r",Math.min(w,h)/150).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","black").style("stroke-width",0.5).on("mouseover",mouseover1).on("mouseout",()=>{toolTip1.style("visibility","hidden");});
box.selectAll("circle2").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand2)+0.8*w/4+w/16).attr("cy",(item) => yScale1(item.sepal_width)).attr("r",Math.min(w,h)/150).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","black").style("stroke-width",0.5).on("mouseover",mouseover2).on("mouseout",()=>{toolTip2.style("visibility","hidden");});
      box.selectAll("circle3").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand3)+1.6*w/4+w/16).attr("cy",(item) => yScale1(item.petal_length)).attr("r",Math.min(w,h)/150).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","black").style("stroke-width",0.5).on("mouseover",mouseover3).on( "mouseout",()=>{toolTip3.style("visibility","hidden");});
box.selectAll("circle4").data(data).enter().append("circle").attr("cx",(item)=>xScale1(item.rand4)+2.4*w/4+w/16).attr("cy",(item) => yScale1(item.petal_width)).attr("r",Math.min(w,h)/150).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","black").style("stroke-width",0.5).on("mouseover",mouseover4).on( "mouseout",()=>{toolTip4.style("visibility","hidden");});

scatter1.selectAll("circle5").data(data).enter().append("circle").attr("cx",(item)=>(xScale2(item.sepal_width))).attr("cy",(item) => yScale2(item.sepal_length)).attr("r",Math.min(w,h)/75).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style( "stroke","black").style("stroke-width",0.5).on("mouseover",mouseover5).on( "mouseout",()=>{toolTip5.style("visibility","hidden");});
scatter1.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale2(0.3)+w/8).attr("y",yScale2(0)+h/8).text("Sepal Width (cm)");
scatter1.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr( "x",xScale2(0)-w/20).attr("y",yScale2(10)).text("Sepal Length (cm)");
scatter2.selectAll("circle6").data(data).enter().append("circle").attr( "cx",(item)=>(xScale3(item.petal_width))).attr("cy",(item) => yScale3(item.petal_length)).attr("r",Math.min(w,h)/75).attr("fill",(item)=>varDict[item.variety]).style("opacity",0.6).style("stroke","black").style("stroke-width",0.5).on("mouseover",mouseover6).on( "mouseout",()=>{toolTip6.style("visibility","hidden");});
scatter2.append("text").style("font",`${Math.min(w,h)*12/350}px arial`).attr("x",xScale3(0)+w/7).attr("y",yScale3(0)+h/8).text("Petal Width (cm)");
scatter2.append("text").style("font",`${Math.min(w ,h)*12/350}px arial`).attr("x",xScale3(0)-w/20).attr("y",yScale2(10)).text("Petal Length (cm)");
		}});

