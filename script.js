let quizData;
let currentScreen = "0";

async function startSimulator() {
    const response = await fetch('data.json');
    quizData = await response.json();
    render();
}

function render() {
    const data = quizData[currentScreen];
    const container = document.getElementById('app');
    
    container.innerHTML = `
        <div class="card">
            <p>${data.text}</p>
            ${data.description ? `<p class="desc">${data.description}</p>` : ''}
            <div class="actions">
                ${data.btn1 ? `<button onclick="nextStep('${data.next1}')">${data.btn1}</button>` : ''}
                ${data.btn2 ? `<button onclick="nextStep('${data.next2}')">${data.btn2}</button>` : ''}
                ${data.isResult ? `<button onclick="nextStep('0')">Restart Simulation</button>` : ''}
            </div>
        </div>
    `;
}

function nextStep(id) {
    currentScreen = id;
    render();
}

startSimulator();