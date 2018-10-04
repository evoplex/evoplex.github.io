# Evoplex - https://evoplex.org - 2018

# This script creates the 'docs/example-plugins.md' file, which shows data from
# 'website/static/data/models.txt' and 'website/static/data/graphs.txt'

import json

def getLicense(cdg):
    if cdg == 'mit':
        return "<a href='https://opensource.org/licenses/MIT' target='_blank'>MIT License</a>"
    else:
        return cdg

def getPluginHtml(plugin):
    return '### '+plugin['title']+'\n'+\
    plugin['description']+'\n'+\
    '<table><tr>\n'\
    '<th>Authors:</th>\n'\
    '<td>'+plugin['authors']+'</td>\n'\
    '</tr><tr>\n'\
    '<th>License:</th>\n'\
    '<td>'+getLicense(plugin['license'])+'</td>\n'\
    '</tr><tr>\n'\
    '<th>Repository:</th>\n'\
    '<td><a href="'+plugin['url']+'" target="_blank">'+plugin['url']+'</a></td>\n'\
    '</tr></table>\n\n'

def pluginsSections(path):
    html = ''
    plugins = json.load(open(path, 'r'))
    for plugin in plugins:
        html += getPluginHtml(plugin)
    return html

def pluginsTable(path):
    html = '<table><tr>\n'\
           '<th>Title</th>\n'\
           '<th>Description</th>\n'\
           '</tr>\n'
    plugins = json.load(open(path, 'r'))
    for plugin in plugins:
        link = plugin['title'].replace(' ', '-').replace('\'', '-').lower()
        html += '<tr>'
        html += '<td><a href="#'+link+'">'+plugin['title']+'</a></td>'
        html += '<td>'+plugin['description']+'</td>'
        html += '</tr>'
    return html + '</table>\n\n'


head =\
"---\n\
id: example-plugins\n\
title: Example Plugins\n\
---\n\n\
This page includes a few examples of plugins built for Evoplex.\n\n\
Feel free to share your own plugin here! You can either fill an [issue on GitHub](https://github.com/evoplex/evoplex.github.io/issues/new) or send an [email](evoplex@googlegroups.com) to the [mailing list](https://groups.google.com/group/evoplex).\n"


f = open("../docs/example-plugins.md", "w")
f.write(head +
        '\n## Model Plugins\n' +
        pluginsTable('static/data/models.txt') +
        pluginsSections('static/data/models.txt') +
        '\n## Graph Plugins\n' +
        pluginsTable('static/data/graphs.txt') +
        pluginsSections('static/data/graphs.txt'))



