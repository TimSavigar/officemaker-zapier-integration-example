import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';
import { buildAiLetter, fileStem } from '../src/sample-documents.mjs';

const [recipientName = 'Alicia Brown', companyName = 'OfficeMaker', purpose = 'follow up on your recent opportunity review'] =
  process.argv.slice(2);

const documentObject = buildAiLetter({ recipientName, companyName, purpose });
const result = await createDocument({
  documentType: 'word',
  fileName: `${fileStem(recipientName)}-zapier-letter`,
  documentObject
});

printCreateSummary(result);
