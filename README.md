# IP Finder
IP Finder Extension
A extensão IP Finder permite que o usuário visualize o IP do site que está acessando no momento diretamente na interface do navegador. Para que a extensão funcione, é necessário configurar um servidor para hospedar um arquivo PHP que irá interagir com a extensão.

## Funcionalidades
- Exibe o IP do site acessado.

- Conecta-se a uma API para obter o endereço IP do site.

- Utiliza a função **PHP gethostbyname** para determinar o IP do domínio.

- Manipulação do DOM, HTML, CSS, e JS para apresentar as informações.

## Como Usar
#### Hospedar o arquivo PHP (api.php):

- Faça upload do arquivo api.php para o seu servidor.

- O arquivo PHP irá usar a função gethostbyname() para retornar o IP de um domínio.

## Configurar a variável da API:

- Abra o arquivo script.js da extensão.

- Localize a variável api e altere seu valor para o domínio do servidor onde você hospedou o arquivo api.php. Exemplo:

  `let api = "https://seuservidor.com/api.php";`

#### Instalar a extensão no seu navegador:

- No Chrome ou Edge, ative o modo de desenvolvedor:

- No Chrome: Vá para chrome://extensions/ e ative "Modo de desenvolvedor".

- No Edge: Vá para edge://extensions/ e ative "Modo de desenvolvedor".

- Selecione "Carregar sem compactação" e localize a pasta da extensão.

- Após a seleção, a extensão estará pronta para ser usada.

#### Usar a Extensão:

- Após carregar a extensão, atualize a página que você está acessando.

- A extensão irá exibir o IP do site no qual você está.

## Tecnologias Utilizadas
 - HTML e CSS: Para a interface de exibição da extensão.

- JavaScript: Para manipulação do DOM e integração com a API.

- PHP: Utiliza a função gethostbyname() para obter o IP de um domínio.

- API: Comunicação entre a extensão e o servidor PHP para obter o IP.
