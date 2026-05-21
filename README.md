# Sol.IA — Laboratório de Realidade

Este é o módulo **Laboratório de Realidade**, um agente especializado em estratégia de conteúdo, comunidade e tendências, integrado ao ecossistema **Sol.IA / Tronco IA**.

## 🚀 Visão Geral

O Laboratório de Realidade atua como um "bisturi com Wi-Fi", transformando teses brutas e tendências em conteúdo de alto impacto (roteiros, carrosséis, análises de métricas) focado em salvamento, compartilhamento e conversão.

## 🛠️ Estrutura do Projeto

- `app/`: Interface visual em Next.js, incluindo a nova interface de chat.
- `lib/`: Lógica central do agente (`agentCore.ts`) com a função `processContent`.
- `data/`: Instruções e bases de conhecimento.
- `docs/`: Documentação de integração e roadmap.
- `api/agent-card`: Endpoint para o cartão do agente.
- `api/process-content`: Novo endpoint para processamento de conteúdo.

## 🔗 Integração com Tronco IA

Este módulo foi desenhado para ser consumido pelo **Tronco IA (Jarvis)**, fornecendo saídas estruturadas:
1. Pacote Gravar Agora
2. Pacote Testar
3. Pacote Reaproveitar
4. Pacote Vender Sem Parecer Venda
5. Próxima Ação da Sol

## 💻 Como Rodar

Para iniciar o projeto localmente:

1.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

    O aplicativo estará disponível em `http://localhost:3000`.

## 💬 Como Usar a Interface de Chat

1.  Acesse a página inicial do Laboratório de Realidade no seu navegador.
2.  Na caixa de texto, cole sua ideia ou tema para o qual deseja gerar pacotes de conteúdo.
3.  Clique em "Processar Ideia".
4.  Os 5 pacotes de conteúdo (Gravar Agora, Testar, Reaproveitar, Vender Sem Parecer Venda, Próxima Ação da Sol) serão exibidos na tela com base na sua entrada.

## ⚙️ Endpoints da API

-   **GET `/api/agent-card`**: Retorna as informações do cartão do agente.
-   **POST `/api/process-content`**: Recebe um `rawInput` (string) no corpo da requisição e retorna um `ContentPackage` (JSON) com os 5 pacotes de conteúdo processados.

Desenvolvido para **Sol Lima**.
