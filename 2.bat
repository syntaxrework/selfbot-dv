@echo off
title All Ban Tool

if exist node_modules\ (
  node index
  pause
) else (
  call npm i >> NUL
  node index
  pause
)