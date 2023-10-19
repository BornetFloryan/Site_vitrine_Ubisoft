const ctx1 = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [
            {
                label: "C.A d'Ubisoft (en millions d'€)",
                data: [200, 250, 230, 390, 428, 500, 520, 530, 680, 920, 1050, 850, 1020, 1030, 1250, 1000, 1450, 1400, 1450, 1750, 1850, 1600],
                borderColor: 'rgba(80, 130, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.5,
            },
        ],
    },
    options: {
        animation: {
            duration: 1000, // Durée de l'animation en millisecondes
        },
    },
});




const ctx2 = document.getElementById('myChart2').getContext('2d');

const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Console en %', 'PC en %', 'Mobile en %', 'Autres en %'],
        datasets: [{
            data: [60, 9, 10, 26],
            backgroundColor: ['#9b1e1f', '#F4A261', '#E9C46A', '#cfd2dc'],
        }],
    },
    options: {
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        elements: {
            arc: {
                borderWidth: 2,
            },
        },
    },
});