/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta el sitio como HTML/CSS/JS estático (carpeta "out/"),
  // para subir a hosting común tipo DonWeb / cPanel.
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
