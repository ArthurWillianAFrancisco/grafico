//Variavel do genero
var contH = 0;
var contM = 0;

//variavel da faixa etaria
var contbebe = 0;
var contcrianca = 0;
var contadolecente = 0;
var contadulto = 0;
var contidoso = 0;
function myFunction() {
    var H = document.getElementById("myRadio").checked;
    var M = document.getElementById("myRadio2").checked;
    if(H){
        contH++;
    }else if(M) {
        contM++;
    }  

   
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
    } 
}


function Grafico(){
    
    var sexo = [contH, contM]
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
//----------------------------------------------------------------//
//faixa etaária 

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
}