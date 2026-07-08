#!/bin/bash
set -e

# i18n primero: el diccionario y el motor deben existir antes de que
# los Web Components y main.js se ejecuten.
I18N="js/i18n-dict.js js/i18n.js"
COMPONENTS="js/components/site-header.js js/components/site-footer.js js/components/project-card.js"

cat $I18N $COMPONENTS js/main.js > js/bundle.js
echo "bundle.js OK"

cat $I18N $COMPONENTS js/project-detail.js js/main.js > js/bundle-project.js
echo "bundle-project.js OK"
