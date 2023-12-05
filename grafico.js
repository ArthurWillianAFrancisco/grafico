var contH = 0;
var contM = 0;
var contbebe = 0;
var contcrianca = 0;
var contadolecente = 0;
var contadulto = 0;
var contidoso = 0;
var contbranco = 0;
var contamarelo = 0;
var contnegro = 0;
var contindio = 0;

var pieChart;
var pieChart2;
var pieChart3;

function myFunction2() {
    // ... (seu código para contar)

    // Chama a função para atualizar os gráficos
    atualizaGraficos();
}

function atualizaGraficos() {
    // Destrói os gráficos existentes se já foram criados
    if (pieChart) {
        pieChart.destroy();
    }
    if (pieChart2) {
        pieChart2.destroy();
    }
    if (pieChart3) {
        pieChart3.destroy();
    }

    // Gera os novos dados para os gráficos
    var sexo = [contH, contM];
    var idade = [contbebe, contcrianca, contadolecente, contadulto, contidoso];
    var raca = [contbranco, contamarelo, contnegro, contindio];

    // Configuração do gráfico
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Criação de gráficos
    var ctx1 = document.getElementById('pieChart').getContext('2d');
    pieChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ["Homens", "Mulheres"],
            datasets: [{
                data: sexo,
                backgroundColor: ["#FF6384", "#36A2EB"]
            }]
        },
        options: options
    });

    var ctx2 = document.getElementById('pieChart2').getContext('2d');
    pieChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ["Bebê", "Criança", "Adolescente", "Adulto", "Idoso"],
            datasets: [{
                data: idade,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#33FF57"]
            }]
        },
        options: options
    });

    var ctx3 = document.getElementById('pieChart3').getContext('2d');
    pieChart3 = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ["Branco", "Amarelo", "Negro", "Indio"],
            datasets: [{
                data: raca,
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733"]
            }]
        },
        options: options
    });
}
