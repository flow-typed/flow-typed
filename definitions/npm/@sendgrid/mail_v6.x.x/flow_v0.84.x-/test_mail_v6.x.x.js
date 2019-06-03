import mail from '@sendgrid/mail';

mail.setApiKey('myApiKey');

// CC, BCC and Reply To
mail.send({
  to: 'dimitri.dobairro@example.org',
  cc: 'clement.mondion@example.org',
  bcc: ['me@example.org', 'you@example.org'],
  from: 'sender@example.org',
  replyTo: 'othersender@example.org',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
});

// Send a Single Email to Multiple Recipients
mail.send({
  to: ['dimitri.dobairro@example.com', 'clark.kent@example.com'],
  replyTo: 'clement.mondion@example.com',
  from: 'john.doe@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
});

// Send Multiple Emails to Multiple Recipients
mail.send([
  {
    to: 'dimitri.dobairro@example.org',
    from: 'clement.mondion@example.org',
    subject: 'Hello recipient 1',
    text: 'Hello plain world!',
    html: '<p>Hello HTML world!</p>',
  },
  {
    to: 'john.doe@example.org',
    from: 'other-sender@example.org',
    subject: 'Hello recipient 2',
    text: 'Hello other plain world!',
    html: '<p>Hello other HTML world!</p>',
  },
]);

// Manually Providing Content
mail.send({
  to: 'dimitri.dobairro@example.org',
  from: 'sender@example.org',
  subject: 'Hello manual content',
  content: [
    {
      type: 'text/html',
      value: '<p>Hello HTML world!</p>',
    },
    {
      type: 'text/plain',
      value: 'Hello plain world!',
    },
  ],
});

// Attachments
mail.send({
  to: 'dimitri.dobairro@example.org',
  from: 'clement.mondion@example.org',
  subject: 'Hello attachment',
  html: '<p>Here’s an attachment for you!</p>',
  attachments: [
    {
      content: 'SSdtIGEgZnVsbCBzdGFjayBKUyBkZXZlbG9wZXIuIA0KDQpSZWdhcmRzLA0KQHJpbWl0aSw=',
      filename: 'some-attachment.txt',
      type: 'plain/text',
      disposition: 'attachment',
      contentId: 'mytext'
    },
  ],
});

// Specifying Custom Headers
mail.send({
  to: 'dimitri.dobairro@example.org',
  from: 'clement.mondion@example.org',
  subject: 'Hello custom header',
  html: '<p>Some email content</p>',
  headers: {
    'X-CustomHeader': 'Custom header value',
  },
});

// Specifying Custom Headers
mail.send({
  to: 'dimitri.dobairro@example.org',
  from: 'clement.mondion@example.org',
  subject: 'Hello custom header',
  html: '<p>Some email content</p>',
  headers: {
    'X-CustomHeader': 'Custom header value',
  },
});

// Missing options
// $ExpectError
mail.send();

// Empty options hash
// $ExpectError
mail.send({});

// Incorrect options
mail.send({
  // $ExpectError
  from: 0,
});

// Missing from address
// $ExpectError
mail.send({
  to: 'dimitri.dobairro@example.org',
  subject: 'Hello attachment',
  html: '<p>Here’s an attachment for you!</p>',
});
