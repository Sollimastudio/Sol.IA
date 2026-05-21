import { NextResponse } from 'next/server';

export async function GET() {
  const agentCard = {
    id: "laboratorio-realidade",
    name: "Laboratório de Realidade",
    type: "content_strategy_agent",
    version: "1.0.0",
    description: "Agente especializado em roteiros, teses autorais, tendências e comunidade.",
    capabilities: [
      "roteiro_instagram",
      "analise_metricas",
      "criacao_carrossel",
      "tendencias_mercado"
    ],
    output_structure: [
      "Pacote Gravar Agora",
      "Pacote Testar",
      "Pacote Reaproveitar",
      "Pacote Vender Sem Parecer Venda",
      "Próxima Ação da Sol"
    ]
  };

  return NextResponse.json(agentCard);
}
