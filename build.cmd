@echo on
XCOPY index.html .\build\ /Y
tsc -p .
EXIT