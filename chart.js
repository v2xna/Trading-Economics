const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "",
      "Oct 2022",
      "",
      "",
      "Jan 2023",
      "",
      "",
      "Apr 2023",
      "",
      "",
      "Jul 2023",
      "",
    ],
    datasets: [
      {
        label: "",
        data: [6.3, 5.1, 4.1, 3.9, 2.7, 1.4, -0.2, -0.6, -0.7, -0.9, -0.9],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        position: "right",
        beginAtZero: true,
        min: -2,
        max: 8,
        ticks: {
          stepSize: 2,
          callback: function (value) {
            return value.toFixed(2) + "%";
          },
        },
      },
    },
  },
});
