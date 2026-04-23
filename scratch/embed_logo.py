import base64
import os

logo_path = 'assets/STATE-TELANGANA-LOGO (1).png'
html_path = 'launch-screen.html'

if os.path.exists(logo_path):
    with open(logo_path, 'rb') as f:
        logo_b64 = 'data:image/png;base64,' + base64.b64encode(f.read()).decode()
    
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Replace various possible src strings to be sure
    html = html.replace('src="/assets/STATE-TELANGANA-LOGO (1).png"', f'src="{logo_b64}"')
    html = html.replace('src="/images/telangana-logo.png"', f'src="{logo_b64}"')
    html = html.replace('src="https://drive.google.com/file/d/1iOm8y3Olm0cHh0FphZiwAbOJH9T-F3pe/view?usp=drive_link"', f'src="{logo_b64}"')
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Logo embedded successfully.")
else:
    print(f"Error: {logo_path} not found.")
