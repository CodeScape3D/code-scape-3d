# Google Analytics - Guía de Implementación

## ¿Qué se ha instalado?

Google Analytics ya está integrado en tu proyecto y funcionando automáticamente. Aquí te explico qué hace:

---

## 📊 Rastreo Automático (Ya está funcionando)

### 1. **Rastreo de Páginas Vistas**

- Google Analytics rastrea automáticamente cada vez que un usuario navega a una nueva página
- Se registran las rutas: `/`, `/quizzes`, `/animacion/:animacion`, `/quiz/:quizName`, etc.

### 2. **Rastreo de Interacciones Automáticas**

Gracias a la "Medición Mejorada" que configuramos, Google Analytics registra:

- ✅ **Visitas de página** - Cada página que visita
- ✅ **Desplazamientos (Scroll)** - Si bajan en la página
- ✅ **Clics de salida** - Links que salen de tu sitio
- ✅ **Tiempo en página** - Cuánto tiempo pasan en cada sección
- ✅ **Rebotes** - Si salen sin interactuar

---

## 🎯 Rastreo Personalizado (Eventos Específicos)

Ahora puedes rastrear eventos específicos que importan para tu negocio.

### Ejemplo 1: Rastrear cuando inicia un quiz

**En un componente de botón de quiz:**

```jsx
import { trackEvent } from '../utils/googleAnalytics';

function QuizButton({ quizName }) {
  const handleClick = () => {
    // Rastrear el evento
    trackEvent('quiz_iniciado', {
      nombre_quiz: quizName,
      timestamp: new Date().toISOString(),
    });

    // Luego navegar al quiz
    navigate(`/quiz/${quizName}`);
  };

  return <button onClick={handleClick}>Iniciar {quizName}</button>;
}
```

### Ejemplo 2: Rastrear cuando completa un quiz

```jsx
import { trackEvent } from '../utils/googleAnalytics';

function QuizResults({ score, totalQuestions }) {
  useEffect(() => {
    // Rastrear que completó el quiz
    trackEvent('quiz_completado', {
      puntuacion: score,
      total_preguntas: totalQuestions,
      porcentaje: (score / totalQuestions) * 100,
    });
  }, [score, totalQuestions]);

  return (
    <div>
      <h2>
        Resultado: {score}/{totalQuestions}
      </h2>
    </div>
  );
}
```

### Ejemplo 3: Rastrear vistas de animaciones

```jsx
import { trackEvent } from '../utils/googleAnalytics';

function AnimationView({ animationName }) {
  useEffect(() => {
    trackEvent('animacion_vista', {
      nombre_animacion: animationName,
      timestamp: new Date().toISOString(),
    });
  }, [animationName]);

  return <div>{/* Contenido de la animación */}</div>;
}
```

---

## 📈 ¿Dónde ver los datos en Google Analytics?

1. **Ir a:** https://analytics.google.com
2. **Seleccionar tu propiedad:** CodeScape3D
3. **Ver en el panel:**
   - **Usuarios en tiempo real** - Quién está usando ahora
   - **Páginas principales** - Las secciones más visitadas
   - **Duración promedio de sesión** - Cuánto tiempo pasan
   - **Tasa de rebote** - Quiénes entran y se van sin interactuar
   - **Eventos** - Los eventos personalizados que registraste

---

## 📝 ID de Medición

Tu ID de medición es: **G-6G1Z8N0TNS**

Este ID ya está configurado en tu proyecto y está enviando datos a Google Analytics.

---

## 🔍 Funciones Disponibles

### `trackEvent(eventName, eventParams)`

Rastrear un evento personalizado:

```jsx
import { trackEvent } from '../utils/googleAnalytics';

trackEvent('evento_personalizado', {
  parametro1: 'valor1',
  parametro2: 'valor2',
});
```

### `trackPageView(pageName)`

Rastrear una página manualmente:

```jsx
import { trackPageView } from '../utils/googleAnalytics';

trackPageView('/mi-pagina-especial');
```

---

## 🚀 Pasos Siguientes Recomendados

Para maximizar el valor de Google Analytics, considera rastrear:

1. **Búsquedas** - Si tu app tiene búsqueda

   ```jsx
   trackEvent('busqueda_realizada', { query: searchTerm });
   ```

2. **Intentos fallidos** - Errores en quizzes

   ```jsx
   trackEvent('respuesta_incorrecta', { quiz_name: name });
   ```

3. **Descargas/Exportes** - Si los usuarios pueden descargar recursos

   ```jsx
   trackEvent('contenido_descargado', { tipo: 'pdf' });
   ```

4. **Tiempo en secciones** - Para ver qué les cuesta más trabajo

---

## ⚠️ Importante

- Google Analytics tarda **~24-48 horas** en mostrar datos nuevos en el dashboard (datos históricos aparecen más rápido)
- Los cambios en eventos personalizados se ven casi inmediatamente
- **Consulta la política de privacidad** de tu sitio - Los usuarios deben saber que estás recopilando datos

---

## 📞 Preguntas?

¿Necesitas rastrear algo específico? Implementa un evento personalizado usando `trackEvent()` con los parámetros que necesites.
