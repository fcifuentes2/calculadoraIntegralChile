
// carga la funcion despues de que se cargue por completo el documento
window.onload = function(){
    addEventListener('change', obtenerTotal);
    addEventListener('change', Total);
}
// buscar el <form> y guardarlo en una variable
const form = document.querySelector('form');

// decir que en el evento enviar se sume el total
addEventListener('change', obtenerTotal);


function obtenerTotal(event) {

// evitar enviar el formulario que ocasiona que se refresque la pagina
event.preventDefault();

// obtener todos los input radio y checkbox
const planRadio = document.querySelector('input[name=plan]:checked')
const rvoRadio = document.querySelector('input[name=rvo]:checked')
const equiposRadio = document.querySelector('input[name=equipos]:checked')
const premium1Check = document.querySelector('input[name=premium1]:checked')
const premium2Check = document.querySelector('input[name=premium2]:checked')
const premium3Check = document.querySelector('input[name=premium3]:checked')
const premium4Check = document.querySelector('input[name=premium4]:checked')
const premium5Check = document.querySelector('input[name=premium5]:checked')
const premium6Check = document.querySelector('input[name=premium6]:checked')
const premium7Check = document.querySelector('input[name=premium7]:checked')
const premium8Check = document.querySelector('input[name=premium8]:checked')
const premium9Check = document.querySelector('input[name=premium9]:checked')
const premium10Check = document.querySelector('input[name=premium10]:checked')
const premium11Check = document.querySelector('input[name=premium11]:checked')
const premium12Check = document.querySelector('input[name=premium12]:checked')
const premium13Check = document.querySelector('input[name=premium13]:checked')
const premium14Check = document.querySelector('input[name=premium14]:checked')
const premium15Check = document.querySelector('input[name=premium15]:checked')
const recargoCheck = document.querySelector('input[name=recargo]:checked')
const tntCheck = document.querySelector('input[name=tntflex]:checked')
const cambioCheck = document.querySelector('input[name=cambio]:checked')
const recableadoCheck = document.querySelector('input[name=recableado]:checked')
const decoCheck = document.querySelector('input[name=deco]:checked')
const rvp1Check = document.querySelector('input[name=rvp1]:checked')
const rvp2Check = document.querySelector('input[name=rvp2]:checked')
const rvp3Check = document.querySelector('input[name=rvp3]:checked')
const rvp4Check = document.querySelector('input[name=rvp4]:checked')
const rvp5Check = document.querySelector('input[name=rvp5]:checked')
const rvp6Check = document.querySelector('input[name=rvp6]:checked')
const rvp7Check = document.querySelector('input[name=rvp7]:checked')
const rvp8Check = document.querySelector('input[name=rvp8]:checked')
const rvp9Check = document.querySelector('input[name=rvp9]:checked')
const rvoCheck = document.querySelector('input[name=rvoEquipo]:checked')
const rvoText = document.querySelector('input[name=rvoExtra]')
const estraText = document.querySelector('input[name=Extra]')          

// convertir los valores a String, o colocar un 0 si no elegieron algo//
const plan = planRadio ?  Number(planRadio.value): 0
const rvo = rvoRadio ?  Number(rvoRadio.value): 0
const equipos = equiposRadio ?  Number(equiposRadio.value): 0
const premium1 = premium1Check ?  Number(premium1Check.value): 0
const premium2 = premium2Check ?  Number(premium2Check.value): 0
const premium3 = premium3Check ?  Number(premium3Check.value): 0
const premium4 = premium4Check ?  Number(premium4Check.value): 0
const premium5 = premium5Check ?  Number(premium5Check.value): 0
const premium6 = premium6Check ?  Number(premium6Check.value): 0
const premium7 = premium7Check ?  Number(premium7Check.value): 0
const premium8 = premium8Check ?  Number(premium8Check.value): 0
const premium9 = premium9Check ?  Number(premium9Check.value): 0
const premium10 = premium10Check ?  Number(premium10Check.value): 0
const premium11 = premium11Check ?  Number(premium11Check.value): 0
const premium12 = premium12Check ?  Number(premium12Check.value): 0
const premium13 = premium13Check ?  Number(premium13Check.value): 0
const premium14 = premium14Check ?  Number(premium14Check.value): 0
const premium15 = premium15Check ?  Number(premium15Check.value): 0
const recargo = recargoCheck ?  Number(recargoCheck.value): 0
const tntflex = tntCheck ?  Number(tntCheck.value): 0
const cambio = cambioCheck ?  Number(cambioCheck.value): 0
const recableado = recableadoCheck ?  Number(recableadoCheck.value): 0
const deco = decoCheck ?  Number(decoCheck.value): 0 
const rvp1 = rvp1Check ?  Number(rvp1Check.value): 0
const rvp2 = rvp2Check ?  Number(rvp2Check.value): 0
const rvp3 = rvp3Check ?  Number(rvp3Check.value): 0
const rvp4 = rvp4Check ?  Number(rvp4Check.value): 0
const rvp5 = rvp5Check ?  Number(rvp5Check.value): 0
const rvp6 = rvp6Check ?  Number(rvp6Check.value): 0
const rvp7 = rvp7Check ?  Number(rvp7Check.value): 0
const rvp8 = rvp8Check ?  Number(rvp8Check.value): 0
const rvp9 = rvp9Check ?  Number(rvp9Check.value): 0
const rvoEquipo = rvoCheck ?  Number(rvoCheck.value): 0
const rvoExtra = rvoText ?  Number(rvoText.value): 0
const Extra = estraText ?  Number(estraText.value): 0

//suma total se le asigna a variable result
const result = plan + rvo + equipos + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 + 
rvp6 + rvp7 + rvp8 + rvp9 + rvoEquipo - rvoExtra + Extra + recargo + tntflex + deco + cambio + recableado;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('resultado').innerHTML = result;
document.getElementById('resultado2').innerHTML = result;
}

addEventListener('change', Total);

function Total() {

// obtener todos los input radio y checkbox
const rvo0Check = document.querySelector('input[name=rvo0]:checked')
const rvo01Check = document.querySelector('input[name=rvo01]:checked')
const rvo02Check = document.querySelector('input[name=rvo02]:checked')
const rvo03Check = document.querySelector('input[name=rvo03]:checked')
const rvp0Check = document.querySelector('input[name=rvp0]:checked')
const rvp01Check = document.querySelector('input[name=rvp01]:checked') 
const facCheck = document.querySelector('input[name=fac]:checked')
const fac1Check = document.querySelector('input[name=fac1]:checked')
const fac2Check = document.querySelector('input[name=fac2]:checked')
const fac3Check = document.querySelector('input[name=fac3]:checked')
const proCheck = document.querySelector('input[name=pro]:checked')
const pro1Check = document.querySelector('input[name=pro1]:checked')
const pro2Check = document.querySelector('input[name=pro2]:checked')
const pro3Check = document.querySelector('input[name=pro3]:checked')
const pro4Check = document.querySelector('input[name=pro4]:checked')
const pro5Check = document.querySelector('input[name=pro5]:checked')
const pro6Check = document.querySelector('input[name=pro6]:checked')
const pro7Check = document.querySelector('input[name=pro7]:checked')
const tstCheck = document.querySelector('input[name=tst]:checked')
const tst1Check = document.querySelector('input[name=tst1]:checked')
const tst2Check = document.querySelector('input[name=tst2]:checked')
const tst3Check = document.querySelector('input[name=tst3]:checked')
const tst4Check = document.querySelector('input[name=tst4]:checked')
const tst5Check = document.querySelector('input[name=tst5]:checked')
const tst6Check = document.querySelector('input[name=tst6]:checked')
// convertir los valores a String, o colocar un 0 si no elegieron algo//
const rvo0 = rvo0Check ?  rvo0Check.value: ""
const rvo01 = rvo01Check ?  rvo01Check.value: ""
const rvo02 = rvo02Check ?  rvo02Check.value: ""
const rvo03 = rvo03Check ?  rvo03Check.value: ""
const rvp0 = rvp0Check ?  rvp0Check.value: ""
const rvp01 = rvp01Check ?  rvp01Check.value: ""
const fac = facCheck ?  facCheck.value: ""
const fac1 = fac1Check ?  fac1Check.value: ""
const fac2 = fac2Check ?  fac2Check.value: ""
const fac3 = fac3Check ?  fac3Check.value: ""
const pro = proCheck ?  proCheck.value: ""
const pro1 = pro1Check ?  pro1Check.value: ""
const pro2 = pro2Check ?  pro2Check.value: ""
const pro3 = pro3Check ?  pro3Check.value: ""
const pro4 = pro4Check ?  pro4Check.value: ""
const pro5 = pro5Check ?  pro5Check.value: ""
const pro6 = pro6Check ?  pro6Check.value: ""
const pro7 = pro7Check ?  pro7Check.value: ""
const tst = tstCheck ?  tstCheck.value: ""
const tst1 = tst1Check ?  tst1Check.value: ""
const tst2 = tst2Check ?  tst2Check.value: ""
const tst3 = tst3Check ?  tst3Check.value: ""
const tst4 = tst4Check ?  tst4Check.value: ""
const tst5 = tst5Check ?  tst5Check.value: ""
const tst6 = tst6Check ?  tst6Check.value: ""

//suma total se le asigna a variable result
const resultado = rvo0 + rvo01 + rvo02 + rvo03+ rvp0 + rvp01 + fac + fac1 + fac2 + fac3 + pro + pro1 +
pro2 + pro3 + pro4 + pro5 + pro6 + pro7 + tst + tst1 + tst2 + tst3 + tst4 + tst5 + tst6 ;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('texto').innerHTML = resultado;
}



        