import os
import re
from pathlib import Path
import sys
import shutil

def extract_scripts(html_file_path, js_dir, html_dir):
    """Extract JavaScript from script tags to separate files and organize HTML files"""
    
    # Read HTML file
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    # Get base filename for output JS files
    base_name = Path(html_file_path).stem
    js_file_name = f"{base_name}.js"
    
    # Find script tags with inline JavaScript
    script_pattern = re.compile(r'<script>(.*?)</script>', re.DOTALL)
    matches = script_pattern.finditer(html_content)
    
    # Extract and save each script
    extracted_count = 0
    for i, match in enumerate(matches):
        script_content = match.group(1).strip()
        if script_content:  # Only process non-empty scripts
            output_file = os.path.join(js_dir, js_file_name)
            with open(output_file, 'w', encoding='utf-8') as file:
                file.write(script_content)
            
            # Replace inline script with reference to external file
            relative_path = f"../js/{js_file_name}"
            replacement = f'<script src="{relative_path}"></script>'
            html_content = html_content.replace(match.group(0), replacement, 1)
            
            extracted_count += 1
    
    # Copy and update HTML file to html subdirectory
    html_output_path = os.path.join(html_dir, Path(html_file_path).name)
    with open(html_output_path, 'w', encoding='utf-8') as file:
        file.write(html_content)
    
    if extracted_count > 0:
        print(f"Extracted {extracted_count} scripts from {html_file_path}")
    else:
        print(f"No inline scripts found in {html_file_path}")
    
    return html_output_path

def process_directory(directory_path):
    """Process all HTML files in a directory"""
    # Only look at the immediate subdirectories of the main directory
    for item in os.listdir(directory_path):
        current_dir = os.path.join(directory_path, item)
        
        # Skip if not a directory
        if not os.path.isdir(current_dir):
            continue
            
        # Look for HTML files directly in this directory (not in subdirectories)
        html_files = []
        for file in os.listdir(current_dir):
            if file.endswith('.html') and os.path.isfile(os.path.join(current_dir, file)):
                html_files.append(file)
        
        if not html_files:
            continue
            
        # Create html and js directories in the current directory
        html_dir = os.path.join(current_dir, "html")
        js_dir = os.path.join(current_dir, "js")
        
        os.makedirs(html_dir, exist_ok=True)
        os.makedirs(js_dir, exist_ok=True)
        
        for file in html_files:
            file_path = os.path.join(current_dir, file)
            extract_scripts(file_path, js_dir, html_dir)
        
        # After processing all HTML files in the directory, remove the original HTML files
        # but only if they were successfully copied
        for file in html_files:
            if os.path.exists(os.path.join(html_dir, file)):
                os.remove(os.path.join(current_dir, file))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_scripts.py [directory_path]")
        sys.exit(1)
    
    directory_path = sys.argv[1]
    process_directory(directory_path)
    print(f"Script extraction complete. Files organized into html and js subdirectories.")
