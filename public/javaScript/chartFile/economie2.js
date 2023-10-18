const data = [60, 9, 10, 26 ];
const labels = ['Console', 'PC', 'Mobile', 'Autres'];

const canvas = document.getElementById('myChart2');
const ctx = canvas.getContext('2d');

const config = {
  type: 'pie', // Type de graphique (camembert)
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: ['#9b1e1f', '#F4A261', '#E9C46A', '#cfd2dc'],
    }],
  },
  options: {
    animation: {
      animateRotate: true, // Animation de rotation (camembert animé)
      animateScale: true, // Animation d'échelle
    },
    elements: {
      arc: {
        borderWidth: 0, // Pas de bordures
      },
    },
  },
};

const myChart2 = new Chart(ctx, config);