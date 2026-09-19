#!/usr/bin/env python3
from pathlib import Path
import re
ROOT=Path(__file__).resolve().parents[1]
source=(ROOT/'assets/data.js').read_text()
assert 'https://raw.githubusercontent.com/SUT-CS-MLSD/MLSD-Fall2025/main/files/' in source
for name in ('index.html','assets/app.js','assets/style.css'):
    assert (ROOT/name).is_file(), name
for name in re.findall(r'"image": "([^"]+)"',source):
    assert (ROOT/'assets/images'/name).is_file(), name
material=ROOT.parent/'MLSD-Fall2025'/'files'
if material.exists():
    for name in re.findall(r"(?:file|brief|zip):\s*'([^']+)'",source):
        assert (material/name).is_file(), name
assert "'Exam'" not in source
assert 'fateme.ssalehi@gmail.com' not in source
for p in [ROOT/'index.html', ROOT/'assets/app.js', ROOT/'assets/data.js']:
    assert 'quera' not in p.read_text().lower(), f'Private platform reference: {p}'
print('Website assets, team photos, material links, and schedule checks passed.')
