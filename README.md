# Pechincha Radar v1

Primeira versão do aplicativo web/PWA.

## O que já existe
- Interface mobile
- Filtros de preço, fichas, nível, lendários e FULL
- Salvamento local dos filtros
- Pedido de permissão para notificações
- Service Worker
- Estrutura pronta para Web Push
- Especificação do backend e das regras de validação

## Como testar
Sirva a pasta por HTTPS ou localhost. PWA e Web Push dependem de contexto seguro.

Exemplo local:
`python -m http.server 8080`

Depois abra:
`http://localhost:8080`

## Para virar um radar 24/7
É necessário hospedar o frontend e um backend com scheduler, banco e Web Push. Esta conversa não tem um mecanismo de publicação pública automática, então este pacote é a base pronta para deploy.

## Próxima etapa recomendada
Implementar o backend em Cloudflare Workers/Supabase/Firebase ou outro provedor, cadastrar apenas fontes permitidas e configurar VAPID + cron.
