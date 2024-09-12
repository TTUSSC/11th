Remove-Item .\dist\* -Force
npm run build
Copy-Item .\dist\index.html .\public\404.html
git add .\public\404.html
git commit -m "Update 404.html"
git push