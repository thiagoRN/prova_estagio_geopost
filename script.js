const basicFetch = async () => {
    const req = await fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
        method: "GET",
        headers: {"git-user": "thiagoRN"}});
    const json = await req.json();
    
    return json.Result
  }

  const separar = (base, maximo) =>{
    var resultado = [[]];
    var grupo = 0;
  
    for (var indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
  
      resultado[grupo].push(base[indice]);
  
      if ((indice + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
  
    return resultado;
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
    let i = 0;
    
      

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
            let td = document.getElementById(`td-p${i}`);
             var g = grupesList(element.Name);
             grupoA.appendChild(g);
             var t = grupesList(element.Name);
             td.appendChild(t); 
            
        

        }if (index >= 4 && index <= 7){
            let td = document.getElementById(`td-p${i+1}`);
            var g = grupesList(element.Name);
            grupoB.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
            
        }if (index >= 8 && index <= 11){
            let td = document.getElementById(`td-p${i+2}`);
            var g = grupesList(element.Name);
            grupoC.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }if (index >= 12 && index <= 15){
            let td = document.getElementById(`td-p${i+3}`);
            var g = grupesList(element.Name);
            grupoD.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }if (index >= 16 && index <= 19){
            let td = document.getElementById(`td-p${i+4}`);
            var g = grupesList(element.Name);
            grupoE.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }if (index >= 20 && index <= 23){
            let td = document.getElementById(`td-p${i+5}`);
            var g = grupesList(element.Name);
            grupoF.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }if (index >= 24 && index <= 27){
            let td = document.getElementById(`td-p${i+6}`);
            var g = grupesList(element.Name);
            grupoG.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }if (index >=28){
            let td = document.getElementById(`td-p${i+7}`);
            var g = grupesList(element.Name);
            grupoH.appendChild(g)
            var t = grupesList(element.Name);
             td.appendChild(t); 
        }
    });
}





const grupesList = (element) =>{
    let name = document.createElement("a");
    name.setAttribute("id", `grupe-a`);
    name.innerHTML = element;
    
    return name
}



const grupesBoard = (element) =>{
    
    let name = document.createElement("p");
    name.setAttribute("id", `board-score`);
    name.innerHTML = element;
    
    return name
}

const boardScore = (element) =>{
    let grupos = 0;
    let resultA = resultados();
    let resultB = resultados();
    // let resultC = resultados();
    // let resultD = resultados();
    // let resultE = resultados();
    // let resultF = resultados();
    // let resultG = resultados();
    // let resultH = resultados();
    
    

    resultA.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultB.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultC.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultD.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultE.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultF.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultG.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });

    resultH.forEach((element) => {
        
        let tp = document.getElementById(`p-score${grupos += 1}`);


        var jj = grupesBoard(element.J)
        var vt = grupesBoard(element.V)
        var ep = grupesBoard(element.E)
        var dt = grupesBoard(element.D)
        var gs = grupesBoard(element.G)
        var pt = grupesBoard(element.P) 

        tp.appendChild(jj); 
        tp.appendChild(vt); 
        tp.appendChild(ep); 
        tp.appendChild(dt); 
        tp.appendChild(gs);
        tp.appendChild(pt); 
    
    });
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
    let A = Math.floor(Math.random() * 4);
    let B = Math.floor(Math.random() * 4);
    let C = Math.floor(Math.random() * 4);
    let D = Math.floor(Math.random() * 4);

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
            if(A < C){
                timeA.J += 1;timeC.J += 1;
                timeA.D += 1;timeC.V += 1;
                timeA.G += A;timeC.G += C;
                timeC.P += 3;
            }else if(A > C){
                timeA.J += 1;timeC.J += 1;
                timeA.V += 1;timeC.D += 1;
                timeA.G += A;timeC.G += C;
                timeA.P += 3;
            }else if(A = C){
                timeA.J += 1;timeC.J += 1;
                timeA.E += 1;timeC.E += 1;
                timeA.G += A;timeC.G += C;
                timeA.P += 1;timeC.P += 1;
            }

            if(B < D){
                timeB.J += 1;timeD.J += 1;
                timeB.D += 1;timeD.V += 1;
                timeB.G += B;timeD.G += D;
                timeD.P += 3;
            }else if(B > D){
                timeB.J += 1;timeD.J += 1;
                timeB.V += 1;timeD.D += 1;
                timeB.G += B;timeD.G += D;
                timeB.P += 3;
            }else if(B = D){
                timeB.J += 1;timeD.J += 1;
                timeB.E += 1;timeD.E += 1;
                timeB.G += B;timeD.G += D;
                timeB.P += 1;timeD.P += 1;
            }
            
        
        break;
        
        case 2:
            if(A < D){
                timeA.J += 1;timeD.J += 1;
                timeA.D += 1;timeD.V += 1;
                timeA.G += A;timeD.G += D;
                timeD.P += 3;
            }else if(A > D){
                timeA.J += 1;timeD.J += 1;
                timeA.V += 1;timeD.D += 1;
                timeA.G += A;timeD.G += D;
                timeA.P += 3;
            }else if(A = D){
                timeA.J += 1;timeD.J += 1;
                timeA.E += 1;timeD.E += 1;
                timeA.G += A;timeD.G += D;
                timeA.P += 1;timeD.P += 1;
            }

            if(C < B){
                timeC.J += 1;timeB.J += 1;
                timeC.D += 1;timeB.V += 1;
                timeC.G += C;timeB.G += B;
                timeB.P += 3;
            }else if(C > B){
                timeC.J += 1;timeB.J += 1;
                timeC.V += 1;timeB.D += 1;
                timeC.G += C;timeB.G += B;
                timeC.P += 3;
            }else if(C = B){
                timeC.J += 1;timeB.J += 1;
                timeC.E += 1;timeB.E += 1;
                timeC.G += C;timeB.G += B;
                timeC.P += 1;timeB.P += 1;
            }
            
        
        break;
        
        default:
                
    }
    
    
   } 

   chaves(timeA,timeB,timeC,timeD)
   
    return [timeA,timeB,timeC,timeD];
   
}


const chaves = async (A,B,C,D) =>{
let teams = await loadAll();

console.log(A,B,C,D)
}
    



grupesBoard();
boardScore();
grupes();
