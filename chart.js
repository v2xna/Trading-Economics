const ctx = document.getElementById("myChart");
let dataValues = [6.3, 5.1, 4.1, 3.9, 2.7, 1.4, -0.2, -0.6, -0.7, -0.9, -0.9];

let backgroundColors = dataValues.map((value) =>
  value >= 0 ? "#0564b1" : "#eedb89"
);

let anchors = dataValues.map((value) => (value >= 0 ? "end" : "start"));
let aligns = dataValues.map((value) => (value >= 0 ? "top" : "bottom"));

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
        data: dataValues,
        borderWidth: 1,
        backgroundColor: backgroundColors,
        datalabels: {
          anchor: anchors,
          align: aligns,
        },
      },
    ],
  },
  plugins: [ChartDataLabels],
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
            return value.toFixed(2) + " %";
          },
        },
      },
    },
  },
});
