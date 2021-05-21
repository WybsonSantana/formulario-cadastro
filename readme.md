Desafio Cadastro Pessoal - Atração | Gama Academy

Conforme solicitado no desafio, foi estilizado um formulário de contato com os seguintes campos:
• Dados pessoais:

- Nome;
- Sobrenome;
- CPF;
- RG;
- Sexo.

• Dados de contato:
- E-mail;
- Telefone celular;
- Telefone fixo;

• Endereço:
- CEP;
- Logradouro;
- Número;
- Complemento;
- Bairro;
- Cidade;
- Estado.

O formulário foi criado utilizando HTML, CSS e JavaScript.

A página contém uma navbar apresentando um logotipo de formulário de cadastro e uma tag h1 com um título. Logo abaixo é apresentado um subtítulo em tag h2 e um formulário de cadastro com os campos citados acima. Em seguida um footer com links para a página do Programa Formação Tech Itaú, da Gama Academy e perfil do Linkedin do autor.

O formulário utiliza as tags headings, a divisão dos campos em tags <fieldset> e a tag <label> para facilitar a navegação de pessoas que utilizam um leitor de tela.

Dentre os atributos aplicados nos campos do formulário, estão o "placeholder" para descrição dentro do campo, o "required" para marcar um campo como obrigatório, o "pattern" para gerar limitações de digitação em cada campo (por ex: aceitar apenas letras maiúsculas e minúsculas) e o atributo "title" para retornar uma mensagem de recomendação de preenchimento caso a regra do atributo "pattern" não tenha sido respeitada.

No CSS foi utilizado atributos de alinhamento de elementos e formatação, como flexbox, justify-content, align-itens, text-align, background-color, color, text-decoration entre outros.

Através do JavaScript foi aplicada uma função para verificar se o número de CPF digitado pelo usuário era um número de CPF válido ou não, informando com um alerta na tela quando o número não era validado.

Já no campo de preenchimento do CEP foi aplicada uma função que valida o número do CEP e, em esse sendo real, busca as informações no banco de dados do ViaCEP e preenche os campos logradouro, bairro, cidade e estado de forma automática.

Ao botão 'cadastrar' foi atribuido uma função que verifica se os campos obrigatórios foram preenchidos ou não e, caso algum dos campos tenha ficado em branco, um alerta é exibido na tela.

Referências:

https://www.w3schools.com/TAGS/default.ASP

https://www.w3schools.com/cssref/

https://www.w3schools.com/js/js_intro.asp

https://www.javascriptprogressivo.net/

https://viacep.com.br/exemplo/javascript/

