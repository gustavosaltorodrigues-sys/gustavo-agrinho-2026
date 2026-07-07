// Efeito de Contador em Tempo Real para simular o CO2 sequestrado
document.addEventListener("DOMContentLoaded", () => {
    const co2Counter = document.getElementById("co2-counter");
    
    // Valor inicial simulado baseado no decorrer do dia
    let baseCount = 1250430; 

    // Atualiza o contador a cada 100 milissegundos simulando o acúmulo
    setInterval(() => {
        // Incrementa um valor aleatório simulando o sequestro contínuo
        baseCount += Math.floor(Math.random() * 5) + 1;
        
        // Formata o número com separadores de milhar (ex: 1.250.435)
        co2Counter.textContent = baseCount.toLocaleString('pt-BR');
    }, 150);
});

// Suavização do clique nos links do menu (Scroll Suave)
const menuLinks = document.querySelectorAll('.nav-links a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Desconto da altura do menu fixo
            behavior: 'smooth'
        });
    });
});
