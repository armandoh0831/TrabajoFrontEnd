Avance del documento (Normas APA)

Título: Avance - Implementación front-end de CES (CRM Experts)

Autores:
Juan José Rincón; Alejandro Quitián Moreno; Alejandro Sierra Garzón; Armando Andrés Hernández; Simón Echeverry

Institución: Politécnico Grancolombiano
Curso: Front End
Profesor: John Alirio Olarte Ramos
Fecha: 30 de septiembre de 2025

Resumen
Este documento presenta el avance de la propuesta de sitio web para la empresa CES — CRM Experts. Describe las vistas desarrolladas en esta primera versión y la funcionalidad implementada con HTML, CSS y JavaScript.

Vistas desarrolladas y funcionalidad
1. Página de inicio (index.html)
   - Objetivo: puerta de entrada al sitio; presentar la propuesta de valor.
   - Elementos implementados: encabezado con navegación, hero con imagen de dashboard, sección de características, vista previa de planes (tarjetas) y pie de página.
   - Funcionalidad: navegación entre páginas, botones que redirigen a la página de planes/contacto.

2. Inicio de sesión (login.html)
   - Objetivo: permitir autenticación de usuarios registrados.
   - Elementos implementados: formulario con campos de correo y contraseña, botón 'Iniciar con Google' (simulado), enlace para recuperar contraseña.
   - Funcionalidad: validación mínima en cliente y manejo de envío mediante JavaScript (demo).

3. Planes y Precios (plans.html)
   - Objetivo: mostrar opciones de servicio y características por plan.
   - Elementos implementados: tres tarjetas de plan (Crecimiento, Profesional, Empresas) y listado de beneficios incluidos.
   - Funcionalidad: enlaces para contactar y seleccionar plan; diseño responsivo.

4. Nuestra Empresa (about.html)
   - Objetivo: comunicar misión, equipo y valores.
   - Elementos implementados: secciones con texto descriptivo y valores institucionales.
   - Funcionalidad: presentación informativa para generar confianza.

5. Formulario de Contacto (contact.html)
   - Objetivo: capturar solicitudes, cotizaciones y mensajes de clientes.
   - Elementos implementados: formulario con nombre, correo, teléfono, asunto y mensaje; menú desplegable para tipo de consulta.
   - Funcionalidad: envío simulado en cliente con retroalimentación (alert).

6. Chatbot de Contacto (componente en contact.html)
   - Objetivo: ofrecer atención inmediata mediante ventana emergente.
   - Elementos implementados: ventana de chat desplegable, campo de entrada para preguntas.
   - Funcionalidad: interacciones de demostración (envío de preguntas y respuestas automáticas simuladas).

Estructura del repositorio
- / (raíz)
  - index.html
  - login.html
  - plans.html
  - about.html
  - contact.html
  - assets/
    - css/style.css
    - js/main.js
    - images/* (imágenes y logo placeholders)

Estado actual y próximos pasos
- Estado: Primera versión funcional en el front-end con maquetación responsive y comportamiento mínimo en JavaScript.
- Próximos pasos:
  1. Integrar iconografía y recursos gráficos definitivos.
  2. Mejorar el diseño visual y accesibilidad (contrastes, etiquetas ARIA más completas).
  3. Conectar formularios con un backend (endpoints reales) o servicios de correo.
  4. Implementar autenticación real (OAuth para 'Iniciar con Google').
  5. Preparar documentación final en formato APA (referencias, metodología, pruebas de usabilidad).

Referencias
Se incluirán referencias en formato APA relacionadas con frameworks, bibliotecas y recursos gráficos utilizados en la versión final.

Anexos
- Capturas de las páginas generadas y enlaces al repositorio con el código fuente.
