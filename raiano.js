
console.log("mulher deu certo ?")



var pessoasAptas = [];
var atende = 0;
var maisVelho = "";
var maiorIdade = 0;
var pessoasNaoAptas = [];
var naoAtende = 0;
var i = 0;
function contabilizar() {
  var pessoa = "";
  var idade = 0;
  pessoa = document.getElementById("pessoa").value;
  idade = parseInt(document.getElementById("idade").value);
  if (pessoa != "" && idade >= 18) {
    if (idade > 100) {
      analiseNao.innerHTML = `${"Pessoa idosa demais. Não está apto."}`;
      analiseSim.innerHTML = `${""}`;
      pessoasNaoAptas[naoAtende] = pessoa;
      naoAtende++;
      i++;
      document.getElementById("pessoa").value = "";
      document.getElementById("idade").value = "";
      document.getElementById("pessoa").focus();
    } else {
      if (idade > maiorIdade) {
        pessoasAptas[atende] = pessoa;
        maisVelho = pessoa;
        maiorIdade = idade;
        atende++;
        i++;
        analiseSim.innerHTML = `${"Análise realizada com sucesso."}`;
        analiseNao.innerHTML = `${""}`;
        oldPerson.innerHTML = `${
          "A pessoa mais velha a ser analisada foi " +
          maisVelho +
          " com " +
          maiorIdade +
          " anos."
        }`;
        document.getElementById("pessoa").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("pessoa").focus();
      } else {
        analiseSim.innerHTML = `${"Análise realizada com sucesso."}`;
        analiseNao.innerHTML = `${""}`;
        oldPerson.innerHTML = `${
          "A pessoa mais velha a ser analisada foi " +
          maisVelho +
          " com " +
          maiorIdade +
          " anos."
        }`;
        pessoasAptas[atende] = pessoa;
        atende++;
        i++;
        document.getElementById("pessoa").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("pessoa").focus();
      }
    }
  } else if (idade < 18) {
    if (pessoa != "" && idade > 0) {
      analiseNao.innerHTML = `${"Pessoa de menor. Não está apto."}`;
      analiseSim.innerHTML = `${""}`;
      pessoasNaoAptas[naoAtende] = pessoa;
      naoAtende++;
      i++;
      document.getElementById("pessoa").value = "";
      document.getElementById("idade").value = "";
      document.getElementById("pessoa").focus();
    } else if (pessoa != "" && idade <= 0) {
      analiseNao.innerHTML = `${"Idade Inválida. Análise não realizada"}`;
      analiseSim.innerHTML = `${""}`;
      document.getElementById("pessoa").value = "";
      document.getElementById("idade").value = "";
      document.getElementById("pessoa").focus();
    }
  } else if (pessoa == "" || idade == "") {
    analiseNao.innerHTML = `${"Informe os dados da pessoa para que a análise seja feita."}`;
    analiseSim.innerHTML = `${""}`;
    document.getElementById("pessoa").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("pessoa").focus();
  }
  qtd1.innerHTML = `${atende}`;
  qtd2.innerHTML = `${naoAtende}`;
  totalCadastros.innerHTML = `${i}`;
}
function results() {
  var j = 0;
  var m = 0;
  aprovados.innerHTML = " Aprovadas: ";
  reprovados.innerHTML = " ";
  while (j <= atende - 1) {
    aprovados.innerHTML =
      aprovados.innerHTML + "<br>" + String(pessoasAptas[j]);
    // document.getElementById('produtos').value='';
    j++;
  }
  while (m <= naoAtende - 1) {
    reprovados.innerHTML =
      reprovados.innerHTML + "<br>" + String(pessoasNaoAptas[m]);
    // document.getElementById('produtos').value='';
    m++;
  }
  if (atende > naoAtende) {
    if (naoAtende == 0) {
      listaResultados.innerHTML = `${"Resultados: <br>lista de aptos é maior que a de inaptos para tiar ca caterira; <br>Não há pessoas  inaptas."}`;
    } else {
      listaResultados.innerHTML = `${"Resultado: <br>lista de aptos é maior que a de inaptos para tiar ca caterira."}`;
    }
  } else if (atende < naoAtende) {
    if (atende == 0) {
      listaResultados.innerHTML = `${"Resultados: <br> lista de inaptos é maior que a de aptos a tiar ca caterira ; <br>Não há aptas."}`;
    } else {
      listaResultados.innerHTML = `${"Resultado: <br> lista de inaptos é maior que a de aptos a tiar ca caterira."}`;
    }
  } else if (atende == naoAtende) {
    if (atende != 0 && naoAtende != 0) {
      listaResultados.innerHTML = `${"Resultado: <br>Listas com a mesma quantidade de análises"}`;
    } else {
      listaResultados.innerHTML = `${"Resultado: <br>Listas vazias"}`;
    }
  }
}