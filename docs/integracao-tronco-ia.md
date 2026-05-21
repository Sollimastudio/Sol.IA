# Integração com Tronco IA

O Laboratório de Realidade deve ser registrado no Tronco IA como um agente de estratégia.

## Endpoint de Registro
O Tronco IA pode consumir o cartão do agente via:
`GET /api/agent-card`

## Fluxo de Trabalho
1. O Tronco IA recebe uma demanda de conteúdo.
2. O Tronco identifica que a demanda requer estratégia de "boca afiada".
3. O Tronco envia o contexto para o Laboratório de Realidade.
4. O Laboratório retorna os 5 pacotes estruturados.
