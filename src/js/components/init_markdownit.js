export const initMarkdown = () => {
  var hljs = require('highlight.js');
  var md = require('markdown-it')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, {
            language: lang
          }).value;
        } catch (__) {}
      }

      return '';
    }
  });

  const parseMarkdown = (element) => {
    element.innerHTML = md.render(element.innerText);
    element.classList.add("js-parsed");
  };

  const markdownElements = document.querySelectorAll('markdown');
  markdownElements.forEach(parseMarkdown);
}
