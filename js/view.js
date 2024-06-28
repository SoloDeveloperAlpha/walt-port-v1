$(document).ready(function () {
  const vista = document.getElementById("view");
  const skill = document.querySelectorAll(".skill span");
  const cabecera = document.querySelector(".cabecera");
  const span_sobre_mi = document.querySelectorAll(".cont-sobre-mi p span");
  const root = document.documentElement;
  let fondo_normal = true;
  /*CAMBIAR COLOR FONDO*/
  vista.addEventListener("click", () => {
    if (fondo_normal) {
      root.style.setProperty("--ColPRI", "#222222");
      root.style.setProperty("--ColPRI_A1", "#876e00");
      root.style.setProperty("--ColPRI_B2", "#0a33ff");
      root.style.setProperty("--ColSEC", "#0a33ff");
      root.style.setProperty("--ColSEC_A1", "#00008e");
      root.style.setProperty("--ColSEC_B2", "#4942ff");
      root.style.setProperty("--TINTE_F", "#EEEEEE");
      root.style.setProperty("--TINTE_S", "#222222");
      cabecera.style.color = "#ffd60a";
      span_sobre_mi.forEach(function (sp) {
        sp.style.color = "#ffd60a";
      });
      vista.style.transform = "rotate(360deg)";
      vista.style.color = "#ffd60a";
      skill.forEach(function (skill) {
        skill.style.color = "var(--TINTE_F)";
      });
    } else {
      root.style.setProperty("--ColPRI", "#ffd60a");
      root.style.setProperty("--ColPRI_A1", "#876e00");
      root.style.setProperty("--ColPRI_B2", "#ffdc30");
      root.style.setProperty("--ColSEC", "#0a33ff");
      root.style.setProperty("--ColSEC_A1", "#00008e");
      root.style.setProperty("--ColSEC_B2", "#4942ff");
      root.style.setProperty("--TINTE_F", "#222222");
      root.style.setProperty("--TINTE_S", "#EEEEEE");
      vista.style.transform = "rotate(0deg)";
      vista.style.color = "#222222";
      cabecera.style.color = "var(--TINTE_F)";
      span_sobre_mi.forEach(function (sp) {
        sp.style.color = "var(--TINTE_F)";
      });
      skill.forEach(function (skill) {
        skill.style.color = "var(--TINTE_S)";
      });
    }

    fondo_normal = !fondo_normal;
  });
  /*=================================*/
  /*INSERTANDO ETIQUETAS POR CADA MEDIA*/
  window.addEventListener("load", etiquetaFantasma);
  window.addEventListener("resize", etiquetaFantasma);
  function etiquetaFantasma() {
    const etq_fants = document.querySelectorAll("#etq_fants");
    /*ANCHO DE VENTANA*/
    etq_fants.forEach(function (etq_fants) {
      const ancho = window.innerWidth;
      if (ancho <= 1023) {
        etq_fants.style.display = "block";
      } else {
        etq_fants.style.display = "none";
      }
    });
  }
});
