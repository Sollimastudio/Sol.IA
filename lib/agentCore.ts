/**
 * Core logic for the Laboratório de Realidade agent.
 * This handles the transformation of raw ideas into structured content packages.
 */

export interface ContentPackage {
  gravarAgora: string[];
  testar: string[];
  reaproveitar: string[];
  venderSemParecerVenda: string[];
  proximaAcao: string;
}

export function processContent(rawInput: string): ContentPackage {
  const inputLower = rawInput.toLowerCase();
  const contentPackage: ContentPackage = {
    gravarAgora: [],
    testar: [],
    reaproveitar: [],
    venderSemParecerVenda: [],
    proximaAcao: "",
  };

  // Lógica de exemplo para categorizar o conteúdo
  if (inputLower.includes("roteiro") || inputLower.includes("script")) {
    contentPackage.gravarAgora.push("Crie um roteiro detalhado para vídeo curto (Reels/TikTok) com base na sua ideia.");
    contentPackage.proximaAcao = "Grave o vídeo com o roteiro criado.";
  }

  if (inputLower.includes("ideia") || inputLower.includes("tema")) {
    contentPackage.testar.push("Desenvolva 3 variações da sua ideia para testar qual ressoa mais com a audiência.");
    contentPackage.reaproveitar.push("Busque conteúdos antigos relacionados à sua ideia e veja como podem ser atualizados.");
    contentPackage.proximaAcao = "Teste as variações da ideia e analise os resultados.";
  }

  if (inputLower.includes("venda") || inputLower.includes("produto") || inputLower.includes("serviço")) {
    contentPackage.venderSemParecerVenda.push("Crie um conteúdo que aborde os benefícios do seu produto/serviço de forma indireta e envolvente.");
    contentPackage.proximaAcao = "Publique o conteúdo de venda sutil e monitore o engajamento.";
  }

  if (inputLower.includes("métricas") || inputLower.includes("engajamento")) {
    contentPackage.reaproveitar.push("Analise seus posts com maior engajamento e identifique padrões para replicar.");
    contentPackage.proximaAcao = "Aplique os padrões identificados em novos conteúdos.";
  }

  if (contentPackage.gravarAgora.length === 0 && contentPackage.testar.length === 0 && contentPackage.reaproveitar.length === 0 && contentPackage.venderSemParecerVenda.length === 0) {
    contentPackage.proximaAcao = "Por favor, forneça uma ideia ou tema mais específico para que eu possa categorizar.";
  }

  if (!contentPackage.proximaAcao) {
    contentPackage.proximaAcao = "Analise os pacotes gerados e escolha sua próxima ação.";
  }

  return contentPackage;
}
