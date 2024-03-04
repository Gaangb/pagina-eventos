# Pagina de eventos

## Requisitos

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Docker
- Node.js: 18.17.0 || >= 20.5.0

## Iniciando a Aplicação

1. Navegue até o diretório do projeto:

   ```bash
   cd ./pagina-eventos
   ```

2. Inicie a aplicação utilizando Docker:

   ```bash
   docker-compose build
   ```
   
   Isso criará as imagens necessárias no container
   
   ```bash
   docker-compose run my-react-app npm i
   ```
   
   Isso criará a pasta node_modules tanto localmente quanto dentro do container
   
   ```bash
   docker-compose up
   ```
   
   Isso executará a aplicação

## Testando a Aplicação

1. Acesse [localhost:5173](http://localhost:5173) em seu navegador.

## Testando Funções da aplicação

1. Tela de eventos:  
   1.1 Sem estar logado  
   1.1.1 Clicar no botão Ver detalhes do evento, esta ação irá abrir uma nova pagina com os detalhes do evento  
   1.1.2 É possivel clicar no botão de Criar uma conta para ter acesso a criação de eventos, ou caso já a possua basta clicar em Login  

   1.2 Logado  
   1.2.1 Clicar no botão Ver detalhes do evento, esta ação irá abrir uma nova pagina com os detalhes do evento  
   1.2.2 É possivel criar um novo evento clicando no botao de Criar evento  
   1.2.3 É possivel clicar no icone de lápis nos cards de evento que pertecem a seu usuário para atualizar dados do seu evento  
   1.2.3.1 Não é possivel editar a data de um evento salvo previamente  
   1.2.4 É possivel clicar no icone de lixeira para excluir o seu evento  
   1.2.5 É possivel acessar opções de Minha conta para poder editar dados do seu perfil e ver os seus eventos cadastrados  
   1.2.6 É possivel deslogar de sua conta  

2. Tela de detalhes do evento:  
   2.1.1 Nesta tela será possivel ver todos os detalhes de um evento  
   2.1.2 Nesta tela é possivel comprar ingressos do evento selecionado  
   2.1.2.1 Esta tela verifica se há ingressos disponiveis e mostra se estão ou não esgotados  
   2.1.3 Após selecionar a quantidade de ingressos desejados e clicar no botão comprar, você será redirecionado para a tela de pagamento  

3. Tela de pagamento  
   3.1.1 Nesta tela você deve preencher os dados solicitados nos campos Nome completo, cpf e email. Em seguida confirme no resumo de pagamento o que esta adiquirindo e clique em efetuar pagamento  
   3.1.2 Ao clicar em efetuar pagamento um qrcode será gerado  
   3.1.3 A tela possui um timer que ao esgotar os ingressos serão colocados novamente a venda e você será redirecionado para tela de eventos.  

4. Tela minha conta  
   4.1 Aba Conta  
   4.1.1 Esta tela é dedicada para usuarios que possuem um cadastro e estão logados  
   4.1.2 É possivel editar seu nome, email e Nome do estabelecimento.  
   4.1.2.1 Insira sua senha no campo senha e clique em salvar, para salvar as edições realizadas  
   4.1.3 É possivel escluir sua conta clicando no botão Excluir conta. Esta ação irá excluir a sua conta e todos os eventos que você criou  
   4.2 Aba Meus eventos  
   4.2.1 Esta tela mostra todos os eventos que foram criados por você  
   4.2.2 Os cards possuem a opção de editar e deletar evento  
   4.2.3 A edição da data não é permitida pelo sistema.  

5. Tela login  
   5.1.1 Nesta tela é possivel realizar o login com a sua conta e ter a acesso completo as funcionalidades da aplicação  
   5.1.2 A tela login possui botão de cadastrar conta que te levará para a tela de cadastro  
   5.1.3 A tela de login possui botao de esqueci minha senha que te dará a opção de resetar a sua senha após validar sua identidade  
   5.1.4 Ao clicar na logo do lado esquerdo superior você será redirecionado para a tela principal de eventos  

6. Tela de cadastro  
   6.1.1 Nesta tela é possivel realizar cadastro no sistema informando os dados necessarios  
   6.1.2 O sistema verifica se existe uma conta com o cpf ou email informado  
   6.1.3 O sistema verifica se a senha possui menos de 6 caracteres  
   6.1.4 Ao clicar na logo do lado esquerdo superior você será redirecionado para a tela principal de eventos  

7. Tela de reset de senha  
   7.1.1 Esta opção permitirá que você altere sua senha após confirmar seu cpf e email  
   7.1.2 Ao clicar na logo do lado esquerdo superior você será redirecionado para a tela principal de eventos  

Observações: Caso queira testar a aplicação em seu celular, você pode rodar a aplicação fora do container seguindo os seguintes passos:

```bash
  ctrl + c
  npm install
  npm run dev
```

Escolha o endereço que começa com 192 e digite no navegador do seu celular.

## Tecnologias Utilizadas

- React + CSS
- Vite
- Docker
