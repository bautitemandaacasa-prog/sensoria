# Sensoria — sitio web

Emprendimiento de cuellitos de descanso (Junior Achievement + Escuelas Verdes).
Next.js 14 + Tailwind (igual que los otros proyectos).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre en http://localhost:3000

## Qué editar (todo en 2 archivos)

### 1. El logo
Guardá el ícono del logo en `public/images/logo.png` (ideal: PNG cuadrado,
recortado ajustado, fondo transparente). Nada más: aparece solo en el header,
el hero y el footer, con la palabra "Sensoria" al lado.

Si el archivo no está, se muestra un placeholder 🌿 hasta que lo agregues.
Para cambiarlo en el futuro, reemplazá ese mismo archivo.

### 2. WhatsApp, modelos y precios → `lib/site.ts`
- `WHATSAPP_NUMERO` — número real en formato `54911...` (sin +, sin espacios)
- `MODELOS` — nombre, precio, resumen y qué incluye cada modelo
  (hoy: Básico $20.000 y Sensorial $24.000). El botón de cada modelo
  arma un mensaje de WhatsApp con el nombre ya cargado.
- `ENVIOS` — texto de la zona de envíos
- `SITE_URL` — el dominio final cuando lo tengas

## Secciones
Inicio · Características · Modelos · Nuestro enfoque · Nosotros · Comprar

El contenido es propio: no repite los textos del Instagram.

## Publicar en DonWeb (hosting común / cPanel)

El sitio es 100% estático. `npm run build` genera la carpeta `out/` con todo
lo que hay que subir.

1. `npm run build`
2. Entrá al **cPanel de DonWeb** → *Administrador de archivos*
3. Abrí la carpeta `public_html` (borrá lo que haya de ejemplo: `index.html`, etc.)
4. Subí **todo el contenido de `out/`** ahí adentro
   (o subí `sensoria-web.zip` y usá "Extraer" dentro de `public_html`)
5. Listo: entrá a tu dominio

Cada vez que cambies algo: `npm run build` y volvés a subir `out/`.

> Antes de la primera publicación, poné tu dominio real en `SITE_URL`
> dentro de `lib/site.ts` (afecta el sitemap y los datos para Google).
