# Progresso da Entrega — SIAC Website

> Atualizado em tempo real. Cada item só é marcado ✅ depois de testado de verdade.
> **Deploy (Prioridade 4) está EXPLICITAMENTE BLOQUEADO até confirmação do cliente amanhã de manhã.**

---

## Setup — Git/GitHub

- [x] Verificado: não havia repositório Git no projeto (`git status` → "not a git repository")
- [x] Verificado: `gh` (GitHub CLI) não está instalado neste ambiente
- [x] `git init` executado localmente
- [x] Commit inicial local criado (baseline do projeto)
- [ ] Remote do GitHub configurado
- [ ] Push testado e funcionando

**⚠️ BLOQUEIO:** Não há URL de repositório GitHub confirmada nem credenciais configuradas neste ambiente
para autenticar push. Não tenho como resolver a parte de "push funcionando" sem que você informe a URL do
repositório (e, se for privado, autentique — por exemplo rodando `gh auth login` manualmente ou configurando
uma credential helper). **Isso não bloqueia o trabalho desta noite**: todos os commits abaixo são LOCAIS
(`git commit`, sem `git push`), exatamente como pedido. Amanhã, me passe a URL do repo (ex.:
`https://github.com/seu-usuario/siac-website.git`) que eu configuro o remote e testamos o push antes do deploy.

---

## PRIORIDADE 1 — Conteúdo e Português

- [x] Hero — revisado; corrigida inconsistência de capitalização no stat "ativos protegidos"
- [x] Manifesto / Quem Somos — texto oficial do manual de marca, sem alterações necessárias
- [x] Soluções (Elastic Gallery + modais "Saiba mais") — revisado, reflete os 3 serviços reais (ERP Crítico, Resiliência Cibernética, Operação de TI)
- [x] Ciclo SIAC — revisado (Diagnosticar/Estabilizar/Operar/Evoluir), tom Sábio mantido
- [x] Casos de Sucesso (depoimentos) — 5 depoimentos revisados, linguagem natural e consistente
- [x] Parceiros — revisado
- [x] Contato — revisado
- [x] Footer — revisado
- [x] Política de Privacidade — revisado; corrigido erro de concordância ("qualquer desses direitos" → "qualquer um desses direitos")
- [x] Conferido em modo claro e escuro — testado ao vivo no navegador (localhost:3000), ambos os temas renderizando corretamente, contraste dos labels e liquid glass ok
- [x] Commit local da Prioridade 1

## PRIORIDADE 2 — Responsividade Mobile e Tablet

- [ ] Teste em mobile (viewport ~375px)
- [ ] Teste em tablet (viewport ~768px)
- [ ] Correções de layout aplicadas (se necessário)
- [ ] Conferido em modo claro e escuro no mobile/tablet
- [ ] Screenshot mobile — Hero
- [ ] Screenshot mobile — Soluções
- [ ] Screenshot mobile — Contato
- [ ] Commit local da Prioridade 2

## PRIORIDADE 3 — Otimização e Bugs Gerais

- [ ] Build de produção rodado
- [ ] Zero erros no console confirmado
- [ ] Otimização de imagens/componentes pesados (sem mudar visual aprovado)
- [ ] Varredura de bugs visuais (sobreposição, corte, animação travada, contraste)
- [ ] Links do menu testados (Soluções, Casos de Sucesso, Quem Somos, Contato)
- [ ] Botão WhatsApp testado
- [ ] Commit local da Prioridade 3

## PRIORIDADE 4 — Deploy

- [ ] **NÃO EXECUTAR** — aguardando confirmação do cliente amanhã de manhã.

---

## Log

- 2026-09-01 — Início do trabalho noturno. Git inicializado localmente; bloqueio de push documentado acima. Iniciando Prioridade 1.
