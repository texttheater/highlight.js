/*
Language: Producefile
Author: Kilian Evang
Description: A dialect of INI used by Produce (https://github.com/texttheater/produce/). Based on ini.js.
*/

function(hljs) {
  variable = {
    className: 'variable',
    begin: /%\{/, end: /\}/
  };
  percentEscape = {
    className: 'variable', // ???
    begin: /%%/
  };
  return {
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      {
        className: 'comment',
        begin: '[#;]', end: '$'
      },
      {
        className: 'title',
        begin: '^\\[', end: '\\]',
        contains: [variable]
      },
      {
        className: 'setting',
        begin: '[a-z0-9\\[\\]._-]+[ \\t]*=[ \\t]*', end: '$',
        // TODO the begin grammar both undergenerates and overgenerates but for now should be fine
        contains: [
          {
            className: 'value',
            endsWithParent: true,
            relevance: 0,
            contains: [variable]
          }
        ]
      }
    ]
  };
}
