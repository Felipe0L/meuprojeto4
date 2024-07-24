document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    
    const buttonHeader = document.querySelectorAll('a.button')

    const personagens = document.querySelectorAll('[data-pers-id]');
    
    const heroSection = document.querySelector('.hero');
    const persSection = document.querySelector('.characters');
    const langSection = document.querySelector('.language');

    const alturaHero = heroSection.clientHeight;
    const alturaPers = persSection.clientHeight; 
    const alturaLang = langSection.clientHeight;

    //Configuração dos botoes ativos do header de acordo com a altura da tela
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        
        if (posicaoAtual < alturaHero) {
            removeAtivoHeader();
            buttonHeader[0].classList.add('button--is-active');
        } else if (posicaoAtual < alturaPers + alturaHero) {
            removeAtivoHeader();
            buttonHeader[1].classList.add('button--is-active');
        }else if (posicaoAtual < alturaLang + alturaPers + alturaLang) {
            removeAtivoHeader();
            buttonHeader[2].classList.add('button--is-active');
        }
        
    })
    //Configuracao dos botoes do header no click 
    for (let i = 0; i < buttonHeader.length; i++) {
        buttonHeader[i].addEventListener('click', function(botao) {
            removeAtivoHeader();
            
            buttonHeader[i].classList.add('button--is-active');
        })
    } 

    // Seção de personagens, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas();
            aba.classList.add('characters__content__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('characters__content__tabs__button--is-active');
            
        })
    } 
    // Programação da descrição
    for (let i = 0; i < personagens.length; i++) {
        personagens[i].addEventListener('click', function(pers){
            const itemAlvo = pers.target.dataset.persId;
            const item = document.querySelector(`[data-desc-id=${itemAlvo}]`)
            
            descricaoInvisivel();
            item.classList.add('characters__description--is-visible');
            
        });   
    }  
    
})

function removeAtivoHeader(){
    const botao = document.querySelectorAll('a.button')

    for(let i = 0 ; i < botao.length; i++) {
        botao[i].classList.remove('button--is-active')
    }
}



function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('characters__content__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('characters__content__list--is-active');
    }
}

function descricaoInvisivel(){
    const desc = document.querySelectorAll('[data-desc-id]');

    for(let i = 0; i < desc.length; i++) {
        desc[i].classList.remove('characters__description--is-visible');
    }
}
//Tradutor de nomes em linguagem de anão
const submit = window.document.querySelector('button#submit');
let arrayNome = [];

submit.addEventListener('click', function(e){
    e.preventDefault();
    const nome = window.document.querySelector('input#nome').value.toLowerCase();
    let arrayNome = [];
    let res = document.querySelector('div#res');

    res.innerHTML = ''
    arrayNome = nome.split("");

    if (arrayNome.includes('0') == true || arrayNome.includes('1') == true || arrayNome.includes('2') == true || arrayNome.includes('3') == true || 
        arrayNome.includes('4') == true || arrayNome.includes('5') == true || arrayNome.includes('6') == true || arrayNome.includes('7') == true ||
        arrayNome.includes('8') == true || arrayNome.includes('9') == true ) {
        
        alert('[ERRO] Digite apenas letras!');

    } else if (nome == ''){
        alert('[ERRO] Digite o nome!');
    }   else{
        res.innerHTML = 'O nome em Khazdul é: </br>  '
        for (let i in arrayNome) {
            let letra = arrayNome[i];
            let img = document.createElement('img');
            switch(letra){
                case 'a':
                img.src = './dist/images/a.png';
                break;

                case 'á':
                img.src = './dist/images/a.png';
                break;

                case 'à':
                img.src = './dist/images/a.png';
                break;

                case 'ã':
                img.src = './dist/images/a.png';
                break;

                case 'b':
                img.src = './dist/images/a.png';
                break;

                case 'c':
                img.src = './dist/images/ch.png';
                break;

                case 'd':
                img.src = './dist/images/d.png';
                break;

                case 'e':
                img.src = './dist/images/e.png';
                break;

                case 'é':
                img.src = './dist/images/e.png';
                break;

                case 'f':
                img.src = './dist/images/f.png';
                break;

                case 'g':
                img.src = './dist/images/g.png';
                break;
                
                case 'h':
                img.src = './dist/images/h.png';
                break;

                case 'i':
                img.src = './dist/images/i.png';
                break;

                case 'í':
                img.src = './dist/images/i.png';
                break;

                case 'j':
                img.src = './dist/images/j.png';
                break;

                case 'k':
                img.src = './dist/images/k.png';
                break;

                case 'l':
                img.src = './dist/images/l.png';
                break;

                case 'm':
                img.src = './dist/images/m.png';
                break;

                case 'n':
                img.src = './dist/images/n.png';
                break;

                case 'o':
                img.src = './dist/images/o.png';
                break;

                case 'ó':
                img.src = './dist/images/o.png';
                break;

                case 'ô':
                img.src = './dist/images/o.png';
                break;

                case 'p':
                img.src = './dist/images/p.png';
                break;

                case 'q':
                img.src = './dist/images/q.png';
                break;

                case 'r':
                img.src = './dist/images/r.png';
                break;

                case 's':
                img.src = './dist/images/s.png';
                break;

                case 't':
                img.src = './dist/images/t.png';
                break;

                case 'u':
                img.src = './dist/images/u.png';
                break;

                case 'ú':
                img.src = './dist/images/u.png';
                break;

                case 'v':
                img.src = './dist/images/v.png';
                break;

                case 'w':
                img.src = './dist/images/w.png';
                break;

                case 'y':
                img.src = './dist/images/y.png';
                break;

                case 'z':
                img.src = './dist/images/z.png';
                break;

                default:
                img.src = './dist/images/space.png'    

            }
            res.appendChild(img);
        }
    }    
    
})
