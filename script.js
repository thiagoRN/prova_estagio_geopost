const basicFetch = async () => {
    const req = await fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
        method: "GET",
        headers: {"git-user": "thiagoRN"}});
    const json = await req.json();
    
    return json.Result
}
  
  const separarArray = (base, maximo) =>{
    var resultado = [[]];
    var grupo = 0;
  
    for (var index = 0; index < base.length; index++) {
      if (resultado[grupo] === undefined) {
        resultado[grupo] = [];
      }
  
      resultado[grupo].push(base[index]);
  
      if ((index + 1) % maximo === 0) {
        grupo = grupo + 1;
      }
    }
  
    return resultado;
}

const embaralharArrays = (array) =>{
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

const group = async () =>{
    let team = await addPlacar();
              
    team.map((element,index) => {
        let i = 0;
        if(index <= 3){

            let grupoA = document.getElementById('grupoA');
            let td = document.getElementById(`td-p${i}`);
             let g = tableList(element.Name);
             grupoA.appendChild(g);
             let t = groupList(element.Name,element.placar);
             td.appendChild(t); 

        }if (index >= 4 && index <= 7){
            let grupoB = document.getElementById('grupoB');
            let td = document.getElementById(`td-p${i+1}`);
            let g = tableList(element.Name);
            grupoB.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
            
        }if (index >= 8 && index <= 11){
            let grupoC = document.getElementById('grupoC');
            let td = document.getElementById(`td-p${i+2}`);
            let g = tableList(element.Name);
            grupoC.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }if (index >= 12 && index <= 15){
            let grupoD = document.getElementById('grupoD');
            let td = document.getElementById(`td-p${i+3}`);
            let g = tableList(element.Name);
            grupoD.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }if (index >= 16 && index <= 19){
            let grupoE = document.getElementById('grupoE');
            let td = document.getElementById(`td-p${i+4}`);
            let g = tableList(element.Name);
            grupoE.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }if (index >= 20 && index <= 23){
            let grupoF = document.getElementById('grupoF');
            let td = document.getElementById(`td-p${i+5}`);
            let g = tableList(element.Name);
            grupoF.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }if (index >= 24 && index <= 27){
            let grupoG = document.getElementById('grupoG');
            let td = document.getElementById(`td-p${i+6}`);
            let g = tableList(element.Name);
            grupoG.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }if (index >=28){
            let grupoH = document.getElementById('grupoH');
            let td = document.getElementById(`td-p${i+7}`);
            let g = tableList(element.Name);
            grupoH.appendChild(g)
            let t = groupList(element.Name,element.placar);
             td.appendChild(t); 
        }
    });
    finais(team);
}

const tableList = (element) =>{
    let name = document.createElement("a");
    name.setAttribute("id", `grupe-a`);
    name.innerHTML = [element]
   
    
    return name
}

const groupList = (element,placar) =>{
    
    let name = document.createElement("p");
    name.setAttribute("id", `placar`);
    name.innerHTML = [`${element}\u00A0\u00A0→\u00A0
    Jogos\u00A0:\u00A0${placar.J}\u00A0\u00A0|\u00A0
    Vitorias\u00A0:\u00A0${placar.V}\u00A0\u00A0|\u00A0
    Empates\u00A0:\u00A0${placar.E}\u00A0\u00A0|\u00A0
    Derrotas\u00A0:\u00A0${placar.D}\u00A0\u00A0|\u00A0
    Gols\u00A0:\u00A0${placar.G}\u00A0\u00A0|\u00A0
    Pontos\u00A0:\u00A0${placar.P}\u00A0\u00A0`]
    
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
    let A = Math.floor(Math.random() * 9);
    let B = Math.floor(Math.random() * 9);
    let C = Math.floor(Math.random() * 9);
    let D = Math.floor(Math.random() * 9);

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

   
   
    return [timeA,timeB,timeC,timeD];
   
}

const addPlacar = async () => {
    let teams = await basicFetch();
    teamsEmbaralhados = embaralharArrays(teams); 
    let teamsSeparados = separarArray(teamsEmbaralhados, 4) 
    
    teamsSeparados.map((i) =>{
        let res = resultados()
        i[0].placar =res[0];
        i[1].placar =res[1];
        i[2].placar =res[2];
        i[3].placar =res[3];
        
    })

    let teamsJuntos = teamsSeparados[0].concat(teamsSeparados[1]).concat(teamsSeparados[2]).concat(teamsSeparados[3]).concat(teamsSeparados[4])
    .concat(teamsSeparados[5]).concat(teamsSeparados[6]).concat(teamsSeparados[7])

    
    
    return teamsJuntos
}
//----------------------------------------ARRUMAR LOGICA
const finais = (item)=>{
    
    let separados = separarArray(item, 4)
    let finalistas = [];
    separados.map((element) => {
        let primeiro = {P: 0,G: 0};
        let segundo = {P: 0,G: 0};
        let nome1 ={Token: '',time: 0,res: 0,penalty: 0};
        let nome2 ={Token: '', time: 0,res: 0,penalty: 0};

        element.map((items,i)=>{
    
            if(items.placar.P > primeiro.P || items.placar.P == primeiro.P && items.placar.G > primeiro.G)primeiro = items.placar, nome1.time= items.Name, nome1.Token = items.Token ;
            if(items.placar.P < primeiro.P && items.placar.P >= segundo.P && items.placar.G > segundo.G || items.placar.P == primeiro.P &&  items.placar.G < primeiro.G ){segundo = items.placar, nome2.time= items.Name; nome2.Token = items.Token}
            else if(segundo.P == 0 && segundo.G == 0){if(element[1].placar == primeiro)segundo = element[0].placar, nome2.time= element[0].Name, nome2.Token = element[0].Token;}            
        });finalistas.push(nome1,nome2)
    })
    finaisList(finalistas)
}


const finaisList = (element) =>{

let quartas = [];
let semis = [];
let finals = [];
let champions = [];
    
    const exibir =(item)=>{
        item.res = Math.floor(Math.random() * 4);
        let name = document.createElement("div");
        name.setAttribute("id", `chaves`);
        name.innerHTML = `${item.time} → ${item.res}`   
        return name
    }

    
    var a1 = exibir(element[0]); oitavas-oitavas0.appendChild(a1);
    var b2 = exibir(element[3]);oitavas-oitavas0.appendChild(b2);
    var c1 = exibir(element[4]); oitavas-oitavas1.appendChild(c1);
    var d2 = exibir(element[7]);oitavas-oitavas1.appendChild(d2);
    var e1 = exibir(element[8]); oitavas-oitavas2.appendChild(e1);
    var f2 = exibir(element[11]);oitavas-oitavas2.appendChild(f2);
    var g1 = exibir(element[12]); oitavas-oitavas3.appendChild(g1);
    var h2 = exibir(element[15]);oitavas-oitavas3.appendChild(h2);
    var b1 = exibir(element[2]); oitavas-oitavas4.appendChild(b1);
    var a2 = exibir(element[1]);oitavas-oitavas4.appendChild(a2);
    var d1 = exibir(element[6]); oitavas-oitavas5.appendChild(d1);
    var c2 = exibir(element[5]);oitavas-oitavas5.appendChild(c2);
    var f1 = exibir(element[10]); oitavas-oitavas6.appendChild(f1);
    var e2 = exibir(element[9]);oitavas-oitavas6.appendChild(e2);
    var h1 = exibir(element[14]); oitavas-oitavas7.appendChild(h1);
    var g2 = exibir(element[13]);oitavas-oitavas7.appendChild(g2);

    let quartas1 = document.getElementById('quartas1');
    let quartas2 = document.getElementById('quartas2');
    let quartas3 = document.getElementById('quartas3');
    let quartas4 = document.getElementById('quartas4');
    

    const Finais = (time1,time2,item,arr)=>{
        time1.penalty,time2.penalty=0;
        if(time1.res > time2.res){var element = exibir(time1);item.appendChild(element); arr.push(time1)  }
        else if(time1.res == time2.res){
            time1.penalty = Math.floor(Math.random() * 9); 
            time2.penalty = Math.floor(Math.random() * 9); 
        if(time1.penalty > time2.penalty){ element = exibir(time1), arr.push(time1)}  else { element = exibir(time2), arr.push(time2)}
        item.appendChild(element);
    }else{var element = exibir(time2);item.appendChild(element);arr.push(time2)}
    }



    Finais(element[0],element[3],quartas1,quartas)
    Finais(element[4],element[7],quartas1,quartas)
    Finais(element[8],element[11],quartas2,quartas)
    Finais(element[12],element[15],quartas2,quartas)
    Finais(element[2],element[1],quartas3,quartas)
    Finais(element[6],element[5],quartas3,quartas)
    Finais(element[10],element[9],quartas4,quartas)
    Finais(element[14],element[13],quartas4,quartas)
    
    
    let semis1 = document.getElementById('semis1');
    let semis2 = document.getElementById('semis2');

    Finais(quartas[0],quartas[1],semis1,semis)
    Finais(quartas[2],quartas[3],semis1,semis)
    Finais(quartas[4],quartas[5],semis2,semis)
    Finais(quartas[6],quartas[7],semis2,semis)
    
    let finais1 = document.getElementById('finais1');
    Finais(semis[0],semis[1],finais1,finals)
    Finais(semis[2],semis[3],finais1,finals)

    Desempate = (time1,time2,arr)=>{
        time1.penalty,time2.penalty=0;
        if(time1.res == time2.res){
            time1.penalty = Math.floor(Math.random() * 9); 
            time2.penalty = Math.floor(Math.random() * 9);}
            arr.push(time1)
            arr.push(time2)
    }

    Desempate(finals[0],finals[1],champions)

    
    
    const APIJson = (item)=>{
        let JSON = {
           "equipeA":item[0].Token, 
           "equipeB":item[1].Token,
           "golsEquipeA":item[0].res, 
           "golsEquipeB":item[1].res,
           "golsPenaltyTimeA": item[0].penalty, 
           "golsPenaltyTimeB": item[1].penalty 
        }
        return JSON
    }

    const JSON = APIJson(champions)
    APIPost(JSON);
}

const APIPost = async (item) =>{
    // const response = await fetch("https://estagio.geopostenergy.com/WorldCup/InsertFinalResult", {
    //     method: "POST",
    //     body: JSON.stringify(item),
    //     headers: {"git-user": "thiagoRN",
    //               "Content-type": "application/json",            
    // }});

    // const data = await response.json();
    // console.log(data);
}

group();
    






