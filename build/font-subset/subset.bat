@echo off

set font_path=font
set font_dist_path=dist
set font_output_path=..\..\public\font

echo Font Subset Tool
echo.

rmdir %font_dist_path% /S /Q
mkdir %font_dist_path%

where pyftsubset --help>nul 2>nul

if %errorlevel%==1 (
    echo Error: Uninstall Python FontTools!!!
    goto :eof
)

for %%f in (%font_path%/*.otf) do (
    echo Start Font Subset: %%f
    pyftsubset %font_path%/%%f --text-file=index.html --output-file=%font_dist_path%/%%f --no-hinting
)

xcopy %font_dist_path% %font_output_path% /S /E /Y>nul

echo.
echo Success!!!