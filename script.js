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


const grupes = async () =>{
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
    let td = document.getElementById('td-p');
    team.map((element,index) => {
        if(index <= 3){
             var g = grupesList(element.Name);
             var t = grupesList(element.Name);

            td.appendChild(t); 
            grupoA.appendChild(g)
        }if (index >= 4 && index <= 7){
            var g = grupesList(element.Name);
            grupoB.appendChild(g)
        }if (index >= 8 && index <= 11){
            var g = grupesList(element.Name);
            grupoC.appendChild(g)
        }if (index >= 12 && index <= 15){
            var g = grupesList(element.Name);
            grupoD.appendChild(g)
        }if (index >= 16 && index <= 19){
            var g = grupesList(element.Name);
            grupoE.appendChild(g)
        }if (index >= 20 && index <= 23){
            var g = grupesList(element.Name);
            grupoF.appendChild(g)
        }if (index >= 24 && index <= 27){
            var g = grupesList(element.Name);
            grupoG.appendChild(g)
        }if (index >=28){
            var g = grupesList(element.Name);
            grupoH.appendChild(g)
        }
    });
}



const grupesList = (element) =>{
    let name = document.createElement("a");
    name.setAttribute("id", `grupe-a`);
    name.innerHTML = element;
    
    return name
}

const grupesLis = (element) =>{
    let name = document.createElement("p");
    name.setAttribute("id", `td-score`);
    name.innerHTML = element;
    
    return name
}


const resultados = () => {
    timeA = {
        J: 0,
        V: 0,
        E: 0,
        D: 0,
        G: 0,
        P:0
    }
    timeB = {
        J: 0,
        V: 0,
        E: 0,
        D: 0,
        G: 0,
        P:0
    }
    timeC = {
        J: 0,
        V: 0,
        E: 0,
        D: 0,
        G: 0,
        P:0
    }
    timeD = {
        J: 0,
        V: 0,
        E: 0,
        D: 0,
        G: 0,
        P:0
    }

   for(let i = 0; i < 3; i++){
    let A = Math.floor(Math.random() * 6);
    let B = Math.floor(Math.random() * 6);
    let C = Math.floor(Math.random() * 6);
    let D = Math.floor(Math.random() * 6);

    switch (i) {
        case 0:
            if(A < B){
                timeA.J += 1;timeB.J += 1;
                timeA.D += 1;timeB.V += 1;
                timeA.G += A;timeB.G += B;
                timeB.P += 3;
            }else if(A > B){
                timeA.J += 1;timeB.J += 1;
                timeA.V += 1;timeB.D += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 3;
            }else if(A = B){
                timeA.J += 1;timeB.J += 1;
                timeA.E += 1;timeB.E += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 1;timeB.P += 1;
            }

            if(C < D){
                timeC.J += 1;timeD.J += 1;
                timeC.D += 1;timeD.V += 1;
                timeC.G += C;timeD.G += D;
                timeD.P += 3;
            }else if(C > D){
                timeC.J += 1;timeD.J += 1;
                timeC.V += 1;timeD.D += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 3;
            }else if(C = D){
                timeC.J += 1;timeD.J += 1;
                timeC.E += 1;timeD.E += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 1;timeD.P += 1;
            }


        break;

        case 1:
            if(A < B){
                timeA.J += 1;timeB.J += 1;
                timeA.D += 1;timeB.V += 1;
                timeA.G += A;timeB.G += B;
                timeB.P += 3;
            }else if(A > B){
                timeA.J += 1;timeB.J += 1;
                timeA.V += 1;timeB.D += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 3;
            }else if(A = B){
                timeA.J += 1;timeB.J += 1;
                timeA.E += 1;timeB.E += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 1;timeB.P += 1;
            }

            if(C < D){
                timeC.J += 1;timeD.J += 1;
                timeC.D += 1;timeD.V += 1;
                timeC.G += C;timeD.G += D;
                timeD.P += 3;
            }else if(C > D){
                timeC.J += 1;timeD.J += 1;
                timeC.V += 1;timeD.D += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 3;
            }else if(C = D){
                timeC.J += 1;timeD.J += 1;
                timeC.E += 1;timeD.E += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 1;timeD.P += 1;
            }
            
        
        break;
        
        case 2:
            if(A < B){
                timeA.J += 1;timeB.J += 1;
                timeA.D += 1;timeB.V += 1;
                timeA.G += A;timeB.G += B;
                timeB.P += 3;
            }else if(A > B){
                timeA.J += 1;timeB.J += 1;
                timeA.V += 1;timeB.D += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 3;
            }else if(A = B){
                timeA.J += 1;timeB.J += 1;
                timeA.E += 1;timeB.E += 1;
                timeA.G += A;timeB.G += B;
                timeA.P += 1;timeB.P += 1;
            }

            if(C < D){
                timeC.J += 1;timeD.J += 1;
                timeC.D += 1;timeD.V += 1;
                timeC.G += C;timeD.G += D;
                timeD.P += 3;
            }else if(C > D){
                timeC.J += 1;timeD.J += 1;
                timeC.V += 1;timeD.D += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 3;
            }else if(C = D){
                timeC.J += 1;timeD.J += 1;
                timeC.E += 1;timeD.E += 1;
                timeC.G += C;timeD.G += D;
                timeC.P += 1;timeD.P += 1;
            }
            
        
        break;
        
        default:
                
    }
    
    
   } 
   console.log(timeA)
   console.log(timeB)
   console.log(timeC)
   console.log(timeD)
}

resultados();

grupes();
