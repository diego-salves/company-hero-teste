# Music Suggestion API

## Descrição

Este serviço sugere músicas aos usuários com base na temperatura de uma cidade. Utiliza dados de clima do OpenWeather e recomendações de músicas do Spotify.
Pode ser testado a partir de um frontend publicado na Vercel: [Clique aqui para acessar.]((https://company-hero-test-frontend.vercel.app/))

**Observação:** Devido ao uso do plano gratuito do Render, a primeira requisição à API pode demorar até 50 segundos, pois o serviço precisa sair do modo de hibernação. Após essa primeira requisição, as respostas subsequentes serão mais rápidas.


## Justificativas

### Padrão de API

Optei por utilizar o padrão REST para a API devido à sua simplicidade e ampla adoção. As APIs RESTful são facilmente compreensíveis e utilizáveis, o que facilita a integração com outros serviços e a manutenção do código. Além disso, o uso de métodos HTTP padrão (GET, POST, etc.) permite uma interação clara e eficiente com o serviço.

### Linguagem de Programação e Frameworks

#### Node.js
Escolhi o Node.js como a base de desenvolvimento por diversas razões:
- **Desempenho:** O Node.js é conhecido por sua alta performance em aplicações I/O intensivas devido ao seu modelo assíncrono e orientado a eventos, o que vai de encontro ao tema avaliado solicitado, desempenho, resiliência e escalabilidade.
- **Comunidade:** Possui uma grande comunidade, o que facilita o acesso a bibliotecas, ferramentas e suporte.
- **JavaScript:** Permite o uso de JavaScript no backend, a mesma linguagem usada no frontend, promovendo um desenvolvimento mais coeso e reduzindo a curva de aprendizado para times de diversos níveis, algo que ajudou muito em minha experiência como líder a transformar desenvolvedores frontend ou backend em desenvolvedores fullstack.

#### NestJS
NestJS foi o framework escolhido para estruturar o serviço por seus diversos benefícios:
- **Modularidade:** Facilita a organização e a escalabilidade do código através de uma arquitetura modular.
- **Injeção de Dependência:** Simplifica o gerenciamento de dependências, aumentando a testabilidade e a manutenção.
- **Suporte a TypeScript:** Aproveita as vantagens do TypeScript, como tipagem estática e melhores ferramentas e práticas de desenvolvimento, evitando alguns problemas relacionado ao Javascript.

#### Jest
Jest foi selecionado para os testes devido a suas capacidades robustas:
- **Simplicidade:** Configuração e API intuitivas.
- **Cobertura de Código:** Fornece relatórios detalhados de cobertura de código.
- **Desempenho:** Rápido e eficiente, adequado para testes unitários e de integração.

### Serviços de Terceiros

#### OpenWeather
Utilizei o OpenWeather para obter dados meteorológicos por suas vantagens:
- **Confiabilidade:** Dados precisos e atualizados sobre condições climáticas.
- **API Simples:** Fácil de integrar e utilizar com uma documentação clara.
- **Desempenho:** API confiável e latência baixíssima nas respostas, além de ter versão gratuita que atende a necessidade do teste técnico.

#### Spotify
O Spotify foi escolhido para fornecer sugestões musicais:
- **Ampla Biblioteca:** Acesso a uma vasta coleção de músicas e playlists relacionadas ao desafio.
- **Personalização:** Permite recomendações personalizadas com base nos dados fornecidos.
- **Desempenho:** Assim como a da OpenWeather, alta disponibilidade, latência baixa e versão gratuita para utilização, além de uma documentação simples.

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/diego-salves/company-hero-teste
   cd company-hero-test

2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo `.env:`
    OPENWEATHER_API_KEY=your_openweather_api_key
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

Para criá-las acesse a documentação referente a cada serviço através dos links:

[Spotify](https://developer.spotify.com/documentation/web-api)
[OpenWeather](https://openweathermap.org/api)

4. Execute a aplicação:
    npm run start

5. Para rodar os testes:
    npm run test

## Endpoints

### `GET /suggest-music`

Sugere músicas com base na temperatura da cidade.

#### Parâmetros

- `city` (query): Nome da cidade para obter a temperatura seguindo os padrões solicitados:
- Se a temperatura:
    - Estiver acima de 25ºC, o serviço deverá sugerir músicas Pop
    - Estiver entre 10ºC e 25ºC, o serviço deverá sugerir músicas de Rock
    - Estiver abaixo de 10ºC, o serviço deverá sugerir músicas clássicas

#### Exemplo de Requisição

```bash
curl -X GET "https://company-hero-teste.onrender.com/suggest-music?city=Rio%20de%20Janeiro"
```
#### Exemplo de Resposta
```bash
{
  "playlist": "37i9dQZF1EQpj7X7UK8OOF",
  "track": "1Y373MqadDRtclJNdnUXVc",
  "playlist_url": "https://open.spotify.com/playlist/37i9dQZF1EQpj7X7UK8OOF",
  "feels_like": 19.75,
  "temp": 19.4,
  "temp_max": 20.28,
  "temp_min": 18.32,
  "description": "broken clouds",
  "country": "PT",
  "name": "Chiado",
  "icon": "04n"
}
```

- Mantive dados além da playlist, que foi solicitada no desafio, para utilizá-los num frontend simples.

O mesmo está armazenado no repositório: [Frontend](https://github.com/diego-salves/company-hero-test-frontend)
E publicado no link: [Skywave](https://company-hero-test-frontend.vercel.app/)

### Desenvolvimento Baseado em Trunk (Trunk-Based Development)

Para o desenvolvimento deste projeto, utilizei Trunk Based Development. Apliquei esta metodologia no meu time a 3 anos e gosto por várias razões:

- **Integração Contínua:** A abordagem de trunk-based facilita a integração contínua, permitindo que os desenvolvedores integrem pequenas mudanças frequentemente na branch principal. Isso reduz a complexidade de grandes releases e minimiza os conflitos, claro, requer uma gestão atenta de projetos.

- **Feedback Rápido:** Como as alterações são integradas com frequência, os problemas podem ser detectados e corrigidos rapidamente. Isso acelera o ciclo de feedback e melhora a qualidade do código.

- **Desempenho da Equipe:** Trunk-based development promove uma colaboração mais eficiente entre os membros da equipe, pois todos trabalham no mesmo branch. Isso aumenta a visibilidade das alterações de código e facilita a comunicação e a coordenação.

- **Entrega Contínua:** Esta abordagem é ideal para práticas de entrega contínua, onde o código é frequentemente liberado para produção. Isso garante que a base de código principal esteja sempre em um estado pronto para ser lançado.


## Segurança da Aplicação

No desenvolvimento desta API, utilizei algumas práticas para garantir a segurança dos dados e da aplicação em geral:

- Utilizei um arquivo `.env` para armazenar variáveis de ambiente sensíveis, como chaves de API e credenciais.
- A comunicação com serviços de terceiros é feita utilizando HTTPS, garantindo que os dados transmitidos estejam criptografados e protegidos contra interceptações.
- Validação e sanitização de dados de entrada são cruciais para prevenir ataques como injeção de SQL e cross-site scripting. Na API, os dados de entrada são validados e sanitizados para garantir que apenas dados apropriados sejam processados.
- Manter as dependências atualizadas é essencial para segurança, então utilizei ferramentas como `npm audit` para identificar e corrigir vulnerabilidades em pacotes de terceiros.

## Deployment

O deploy desta aplicação foi realizado na plataforma [Render](https://render.com/). A escolha do Render se deve a:

- **Facilidade de Uso:** Interface intuitiva e processo simplificado para configurar e gerenciar deploys.
- **Automatização:** Suporte a deploys automáticos a partir de repositórios do GitHub, ideal para trunk-based development.
- **Escalabilidade:** Permite que a aplicação escale conforme a demanda aumenta.
- **SSL Automático:** Fornece certificados SSL automáticos, garantindo comunicação segura.
- **Suporte a Variáveis de Ambiente:** Facilita o gerenciamento de chaves de API e outras credenciais sensíveis.
- **Praticidade** Devido ao tempo limitado no desenvolvimento do teste foi bem mais prático que criar uma solução em alguma Cloud mais robusta.

### Processo de Deploy

1. **Conexão ao Repositório:** Integração do repositório GitHub com o Render.
2. **Configuração de Build:** Definição dos comandos de build e start no Render.
3. **Configuração de Variáveis de Ambiente:** Definição das variáveis de ambiente no painel de controle do Render.
4. **Deploy Automático:** Deploy automático a cada push no branch principal do repositório, garantindo a vantagem do trunk-based como mencionado.

**Observação:** Devido ao uso do plano gratuito do Render, a primeira requisição à API pode demorar até 50s, pois o serviço precisa sair do modo de hibernação. Após essa primeira requisição, as respostas subsequentes serão mais rápidas.

### Responsividade

A aplicação é responsiva e pode ser acessada também no aparelho celular.

#### Visualização em Desktop
![Visualização em Desktop](https://drive.google.com/uc?export=view&id=1GchgrB4AxyA_6TBEydRrxyV13d7Oer72)

#### Visualização em Mobile
![Visualização em Mobile](https://drive.google.com/uc?export=view&id=1Gy43yREma4zRqmyQmOIEPulUbskO77Nh)