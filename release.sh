#!/bin/bash
S_PWD=$(cd "$(dirname "$0")" && pwd)
symbolic=`git symbolic-ref --short -q HEAD`
MSG="$1"
if [ -n "$MSG" ]; then
    MSG="release: ${MSG}"
else
    MSG="release"
fi

S_PP_API="pp_cp_html"

function copyTo() {
    if [ -d "../${S_PP_API}" ]; then
        cd ../
        cd "$S_PP_API" || exit 0
        git pull
        cp -rf $S_PWD/dist/* ./
        mv ./index.html ./pp_cp.html
        git add .
        git commit -m "发布分支:${symbolic} 内容: $MSG"
        git push
        cd "$S_PWD" || exit 0
    else
        read -p "找不到发布目录请自行拷贝" var
    fi
}

cd "$S_PWD/" &&
    npm run build &&
    copyTo
