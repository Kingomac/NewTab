import os
import sys
import subprocess

os.system("npx webpack")

build = open("./dist/index.html", "w")

html_file = open("./public/index.html", "r")
css_file = open("./public/styles.css", "r")
bundle_file = open("./public/bundle.js", "r")

html = html_file.read().replace("\n", "").replace(" />", "/>").replace(" >", ">")
css = css_file.read().replace("\n", "").replace("\r\n", "")
bundle = bundle_file.read().replace("\r\n", "")

html_file.close()
css_file.close()
bundle_file.close()

html = html.replace('<script src="bundle.js"></script>', f"<script>{bundle}</script>").replace(
    '<link rel="stylesheet" href="styles.css"/>', f"<style>{css}</style>").replace("  ", " ").replace("   ", " ").replace("   ", " ")
build.write(html)

build.close()
