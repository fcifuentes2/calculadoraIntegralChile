
// carga la funcion despues de que se cargue por completo el documento
window.onload = function(){
    addEventListener('change', obtenerTotal);
   // addEventListener('change', Total);
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
const rvp10Check = document.querySelector('input[name=rvp10]:checked')
const rvp11Check = document.querySelector('input[name=rvp11]:checked')
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
const rvp10 = rvp10Check ?  Number(rvp10Check.value): 0
const rvp11 = rvp11Check ?  Number(rvp11Check.value): 0
const rvoEquipo = rvoCheck ?  Number(rvoCheck.value): 0
const rvoExtra = rvoText ?  Number(rvoText.value): 0
const Extra = estraText ?  Number(estraText.value): 0
const premium1Checkp = document.querySelector('input[name=premium1p]:checked')
const premium2Checkp = document.querySelector('input[name=premium2p]:checked')
const premium3Checkp = document.querySelector('input[name=premium3p]:checked')
const premium4Checkp = document.querySelector('input[name=premium4p]:checked')
const premium5Checkp = document.querySelector('input[name=premium5p]:checked')
const premium6Checkp = document.querySelector('input[name=premium6p]:checked')
const premium1p = premium1Checkp ?  Number(premium1Checkp.value): 0
const premium2p = premium2Checkp ?  Number(premium2Checkp.value): 0
const premium3p = premium3Checkp ?  Number(premium3Checkp.value): 0
const premium4p = premium4Checkp ?  Number(premium4Checkp.value): 0
const premium5p = premium5Checkp ?  Number(premium5Checkp.value): 0
const premium6p = premium6Checkp ?  Number(premium6Checkp.value): 0
const ciclo = document.querySelector('input[name=ciclo]:checked')
const nciclo = ciclo ?  Number(ciclo.value): 0
var f=new Date();
var dia = f.getDate()
var mes = f.getMonth() + 1  

// var mes = 2;
// var dia = 10;
if ((mes == 1) || (mes == 3) || (mes == 5)  || (mes == 7)  || (mes == 8)  || (mes == 10)  || (mes == 12))  { 
    if (nciclo == 1)  {var proporciona = 32 - dia}
    if (nciclo == 4)  {var proporciona = 35 - dia}
    if (nciclo == 10)  {var proporciona = 41 - dia}
    if (nciclo == 16)  {var proporciona = 47 - dia}
    if (nciclo == 22)  {var proporciona = 53 - dia}
    if (nciclo == 0)  {var proporciona = 0}
    }else if ((mes == 4) || (mes == 6) || (mes == 9)  || (mes == 11)){ 
        if (nciclo == 1)  {var proporciona = 31 - dia}
        if (nciclo == 4)  {var proporciona = 34 - dia}
        if (nciclo == 10)  {var proporciona = 40 - dia}
        if (nciclo == 16)  {var proporciona = 46 - dia}
        if (nciclo == 22)  {var proporciona = 52 - dia}
        if (nciclo == 0)  {var proporciona = 0}
        }else if (mes == 2) { 
            if (nciclo == 1)  {var proporciona = 29 - dia}
            if (nciclo == 4)  {var proporciona = 32 - dia}
            if (nciclo == 10)  {var proporciona = 38 - dia}
            if (nciclo == 16)  {var proporciona = 44 - dia}
            if (nciclo == 22)  {var proporciona = 50 - dia}
            if (nciclo == 0)  {var proporciona = 0}
            }
    //Asigna la fecha actual
    var fechaActual = new Date();
    var fechaInicio = new Date();
    // var fechaActual = new Date('2/10/2022');
    //nueva fecha sumada
    fechaActual.setDate(fechaActual.getDate() + proporciona -1);
    fechaInicio = fechaInicio.getDate() + '/' + (fechaInicio.getMonth() + 1) + '/' + fechaInicio.getFullYear(); 
    //formato de salida para la fecha
    fechaHasta = fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();
    
    //suma de proporcional activacion premium
    const sumapremium = premium1p + premium2p + premium3p + premium4p + premium5p + premium6p;
    const proporcional = proporciona;
    const declara = nciclo;
    const pagapro = sumapremium * proporciona;

    if ((document.getElementById('c1').checked)||(document.getElementById('c4').checked)||(document.getElementById('c10').checked)||(document.getElementById('c16').checked)
    ||(document.getElementById('c22').checked)||(document.getElementById('tntp').checked)||(document.getElementById('tnthdp').checked)||(document.getElementById('foxp').checked)
    ||(document.getElementById('combop').checked)||(document.getElementById('starp').checked)||(document.getElementById('disneyp').checked))
    { var x = document.getElementsByClassName('ciclo');
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "inline";
    }}else { var x = document.getElementsByClassName('ciclo');
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }}

//suma total se le asigna a variable result
const result = plan + rvo + equipos + premium1 + premium2 + premium3 + premium4 + 
premium5 + premium6 + premium7 + premium8 + premium9 + premium10 + premium11 +
premium12 + premium13 + premium14 + premium15 + rvp1 + rvp2 + rvp3 + rvp4 + rvp5 + 
rvp6 + rvp7 + rvp8 + rvp9 + rvp10 + rvp11 + rvoEquipo - rvoExtra + Extra + recargo + tntflex + deco + cambio + recableado + pagapro;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('resultado').innerHTML = result.toLocaleString('en');
document.getElementById('dias').innerHTML = proporciona;
document.getElementById('proporcional').innerHTML = pagapro.toLocaleString('en');
document.getElementById('fechaFin').innerHTML = fechaHasta;
document.getElementById('fechaInicio').innerHTML = fechaInicio;

// obtener todos los input radio y checkbox
const rvo0Check = document.querySelector('input[name=rvo0]:checked')
const rvo01Check = document.querySelector('input[name=rvo01]:checked')
const rvo02Check = document.querySelector('input[name=rvo02]:checked')
const rvo03Check = document.querySelector('input[name=rvo03]:checked')
const rvo04Check = document.querySelector('input[name=rvo04]:checked')
const rvo05Check = document.querySelector('input[name=rvo05]:checked')
const rvo06Check = document.querySelector('input[name=rvo06]:checked')
const rvo07Check = document.querySelector('input[name=rvo07]:checked')
const rvo08Check = document.querySelector('input[name=rvo08]:checked')
const rvp0Check = document.querySelector('input[name=rvp0]:checked')
const rvp01Check = document.querySelector('input[name=rvp01]:checked') 
const rvp02Check = document.querySelector('input[name=rvp02]:checked') 
const rvp03Check = document.querySelector('input[name=rvp03]:checked') 
const rvp04Check = document.querySelector('input[name=rvp04]:checked') 
const rvp05Check = document.querySelector('input[name=rvp05]:checked') 
const rvp06Check = document.querySelector('input[name=rvp06]:checked') 
const rvp07Check = document.querySelector('input[name=rvp07]:checked') 
const facCheck = document.querySelector('input[name=fac]:checked')
const fac1Check = document.querySelector('input[name=fac1]:checked')
const fac2Check = document.querySelector('input[name=fac2]:checked')
const fac3Check = document.querySelector('input[name=fac3]:checked')
const fac4Check = document.querySelector('input[name=fac4]:checked')
const fac5Check = document.querySelector('input[name=fac5]:checked')
const fac6Check = document.querySelector('input[name=fac6]:checked')
const proCheck = document.querySelector('input[name=pro]:checked')
const pro1Check = document.querySelector('input[name=pro1]:checked')
const pro2Check = document.querySelector('input[name=pro2]:checked')
const pro3Check = document.querySelector('input[name=pro3]:checked')
const pro4Check = document.querySelector('input[name=pro4]:checked')
const pro5Check = document.querySelector('input[name=pro5]:checked')
const pro6Check = document.querySelector('input[name=pro6]:checked')
const pro7Check = document.querySelector('input[name=pro7]:checked')
const pro8Check = document.querySelector('input[name=pro8]:checked')
const pro9Check = document.querySelector('input[name=pro9]:checked')
const tstCheck = document.querySelector('input[name=tst]:checked')
const tst1Check = document.querySelector('input[name=tst1]:checked')
const tst2Check = document.querySelector('input[name=tst2]:checked')
const tst3Check = document.querySelector('input[name=tst3]:checked')
const tst4Check = document.querySelector('input[name=tst4]:checked')
const tst5Check = document.querySelector('input[name=tst5]:checked')
const tst6Check = document.querySelector('input[name=tst6]:checked')
const tst7Check = document.querySelector('input[name=tst7]:checked')
const tst8Check = document.querySelector('input[name=tst8]:checked')
const tst9Check = document.querySelector('input[name=tst9]:checked')
const tst10Check = document.querySelector('input[name=tst10]:checked')
const tst11Check = document.querySelector('input[name=tst11]:checked')
const cobCheck = document.querySelector('input[name=cob]:checked')
const cob1Check = document.querySelector('input[name=cob1]:checked')
const extCheck = document.querySelector('input[name=ext]:checked')
const ext1Check = document.querySelector('input[name=ext1]:checked')

// convertir los valores a String, o colocar un 0 si no elegieron algo//
const rvo0 = rvo0Check ?  rvo0Check.value: ""
const rvo01 = rvo01Check ?  rvo01Check.value: ""
const rvo02 = rvo02Check ?  rvo02Check.value: ""
const rvo03 = rvo03Check ?  rvo03Check.value: ""
const rvo04 = rvo04Check ?  rvo04Check.value: ""
const rvo05 = rvo05Check ?  rvo05Check.value: ""
const rvo06 = rvo06Check ?  rvo06Check.value: ""
const rvo07 = rvo07Check ?  rvo07Check.value: ""
const rvo08 = rvo08Check ?  rvo08Check.value: ""
const rvp0 = rvp0Check ?  rvp0Check.value: "" 
const rvp01 = rvp01Check ?  rvp01Check.value: ""
const rvp02 = rvp02Check ?  rvp02Check.value: ""
const rvp03 = rvp03Check ?  rvp03Check.value: ""
const rvp04 = rvp04Check ?  rvp04Check.value: ""
const rvp05 = rvp05Check ?  rvp05Check.value: ""
const rvp06 = rvp06Check ?  rvp06Check.value: ""
const rvp07 = rvp07Check ?  rvp07Check.value: ""
const fac = facCheck ?  facCheck.value: ""
const fac1 = fac1Check ?  fac1Check.value: ""
const fac2 = fac2Check ?  fac2Check.value: ""
const fac3 = fac3Check ?  fac3Check.value: ""
const fac4 = fac4Check ?  fac4Check.value: ""
const fac5 = fac5Check ?  fac5Check.value: ""
const fac6 = fac6Check ?  fac6Check.value: ""
const pro = proCheck ?  proCheck.value: ""
const pro1 = pro1Check ?  pro1Check.value: ""
const pro2 = pro2Check ?  pro2Check.value: ""
const pro3 = pro3Check ?  pro3Check.value: ""
const pro4 = pro4Check ?  pro4Check.value: ""
const pro5 = pro5Check ?  pro5Check.value: ""
const pro6 = pro6Check ?  pro6Check.value: ""
const pro7 = pro7Check ?  pro7Check.value: ""
const pro8 = pro8Check ?  pro8Check.value: ""
const pro9 = pro9Check ?  pro9Check.value: ""
const tst = tstCheck ?  tstCheck.value: ""
const tst1 = tst1Check ?  tst1Check.value: ""
const tst2 = tst2Check ?  tst2Check.value: ""
const tst3 = tst3Check ?  tst3Check.value: ""
const tst4 = tst4Check ?  tst4Check.value: ""
const tst5 = tst5Check ?  tst5Check.value: ""
const tst6 = tst6Check ?  tst6Check.value: ""
const tst7 = tst7Check ?  tst7Check.value: ""
const tst8 = tst8Check ?  tst8Check.value: ""
const tst9 = tst9Check ?  tst9Check.value: ""
const tst10 = tst10Check ?  tst10Check.value: ""
const tst11 = tst11Check ?  tst11Check.value: ""
const cob = cobCheck ?  cobCheck.value: ""
const cob1 = cob1Check ?  cob1Check.value: ""
const ext = extCheck ?  extCheck.value: ""
const ext1 = ext1Check ?  ext1Check.value: ""
if(document.getElementById('fac0').checked){ var fac0 = ",total a pagar $" + String(result.toLocaleString('en'))}else{ fac0 = ""}


//suma total se le asigna a variable result
const resultado = rvo0 + rvo01 + rvo02 + rvo03+ rvo04 + rvo05 + rvo06 + rvo07 + rvo08 + rvp0 + rvp01 + rvp02 + rvp03 + rvp04 + rvp05 + rvp06 +
rvp07 + fac + fac1 + fac2 + fac3 + fac4 + fac5 + fac6 + pro + pro1 +  pro8 + pro9 + tst + tst1 + tst2 + tst3 + tst4 + 
tst5 + tst6 + tst7 + tst8 + tst9 + tst10 + tst11 + cob + cob1 + ext + ext1 + pro7 + pro2 + pro3 + pro4 + pro5 + pro6 + fac0 ;

//se asigna valor de variable result a resultado para poder ser mostrado en pantalla
document.getElementById('texto').innerHTML = resultado;
}

        