// Selecionar a Seção About
const about = document.querySelector('#about');

//Selecionar formulario
const formulario = document.querySelector('#formulario');

//Expresão Regular para validar o email - apenas verifica se a pessoa digitou um email no formato correto
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/




//FUNÇÃO PARA Adicionar os dados do Perfil Github na seção About

// Função para buscar os dados no Github -- async: função assincrona
// por ser uma promessa, usamos o try/catch para tratar erros
async function getApiGithub(){

    try{
        //PASSO 1: Fazer um requisição do tipo Get para a API do Github
        const dadosPerfil = await fetch('https://api.github.com/users/priscilamrozinski'); //busca os repositorios publicos no meu github
       
        //PASSO 2: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json(); //converte os dados para json

        //PASSO 3: Criar o Htmll/CSS com os dados do Perfil
     
        let conteudo = `

        <figure class="about_image">
          <img
            src="${perfilJson.avatar_url}"
            alt="Foto do Perfil do GitHub - ${perfilJson.name}"
          />
        </figure>

        <article class="about_content">
          <h2>Sobre mim</h2>
          <p>
            Apaixonada por tecnologia. Atualmente, mergulho nesse incrível universo da tecnologia e da programação.
            Curso Desenvolvimento de Software Multiplataformas na Fatec.  
            Além disso, participo do Bootcamp Java Full Stack da Generation Brasil e 
            do Bootcamp de Análise de Dados com Python, promovido pela {Reprograma}.
          </p>
          <p>
            Sou Publicitária com mais de dez anos de experiência nas áreas de comunicação e marketing. 
            Pretendo continuar comunicando, agora por meio de códigos, ampliando soluções e 
            unindo o conhecimento analítico, de negócios e visão estratégica na resolução de problemas. 
          </p>
          <p>
          Já desenvolvi minissistemas utilizando o modelo Model-View-Controller, com Spring Boot, SQL, JPA/Hibernate, JUnit e Insomnia. 
          No front-end, utilizando HTML, CSS, JavaScript, Bootstrap e React. Convido vocês a conhecerem meu GitHub github.com/PriscilaMrozinski.
          Espero em breve contribuir com muitos projetos e seguir evoluindo junto à comunidade tech.
          </p>

          <div class="about_stats">
            <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
            <div class="stat-item">
              <p class="stat-number">${perfilJson.followers}</p>
              <p class="stat-label">Seguidores</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">${perfilJson.public_repos}</p>
              <p class="stat-label">Repositórios</p>
            </div>
          </div>
        </article>

       ` 
        //PASSO 4: Injetar-Adicionar o conteudo na seção About
        about.innerHTML += conteudo;


    }catch(error){
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event){
   //Validação do campo nome
    event.preventDefault(); //impede o envio automatico do formulário
    const campoNome = document.querySelector('#nome'); //validação do campo nome
    const txtNome = document.querySelector('#txtNome');
    
    //Nome precisa ter pelo menos 3 caracteres
    if(campoNome.value.length < 3){
      txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }

   //Validação do campo email
    const campoEmail = document.querySelector('#email'); //validação do campo nome
    const txtEmail = document.querySelector('#txtEmail');
    
    //Verifica se o email é válido
    if(!campoEmail.value.match(emailRegex)){
      txtEmail.innerHTML = 'Digite um e-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }

    //Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto'); //validação do campo assunto
    const txtAssunto = document.querySelector('#txtAssunto');
    
    //Nome precisa ter pelo menos  caracteres
    if(campoAssunto.value.length < 5){
      txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
      campoAssunto.focus();
      return;
    }else{
      txtAssunto.innerHTML = '';
    }

    //Se passou por todas as validações, envia o formulário
    formulario.submit();

})
//prevent default: não envia o formulario enquanto nao fizer a validação 
//focus: coloca o cursor no campo que precisa ser preenchido




// Chamar a função getApiGithub () para buscar os dados no Github 
getApiGithub();


window.addEventListener('DOMContentLoaded', () => {
  lottie.loadAnimation({
    container: document.getElementById('animacao'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/img/wave.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  });
});
