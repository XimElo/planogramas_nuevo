# planogramas_nuevo
# Catálogo de Exhibidores — Guía de Actualización

Este catálogo permite consultar los exhibidores de OXXO, 7-Eleven y CCK.

No requiere saber programación. Solo sigue estos pasos:

---

## 1. Convertir PDF → PNG/JPG


---

## 2. Subir imágenes
Ir a la carpeta correspondiente:

/img/oxxo/
/img/711/
/img/cck/

Clic en **Upload files** y subir las imágenes nuevas.

---

## 3. Editar el JSON

Ejemplo:

```json
{
  "nombre": "Exhibidor Cabecera 5",
  "codigo": "OXXO_5_HEADER",
  "imagen": "img/oxxo/OXXO_5_HEADER.png"
}

Agregar al archivo de la tienda:

data/oxxo.json
data/711.json
data/cck.json

Guardar

---


