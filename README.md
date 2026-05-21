# Sol.IA — Laboratório de Realidade

Este é o módulo **Laboratório de Realidade**, um agente especializado em estratégia de conteúdo, comunidade e tendências, integrado ao ecossistema **Sol.IA / Tronco IA**.

## 🚀 Visão Geral

O Laboratório de Realidade atua como um "bisturi com Wi-Fi", transformando teses brutas e tendências em conteúdo de alto impacto (roteiros, carrosséis, análises de métricas) focado em salvamento, compartilhamento e conversão. Agora, com a inteligência de uma IA real, ele gera respostas completas e estruturadas.

## 🛠️ Estrutura do Projeto

- `app/`: Interface visual em Next.js, incluindo a interface de chat aprimorada.
- `lib/`: Lógica central do agente (`agentCore.ts`) e o `systemPrompt.ts` com o prompt da IA.
- `data/`: Instruções e bases de conhecimento.
- `docs/`: Documentação de integração e roadmap.
- `api/agent-card`: Endpoint para o cartão do agente.
- `api/process-content`: Endpoint para processamento de conteúdo, agora integrado com a API da OpenAI.

## 🔗 Integração com Tronco IA

Este módulo foi desenhado para ser consumido pelo **Tronco IA (Jarvis)**, fornecendo saídas estruturadas:
1. Pacote Gravar Agora
2. Pacote Testar
3. Pacote Reaproveitar
4. Pacote Vender Sem Parecer Venda
5. Próxima Ação da Sol

## 💻 Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Sollimastudio/Sol.IA.git
    cd Sol.IA
    ```

2.  **Crie o arquivo `.env.local`:**
    Copie o conteúdo de `.env.example` para um novo arquivo chamado `.env.local` na raiz do projeto:
    ```bash
    cp .env.example .env.local
    ```

3.  **Configure sua chave da OpenAI:**
    Edite o arquivo `.env.local` e substitua `coloque_sua_chave_aqui` pela sua `OPENAI_API_KEY`:
    ```
    OPENAI_API_KEY=sua_chave_secreta_da_openai_aqui
    ```

4.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

    O aplicativo estará disponível em `http://localhost:3000`.

## 💬 Como Usar a Interface de Chat

1.  Acesse a página inicial do Laboratório de Realidade no seu navegador.
2.  Na caixa de texto, cole sua ideia ou tema para o qual deseja gerar pacotes de conteúdo.
3.  Clique em "Processar Ideia".
4.  Os 5 pacotes de conteúdo serão exibidos na tela, gerados pela IA.
5.  Use os botões "Copiar Pacote Completo" para copiar todo o resultado ou "Limpar" para resetar a interface.

## ⚙️ Endpoints da API

-   **GET `/api/agent-card`**: Retorna as informações do cartão do agente.
-   **POST `/api/process-content`**: Recebe um `rawInput` (string) no corpo da requisição e retorna um `ContentPackage` (JSON) com os 5 pacotes de conteúdo processados pela IA.

## 🚀 Deploy na Vercel

Para fazer o deploy na Vercel, siga estes passos:

1.  Conecte seu repositório GitHub (`Sollimastudio/Sol.IA`) à Vercel.
2.  Durante a configuração do projeto na Vercel, adicione a variável de ambiente `OPENAI_API_KEY` com sua chave secreta da OpenAI. Certifique-se de que ela esteja configurada para o ambiente de produção e, se desejar, para o ambiente de preview também.

Desenvolvido para **Sol Lima**.
