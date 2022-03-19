# APP MARVEL MARKET

## Sobre o APP :iphone:

Trata-se de um aplicativo para vendas fictícias de revistas em quadrinho, utilizando a API pública da produtora MARVEL DC. o aplicativo dispõem de uma listagem de revistas com valores (fictícios) e grau de raridade (fictícios), podendo ainda no ato da compra ser adicionados cupons para desconto no valor total (fictícios). Por fim, o aplicativo possui uma fácil navegação, clara e objetiva com três telas, sendo elas: 

* 1º tela principal (listagem quadrinhos disponíveis); 
* 2º tela de detalhes (quadrinhos específicos); 
* 3º tela de carrinho para compra. 

## Informações técnicas :computer: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="25" height="25" />

<justify>Um aplicativo criado para um teste profissional com o intuito de demonstrar as minhas habilidades com o framework **React Native**, utilizando ferramentas como **Styled-components** para a estilização dos componentes, o **Jest** para a realização  dos testes (até o momento testes unitários em cada componente), a biblioteca do **axios** para consumo de API. Por fim, foi utilizado o pacote **Stack** do **React Navigaton** para as navegações de tela do APP.</justify> 

## Como instalar :wrench:

Para baixar o projeto siga as instruções abaixo:

```bash
1. git clone https://github.com/nextinhuh/app-marvel-market.git
2. cd app-marvel-market
```

Agora para instalar as dependências e rodar o APP:

```bash
1. yarn install
2. yarn start 
```
Caso queria iniciar com o expo:
```bash
 expo start
```
Alternativamente, para rodar diretamente no emulador de Android:
```bash
 yarn android
```

## Observações :warning:
Para a utilização correta da API da MARVEL DC. é necessário colocar nas variáveis de ambiente as chaves públicas e privadas disponibilizadas pela mesma, alterando o nome do arquivo `.env.example` para `.env` e adicionar os valores nas variáveis seguindo o exemplo abaixo:
```bash
 API_PUBLIC_KEY="sua_chave_publica"
 API_PRIVATE_KEY="sua_chave_privada"
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
