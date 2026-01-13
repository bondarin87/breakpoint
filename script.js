// JS mínimo por ahora (estructura lista para crecer)
console.log("BREAKPOINT listo.");
// ===== BREAKPOINT CALCULADORA =====
(() => {

  const openBtn = document.getElementById("bpOpenCalc");
  const closeBtn = document.getElementById("bpCloseCalc");
  const overlay = document.getElementById("bpCalcOverlay");

  if (!openBtn || !overlay) return;

  openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  const precios = {
    pared: 50,
    piso: 40,
    demol: 2300,
    regatas: 45,
    saco: 8
  };

  const inputs = [
    "bpPared",
    "bpPiso",
    "bpDemolicion",
    "bpRegatas"
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", calcular);
  });

 function calcular() {
  const pared = +document.getElementById("bpPared").value || 0;
  const piso = +document.getElementById("bpPiso").value || 0;
  const demol = +document.getElementById("bpDemolicion").value || 0;
  const regatas = +document.getElementById("bpRegatas").value || 0;

  // PRECIOS
  const precioServicios =
    pared * 50 +
    piso * 40 +
    demol * 2300 +
    regatas * 45;

  // SACOS (REGLAS REALES)
  const sacosPared = pared * 2;
  const sacosPiso = piso * 2;
  const sacosDemol = demol * 50;
  const sacosRegatas = Math.ceil(regatas / 7);

  const totalSacos =
    sacosPared +
    sacosPiso +
    sacosDemol +
    sacosRegatas;

  const costoDesmonte = totalSacos * 8;

  const total = precioServicios + costoDesmonte;

  document.getElementById("bpSacos").textContent = totalSacos;
  document.getElementById("bpTotal").textContent = `S/ ${total.toFixed(0)}`;
}


})();
