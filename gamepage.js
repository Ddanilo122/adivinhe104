// geração do valor aleatório
var y= Math.floor(Math.random()* 10 + 1 ) 
var x = document.getElementById("guis").value;
var guess=0
function subm(){
    
    if(x==y)
    {
        alert("PARABENS!!!"+playername+",VOCE ACERTOU EM"+ guess+"TENTATIVAS(S)!");
        guess=1;
        
    }
     if(x > y){
        guess++
        alert("OPA,RESPOSTA ERRADA!! TENTE UM NUMERO MAIOR")
    }
     if(x < y){
        guess++
        alert("OPA,RESPOSTA ERRADA!! TENTE UM NUMERO MAIOR")
    }

}
function playAgain(){
    y=Math.floor(Math.random()* 10+1)
}
// contagem de tentativas
// até acerto    
  
// função para o número enviado pelo usuário
