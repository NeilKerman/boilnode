@echo off
SET command=%1
SET args=%2
SET callpath=%cd%
node  %~dp0/../package/commands/command_handler.js %callpath% %command% %args%