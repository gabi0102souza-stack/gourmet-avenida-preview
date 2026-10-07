# Gourmet Avenida · proposta independente

Website estático para uma apresentação comercial. Não contratado ou aprovado pelo Gourmet Avenida.

## Acesso

- Prévia local: http://127.0.0.1:4186/
- Destino solicitado: GitHub Pages, conta autenticada `gabi0102souza-stack`, repositório sugerido `gourmet-avenida-preview`, branch `main`.
- Site público: https://gabi0102souza-stack.github.io/gourmet-avenida-preview/
- Repositório: https://github.com/gabi0102souza-stack/gourmet-avenida-preview
- Publicação: GitHub Pages ativo e QA público aprovado em 360, 390, 768 e 1440 px.

## Executar

Requer Node.js para o servidor e os scripts opcionais. O website em si não depende de runtime nem de bibliotecas.

```sh
node scripts/serve.cjs
```

O servidor usa 127.0.0.1:4186. Abra essa URL. Para a produção, os arquivos são servidos por GitHub Pages.

## Estrutura

- `index.html`: página principal, conteúdo, links e informações condicionais.
- `styles.css`: layout responsivo, foco, impressão e movimento reduzido.
- `script.js`: menu mobile; o conteúdo e a navegação continuam disponíveis sem JavaScript.
- `fontes.html`: fontes, créditos e limitações em linguagem pública.
- `assets/images/`: fotos reais de arquivo em AVIF/WebP, 640 e 1200 px.
- `scripts/qa.cjs`: teste funcional em navegador de 360, 390, 768 e 1440 px.
- `scripts/build.cjs`: separa somente os arquivos públicos em `.build/`.
- `.nojekyll`: publicação estática direta pelo GitHub Pages na raiz de `main`.
- `docs/`: evidências e relatório de qualidade.

## Conteúdo e atualização

Informações confirmadas, inferências e pendências estão em `docs/RESEARCH.md`. Não publicar preço do dia, pratos fixos, sushi, delivery ou estacionamento antes da confirmação do proprietário. O horário apresentado é divulgado por uma fonte secundária, com data de consulta e orientação para confirmar.

Há divergência entre o endereço divulgado ao visitante (4396) e o cadastral (4400, loja 01); ambos são mencionados, sem escolher a entrada. O mapa pesquisa o estabelecimento pelo nome.

As fotos são de arquivo. Não há licença localizada nem autorização dos fotógrafos. A casa deverá fornecer fotos autorizadas para uso institucional. Não houve geração de comida por IA.

Para publicar o preço posteriormente, registrar valor, unidade de cobrança, data de vigência e responsável. Atualizar `index.html` e a pesquisa na mesma alteração. Valores sem responsável e validade continuam fora da página. Não há feed de cardápio nem sistema automático de pedidos.

## QA

```sh
node --check script.js
node scripts/qa.cjs http://127.0.0.1:4186/
```

O script encontra Playwright no runtime disponibilizado pelo Codex e utiliza Chrome local. Para outro computador, ajustar essas duas localizações ou instalar Playwright. O site não precisa delas.

As imagens já estão otimizadas e versionadas. `scripts/optimize-images.cjs` é uma ferramenta local opcional dependente de Sharp e dos originais em `assets/research/` (ignorados no Git).

## Publicação

O GitHub Pages publica os arquivos estáticos da raiz da branch `main`, com `.nojekyll`. O próprio GitHub executa o deploy, sem workflow personalizado ou dependências de build. A documentação está versionada no repositório público; pesquisa bruta, ferramentas, originais e capturas de QA ficam ignorados. Não há segredos no código. A página inclui `noindex, nofollow`, fontes do sistema e aviso de conceito independente. O script `build.cjs` permanece disponível para gerar um pacote isolado quando necessário.


