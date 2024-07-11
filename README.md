# Music Suggestion API

## Descrição

Este serviço sugere músicas aos usuários com base na temperatura de uma cidade. Utiliza dados de clima do OpenWeather e recomendações de músicas do Spotify.

## Justificativas

### Padrão de API

Optamos por utilizar o padrão REST para nossa API devido à sua simplicidade e ampla adoção. As APIs RESTful são facilmente compreensíveis e utilizáveis, o que facilita a integração com outros serviços e a manutenção do código. Além disso, o uso de métodos HTTP padrão (GET, POST, etc.) permite uma interação clara e eficiente com o serviço.

### Linguagem de Programação e Frameworks

#### Node.js
Escolhemos o Node.js como a base de desenvolvimento por diversas razões:
- **Desempenho:** O Node.js é conhecido por sua alta performance em aplicações I/O intensivas devido ao seu modelo assíncrono e orientado a eventos.
- **Comunidade:** Possui uma grande comunidade, o que facilita o acesso a bibliotecas, ferramentas e suporte.
- **JavaScript:** Permite o uso de JavaScript no backend, a mesma linguagem usada no frontend, promovendo um desenvolvimento mais coeso e reduzindo a curva de aprendizado.

#### NestJS
NestJS foi o framework escolhido para estruturar o serviço por seus diversos benefícios:
- **Modularidade:** Facilita a organização e a escalabilidade do código através de uma arquitetura modular.
- **Injeção de Dependência:** Simplifica o gerenciamento de dependências, aumentando a testabilidade e a manutenção.
- **Suporte a TypeScript:** Aproveita as vantagens do TypeScript, como tipagem estática e melhores ferramentas de desenvolvimento.

#### Jest
Jest foi selecionado para os testes devido a suas capacidades robustas:
- **Simplicidade:** Configuração e API intuitivas.
- **Cobertura de Código:** Fornece relatórios detalhados de cobertura de código.
- **Desempenho:** Rápido e eficiente, adequado para testes unitários e de integração.

### Serviços de Terceiros

#### OpenWeather
Utilizamos o OpenWeather para obter dados meteorológicos por suas vantagens:
- **Confiabilidade:** Dados precisos e atualizados sobre condições climáticas.
- **API Simples:** Fácil de integrar e utilizar com uma documentação clara.

#### Spotify
O Spotify foi escolhido para fornecer sugestões musicais:
- **Ampla Biblioteca:** Acesso a uma vasta coleção de músicas e playlists.
- **Personalização:** Permite recomendações personalizadas com base nos dados fornecidos.

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2. Instale as dependências:
   ```bash
   npm install

3. Configure as variáveis de ambiente no arquivo `.env:`
    OPENWEATHER_API_KEY=your_openweather_api_key
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

4. Execute a aplicação:
    npm run start

5. Para rodar os testes:
    npm run test

## Endpoints

### `GET /suggest-music`

Sugere músicas com base na temperatura da cidade.

#### Parâmetros

- `city` (query): Nome da cidade para obter a temperatura.

#### Exemplo de Requisição

```bash
curl -X GET "https://company-hero-teste.onrender.com/suggest-music?city=Rio%20de%20Janeiro"
```
#### Exemplo de Resposta
```bash
{
  "track": "Summer Song",
  "playlist": "Summer Hits",
  "temp": 30,
  "feels_like": 32,
  "temp_min": 25,
  "temp_max": 35,
  "pressure": 1013,
  "humidity": 60,
  "description": "clear sky",
  "icon": "01d",
  "name": "Rio de Janeiro",
  "country": "BR"
}
