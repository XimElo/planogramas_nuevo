# Planogramas nuevo
# Catálogo de Exhibidores — Guía de Actualización

Este catálogo permite consultar los exhibidores de OXXO, 7-Eleven y CCK.
No requiere saber programación. Solo sigue estos pasos:

---

## Qué SÍ se puede tocar
- Carpeta `img/`
- Archivos dentro de `data/`

## Qué NO se debe tocar
- index.html
- styles.css
- robots.txt

---

## Cómo agregar un exhibidor nuevo

### 1. Convertir PDF a JPG
Nombre del archivo:
ABR26_OXXO_4_CHAR_HEADER.jpg

---

### 2. Subir la imagen
- Ir a `img/oxxo/` (o la tienda correcta)
- Subir el archivo

---

### 3. Editar el JSON
- Abrir `data/oxxo.json`
- Copiar el último bloque
- Pegar debajo
- Cambiar los valores:

```json
{
  "nombre": "ABR26 OXXO 4 CHAR HEADER",
  "codigo": "ABR26_OXXO_4_CHAR_HEADER",
  "imagen": "img/oxxo/ABR26_OXXO_4_CHAR_HEADER.jpg"
}




