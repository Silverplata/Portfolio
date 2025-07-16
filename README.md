# 🌟 Portfolio de Jesús Plata Quesada

## 📋 Descripción
Este portfolio muestra mi experiencia como **desarrollador full-stack** con más de 10 años en administración de sistemas, bases de datos, y desarrollo web. Diseñado con **Astro** y **Tailwind CSS**, presenta proyectos que destacan mis habilidades en automatización, procesamiento de imágenes, y desarrollo de interfaces intuitivas. Incluye un tema claro (`#f3e8ff`) y oscuro (`#1e293b`) con un toggle interactivo inspirado en Uiverse.io, optimizado para reclutadores y desarrolladores.

## 🎨 Vista Previa
*(Pendiente: Añadir enlace al portfolio desplegado o capturas en `/screenshots/`)*  
Explora el portfolio en `http://localhost:4321` tras seguir las instrucciones de instalación.

## 🛠 Tecnologías
- **Frontend**:
  - **Astro**: Framework para renderizado híbrido (SSR y estático).
  - **TypeScript**: Tipado seguro para scripts (por ejemplo, `ThemeToggle.astro`).
  - **Tailwind CSS**: Estilos responsivos y consistentes.
  - **HTML/CSS/JavaScript**: Estructura, diseño, e interactividad.
- **Proyectos**:
  - **OCR de Matrículas de Coches con IA**: n8n, Google Drive, Google Sheets, MySQL, OpenAI (GPT-4o), JavaScript.
  - **Difuminado de Caras en Imágenes con Python**: Python, OpenCV, Pytesseract, Torch, Insightface, tkinter.
- **Herramientas**:
  - **Git**: Control de versiones.
  - **Azure DevOps**: Gestión de tareas (mencionado en experiencia).
  - **Node.js**: Entorno para desarrollo y dependencias.
- **Diseño**:
  - Colores: `#f3e8ff` (tarjetas en modo claro), `#1e293b` (modo oscuro), `#2563eb` (hover).
  - Toggle de tema: Fondo claro/oscuro, animaciones de estrellas, sol/luna.

## 📁 Estructura del Proyecto
```
E:\PROYECTOS_DEVAS\CURSOS.YOUTUBE\ASTRO\Portfolio\
├── public/                     # Recursos estáticos
│   ├── projects/               # Imágenes de proyectos
│   │   ├── matriculas_ocr.webp
│   │   ├── face_blur.webp
│   │   ├── neuroplanner.png
│   │   ├── intranet.webp
│   │   ├── cartografia.webp
│   │   └── monitorizacion.webp
│   └── favicon.ico
├── src/                        # Código fuente
│   ├── assets/                 # Recursos
│   │   └── icons/              # SVGs de habilidades
│   │       ├── python.svg
│   │       ├── opencv.svg
│   │       ├── mysql.svg
│   │       └── (otros SVGs: html5, css3, javascript, etc.)
│   ├── components/             # Componentes de Astro
│   │   ├── ThemeToggle.astro   # Toggle de tema claro/oscuro
│   │   └── Header.astro
│   ├── pages/                  # Páginas
│   │   └── index.astro         # Página principal
│   └── data/                   # Datos (opcional)
│       └── projects.json       # Lista de proyectos
├── package.json                # Dependencias
├── astro.config.mjs            # Configuración de Astro
├── tsconfig.json               # Configuración de TypeScript
└── README.md                   # Este archivo
```

## 🚀 Instalación y Ejecución
1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd E:\PROYECTOS_DEVAS\CURSOS.YOUTUBE\ASTRO\Portfolio
   ```
2. **Instalar dependencias**:
   ```bash
   npm install
   ```
3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```
4. **Abrir en el navegador**:
   - Visita `http://localhost:4321`
5. **Construir para producción**:
   ```bash
   npm run build
   ```
   - Archivos generados en `dist/`.

## 📖 Proyectos Destacados
### OCR de Matrículas de Coches con IA
Automatización con **n8n** para extraer matrículas de imágenes en **Google Drive** usando **GPT-4o**. Procesamiento con **JavaScript**, almacenamiento en **Google Sheets** y **MySQL**. Optimiza la gestión de datos y mejora la precisión.

### Difuminado de Caras en Imágenes con Python
Aplicación en **Python** para procesar imágenes por lotes, detectando rostros con **Insightface** y difuminándolos con **OpenCV**. Usa **Pytesseract** para preservar texto (por ejemplo, matrículas) y **tkinter** para una interfaz gráfica. Genera resúmenes y protege la privacidad.

## 🧪 Cómo Probar
1. **Navegar al portfolio**:
   - Abre `http://localhost:4321` tras ejecutar `npm run dev`.
2. **Probar el toggle de tema**:
   - Haz clic en el toggle (`<label class="switch">`) en la cabecera.
   - Verifica:
     - **Modo claro**: Fondo `#f3e8ff`, sol (`#ff7f00`, `#ffa500`), `<html class="light">`.
     - **Modo oscuro**: Fondo `#1e293b`, luna con cráteres, estrellas animadas, `<html class="dark">`.
     - Hover: Fondo azul (`#2563eb`, `#1e40af`).
3. **Explorar proyectos**:
   - Revisa las tarjetas (`skill-card`) para "OCR de Matrículas" y "Difuminado de Caras".
   - Confirma que las imágenes (`matriculas_ocr.webp`, `face_blur.webp`) se cargan.
   - Verifica los tags (por ejemplo, `Python`, `OpenCV`, `n8n`).
4. **Inspeccionar el DOM**:
   - Usa `F12` → "Elements":
     - `<html class="light">` o `<html class="dark">`.
     - Tarjetas: `background-color: rgb(243, 232, 255)` (claro) o `rgb(30, 41, 59)` (oscuro).
   - Revisa la consola (`F12` → "Console") para confirmar que no hay errores.
5. **Probar responsividad**:
   - Cambia el tamaño del navegador o usa la vista móvil (`F12` → Toggle Device Toolbar).
   - Asegúrate de que el diseño sea claro en pantallas pequeñas.

## 🎯 Optimización
- **Diseño responsivo**: Adaptado a dispositivos móviles y de escritorio con Tailwind CSS.
- **Código limpio**: Estructura modular con Astro y TypeScript para mantenibilidad.
- **Proyectos relevantes**: Demuestran experiencia en automatización (n8n), IA (OpenAI, Insightface), procesamiento de imágenes (OpenCV), y bases de datos (MySQL).
- **Estilo visual**: Toggle de tema con animaciones (estrellas, sol/luna) y colores consistentes (`#f3e8ff`, `#1e293b`, `#2563eb`) para una experiencia atractiva.
- **Accesibilidad**: Etiquetas ARIA (por ejemplo, `aria-label="Alternar tema"` en `ThemeToggle.astro`).

## 📞 Contacto
- **LinkedIn**: [linkedin.com/in/jesus-plata-quesada-0232a1b3/](https://linkedin.com/in/jesus-plata-quesada-0232a1b3/)
- **Correo**: [jpq1985@gmail.com](mailto:jpq1985@gmail.com)
- **Teléfono**: +34 699 90 90 41

## 📜 Licencia
[MIT License](https://opensource.org/licenses/MIT)

---
*Última actualización: Julio 2025*