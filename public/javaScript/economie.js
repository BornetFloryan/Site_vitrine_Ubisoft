 const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
        {
            label: 'Exemple de Courbe',
            data: [10, 20, 15, 30, 25, 35, 30, 40, 45, 50],
            borderColor: 'rgba(80, 130, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.5,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        animation: {
            duration: 1000, // Durée de l'animation en millisecondes
        },
    },
};

// Créez un nouveau graphique en utilisant Chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);


