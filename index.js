const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");
const ctx3 = document.getElementById("myChart3");
const ctx4 = document.getElementById("myChart4");
const ctx5 = document.getElementById("myChart5");
const ctx6 = document.getElementById("myChart6");
const ctx7 = document.getElementById("myChart7");
const ctx8 = document.getElementById("myChart8");
const ctx9 = document.getElementById("myChart9");
const ctx10 = document.getElementById("myChart10");
const ctx11 = document.getElementById("myChart11");
const ctx12 = document.getElementById("myChart12");

const socket = io("http://localhost:5000/");
// socket.on("channel2", (data) => {
//   // console.log(data);
//   myChart.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);

//       dataset.data = oldData.concat(data);
//       myChart.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel3", (data) => {
//   // console.log(data);
//   myChart2.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart2.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart2.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel4", (data) => {
//   // console.log(data);
//   myChart3.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart3.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart3.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel5", (data) => {
//   // console.log(data);
//   myChart4.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart4.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart4.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel6", (data) => {
//   // console.log(data);
//   myChart5.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart5.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart5.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel7", (data) => {
//   // console.log(data);
//   myChart6.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart6.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart6.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel8", (data) => {
//   // console.log(data);
//   myChart7.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart7.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart7.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel9", (data) => {
//   // console.log(data);
//   myChart8.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart8.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart8.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel10", (data) => {
//   // console.log(data);
//   myChart9.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart9.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart9.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel11", (data) => {
//   // console.log(data);
//   myChart10.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart10.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart10.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel12", (data) => {
//   // console.log(data);
//   myChart11.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart11.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart11.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
// socket.on("channel1", (data) => {
//   // console.log(data);
//   myChart12.data.datasets.forEach((dataset) => {
//     if (dataset.data.length >= 500) {
//       // console.log("incoming data length", data.length);
//       const previousData = dataset.data;
//       const oldData = previousData.slice(data.length, 501);
//       dataset.data = oldData.concat(data);
//       myChart12.update("quiet");
//     } else {
//       dataset.data = dataset.data.concat(data);
//       myChart12.update("quiet");
//     }

//     //   dataset.data = data;
//   });
// });
socket.on("channel1", (data) => {
  // console.log(data);
  const {smpleNumber, time, channel1, channel2, channel3, channel4, channel5,  channel6,  channel7,  channel8,  channel9, channel10,  channel11,  channel12 } = data;
  // console.log(smpleNumber, time, channel1, channel2, channel3, channel4, channel5,  channel6,  channel7,  channel8,  channel9, channel10,  channel11,  channel12 );
  myChart.data.datasets.forEach((dataset) => {
        if (dataset.data.length >= 500) {
          // console.log("incoming data length", data.length);
          const previousData = dataset.data;
          const oldData = previousData.slice(channel1.length, 501);
          dataset.data = oldData.concat(channel1);
          myChart.update("quiet");
        } else {
          dataset.data = dataset.data.concat(channel1);
          myChart.update("quiet");
        }
});
});

const labels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
  114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
  129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143,
  144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
  159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
  174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
  189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
  204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
  219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
  234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248,
  249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263,
  264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
  279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293,
  294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308,
  309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323,
  324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338,
  339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353,
  354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368,
  369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383,
  384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398,
  399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413,
  414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428,
  429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443,
  444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458,
  459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473,
  474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488,
  489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500,
];

const config = {
  type: "line",
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 1",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.01,
        pointRadius: 0,
      },
    ],
  },
};
const config2 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 2",
        data: [],
        fill: false,
        borderColor: "rgb(175, 0,0)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
    lineAtIndex: 2,
  },
  
};

const config3 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    },
   },
  data: {
    // label of length 500
    labels: labels,

    datasets: [
      {
        label: "Channel 3",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
    lineAtIndex: 2,
  },
};
const config4 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 4",
        data: [],
        fill: false,
        borderColor: "rgb(75, 72, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config5 = {
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  type: "line",
  data: {
    // label of length 500
    labels: labels,

    datasets: [
      {
        label: "Channel 5",
        data: [],
        fill: false,
        borderColor: "rgb(105, 72, 27)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config6 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 6",
        data: [],
        fill: false,
        borderColor: "rgb(175, 72, 92)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config7 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 7",
        data: [],
        fill: false,
        borderColor: "#FFF",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config8 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 8",
        data: [],
        fill: false,
        borderColor: "rgb(15, 172, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config9 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},

  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 9",
        data: [],
        fill: false,
        borderColor: "rgb(5, 172, 202)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config10 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 10",
        data: [],
        fill: false,
        borderColor: "rgb(175, 32, 52)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config11 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 11",
        data: [],
        fill: false,
        borderColor: "rgb(175, 172, 192)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};
const config12 = {
  type: "line",
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    }},
  data: {
    // label of length 500
    labels: labels,
    datasets: [
      {
        label: "Channel 12",
        data: [],
        fill: false,
        borderColor: "rgb(50, 172,92)",
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  },
};

const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx2, config2);
const myChart3 = new Chart(ctx3, config3);
const myChart4 = new Chart(ctx4, config4);
const myChart5 = new Chart(ctx5, config5);
const myChart6 = new Chart(ctx6, config6);
const myChart7 = new Chart(ctx7, config7);
const myChart8 = new Chart(ctx8, config8);
const myChart9 = new Chart(ctx9, config9);
const myChart10 = new Chart(ctx10, config10);
const myChart11 = new Chart(ctx11, config11);
const myChart12 = new Chart(ctx12, config12);
