/* DARK MODE */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

});

/* CLOCK */

function updateClock(){

  const clock = document.getElementById("clock");

  const now = new Date();

  const hours = String(now.getHours()).padStart(2,"0");

  const minutes = String(now.getMinutes()).padStart(2,"0");

  clock.innerHTML = `${hours}:${minutes}`;
}

setInterval(updateClock,1000);

updateClock();

/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {

  sidebar.classList.toggle("active");

});

/* LINE CHART */

const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx, {

  type:"line",

  data:{

    labels:[
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun"
    ],

    datasets:[{

      label:"Produção",

      data:[12,19,15,28,35,48],

      borderColor:"#0ea5a4",

      backgroundColor:"rgba(14,165,164,0.2)",

      fill:true,

      tension:0.4
    }]
  },

  options:{

    responsive:true,

    maintainAspectRatio:false
  }

});

/* PIE CHART */

const pieCtx = document.getElementById("pieChart");

new Chart(pieCtx, {

  type:"doughnut",

  data:{

    labels:[
      "Pesquisa",
      "Produção",
      "Vendas"
    ],

    datasets:[{

      data:[35,45,20],

      backgroundColor:[
        "#0ea5a4",
        "#0f3b8c",
        "#22c55e"
      ]
    }]
  },

  options:{

    responsive:true,

    maintainAspectRatio:false
  }

});