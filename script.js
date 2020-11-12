function carregar(){
  var ini = document.getElementById('txtNumIni')
  var fim = document.getElementById('txtNumFim')
  var passo = document.getElementById('txtPasso')
  var res = document.getElementById('resultado')
  
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossivel contar!'
  } else {
    res.innerHTML = 'Contando: <br>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0){
      alert('Passo invalido! Considerando PASSO 1')      
      p = 1
      passo.value = 1
    }
    if (i < f){
      for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }else{
      for(let c = i; c >= f; c-= p ){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } 
    res.innerHTML += ` \u{1F3C1}`

  }
}