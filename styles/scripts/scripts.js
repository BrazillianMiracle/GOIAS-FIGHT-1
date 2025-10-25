/*
 * ARQUIVO: scripts/main.js
 * Adiciona interatividade e feedback visual
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Goiás Fight: Site de Teste carregado com sucesso!");

    // 1. Efeito para botões de Ingresso/Inscrição
    const btnIngresso = document.querySelectorAll('.btn-ingresso');
    btnIngresso.forEach(button => {
        button.addEventListener('click', (event) => {
            const eventTitle = event.target.closest('.event-card').querySelector('h3').textContent;
            alert(`Ação de Compra/Inscrição simulada para: "${eventTitle}".`);
            // Aqui seria a lógica real de redirecionamento ou formulário
        });
    });

    // 2. Efeito para o botão CTA principal do cabeçalho
    const btnInscricaoDivulgacao = document.getElementById('btn-inscrever');
    btnInscricaoDivulgacao.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que a página role para o topo
        alert("Área de Inscrição e Divulgação:\nUm formulário profissional seria carregado aqui para promotores e atletas.");
    });
    
    // 3. Efeito de scroll suave ao clicar nos links de navegação (opcional, mas profissional)
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});