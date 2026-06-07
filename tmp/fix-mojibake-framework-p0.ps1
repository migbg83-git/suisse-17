$targets = @(
'c:\suisse-17\docs\framework-discovery.md',
'c:\suisse-17\docs\framework-architecture.md',
'c:\suisse-17\docs\framework-content.md',
'c:\suisse-17\docs\framework-v2-simplification.md',
'c:\suisse-17\docs\framework-ui-spec.md',
'c:\suisse-17\docs\framework-visual-design-spec.md',
'c:\suisse-17\sites\enterprise-ai\archwise\src\app\pages\framework\framework.component.scss',
'c:\suisse-17\sites\enterprise-ai\archwise\src\app\pages\framework\components\framework-layer-map\framework-layer-map.component.scss',
'c:\suisse-17\sites\enterprise-ai\archwise\src\app\pages\framework\components\framework-layer-detail\framework-layer-detail.component.html',
'c:\suisse-17\sites\enterprise-ai\archwise\src\app\pages\framework\components\framework-reading-path\framework-reading-path.component.html',
'c:\suisse-17\sites\enterprise-ai\archwise\src\app\pages\framework\components\framework-navigator\framework-navigator.component.html'
)

$cp1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($f in $targets) {
  if (-not (Test-Path $f)) { continue }

  $c = Get-Content -Raw -LiteralPath $f
  if ($c -match '[\u00C2\u00C3\u00E2]') {
    $bytes = $cp1252.GetBytes($c)
    $fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
    Set-Content -LiteralPath $f -Value $fixed -Encoding UTF8
    Write-Output "fixed: $f"
  }
}
