//contador genero
var contH = 0;
var contM = 0;

//contador faixa etaria
var contbebe = 0;
var contcrianca = 0;
var contadolecente = 0;
var contadulto = 0;
var contidoso = 0;

//contador cor
var contbranco = 0;
var contamarelo = 0;
var contnegro = 0;
var contindio = 0;


async function myFunction() {
    //variavel e codigo genero
    var H = document.getElementById("myRadio").checked;
    var M = document.getElementById("myRadio2").checked;
    if(H){
        contH++;
    }else if(M) {
        contM++;
    }  

  

    //variavel e codigo faixa etaria
    var bebe = document.getElementById("bebe").checked;
    var crianca = document.getElementById("crianca").checked;
    var adolecente = document.getElementById("adolecente").checked;
    var adulto = document.getElementById("adulto").checked;
    var idoso = document.getElementById("idoso").checked;
    
    if(bebe){
        contbebe++;
    }else if(crianca) {
        contcrianca++;
    }else if(adolecente) {
        contadolecente++;
    }else if(adulto) {
        contadulto++;
    }else if(idoso) {
        contidoso++;
    };
  
    //variavel e codigo raça
    var branco = document.getElementById("branco").selected;
    var amarelo = document.getElementById("amarelo").selected;
    var negro = document.getElementById("negro").selected;
    var indio = document.getElementById("indio").selected;
	
    if(branco){
        contbranco++;
    }else if(amarelo) {
        contamarelo++;
    }else if(negro) {
        contnegro++;
    }else if(indio) {
        contindio++;
    };
}

function Grafico(){
    
    var sexo = [contH, contM]
    alert(sexo)

    // Seus dados de gráfico aqui (exemplo)
    var data = {
        labels: ["Homens", "Mulheres"],
        datasets: [{
        data: sexo,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };

    // Configuração do gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Criar gráfico de pizza

    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    })
//------------------------------------------------------------------------//
//faixa etinia 

    var idade = [
        contbebe, 
        contcrianca,
        contadolecente,
        contadulto,
        contidoso]

    var data = {
        labels: ["Bebê", "Criança", "Adolecente", "Adulto", "Idoso"],
        datasets: [{
        data: idade,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };

    // Configuração do gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Criar gráfico de pizza
    var ctx = document.getElementById('pieChart2').getContext('2d');
    var pieChart2 = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    })
//----------------------------------------------------------------------//    
// raca

    var raca = [
        contbranco, 
        contamarelo,
        contnegro,
        contindio]
    alert(raca)
   
    
    var data = {
        labels: ["branco", "amarelo", "negro", "indio"],
        datasets: [{
        data: raca,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };

    // Configuração do gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Criar gráfico de pizza
    var ctx = document.getElementById('pieChart3').getContext('2d');
    var pieChart3 = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    })
}
