@echo off
title Subir Calendario Colombia 2026 a GitHub
cd /d "%~dp0"
echo ========================================================
echo   Subiendo proyecto a https://github.com/jhonisalas11-ship-it/calendario-colombia-2026
echo ========================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

echo 1. Verificando estado local...
git status

echo.
echo 2. Enviando cambios a la rama 'main' en GitHub...
echo (Si es la primera vez, se abrira una ventana de tu navegador para autorizar a GitHub)
echo.
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   EXITO: El proyecto fue subido correctamente a GitHub!
    echo   Visitalo en: https://github.com/jhonisalas11-ship-it/calendario-colombia-2026
    echo ========================================================
) else (
    echo.
    echo Ocurrio un error al subir. Asegurate de haber creado el repositorio vacio
    echo 'calendario-colombia-2026' en https://github.com/new antes de hacer push.
)
echo.
pause
