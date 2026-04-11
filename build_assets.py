"""
Extract embedded images from Word documents and copy media files
into the presentation assets directory.
"""
import zipfile
import os
import shutil

BASE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(BASE, "presentation", "assets")

DOCX_MAP = {
    "m6": os.path.join(BASE, "Context", "M6.docx"),
    "m5": os.path.join(BASE, "Context", "M5.docx"),
    "m3": os.path.join(BASE, "Context", "M3 Submission - backup 11-21.docx"),
    "m1": os.path.join(BASE, "Context", "M1 Context.docx"),
}

MEDIA_SRC = os.path.join(BASE, "Media")
MEDIA_DST = os.path.join(ASSETS, "media")


def extract_docx_images():
    for label, path in DOCX_MAP.items():
        if not os.path.exists(path):
            print(f"  SKIP {label}: file not found at {path}")
            continue
        dest = os.path.join(ASSETS, "extracted", label)
        os.makedirs(dest, exist_ok=True)
        with zipfile.ZipFile(path, "r") as zf:
            media_files = [n for n in zf.namelist() if n.startswith("word/media/")]
            for mf in media_files:
                fname = os.path.basename(mf)
                data = zf.read(mf)
                out_path = os.path.join(dest, fname)
                with open(out_path, "wb") as f:
                    f.write(data)
            print(f"  {label}: extracted {len(media_files)} images -> {dest}")


def copy_media():
    os.makedirs(MEDIA_DST, exist_ok=True)
    if not os.path.exists(MEDIA_SRC):
        print("  SKIP media: folder not found")
        return
    copied = 0
    for fname in os.listdir(MEDIA_SRC):
        src = os.path.join(MEDIA_SRC, fname)
        dst = os.path.join(MEDIA_DST, fname)
        if os.path.isfile(src):
            ext = os.path.splitext(fname)[1].lower()
            if ext in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"):
                shutil.copy2(src, dst)
                copied += 1
    print(f"  media: copied {copied} image files -> {MEDIA_DST}")

    # Teammate additions (flat lay, software UI, assembly photos)
    new_dir = os.path.join(MEDIA_SRC, "new")
    if os.path.isdir(new_dir):
        n = 0
        for fname in os.listdir(new_dir):
            src = os.path.join(new_dir, fname)
            dst = os.path.join(MEDIA_DST, fname)
            if os.path.isfile(src):
                ext = os.path.splitext(fname)[1].lower()
                if ext in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"):
                    shutil.copy2(src, dst)
                    n += 1
        print(f"  media/new: copied {n} image files -> {MEDIA_DST}")


if __name__ == "__main__":
    print("Extracting images from Word documents...")
    extract_docx_images()
    print("\nCopying media files...")
    copy_media()
    print("\nDone!")
