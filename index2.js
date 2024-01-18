function CalcularRanqueada(vitorias,derrotas){
    let saldo = vitorias - derrotas
    let nivel = ""
    if (saldo<=10){nivel="ferro"}
    else if(saldo>10 && saldo<21){nivel="bronze"}
    else if(saldo>20 && saldo<51){nivel="prata"}
    else if(saldo>50 && saldo<81){nivel="ouro"}
    else if(saldo>80 && saldo <91){nivel="diamante"}
    else if(saldo>90 && saldo <101){nivel="lendario"}
    else if(saldo>=101){nivel="imortal"}
    console.log("O herói tem saldo de",saldo, "vitórias e está no nível", nivel)
  }

  
  CalcularRanqueada(57,3)
  
