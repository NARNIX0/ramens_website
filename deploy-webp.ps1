# Deploy WebP files to public folder and update code references
$webpSource = "ready webp media for website"
$publicDest = "public"

Write-Host "Copying WebP files to public folder..."

# Copy all WebP files maintaining directory structure
Get-ChildItem -Path $webpSource -Recurse -File -Filter *.webp | ForEach-Object {
    $relativePath = $_.FullName.Substring((Resolve-Path $webpSource).Path.Length + 1)
    $destPath = Join-Path $publicDest $relativePath
    $destFolder = Split-Path $destPath -Parent
    
    if (-not (Test-Path $destFolder)) {
        New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    }
    
    Copy-Item $_.FullName -Destination $destPath -Force
    Write-Host "Copied: $relativePath"
}

$count = (Get-ChildItem -Path $webpSource -Recurse -File -Filter *.webp).Count
Write-Host "`nTotal WebP files copied: $count"

