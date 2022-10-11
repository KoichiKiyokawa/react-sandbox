#!/bin/bash
cd "$(dirname "$0")"


#
# フロント側のbuild結果のindex.htmlをTSファイルに書き込む
#
OUTPUT_PATH="../src/html.ts"
echo 'export default `' > $OUTPUT_PATH
cat ../../web/dist/index.html >> $OUTPUT_PATH
echo '`' >> $OUTPUT_PATH