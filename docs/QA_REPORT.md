# QA · 7 de outubro de 2026

## Local: PASS

URL testada: http://127.0.0.1:4186/

| Viewport | Render | Fotos | Rolagem lateral | Menu/FAQ |
|---|---|---|---|---|
| 360×844 | PASS | PASS | Nenhuma | PASS |
| 390×844 | PASS | PASS | Nenhuma | PASS |
| 768×844 | PASS | PASS | Nenhuma | PASS |
| 1440×1000 | PASS | PASS | Nenhuma | PASS |

Testes: HTTP 200; recursos locais sem 4xx/5xx; todas as imagens com largura natural válida; nenhum erro de JavaScript; todos os anchors internos existem; meta `noindex, nofollow`; skip link recebe primeiro Tab; menu mobile abre, Escape fecha e devolve foco; FAQ nativo abre; navegação disponível sem JavaScript; texto ampliado a 200% em 390 px sem overflow. Um problema de quebra de títulos foi corrigido e a suíte passou depois da correção.

Inspeção visual: capturas completas de 1440/390 px e recortes em resolução original. Fotos reais preservam marcas. Legendas, declaração de conceito e fontes estão presentes. Fontes do sistema: sem chamada externa de fontes. AVIF/WebP responsivos; lazy loading abaixo do hero. JavaScript do produto ~1,1 KB, sem dependências. Capturas/evidência bruta ficam ignoradas em `.qa/`.

## Links

- Telefone: `tel:+554134342143`, identidade confirmada em portal municipal e diretórios; não foi realizada ligação.
- Instagram: URL oficial indicada pelo portal municipal; conteúdo pode exigir login.
- Maps: busca pelo nome “Gourmet Avenida Curitiba”, sem endereço ou coordenada escolhidos arbitrariamente.
- E-mail: `mailto:c.ribes@hotmail.com`, cadastrado; nenhuma mensagem enviada.
- Avaliações: Restaurant Guru, fonte identificada; não congelamos nota divergente.
- Fontes: página local acessível com URLs de origem.
- Delivery: CTA de pedido omitido; não há canal ativo verificado. FAQ encaminha para confirmação.

## Acessibilidade e desempenho

HTML semântico, headings, landmarks, alt contextual, foco contrastante, link para pular, botões reais, details/summary nativo, `aria-expanded` sincronizado, movimento reduzido e funcionamento sem JS. Contraste das cores de texto principais atende razão 4,5:1; não se afirma auditoria WCAG completa. Não foi realizado teste com leitor de tela. Não há métricas Lighthouse afirmadas sem medição. Sem analytics ou embeds de terceiros.

## Público: PENDING

Login oficial confirmado na conta `gabi0102souza-stack`. Publicação em andamento usando a raiz de `main`. A URL de produção será testada após deploy, incluindo fonte, CSS, JavaScript, assets e links em desktop/mobile.

