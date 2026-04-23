import base64
import sys

# The file assets/logo_base64.txt contains a base64 string.
# We need to read it, clean it (remove data:image/jpeg;base64, if present), and save it.

try:
    with open('assets/logo_base64.txt', 'r', encoding='utf-16le') as f:
        content = f.read().strip()
    
    if ',' in content:
        content = content.split(',')[1]
    
    img_data = base64.b64decode(content)
    
    with open('public/decoded_logo.png', 'wb') as f:
        f.write(img_data)
    print("Successfully decoded logo to public/decoded_logo.png")
except Exception as e:
    print(f"Error: {e}")
