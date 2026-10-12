@echo off
title Push Wedding Card to GitHub
echo ==============================================
echo Pushing Wedding Card to GitHub (montasim-mahin/wedding-card)
echo ==============================================
echo.
cd /d "D:\wedding-invitation"
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ==============================================
    echo SUCCESS: Uploaded to GitHub successfully!
    echo Now you can deploy it on Render in 1 click!
    echo ==============================================
) else (
    echo.
    echo If you see an error:
    echo 1. Make sure you created the repo at https://github.com/new?name=wedding-card
    echo 2. If it asks to Sign In, click "Sign in with your browser".
)
echo.
pause
