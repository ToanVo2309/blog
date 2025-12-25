# Script để khởi động blog
Write-Host "Đang khởi động blog..." -ForegroundColor Green
Write-Host ""

# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Kiểm tra Node.js
Write-Host "Kiểm tra Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Lỗi: Node.js chưa được cài đặt hoặc chưa có trong PATH!" -ForegroundColor Red
    Write-Host "Vui lòng khởi động lại terminal sau khi cài Node.js" -ForegroundColor Red
    exit 1
}
Write-Host "Node.js: $nodeVersion" -ForegroundColor Green

# Kiểm tra npm
Write-Host "Kiểm tra npm..." -ForegroundColor Yellow
$npmVersion = npm --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Lỗi: npm chưa được cài đặt!" -ForegroundColor Red
    exit 1
}
Write-Host "npm: $npmVersion" -ForegroundColor Green

Write-Host ""
Write-Host "Đang khởi động server..." -ForegroundColor Green
Write-Host "Blog sẽ chạy tại: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Nhấn Ctrl+C để dừng server" -ForegroundColor Yellow
Write-Host ""

# Chạy server
npm run dev

