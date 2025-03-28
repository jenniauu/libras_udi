let homeSection = document.getElementById('Home');
let app1Section = document.getElementById('app1');
let app2Section = document.getElementById('app2');
let app3Section = document.getElementById('app3');
let app4Section = document.getElementById('app4');
let app5Section = document.getElementById('app5');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');

function resetButtons() {
    // Remove a classe 'active' e adiciona 'normal' a todos os botões
    b1.classList.remove('active');
    b1.classList.add('normal');
    b2.classList.remove('active');
    b2.classList.add('normal');
    b3.classList.remove('active');
    b3.classList.add('normal');
    b4.classList.remove('active');
    b4.classList.add('normal');
    b5.classList.remove('active');
    b5.classList.add('normal');
    b6.classList.remove('active');
    b6.classList.add('normal');
}

function showHome() {
    homeSection.style.display = 'block';
    app1Section.style.display = 'none';
    app2Section.style.display = 'none';
    app3Section.style.display = 'none';
    app4Section.style.display = 'none';
    app5Section.style.display = 'none';
    resetButtons(); // Reseta os botões
    b1.classList.add('active'); // Ativa o botão Início
}

function app1() {
    homeSection.style.display = 'none';
    app1Section.style.display = 'block';
    app2Section.style.display = 'none';
    app3Section.style.display = 'none';
    app4Section.style.display = 'none';
    app5Section.style.display = 'none';
    resetButtons(); // Reseta os botões
    b2.classList.add('active'); // Ativa o botão Abeille Libras
}

function app2() {
    homeSection.style.display = 'none';
    app1Section.style.display = 'none';
    app2Section.style.display = 'block';
    app3Section.style.display = 'none';
    app4Section.style.display = 'none';
    app5Section.style.display = 'none';
    resetButtons(); // Reseta os botões
    b3.classList.add('active'); // Ativa o botão VLibras
}

function app3() {
    homeSection.style.display = 'none';
    app1Section.style.display = 'none';
    app2Section.style.display = 'none';
    app3Section.style.display = 'block';
    app4Section.style.display = 'none';
    app5Section.style.display = 'none';
    resetButtons(); // Reseta os botões
    b4.classList.add('active'); // Ativa o botão Librário
}

function app4() {
    homeSection.style.display = 'none';
    app1Section.style.display = 'none';
    app2Section.style.display = 'none';
    app3Section.style.display = 'none';
    app4Section.style.display = 'block';
    app5Section.style.display = 'none';
    resetButtons(); // Reseta os botões
    b5.classList.add('active'); // Ativa o botão Alfabeto Libras
}

function app5() {
    homeSection.style.display = 'none';
    app1Section.style.display = 'none';
    app2Section.style.display = 'none';
    app3Section.style.display = 'none';
    app4Section.style.display = 'none';
    app5Section.style.display = 'block';
    resetButtons(); // Reseta os botões
    b6.classList.add('active'); // Ativa o botão Hand Talk
}