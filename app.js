const dis1 = document.querySelector('.d1');
const dis2 = document.querySelector('.d2');
const dis3 = document.querySelector('.d3');
const num = document.querySelectorAll('.number');
const ope = document.querySelectorAll('.operation');
const eq = document.querySelector('.equal');
const clr = document.querySelector('.allclear');
const ce = document.querySelector('.ce');
const dot = document.querySelector('.dot');
const zero = document.querySelector('.zero');

let dis1n = '';
let dis2n = '';
let res = null;
let lastOperation = '';
let havedot = false;

num.forEach( number =>{
    number.addEventListener('click',(e) => {
        if(e.target.innerText === '.' && !havedot){
            havedot = true;
        }
        else if(e.target.innerText === '.' && havedot){
            return;
        }
        dis2n += e.target.innerText;
        dis2.innerText = dis2n;
    })
});

ope.forEach(operation => {
    operation.addEventListener('click',(e) => {
        if(!dis2n) return;
        havedot = false;
        const operationName = e.target.innerText;
        if(dis1n && dis2 && lastOperation){
            mathOper();
        }
        else{
            res = parseFloat(dis2n);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = ''){
    dis1n += dis2n + ' ' + name + ' ';
    dis1.innerText = dis1n;
    dis2.innerText = '';
    dis2n = '';
    dis3.innerText = res; 
}

function mathOper(){
    if(lastOperation === 'X'){
        res = parseFloat(res) * parseFloat(dis2n);
    }
    else if(lastOperation === '+'){
        res = parseFloat(res) + parseFloat(dis2n);
    }
    else if(lastOperation === '-'){
        res = parseFloat(res) - parseFloat(dis2n);
    }
    else if(lastOperation === '/'){
        res = parseFloat(res) / parseFloat(dis2n);
    }
    else if(lastOperation === '%'){
        res = parseFloat(res) % parseFloat(dis2n);
    }
}

eq.addEventListener('click', (e) => {
    if(!dis1n || !dis2n) return;
    havedot = false;
    mathOper();
    clearVar();
    dis2.innerText = res;
    dis3.innerText = '';
    dis2n = res;
    dis1n = '';
});

clr.addEventListener('click',(e) => {
    dis1.innerText = '0';
    dis2.innerText = '0';
    dis3.innerText = '0';
    dis2n = '';
    dis1n = '';
});

ce.addEventListener('click' , (e) =>{
    dis2.innerText = '';
    dis2n = '';
})