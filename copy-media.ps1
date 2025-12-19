# Copy all media files to media-to-convert folder
$sourceDir = "public"
$destDir = "media-to-convert"

# Create destination directory
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

# Copy all image files maintaining directory structure
Get-ChildItem -Path $sourceDir -Recurse -Include *.jpeg,*.jpg,*.png,*.gif | ForEach-Object {
    $relativePath = $_.FullName.Substring((Resolve-Path $sourceDir).Path.Length + 1)
    $destPath = Join-Path $destDir $relativePath
    $destFolder = Split-Path $destPath -Parent
    
    if (-not (Test-Path $destFolder)) {
        New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    }
    
    Copy-Item $_.FullName -Destination $destPath -Force
    Write-Host "Copied: $relativePath"
}

$count = (Get-ChildItem -Path $destDir -Recurse -File).Count
Write-Host "`nTotal files copied: $count"

