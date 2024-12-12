const express = require('express');
const cors = require('cors');

const app = express();

// Middleware de logging detallado
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Incoming request:`, {
    method: req.method,
    path: req.path,
    headers: req.headers,
    body: req.body
  });
  next();
});

// Middleware de CORS
app.use(cors());
app.use(express.json());

// Ruta de diagnóstico principal
app.get('/api', (req, res) => {
  try {
    // Intenta cargar módulos dinámicamente
    const diagnosticInfo = {
      message: 'API Diagnostic Information',
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT
      },
      modulesTest: {
        express: !!require('express'),
        cors: !!require('cors')
      }
    };

    res.json(diagnosticInfo);
  } catch (error) {
    console.error('Error in root route:', error);
    res.status(500).json({ 
      error: 'Diagnostic Route Failed', 
      message: error.message,
      stack: error.stack 
    });
  }
});

// Middleware de error global
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', {
    message: err.message,
    stack: err.stack,
    name: err.name
  });

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Ruta de prueba de módulos
app.get('/api/modules', (req, res) => {
  try {
    // Intenta cargar todos los módulos
    const modules = {
      express: !!require('express'),
      cors: !!require('cors')
    };
    res.json(modules);
  } catch (error) {
    console.error('Module Loading Error:', error);
    res.status(500).json({ 
      error: 'Module Loading Failed', 
      message: error.message 
    });
  }
});

// Captura de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`
  });
});

module.exports = app;
