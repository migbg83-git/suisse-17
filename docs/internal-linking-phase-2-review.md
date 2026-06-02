# Internal Linking Phase 2 - Production Review

Date: 2026-06-02
Scope: Visual/editorial audit in production (`https://archwise.org/articulos`) for article-11, article-14, article-17, article-20, article-21, article-22.
Constraint respected: no content/code changes applied.

## Executive Summary
The internal linking experience is directionally strong in the Enterprise AI framework core, but Phase 2 is not consistently reflected in production behavior for all target articles.

What works well:
- The 17 -> 20 -> 21 -> 22 narrative path is understandable and mostly strong in-card relevance.
- Card presentation quality is consistent (category, reading time, excerpt, CTA) and visually clean.
- Author rendering is consistent as "Miguel Benito García" for all reviewed targets.

What blocks full Phase 2 confidence:
- Production data and page-level related behavior are inconsistent for medium-priority targets (11, 14) and partially for 20.
- Some related cards still prioritize legacy/context-adjacent pieces over the intended framework progression.
- The cluster signal is clear for readers already in the journey, but weaker for readers entering at article-11 and article-14.

Recommendation:
- Go for article-23 only with a small pre-publish linking alignment pass in production data/output behavior, especially for article-11, article-14, and article-20.

## Findings

### Alta prioridad

1. Phase 2 is not consistently materialized in production related behavior
- Evidence: production feed shows `relatedArticles` empty for `por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia` and `por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia`, while cards are still rendered via mixed behavior.
- Impact: editorial control of framework navigation is partially lost; future linking changes may be non-deterministic.

2. article-20 still promotes a less strategic link for this phase
- Current related set includes `architecture-governance-contexto-compartido` instead of reinforcing a cleaner 20 -> 21 -> 22 conceptual corridor.
- Impact: framework path dilutes at a key hub article.

3. Entry-path clarity from article-11 is weaker than intended
- article-11 currently links to 12 and 13 (good) but introduces `technical-debt-vs-knowledge-debt-ia` in a way that competes with the intended foundational chain.
- Impact: readers can exit the canonical 11 -> 12 -> 13 progression too early.

### Media prioridad

4. 14 <-> 15 works, but contextual spread is still broad
- article-14 includes article-15 (good) and two context-cluster articles, making the bridge to governance/operating model less explicit than planned.
- article-15 links back to article-14 (good), so bidirectionality is present.
- Impact: progression is valid but not maximally focused for framework onboarding.

5. Repetition risk in Enterprise AI core cards
- In 17/20/21/22, repeated appearance of 18/19/20/21/22 can feel cyclical without a stronger "next best step" hierarchy.
- Impact: users may browse laterally instead of moving along an intentional maturity path.

6. Title/excerpt density in cards is high for mobile scanning
- Long titles and long excerpts are high-quality but cognitively heavy in related sections.
- Impact: card intent remains correct, but decision speed decreases on small screens.

### Baja prioridad

7. Minor consistency noise in public listing content style
- Listing includes mixed accenting/casing style in older slugs/titles (example: "Por que..." style in some places).
- Impact: no framework break, but perceived editorial consistency is slightly reduced.

8. Category mix is generally good, with occasional cluster drift
- Governance and Context Engineering cards appear in places where Enterprise AI progression is expected.
- Impact: good topical relevance, lower narrative precision.

## Chain Validation

### 11 -> 12 -> 13
Status: Partially strong
- article-11 surfaces article-12 and article-13 clearly.
- article-12 links to article-11 and article-13.
- article-13 links to article-11 and article-12.
- Weak point: competing side-linking in article-11 can pull readers away from the intended sequence.

### 14 <-> 15
Status: Valid
- article-14 links to article-15.
- article-15 links to article-14.
- Weak point: surrounding links still favor broader cluster exploration over a cleaner step progression.

### 17 -> 20 -> 21 -> 22
Status: Strong
- article-17 links to article-20 and article-21/22 contextually.
- article-20 links to article-21.
- article-21 links to article-22.
- article-22 reinforces the same conceptual layer.
- Weak point: article-20 still includes one less aligned link for this phase objective.

## Per-Article UX and Narrative Notes

### article-11
- Related relevance: good but not fully optimized for linear progression.
- Narrative clarity: medium-high.
- Card UX: clear, but high text density.
- Missing opportunity: stronger priority cue toward article-12 first.

### article-14
- Related relevance: good topical fit.
- Narrative clarity: medium (bridge to 15 exists, but path feels broad).
- Card UX: solid visual consistency.
- Missing opportunity: tighter link set to reinforce handoff to 15 and then governance/operating model.

### article-17
- Related relevance: very good.
- Narrative clarity: high.
- Card UX: strong.
- No major issue.

### article-20
- Related relevance: generally high.
- Narrative clarity: medium-high with one off-path card.
- Card UX: strong.
- Missing opportunity: cleaner 20 -> 21 -> 22 reinforcement.

### article-21
- Related relevance: very good framework continuation.
- Narrative clarity: high.
- Card UX: strong.
- No major issue.

### article-22
- Related relevance: very good and conceptually coherent.
- Narrative clarity: high.
- Card UX: strong.
- No major issue.

## Navigation and Framework Questions

### Does navigation help users understand the framework?
Yes, especially from article-17 onward. It is weaker at early entry points (article-11 and article-14), where side paths still compete with the intended progression.

### Which links are likely surplus for this phase objective?
- In article-20: `architecture-governance-contexto-compartido` (for this specific framework corridor objective).
- In article-11 context: cross-cluster detours that compete with 11 -> 12 -> 13.

### Which links are likely missing or under-prioritized?
- Stronger explicit prioritization from article-11 to article-12 as the immediate next step.
- Cleaner continuity from article-14 into article-15 and then governance/operating-model nodes.

## Author Audit (Production)

Source checked: production article pages and public feed.

Observed in production:
- `Miguel Benito García`: present and rendered on all reviewed target articles.
- `Archwise Editorial`: not observed in the production feed for the current published corpus (author count observed: 0).

Affected target articles reviewed:
- article-11: Miguel Benito García
- article-14: Miguel Benito García
- article-17: Miguel Benito García
- article-20: Miguel Benito García
- article-21: Miguel Benito García
- article-22: Miguel Benito García

## Suggested Improvements

1. Align production related behavior with explicit Phase 2 intent for article-11 and article-14, avoiding implicit/fallback mixing.
2. Replace or deprioritize the off-corridor related card in article-20 to strengthen 20 -> 21 -> 22 continuity.
3. Introduce a "next step" bias in related order for chain-critical pages:
- article-11: prioritize article-12 first, article-13 second.
- article-14: prioritize article-15 first.
- article-20: prioritize article-21 first, article-22 second.
4. Keep card visual system, but consider slightly shorter excerpt length in related blocks for faster mobile scanning.
5. Keep category diversity, but reserve first 2 card positions for framework-sequence continuity where applicable.

## Go / No-Go for article-23

Decision: Conditional Go

Rationale:
- The framework core navigation quality is already good enough to continue editorial production.
- However, a short pre-launch linking alignment in production behavior (11, 14, 20) is strongly recommended to avoid compounding navigation drift when article-23 is introduced.

Practical interpretation:
- Go if the team accepts current minor drift and plans a near-term linking cleanup.
- No-Go if strict framework path consistency is required before any new article release.
