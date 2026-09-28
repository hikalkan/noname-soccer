# Local preview for the landing page (and /play/ when published).
# Usage: .\tools\preview.ps1   or   .\tools\preview.ps1 -Port 9000

param(
	[int]$Port = 8080
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
	Write-Error "python not found on PATH. Install Python or use: npx --yes serve -l $Port"
}

$url = "http://localhost:$Port/"
Write-Host "Serving $root"
Write-Host "Open $url  (Ctrl+C to stop)"
Start-Process $url
python -m http.server $Port
