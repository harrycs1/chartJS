import Chart from 'chart.js/auto'

async function barChart() {
  const flatBenchpressData = [
    { date: '2023-09-28T16:50:57.965Z', weight: 55, reps: 10 },
    { date: '2023-10-01T16:50:57.965Z', weight: 57.5, reps: 12 },
    { date: '2023-10-03T16:50:57.965Z', weight: 57.5, reps: 8 },
    { date: '2023-10-06T16:50:57.965Z', weight: 60, reps: 10 },
    { date: '2023-10-10T16:50:57.965Z', weight: 60, reps: 12 },
    { date: '2023-10-16T16:50:57.965Z', weight: 62.5, reps: 8 },
    { date: '2023-10-17T16:50:57.965Z', weight: 62.5, reps: 10 },
    { date: '2023-10-20T16:50:57.965Z', weight: 65, reps: 10 },
    { date: '2023-10-23T16:50:57.965Z', weight: 65, reps: 12 },
    { date: '2023-10-26T16:50:57.965Z', weight: 67.5, reps: 8 },
    { date: '2023-10-29T16:50:57.965Z', weight: 67.5, reps: 10 },
    { date: '2023-11-01T16:50:57.965Z', weight: 67.5, reps: 12 },
    { date: '2023-11-06T16:50:57.965Z', weight: 70, reps: 8 },
    { date: '2023-11-10T16:50:57.965Z', weight: 70, reps: 10 },
  ];

  new Chart(
    document.getElementById('flatBenchpress'),
    {
      type: 'line',
      data: {
        labels: flatBenchpressData.map(row => row.date.slice(0,10)),
        datasets: [
          {
            label: 'Weight',
            data: flatBenchpressData.map(row => row.weight),
            yAxisID: 'y',
          },
          {
            label: 'Reps',
            data: flatBenchpressData.map(row => row.reps),
            yAxisID: 'y1',
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Line Chart - Multi Axis'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
    
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    }
  );
}

barChart();
