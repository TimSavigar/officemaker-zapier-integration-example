function paragraph(text) {
  return {
    type: 'paragraph',
    children: [{ type: 'text', text }]
  };
}

export function fileStem(value) {
  return String(value || 'officemaker-document')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'officemaker-document';
}

export function buildAiLetter({
  recipientName = 'Customer',
  companyName = 'OfficeMaker',
  purpose = 'follow up on your document automation brief'
} = {}) {
  return {
    type: 'document',
    content: {
      children: [
        paragraph(`Dear ${recipientName},`),
        paragraph(`Thank you for your time. ${companyName} is writing to ${purpose}.`),
        paragraph('We can turn the next approved data step into a polished Office document.'),
        paragraph('Kind regards,'),
        paragraph(companyName)
      ]
    }
  };
}

export function buildCustomQuote({
  customerName = 'Example Customer',
  productName = 'OfficeMaker Automation Pack',
  quantity = 10,
  unitPrice = 49
} = {}) {
  const total = quantity * unitPrice;

  return {
    type: 'excel',
    sheets: [
      {
        name: 'Quote',
        cells: [
          { row: 0, col: 0, t: 's', value: 'Customer' },
          { row: 0, col: 1, t: 's', value: customerName },
          { row: 1, col: 0, t: 's', value: 'Product' },
          { row: 1, col: 1, t: 's', value: productName },
          { row: 2, col: 0, t: 's', value: 'Quantity' },
          { row: 2, col: 1, t: 'n', value: quantity },
          { row: 3, col: 0, t: 's', value: 'Unit Price' },
          { row: 3, col: 1, t: 'n', value: unitPrice },
          { row: 4, col: 0, t: 's', value: 'Total' },
          { row: 4, col: 1, t: 'n', value: total }
        ]
      }
    ]
  };
}

export function buildBriefingDeck({
  title = 'OfficeMaker + Zapier',
  subtitle = 'Starter example',
  highlights = ['Triggered from CRM events', 'Creates customer-ready documents', 'Returns downloadable Office files']
} = {}) {
  return {
    type: 'powerpoint',
    slides: [
      {
        layout: 'Title Slide',
        shapes: [
          { type: 'textBox', shapeName: 'Title 1', text: title },
          { type: 'textBox', shapeName: 'Subtitle 2', text: subtitle }
        ]
      },
      {
        layout: 'Title and Content',
        shapes: [
          { type: 'textBox', shapeName: 'Title 1', text: 'Why this matters' },
          { type: 'textBox', shapeName: 'Content Placeholder 2', text: highlights.map((item) => `- ${item}`).join('\n') }
        ]
      }
    ]
  };
}
