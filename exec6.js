var adicionar = window.document.getElementById("adicionar");
adicionar.addEventListener("click", Executar);
var finalizar = window.document.getElementById("finalizar");
finalizar.addEventListener("click",Finalizar);
var result = window.document.getElementById("resultado");

var vetor = [];

function Executar() {
    result.innerHTML = "";
    var valor = window.document.getElementById("valor");
    var select = window.document.getElementById("select1");
    var check ="f";
    if(valor.value.length == 0)
    {
      window.alert("Por favor preencha o campo de número !!");
    }
    else 
    {
        valor = Number(valor.value);
        if(valor <1 || valor > 100 )
        {
          window.alert("Por favor insira números apenas entre 1 a 100 !");
        }
        else
        {
            for(var pos in vetor)
            {
                if(vetor[pos]==valor)
                {
                  check="v"
                }
                else
                {
                    
                }
            }
            if(check==="v")
            {
              window.alert("Número ja inserido");
            }
            else
            {
              vetor.push(valor);
              var option = window.document.createElement("option");
              option.innerHTML = `Valor ${valor} adicionado.`;
              select.appendChild(option);
            }
        }
    }
}
function Finalizar()
{
    var i = 0;
    var soma = 0;
    var media = 0;
    for(var pos in vetor)
    {
        soma = vetor[i] + soma;
        i++;
    }
    media = i ;
    media = soma/media;
    vetor.sort();
    result.innerHTML = `Ao todo, temos ${i} números cadastrados<br/><br/>`;
    i--;
    result.innerHTML += `O maior valor informado foi ${vetor[i]}<br/><br/>`;
    result.innerHTML += `O menor valor informado foi ${vetor[0]}<br/><br/>`;
    result.innerHTML += `Somando todos os valores,temos ${soma}<br/><br/>`;
    result.innerHTML += `A média dos valores digitados é ${media}<br/><br/>`;
}