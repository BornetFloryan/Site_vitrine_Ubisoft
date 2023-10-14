  const data = {
    labels: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
        {
            label: "C.A d'Ubisoft (en millions d'€)" ,
            data: [200, 250, 230, 390, 428, 500, 520, 530, 680, 920, 1050, 850, 1020, 1030, 1250, 1000, 1450, 1400, 1450, 1750, 1850, 1600],
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


