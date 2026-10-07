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

## Público: PASS

URL real: https://gabi0102souza-stack.github.io/gourmet-avenida-preview/
Repositório: https://github.com/gabi0102souza-stack/gourmet-avenida-preview
Conta autenticada: `gabi0102souza-stack`; branch `main`; origem Pages: raiz `/`, com `.nojekyll`.
Primeiro deploy: `pages-build-deployment`, execução 37694814160, concluída com sucesso.

A suíte foi executada novamente contra HTTPS público, não localhost. PASS em 360×844, 390×844, 768×844 e 1440×1000: HTTP 200, assets sem erros HTTP, todas as imagens carregadas, fontes do sistema disponíveis, nenhum erro de JavaScript, sem rolagem lateral, links internos válidos, menu/FAQ funcionais, teclado, noindex/nofollow, navegação sem JavaScript e texto 200% em 390 px. `fontes.html` também respondeu HTTP 200. Capturas públicas ficam em `.qa/public-{360,390,768,1440}.png` e os resultados em `.qa/public-results.json`.

Maps, Instagram e Restaurant Guru responderam HTTP 200 na verificação dos destinos; redes sociais podem solicitar login. Os protocolos de telefone e e-mail estão corretos, sem realizar ligação ou enviar mensagem. Não há botão de delivery não verificado.

Inspeção visual das capturas públicas de desktop/mobile e conferência de CSS/JS/HTML contra os arquivos locais. A atualização final desta documentação não altera a página ou seus assets.

Contrastes medidos: texto principal/fundo 14,67:1; texto secundário/fundo 6,17:1; branco/vermelho 7,10:1; vermelho/faixa clara 6,14:1.
