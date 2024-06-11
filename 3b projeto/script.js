// Dados para o gráfico
const data = {
    labels: ['Informática', 'Enfermagem', 'Comércio', 'Administração'],
    datasets: [{
      label: 'Quantidade de Alunos Inscritos',
      backgroundColor: ['blue', 'red', 'orange', 'purple'],
      borderColor: 'rgba(0, 0, 0, 0.2)',
      data: [50, 30, 40, 60],
    }]
  };
  
  // Configurações do gráfico
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  
  // Obter o elemento do gráfico
  const chartElement = document.getElementById('chart');
  
  // Criar o gráfico usando Chart.js
  const myChart = new Chart(chartElement, config);
  