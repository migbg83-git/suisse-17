# Archwise Troubleshooting

## Problema: Artículo no aparece en /articulos
### Posibles causas:
- description ausente
- slug ausente
- title ausente
- title fuera del frontmatter
- YAML inválido
- article.md corrupto (duplicados, delimitadores incorrectos)
- BOM invisible o saltos de línea previos
- build no genera articles.json

### Diagnóstico:
- Revisar logs de build: buscar "Missing required field"
- Validar que el archivo comience exactamente con `---`
- Usar `console.log(JSON.stringify(fileContent.slice(0,20)))` para verificar el inicio
- Eliminar cualquier carácter antes del primer `---`
- Validar YAML con linters externos si es necesario
- Revisar que sólo exista un bloque frontmatter

### Resolución:
- Añadir los campos obligatorios en el frontmatter
- Eliminar líneas vacías o caracteres invisibles antes de `---`
- Corregir delimitadores YAML
- Eliminar duplicados y limpiar article.md
- Ejecutar `npm run build:content` y revisar logs
- Si persiste, comparar con un artículo que funcione

## Otros problemas detectados
- article.json no generado: revisar metadatos y build
- assets.md incompleto: completar recursos visuales y prompts
- Open Graph incorrecto: revisar assets.md y metadatos
- Analytics no registra visitas: verificar integración
- Search Console no indexa: revisar sitemap y robots.txt

## Recomendaciones
- Mantener logs detallados en cada build
- Validar YAML antes de publicar
- Documentar cada incidente y su resolución en este archivo
