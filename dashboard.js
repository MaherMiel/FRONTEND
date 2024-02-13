// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
<<<<<<< HEAD
        name: 'OJT Trainees',
=======
        name: 'Products',
>>>>>>> db21042ccfa82447da16d047d7e4660ee8b53dfe
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
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
<<<<<<< HEAD
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
=======
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41],
>>>>>>> db21042ccfa82447da16d047d7e4660ee8b53dfe
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
<<<<<<< HEAD
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
=======
    colors: ['#00ab57', '#d50000'],
>>>>>>> db21042ccfa82447da16d047d7e4660ee8b53dfe
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
<<<<<<< HEAD
          text: 'Number of OJT per Province',
=======
          text: 'Purchase Orders',
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
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
>>>>>>> db21042ccfa82447da16d047d7e4660ee8b53dfe
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
  
<<<<<<< HEAD
  function filterByProvince(areaChartOptions, provinceName) {
    const filteredSeries = areaChartOptions.series.filter((item) => item.name.toLowerCase() === provinceName.toLowerCase());
    return { ...areaChartOptions, series: filteredSeries };
  }
  
  // Example usage:
  const filteredOptions = filterByProvince(areaChartOptions, 'Batangas');
  console.log(filteredOptions);
  

=======
>>>>>>> db21042ccfa82447da16d047d7e4660ee8b53dfe
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  