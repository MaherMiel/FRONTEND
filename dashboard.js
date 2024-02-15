// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
        name: 'OJT Trainees',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 235,
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal'],
      title: {
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        show: true,
        color: '#55596e',
      },
      axisTicks: {
        show: true,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
  
  // AREA CHART
  const areaChartOptions = {
    series: [
      {
        name: 'Batangas',
        data: [15, 10, 9, 15, 24, 19, 10],
      },
      {
        name: 'Cavite',
        data: [11, 12, 5, 24, 16, 12, 18],
      },
      {
        name: 'Laguna',
        data: [12, 13, 6, 24, 5, 18, 16],
      },
      {
        name: 'Quezon',
        data: [20, 17, 7, 16, 13, 15, 19],
      },
      {
        name: 'Rizal',
        data: [9, 17, 8, 32, 14, 23, 20],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 235,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Number of OJT per Province',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  function filterByProvince(areaChartOptions, provinceName) {
    const filteredSeries = areaChartOptions.series.filter((item) => item.name.toLowerCase() === provinceName.toLowerCase());
    return { ...areaChartOptions, series: filteredSeries };
  }
  
  // Example usage:
  const filteredOptions = filterByProvince(areaChartOptions, 'Batangas');
  console.log(filteredOptions);
  

  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
// widget
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

// Function to create and render a pie chart
function createPieChart(containerId, actual, target) {
  var percentage = ((actual / target) * 100).toFixed(2); // Calculate percentage
  
  // Define colors for the two segments of the pie chart
  var colors = ['#FF5733', '#3366FF'];

  var options = {
      chart: {
          type: 'donut',
          background: 'transparent',
          height: 180,
      },
      series: [actual, target - actual], // Actual vs Remaining
      
      labels: ['Actual', 'Remaining'], // Modify the labels here
      
      tooltip: {
          enabled: true,
          formatter: function (val) {
              return `${val.seriesName}: ${val.dataPointIndex === 0 ? actual : target - actual} students (${percentage}%)`;
          }
      },
      legend: {
          position: 'bottom', // Set the legend position to bottom
          labels: {
              colors: ['#ffffff', '#ffffff'] // Set the color of the font to white
          }
      },
      colors: colors, // Set the colors for each side of the pie chart
      plotOptions: {
          donut: {
              expandOnClick: true,
          }
      }
  };

  // Initialize the chart with options
  var chart = new ApexCharts(document.querySelector(`#${containerId}`), options);

  // Render the chart
  chart.render();
}

// Create and render pie charts for each province
createPieChart('chart-1', 8, 12); // Example data for province 1
createPieChart('chart-2', 7, 12); // Example data for province 2
createPieChart('chart-3', 6, 12); // Example data for province 3
createPieChart('chart-4', 5, 12); // Example data for province 4
createPieChart('chart-5', 4, 12); // Example data for province 5
