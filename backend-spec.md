# Pechincha Radar — backend v1

## Objetivo
Receber ofertas de fontes permitidas, validar status e enviar Web Push apenas para pechinchas realmente ativas.

## Fluxo
1. Scheduler chama `/api/check`.
2. Coletores consultam APIs, feeds ou páginas que permitam automação.
3. Normalizar oferta:
   - title
   - price_brl
   - coins
   - level
   - legendary
   - full
   - seller
   - url
   - source
   - status
   - checked_at
4. Se houver qualquer conflito de status, marcar `INDETERMINATE` e não notificar.
5. Aplicar filtros do usuário.
6. Deduplicar por URL + hash dos dados principais.
7. Enviar Web Push.
8. Registrar a oferta para evitar repetição.

## Regra do usuário
Priorizar até R$100; nível 100+; 10+ lendários; FULL; 100M+/500M+/1B+ fichas; itens raros e acesso recuperável. Não usar ZeusX nem GameBoost.

## Importante
O backend só deve coletar dados por métodos permitidos pelos termos/robots/APIs das plataformas. Não contornar CAPTCHA, login, anti-bot ou bloqueios.

## Endpoints sugeridos
POST /api/subscribe
GET  /api/offers
POST /api/check
DELETE /api/subscribe

## Web Push
Usar VAPID:
VAPID_PUBLIC_KEY
VAPID_PRIVATE_KEY
VAPID_SUBJECT

A assinatura do navegador deve ser armazenada no banco junto dos filtros do usuário.
