function showForm(type) {
    let formHTML = '';
    let title = '';

    if (type === 'lineal') {
        title = 'Interpolación Lineal';
        formHTML = `
            <h2>${title}</h2>
            <form onsubmit="calculateLinear(event)">
                <input type="number" id="x0" placeholder="x0" required step="any">
                <input type="number" id="y0" placeholder="y0" required step="any">
                <input type="number" id="x1" placeholder="x1" required step="any">
                <input type="number" id="y1" placeholder="y1" required step="any">
                <input type="number" id="x" placeholder="x" required step="any">
                <input type="number" id="exactValue" placeholder="Valor exacto de f(x)" step="any">
                <button type="submit">Calcular</button>
            </form>
            <div class="result" id="result"></div>
        `;
    } else if (type === 'cuadratica') {
        title = 'Interpolación Cuadrática';
        formHTML = `
            <h2>${title}</h2>
            <form onsubmit="calculateQuadratic(event)">
                <input type="number" id="x0" placeholder="x0" required step="any">
                <input type="number" id="y0" placeholder="y0" required step="any">
                <input type="number" id="x1" placeholder="x1" required step="any">
                <input type="number" id="y1" placeholder="y1" required step="any">
                <input type="number" id="x2" placeholder="x2" required step="any">
                <input type="number" id="y2" placeholder="y2" required step="any">
                <input type="number" id="x" placeholder="x" required step="any">
                <input type="number" id="exactValue" placeholder="Valor exacto de f(x)" step="any">
                <button type="submit">Calcular</button>
            </form>
            <div class="result" id="result"></div>
        `;
    } else if (type === 'lagrange') {
        title = 'Polinomios de Lagrange';
        formHTML = `
            <h2>${title}</h2>
            <form onsubmit="calculateLagrange(event)">
                <input type="number" id="x0" placeholder="x0" required step="any">
                <input type="number" id="y0" placeholder="y0" required step="any">
                <input type="number" id="x1" placeholder="x1" required step="any">
                <input type="number" id="y1" placeholder="y1" required step="any">
                <input type="number" id="x2" placeholder="x2" required step="any">
                <input type="number" id="y2" placeholder="y2" required step="any">
                <input type="number" id="x" placeholder="x" required step="any">
                <input type="number" id="exactValue" placeholder="Valor exacto de f(x)" step="any">
                <button type="submit">Calcular</button>
            </form>
            <div class="result" id="result"></div>
        `;
    }

    // Actualiza el contenido del contenedor del formulario
    document.getElementById('formContainer').innerHTML = formHTML;
}

function calculateLinear(event) {
    event.preventDefault();
    const x0 = parseFloat(document.getElementById('x0').value);
    const y0 = parseFloat(document.getElementById('y0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x = parseFloat(document.getElementById('x').value);
    const exactValue = parseFloat(document.getElementById('exactValue').value);

    const y = y0 + ((y1 - y0) / (x1 - x0)) * (x - x0);
    let resultText = `f(${x}) = ${y}`;

    if (!isNaN(exactValue)) {
        const error = Math.abs((exactValue - y) / exactValue) * 100;
        resultText += `<br>Error porcentual: ${error.toFixed(2)}%`;
    }

    document.getElementById('result').innerHTML = resultText;
}

function calculateQuadratic(event) {
    event.preventDefault();
    const x0 = parseFloat(document.getElementById('x0').value);
    const y0 = parseFloat(document.getElementById('y0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x = parseFloat(document.getElementById('x').value);
    const exactValue = parseFloat(document.getElementById('exactValue').value);

    const y = y0 * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2)) +
              y1 * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2)) +
              y2 * ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
    let resultText = `f(${x}) = ${y}`;

    if (!isNaN(exactValue)) {
        const error = Math.abs((exactValue - y) / exactValue) * 100;
        resultText += `<br>Error porcentual: ${error.toFixed(2)}%`;
    }

    document.getElementById('result').innerHTML = resultText;
}

function calculateLagrange(event) {
    event.preventDefault();
    const x0 = parseFloat(document.getElementById('x0').value);
    const y0 = parseFloat(document.getElementById('y0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x = parseFloat(document.getElementById('x').value);
    const exactValue = parseFloat(document.getElementById('exactValue').value);

    const y = y0 * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2)) +
              y1 * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2)) +
              y2 * ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));
    let resultText = `f(${x}) = ${y}`;

    if (!isNaN(exactValue)) {
        const error = Math.abs((exactValue - y) / exactValue) * 100;
        resultText += `<br>Error porcentual: ${error.toFixed(2)}%`;
    }

    document.getElementById('result').innerHTML = resultText;
}