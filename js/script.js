console.log('JS OK')

/* traccia

L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni
cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per
ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata
si colora di azzurro ed emetto un messaggio in console con il numero della cella
cliccata. 


# steps

- creo le caselle
- genero un numero all interno di ogni casella
- nascondo le caselle

- recupero elementi dal dom

- metto in ascolto il bottone
  - al click del bottone mostro le caselle
    - al click della casella cambio colore e stampo in console
*/

// REUCPERO ELEMENTI DAL DOM


const headerButton = document.getElementById('headerButton')
const cells = document.getElementById('cells')
const diffcultyField = document.getElementById('diff')

// creo le caselle 

let rows = 10;
let cols = 10;
const easyCell = cols * rows

headerButton.addEventListener('click', function(){
    
    headerButton.innerText = 'rigioca!'
    //svuoto
    cells.innerHTML = ''
    //leggo il value della select
    const difficulty = diffcultyField.value

    if(difficulty == 'easy'){
        for(let i = 1; i <= easyCell; i++){
           
           const cell = createCells(i, difficulty)
           cells.appendChild(cell)
            //metto in ascolto le celle
            
            cell.addEventListener('click', function(){
                cell.classList.add('clicked')
                console.log(i)
            })
        }
    }
    

    else if(difficulty == 'normal'){
        rows = 9;
        cols = 9;
        const easyCell = cols * rows
        for(let i = 1; i <= easyCell; i++){
            const cell = createCells(i, difficulty)
            cells.appendChild(cell)
            
            //metto in ascolto le celle
            
            cell.addEventListener('click', function(){
                cell.classList.add('clicked')
                console.log(i)
            })
        }
    }
    else if(difficulty == 'hard'){
        rows = 7;
        cols = 7;
        const easyCell = cols * rows
        for(let i = 1; i <= easyCell; i++){
            const cell = createCells(i, difficulty)
            cells.appendChild(cell)
            //metto in ascolto le celle
            
            cell.addEventListener('click', function(){
                cell.classList.add('clicked')
                console.log(i)
            })
        }
    }
})



/***********************************************************************************************
FUNCTION 
*******************************************************/
// funzione per creare celle
function createCells(CellNumber, difficulty){
    const cell = document.createElement('div')
        cell.classList.add('cell', difficulty)
        cell.append(CellNumber)
        return cell;
    }
// funzione per cliccare una cella
function clickOnCell() {
    cell.addEventListener('click', function(){
        cell.classList.add('clicked')
        console.log(i)
    })
}
