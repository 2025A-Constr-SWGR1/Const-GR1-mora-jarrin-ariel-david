# Principios de Código Limpio aplicados en la Calculadora

## Archivos involucrados
- `calculadora.js`

## Principios aplicados

### 1. Nombres significativos y pronunciables
**Referencia:** Variables  
- `campoPantalla`, `expresion`, `calcularResultado`, `limpiar`, `actualizarPantalla`  
- Nombres descriptivos que reflejan su propósito, tanto para funciones como variables.

---

### 2. Funciones con una sola responsabilidad  
**Referencia:** Funciones  
- `agregarCaracter`, `limpiar`, `calcularResultado`, `actualizarPantalla`  
Cada método realiza una única tarea claramente definida.

---

### 3. Evitar efectos secundarios  
**Referencia:** Funciones  
- Se evitó modificar variables globales directamente.  
- Los métodos de la clase encapsulan el estado interno (`this.expresion`).

---

### 4. Clases con responsabilidad única  
**Referencia:** SOLID - SRP  
- La clase `Calculadora` se encarga exclusivamente de la lógica de cálculo y la manipulación del display.

---

### 5. Encapsulamiento  
**Referencia:** Objetos y estructuras de data  
- Se accede al estado interno solo mediante métodos públicos (no se expone `this.expresion` externamente).

---

### 6. Niveles de abstracción  
**Referencia:** Funciones deben tener un solo nivel de abstracción  
- Las funciones del archivo `calculadora.js` están bien separadas por nivel de responsabilidad.

---

### 7. Eliminación de código duplicado  
**Referencia:** Funciones  
- Todas las acciones se canalizan a través de métodos reutilizables (`agregarCaracter`, `limpiar`, etc.).

---

### 8. Comentarios innecesarios eliminados  
**Referencia:** Comentarios  
- El código es autoexplicativo, no requiere comentarios adicionales.

---

### 9. Formato consistente y legible  
**Referencia:** Formatear  
- Sangrías claras, nombres en español coherentes, estilo consistente entre HTML y JS.

---

## Prácticas que se evitaron

- No se utilizaron condicionales negativos.
- No se usaron funciones anidadas ni código muerto.
- No se introdujeron efectos colaterales con variables externas o mutables fuera del control de la clase.

