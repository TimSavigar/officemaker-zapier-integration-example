const perform = async (z, bundle) => {
  const response = await z.request({
    url: `${bundle.authData.baseUrl || 'https://free.officemaker.ai'}/gpt/v1/create-document`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      document_type: bundle.inputData.document_type,
      file_name: bundle.inputData.file_name,
      document_json: bundle.inputData.document_json,
      generate_pdf: Boolean(bundle.inputData.generate_pdf)
    }
  });

  response.throwForStatus();
  return response.json;
};

module.exports = {
  key: 'create_document',
  noun: 'Document',
  display: {
    label: 'Create OfficeMaker Document',
    description: 'Create a Word, Excel, or PowerPoint file through OfficeMaker.'
  },
  operation: {
    inputFields: [
      { key: 'document_type', required: true, choices: { word: 'word', excel: 'excel', powerpoint: 'powerpoint' } },
      { key: 'file_name', required: true },
      { key: 'document_json', required: true, helpText: 'JSON.stringify(documentObject)' },
      { key: 'generate_pdf', type: 'boolean' }
    ],
    perform,
    sample: {
      success: true,
      documentType: 'WORD',
      documentDownloadUrl: 'https://free.officemaker.ai/gpt/v1/file?token=example'
    }
  }
};
