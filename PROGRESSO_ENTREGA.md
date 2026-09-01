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

- [x] Teste em mobile (375px) — testado ao vivo: Hero, menu, Soluções (accordion + modal "Saiba mais"), Ciclo SIAC, Casos de Sucesso, Manifesto, Contato (formulário), Footer, Política de Privacidade
- [x] Teste em tablet (768px) — **bug real encontrado e corrigido**: em 768px a navbar desktop (logo + 4 links + toggle + CTA) transbordava da tela, cortando o botão "Falar Conosco" e criando scroll horizontal
- [x] Correções de layout aplicadas:
  - **Bug crítico de navegação mobile**: o menu (Soluções/Casos de Sucesso/Quem Somos/Contato) ficava 100% inacessível no mobile — não existia nenhum substituto para a lista `hidden md:flex`. Criado menu hambúrguer (`src/components/Nav.tsx`) com painel modal, testado (abre, navega, fecha).
  - **Bug de overflow no tablet**: breakpoint do menu desktop elevado de `md` (768px) para `lg` (1024px) — agora tablet usa o mesmo hambúrguer do mobile em vez de tentar caber tudo em uma linha.
- [x] Conferido em modo claro e escuro no mobile/tablet — ambos testados ao vivo no navegador
- [x] Screenshot mobile — Hero (enviado ao usuário)
- [x] Screenshot mobile — Soluções (enviado ao usuário)
- [x] Screenshot mobile — Contato (enviado ao usuário)
- [x] Commit local da Prioridade 2

## PRIORIDADE 3 — Otimização e Bugs Gerais

- [x] Build de produção rodado (`npm run build`) — compilou limpo, 0 erros
- [x] Zero erros no console confirmado — testado em aba nova do navegador, sem nenhum erro
- [x] Otimização de imagens/componentes pesados: adicionado `loading="lazy"` + `decoding="async"` nas imagens placeholder (Hero/Manifesto/Soluções), sem alteração visual; eliminado o único warning de lint do build (`<img>` sem otimização no modal de depoimentos, mesma exceção já documentada em outros lugares do projeto)
- [x] Varredura de bugs visuais — nenhuma sobreposição/corte/animação travada encontrada em desktop, tablet ou mobile, claro e escuro
- [x] Links do menu testados (Soluções, Casos de Sucesso, Quem Somos, Contato) — **bug real encontrado e corrigido**: o link "Casos de Sucesso" não navegava (a seção tinha `overflow-hidden` aplicado diretamente no elemento com o `id`, o que quebra a navegação por âncora nesse navegador/engine). Corrigido em `src/components/SuccessStories.tsx`, testado e confirmado funcionando junto com os outros 3 links.
- [x] Botão WhatsApp testado — URL, número e mensagem pré-preenchida corretos, abre em nova aba com `rel="noopener noreferrer"`
- [x] Commit local da Prioridade 3

## PRIORIDADE 4 — Deploy

- [ ] **NÃO EXECUTAR** — aguardando confirmação do cliente amanhã de manhã.

---

## Log

- 2026-09-01 — Início do trabalho noturno. Git inicializado localmente; bloqueio de push documentado acima. Iniciando Prioridade 1.
