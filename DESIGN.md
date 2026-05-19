---
name: Ayrton Pedrosa Advocacia
description: Escritório de advocacia boutique focado em soluções jurídicas de alto padrão.
colors:
  primary: "#A88B4A"
  neutral-bg: "#0B2418"
  cream: "#F9F8F3"
  foreground: "#F1F5F9"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
---

# Design System: Ayrton Pedrosa

## 1. Overview

**Creative North Star: "Solidez Atemporal"**

O sistema visual de Ayrton Pedrosa é construído sobre a tensão equilibrada entre o prestígio histórico do Direito e a agilidade da inovação jurídica contemporânea. Ele utiliza uma paleta profunda e "veludada" para criar um ambiente de exclusividade e foco, onde cada elemento gráfico serve para reforçar a autoridade e a discrição.

Este sistema rejeita explicitamente a estética de "escritórios populares", evitando cores berrantes, excesso de clichês visuais e layouts genéricos. Em vez disso, foca em tipografia editorial, espaços negativos amplos e micro-animações que transmitem competência técnica.

**Key Characteristics:**

- Tipografia serifada clássica para títulos e logos.
- Paleta de cores escura e luxuosa com acentos em ouro.
- Transições de movimento fluidas e orgânicas (via Framer Motion).
- Rigor geométrico com bordas levemente suavizadas ou nítidas.

## 2. Colors

A paleta é centrada em tons de "Velvet" (verde profundo/negro) e "Gold" (ouro fosco), evocando a atmosfera de bibliotecas jurídicas clássicas e escritórios executivos.

### Primary

- **Antique Gold** (#A88B4A / oklch(0.68 0.11 75)): Utilizado para acentos estratégicos, divisores decorativos e estados de destaque. Representa o valor, a excelência e a solidez.

### Neutral

- **Deep Velvet** (#0B2418): A cor base de fundo para seções de impacto. Um verde tão profundo que beira o negro, proporcionando um contraste sofisticado com o ouro.
- **Ivory Cream** (#F9F8F3 / oklch(0.97 0.012 80)): Utilizada em seções claras para alternância de ritmo e respiro visual. Um tom de creme clássico e luminoso.
- **Pure White/Slate** (#F1F5F9): Para textos de corpo e leitura, garantindo conformidade com acessibilidade sobre fundos escuros.

**The Rarity Rule.** O uso do ouro deve ser restrito a ≤10% da interface. Sua força reside em sua escassez, guiando o olhar do usuário para elementos de ação ou títulos de autoridade.

## 3. Typography

**Display Font:** Cormorant Garamond (Serif)
**Body Font:** Inter (Sans-serif)

**Character:** Uma combinação que une a eloquência do Direito clássico (Cormorant) com a precisão e clareza da tecnologia moderna (Inter).

### Hierarchy

- **Display** (Medium, clamp(2.5rem, 7vw, 4.5rem), 1.1): Reservado para os títulos principais da Hero e seções de destaque.
- **Headline** (Medium, 2.25rem, 1.2): Títulos de seções intermediárias.
- **Body** (Regular, 1rem, 1.6): Texto de leitura. Máximo de 75ch para conforto visual.
- **Label** (Medium, 0.75rem, uppercase, tracking-widest): Metadados, taglines e pequenos rótulos de navegação.

## 4. Elevation

O sistema é predominantemente plano e focado em texturas e cores para profundidade, mas utiliza sombras técnicas para elevar componentes interativos.

### Shadow Vocabulary

- **Elegant Shadow** (0 30px 80px -30px rgba(0,0,0,0.6)): Para elementos que precisam flutuar sobre o fundo, como modais ou cards de destaque.
- **Gold Glow** (0 0 40px -10px rgba(197, 160, 89, 0.4)): Utilizado sutilmente em ícones ou botões ativos para simular iluminação física.

## 5. Components

### Buttons

- **Shape:** Cantos levemente arredondados (4px) ou nítidos.
- **Hero Variant:** Fundo Velvet, borda Gold, texto Gold. Transição suave no hover com deslocamento lateral do ícone.
- **Action Variant:** Fundo Gold sólido com texto escuro para máxima visibilidade em CTAs secundários.

### Cards / Containers

- **Corner Style:** 8px a 12px para suavizar a seriedade da paleta escura.
- **Background:** Variações de Velvet com 5% a 10% de luminosidade extra para separação de planos.

### Navigation

- **Style:** Minimalista, com efeito de vidro fosco (glassmorphism) sutil para manter a profundidade do fundo visível.

## 6. Do's and Don'ts

### Do:

- **Do** usar espaços negativos amplos para permitir que a tipografia "respire".
- **Do** manter as animações lentas e majestosas (ease-out-expo).
- **Do** garantir contraste de pelo menos 7:1 para textos importantes em fundos Velvet.

### Don't:

- **Don't** usar bordas coloridas grossas em cards (evitar o estilo "SaaS genérico").
- **Don't** utilizar fontes serifadas em itálico para números de telefone ou dados técnicos (compromete a legibilidade).
- **Don't** sobrecarregar o site com ícones genéricos ou animações frenéticas que quebrem a sobriedade.
- **Don't** permitir que o layout pareça um escritório "popular" com poluição de informações.
