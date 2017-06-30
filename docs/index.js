
/**
 * Do stuff.
 */

document.getElementById('input').addEventListener('keyup', function(e) {
  document.getElementById('output').innerText = translate(this.value);
});

/**
 * Copy to clipboard.
 */

document.getElementById('copy').addEventListener('click', function(e) {
  copyStringToClipboard(translate(document.getElementById('input').value))
});

/**
 * Copy string to clipboard.
 */

function copyStringToClipboard(string) {
  function handler(event){
    event.clipboardData.setData('text/plain', string);
    event.preventDefault();
    document.removeEventListener('copy', handler, true);
  }

  document.addEventListener('copy', handler, true);
  document.execCommand('copy');
}

/**
 * Dictionary of letters to emojis.
 */

var dictionary = {
  'a': function() { return 'atrain' },
  'b': function() { return 'btrain' },
  'c': function() { return 'ctrain' },
  'd': function() { return 'dtrain' },
  'e': function() { return 'etrain' },
  'f': function() { return 'ftrain' },
  'g': function() { return 'gtrain' },
  'h': function() { return 'homejoy' },
  'i': function() { return 'carlton' },
  'j': function() { return 'jtrain' },
  'k': function() { return 'karma' },
  'l': function() { return 'ltrain' },
  'm': function() { return 'mtrain' },
  'n': function() { return 'ntrain' },
  'o': function() { return random('donut', 'citrus', 'sonic-ring') },
  'p': function() { return 'producthunt' },
  'q': function() { return 'qtrain' },
  'r': function() { return 'rtrain' },
  's': function() { return 'strain' },
  't': function() { return 'ttrain' },
  'u': function() { return random('sloth2', 'snitch') },
  'v': function() { return random('nps', 'ravenclaw', 'mugatu') },
  'w': function() { return 'wtrain' },
  'x': function() { return 'star' },
  'y': function() { return 'funnel' },
  'z': function() { return 'ztrain' },
  '0': function() { return 'zero' },
  '1': function() { return '1train' },
  '2': function() { return '2train' },
  '3': function() { return '3train' },
  '4': function() { return '4train' },
  '5': function() { return '5train' },
  '6': function() { return '6train' },
  '7': function() { return '7train' },
  '8': function() { return 'eight' },
  '9': function() { return '9train' }
};

/**
 * Translate function.
 */

function translate(input) {
  input = input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
  var output = '';
  for (var i = 0; i < input.length; i++) {
    if (input[i] != ' ') output += emoji(dictionary[input[i]]());
    else output += '        ';
  }
  return output;
}

/**
 * Emoji-fies the string by adding colons.
 */

function emoji(string) {
  return ':' + string + ':';
}

/**
 * Return randomly one of the arguments.
 */

function random() {
  var args = Array.prototype.slice.call(arguments);
  return args[Math.floor(Math.random() * (args.length))]
}

/**
 * HTMLify
 */

function htmlify(string) {
  return string.replace(/\s+/g, "&nbsp;");
}
