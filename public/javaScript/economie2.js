const data2 = [60, 9, 10, 26 ];
const labels = ['Console en %', 'PC en %', 'Mobile en %', 'Autres en %'];

const canvas = document.getElementById('myChart2');
const ctx2 = canvas.getContext('2d');

const config2 = {
  type: 'pie', // Type de graphique (camembert)
  data: {
    labels: labels,
    datasets: [{
      data: data2,
      backgroundColor: ['#9b1e1f', '#F4A261', '#E9C46A', '#cfd2dc'],
    }],
  },
  options: {
    animation: {
      animateRotate: true, // Animation de rotation (camembert animé)
      animateScale: true, // Animation d'échelle
      duration: 6000, // Durée de l'animation en millisecondes
    },
    elements: {
      arc: {
        borderWidth: 0, // Pas de bordures
      },
    },
  },
};


const myChart2 = new Chart(ctx2, config2);
