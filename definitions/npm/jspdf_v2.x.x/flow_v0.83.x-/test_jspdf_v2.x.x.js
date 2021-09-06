// @flow
import { describe, it } from 'flow-typed-test';
import jsPDFDefault, { jsPDF } from 'jspdf';

describe('jspdf', () => {
  const doc = new jsPDF();

  it('default export', () => {
    const defaultDov = new jsPDFDefault();
  });

  it('creates class', () => {
    new jsPDF();
    new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [4, 2]
    });
    // $FlowExpectedError[incompatible-call] object or void
    new jsPDF('test');
  });

  it('handles text function', () => {
    doc.text('test', 10, 10);
    doc.text(['test', 'text'], 10, 10);
    doc.text(['test', 'text'], 10, 10, {});

    // $FlowExpectedError[incompatible-call] needs offsets
    doc.text('test');
    // $FlowExpectedError[incompatible-call] first arg is string or array<string> only
    doc.text(10, 10, 10);
    // $FlowExpectedError[incompatible-call] last arg is options
    doc.text('test', 10, 10, 10);
  });

  it('handles save', () => {
    doc.save();
    doc.save('test.pdf');
  });

  describe('jspdf-autotable plugin', () => {
    it('calls autotable', () => {
      doc.autoTable({
        head: [['test']],
        body: [['test']],
        startY: 20,
      });
      doc.autoTable({
        // $FlowExpectedError[incompatible-call] array of arrays only
        head: ['test'],
        // $FlowExpectedError[incompatible-call] array of arrays only
        body: ['test'],
        startY: 20,
      });
    });

    it('gives last autotabl y coords', () => {
      (doc.lastAutoTable.finalY: number);
      // $FlowExpectedError[incompatible-cast] returns number only
      (doc.lastAutoTable.finalY: string);
    });
  });
});
