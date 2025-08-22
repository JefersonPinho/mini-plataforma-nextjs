# Mini Plataforma de E-commerce com Next.js

![Mini Plataforma Screenshot](https://i.imgur.com/your-screenshot-url.png) <!-- Opcional: Tire um screenshot do seu projeto e suba no imgur.com para colocar o link aqui -->

Uma aplicação web moderna e responsiva que simula uma pequena plataforma de e-commerce. O projeto foi desenvolvido com Next.js e TypeScript, demonstrando as melhores práticas de desenvolvimento, desde a busca de dados estáticos até testes End-to-End.

**🔗 Link do Projeto:** [**Acesse a demonstração ao vivo aqui!**](https://SEU-LINK-DA-VERCEL.vercel.app) <!-- Coloque o link que a Vercel te deu aqui -->

---

## ✨ Features

-   **Listagem de Produtos:** Página inicial que exibe produtos consumidos de uma API externa (`FakeStoreAPI`).
-   **Páginas de Detalhes Dinâmicas:** Cada produto possui sua própria página, gerada estaticamente para máxima performance (`getStaticPaths` e `getStaticProps`).
-   **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e dispositivos móveis, construída com Tailwind CSS.
-   **Tratamento de Erros:** A aplicação lida de forma robusta com falhas na API, exibindo páginas de erro apropriadas.
-   **Notificações (Toasts):** Feedback visual para o usuário em ações como "Adicionar ao Carrinho" (simulado).
-   **Testes End-to-End:** Testes automatizados com Playwright para garantir que os fluxos críticos do usuário funcionem corretamente.

---

## 📝 Documentação e Processo

Além do código, este projeto inclui documentação que simula processos de desenvolvimento do mundo real, demonstrando a comunicação entre as equipes técnica e de Customer Success (CS).

-   **[📄 Simulação de Resposta a Bug (CS & Dev)](https://www.notion.so/Simula-o-de-Resposta-a-Bug-CS-Dev-2575a7ac3ac780568a07f07dc10c58e1)**
    > *Este documento Notion detalha o ciclo completo de um bug reportado, desde o feedback inicial do cliente, passando pela análise técnica e a correção, até a comunicação final da solução para o time de CS.*

---

## 🚀 Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) 14+
-   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes UI:** [Material UI (MUI)](https://mui.com/) (para ícones)
-   **Testes E2E:** [Playwright](https://playwright.dev/)
-   **Deploy:** [Vercel](https://vercel.com/)

---

## 🏁 Primeiros Passos

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 20.x ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd mini-plataforma
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

---

## 🧪 Rodando os Testes

Este projeto utiliza Playwright para testes End-to-End.

1.  Para rodar os testes em modo headless (sem interface gráfica):
    ```bash
    npx playwright test
    ```

2.  Para abrir a interface do Playwright e rodar os testes de forma visual:
    ```bash
    npx playwright test --ui
    ```

3.  Para ver o último relatório de teste gerado:
    ```bash
    npx playwright show-report
    ```

---

## 📂 Estrutura do Projeto
```bash
mini-plataforma/
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── README.md              # Documentação do projeto
├── next.config.ts         # Configurações do Next.js
├── package.json           # Dependências e scripts
├── playwright.config.ts   # Configurações dos testes E2E com Playwright
├── tailwind.config.js     # Configurações de tema do Tailwind CSS
├── tsconfig.json          # Configurações do TypeScript
│
├── public/                # Arquivos estáticos (imagens, fontes, etc.)
│
├── src/
│   ├── components/        # Componentes React reutilizáveis (ex: ProductCard, ProductDetail)
│   ├── pages/             # Rotas e páginas da aplicação
│   │   ├── products/
│   │   │   └── [id].tsx   # Rota dinâmica para os detalhes de cada produto
│   │   ├── _app.tsx       # Componente global que envolve todas as páginas
│   │   └── index.tsx      # Página inicial (rota '/')
│   ├── styles/            # Arquivos de estilo globais
│   └── types/             # Definições de tipos e interfaces do TypeScript (ex: Product.ts)
│
└── tests/                 # Suítes de testes End-to-End do Playwright
    └── products.spec.ts   # Testes para o fluxo de produtos
```
