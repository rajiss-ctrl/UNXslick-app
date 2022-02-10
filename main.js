const ctx = document.getElementById('myChart').getContext("2d");

const labels =[
"2020",
"2010"
]

// the point on the graph
const data ={
    labels,
    datasets:[
        {
        data:[211, 326,165, 350,420,370,500,375,415],
        label:"rajis chart",
         fill:true,
        backgroundColor:"lightblue",
    },
],
};

const config ={
    type: 'line',
    data: data,
    options:{
        responsive: true,
    },
}

const myChart = new Chart(ctx, config);