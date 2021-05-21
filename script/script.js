// Função para validação do CPF

function is_cpf (c) {

if((c = c.replace(/[^\d]/g,"")).length != 11)
return false
  
if (c == 
"00000000000" ||
"11111111111" ||
"22222222222" ||
"33333333333" ||
"44444444444" ||
"55555555555" ||
"66666666666" ||
"77777777777" ||
"88888888888" ||
"99999999999")
return false
;

// Criadas as variáveis para soma e resto
var r;
var s = 0;
  
for (i=1; i<=9; i++)
s = s + parseInt(c[i-1]) * (11 - i);
  
r = (s * 10) % 11;
  
if ((r == 10) || (r == 11))
r = 0;
  
if (r != parseInt(c[9]))
return false;
  
s = 0;
  
for (i = 1; i <= 10; i++)
s = s + parseInt(c[i-1]) * (12 - i);
  
r = (s * 10) % 11;
  
if ((r == 10) || (r == 11))
r = 0;
  
if (r != parseInt(c[10]))
return false;
  
return true;
}
  
// Função cria uma máscara para o CPF informado  
function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}
  
function fMascEx() {
obj.value=masc(obj.value)
}
  
function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}
  
cpfCheck = function (el) {
if (!is_cpf(el.value)) {
alert("O número de CPF informado não é válido. Verifique e tente novamente!")
el.value = '';
}
else if (!el.value) alert("O preenchimento do CPF é obrigatório.")
}


// Função para validar o CEP
// Função começa limpando os campos a serem preenchidos
function limpa_formulário_cep() {

// Um valor em branco é inserido em cada input 
document.getElementById('street').value=("");
document.getElementById('district').value=("");
document.getElementById('city').value=("");
document.getElementById('state').value=("");
}

// Função para receber o conteúdo
function meu_callback(conteudo) {
if (!("erro" in conteudo)) {

//Atualiza os campos com os valores.
document.getElementById('street').value=(conteudo.logradouro);
document.getElementById('district').value=(conteudo.bairro);
document.getElementById('city').value=(conteudo.localidade);
document.getElementById('state').value=(conteudo.uf);
}
else {
// CEP não Encontrado
limpa_formulário_cep();
alert("O CEP informado não foi encontrado.\nPor favor, verifique o número e tente novamente.");
}
}

// Função para pesquisar o CEP        
function pesquisacep(valor) {

// Nova variável "cep" somente com dígitos
var cep = valor.replace(/\D/g, '');

// Verificação se o campo CEP possui o valor informado
if (cep != "") {

// Expressão regular para fazer a validação do CEP
var validacep = /^[0-9]{8}$/;

// Executa a validação do formato do CEP
if(validacep.test(cep)) {

// Preenche os campos com "..." enquanto a consulta no webservice é realizada
document.getElementById('street').value="...";
document.getElementById('district').value="...";
document.getElementById('city').value="...";
document.getElementById('state').value="...";

// Cria um elemento JavaScript
var script = document.createElement('script');

// Faz uma sincronização com o callback
script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

// Insere o novo script no documento e carrega o conteúdo
document.body.appendChild(script);

}
else {

// Se o CEP é inválido, limpa o formulário e emite um alertaO CEP é inválido
limpa_formulário_cep();
alert("O formato do CEP é inválido.\nVerifique o número e tente novamente.");
}
}
else {

// Com CEP sem valor, o formulário é limpo
limpa_formulário_cep();
}
};


// Função para alerta de campos obrigatórios
// Chamada da função
function formCheck() {

// Criada uma variável para cada input a ser verificado
var name = document.getElementById("name").value;
var lastName = document.getElementById("last-name").value;
var cpf = document.getElementById("cpf").value;
var email = document.getElementById("email").value;
var cellphone = document.getElementById("cellphone").value;

// Verifica se a variável recebeu um valor em branco
if (name == "" || lastName == "" || cpf == "" || email == "" || cellphone == "") {

//Em caso positivo emite um alerta de campo obrigatório 
alert("Os campos marcados com um asterisco são de preenchimento obrigatório. \n Certifique-se de ter preenchido todos!");
return false;
}
// Senão, o alerta não é emitido e o formulário fica disponível para envio
else {
document.getElementById("myForm").submit();
return true;
}
}