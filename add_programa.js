const fs = require("fs");
const path = require("path");

const JSON_PATH = path.join(__dirname, "data", "oxxo.json");

const raw = fs.readFileSync(JSON_PATH, "utf8");
const items = JSON.parse(raw);

function detectarPrograma(imagenPath) {
  if (!imagenPath) return null;

  if (imagenPath.includes("/abril_26/")) return "ABRIL_26";
  if (imagenPath.includes("/cc_burbuja_red/")) return "CC_BURBUJA_RED";
  if (imagenPath.includes("/cc_mix/")) return "CC_MIX";
  if (imagenPath.includes("/cc_red/")) return "CC_RED";

  return null;
}

const updated = items.map(item => {
  if (!item.programa) {
    const programa = detectarPrograma(item.imagen);
    if (programa) {
      item.programa = programa;
    }
  }
  return item;
});

fs.writeFileSync(
  JSON_PATH,
  JSON.stringify(updated, null, 2),
  "utf8"
);

console.log("✅ Campo 'programa' agregado correctamente");
