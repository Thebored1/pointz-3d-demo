import re

file_path = r'C:\Files\Projects\pointz-3d-demo\CONTENT_DRAFTS.md'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Remove emojis
text = re.compile(r'[\U00010000-\U0010ffff]', flags=re.UNICODE).sub(r'', text)
text = re.sub(r'[^\w\s,.\-?!:\(\)\[\]/\\\'"@#$%^&+=><;|_]', ' ', text) # More aggressive cleanup for weird chars if needed, but let's be careful.

# Let's just remove known emojis from the text:
# 📄 🛡️ 🚦 ❓ 📊 🏗️ 🚛 🚜 📦 🛣️ 🏢 📍
emojis = ['📄', '🛡️', '🚦', '❓', '📊', '🏗️', '🚛', '🚜', '📦', '🛣️', '🏢', '📍', '️']
for e in emojis:
    text = text.replace(e, '')

# Replace em dashes and en dashes
text = text.replace('—', '-')
text = text.replace('–', '-')

# Remove bold and italic markdown
text = text.replace('**', '')
text = re.sub(r'(?<!\*)\*(?!\*)', '', text) # Remove single asterisks for italics, careful with bullet points.
# Actually, bullets are usually '* ', so let's preserve '* '.
# To remove italics safely:
text = re.sub(r'\b_(.*?)_\b', r'\1', text) # _italics_
# For *italics*:
text = re.sub(r'\*([^\*\n]+)\*', r'\1', text) 

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print('Done')
