const basicFetch = async () => {
    const req = await fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
        method: "GET",
        headers: {"git-user": "thiagoRN"}});
    const json = await req.json();
    
    return json.Result
  }

const embaralhadorArras = (array) =>{
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

const loadAll = async () => {
      let team = await basicFetch();
      
      embaralhadorArras(team); 
      
      return team
}


// const grupos = async () => {
//     let tea = await loadAll();
//     let newarr=[];
//     for (var i = 0; i < tea.length; i = i + 4) {
//         newarr.push(tea.slice(i, i + 4));
//       }
    
//     return newarr;
// }

// grupos()


// const main = async () =>{
//     let team = await loadAll();
//     console.log(team);
    

//     let teams = document.getElementById('grupoA');
//     team.map((element,index) => {
//         if(index <3){ var linha = grupesList(element.Name);
//             teams.appendChild(linha)}
         
//     });
// }

const main = async () =>{
    let team = await loadAll();
    console.log(team);
    

    let grupoA = document.getElementById('grupoA');
    let grupoB = document.getElementById('grupoB');
    let grupoC = document.getElementById('grupoC');
    let grupoD = document.getElementById('grupoD');
    let grupoE = document.getElementById('grupoE');
    let grupoF = document.getElementById('grupoF');
    let grupoG = document.getElementById('grupoG');
    let grupoH = document.getElementById('grupoH');
    team.map((element,index) => {
        if(index <= 3){
             var linha = grupesList(element.Name);
            grupoA.appendChild(linha)
        }if (index >= 4 && index <= 7){
            var linha = grupesList(element.Name);
            grupoB.appendChild(linha)
        }if (index >= 8 && index <= 11){
            var linha = grupesList(element.Name);
            grupoC.appendChild(linha)
        }if (index >= 12 && index <= 15){
            var linha = grupesList(element.Name);
            grupoD.appendChild(linha)
        }if (index >= 16 && index <= 19){
            var linha = grupesList(element.Name);
            grupoE.appendChild(linha)
        }if (index >= 20 && index <= 23){
            var linha = grupesList(element.Name);
            grupoF.appendChild(linha)
        }if (index >= 24 && index <= 27){
            var linha = grupesList(element.Name);
            grupoG.appendChild(linha)
        }if (index >=28){
            var linha = grupesList(element.Name);
            grupoH.appendChild(linha)
        }
    });
}



const grupesList = (element) =>{
    let name = document.createElement("div");
    name.setAttribute("id", `grupe-div`);
    name.innerHTML = element;
    
    return name
}

// const grupesList = (element,index) =>{

//     if(index < 3){
//         let name = document.getElementById('grupoA');
//         name.appendChild(element)
//     }
//     let name = document.createElement("div");
//     name.setAttribute("id", `grupe-div`);
//     name.innerHTML = element;
    
//     return name
// }

// const teamsList = async (item) =>{
//     let grupe =  await item;

//     let grupes = document.getElementById('grupe-div')
//     grupe.map((element, index) => {
        
//         let name = document.createElement("a");
//         name.innerHTML = element.Name;
//         grupes.appendChild(name)
//    });
    
// }


main();
