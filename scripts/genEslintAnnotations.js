const fs = require('fs');
const path = require('path');

const definitionsDir = path.join(__dirname, '../definitions');

fs.readFile(`${definitionsDir}/eslint_report.json`, 'utf8', (err, content) => {
  if (err) {
    console.error(err);
    return;
  }

  const contentJson = JSON.parse(content);
  const contentAnnotations = contentJson.reduce((acc, cur) => {
    const {
      filePath,
      messages,
    } = cur;

    return [
      ...messages.map((message) => {
        const getAnnotationLevel = (severity) => {
          if (severity === 1) return 'warning';
          if (severity === 2) return 'error';
          return 'notice';
        };

        return {
          file: filePath,
          line: message.line,
          title: message.ruleId,
          message: message.message,
          annotation_level: getAnnotationLevel(message.severity),
        }
      }),
    ];
  }, []);

  fs.writeFile(`${definitionsDir}/eslint_annotation.json`, contentAnnotations, (err) => {
    if (err) {
      console.error(err);
    }
  })
});
