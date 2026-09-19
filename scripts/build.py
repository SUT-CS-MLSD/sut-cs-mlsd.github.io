#!/usr/bin/env python3
"""Build the website; --local-materials previews unpublished sibling course files."""
from pathlib import Path
import argparse, shutil
ROOT=Path(__file__).resolve().parents[1]
def build():
    parser=argparse.ArgumentParser()
    parser.add_argument('--local-materials', action='store_true')
    args=parser.parse_args()
    dist=ROOT/'dist'
    if dist.exists(): shutil.rmtree(dist)
    dist.mkdir()
    shutil.copy2(ROOT/'index.html',dist/'index.html')
    shutil.copytree(ROOT/'assets',dist/'assets')
    if args.local_materials:
        material=ROOT.parent/'MLSD-Fall2025'/'files'
        shutil.copytree(material,dist/'files')
        p=dist/'assets/data.js'
        p.write_text(p.read_text().replace('https://raw.githubusercontent.com/SUT-CS-MLSD/MLSD-Fall2025/main/files/', 'files/'))
    (dist/'.nojekyll').touch()
    print(f'Site built in {dist}')
if __name__=='__main__': build()
