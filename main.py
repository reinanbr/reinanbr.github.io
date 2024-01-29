import subprocess
import re
import json

def parse_top_header(header_lines):
    header = {}
    for line in header_lines:
        key, value = re.split(r':\s+', line.strip(), maxsplit=1)
        header[key] = value
    return header

def get_top_header():
    top_output = subprocess.check_output(["top", "-b", "-n", "1", "-w", "512"]).decode("utf-8")
    header_lines = top_output.splitlines()[:7]  # 7 primeiras linhas contêm o cabeçalho
    return parse_top_header(header_lines)

if __name__ == "__main__":
    top_header = get_top_header()
    print(json.dumps(top_header, indent=4))
