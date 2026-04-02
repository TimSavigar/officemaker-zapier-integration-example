const DEFAULT_BASE_URL = 'https://free.officemaker.ai';

function getBaseUrl() {
  return String(process.env.OFFICEMAKER_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
}

async function requestJson(path, { method = 'GET', body } = {}) {
  const response = await fetch(`${getBaseUrl()}${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'officemaker-zapier-starter/0.1.0'
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const raw = await response.text();
  let parsed = null;

  try {
    parsed = raw ? JSON.parse(raw) : null;
  } catch {
    throw new Error(`OfficeMaker returned non-JSON (${response.status}): ${raw.slice(0, 300)}`);
  }

  if (!response.ok || !parsed?.success) {
    throw new Error(parsed?.error || parsed?.message || `OfficeMaker request failed with ${response.status}`);
  }

  return parsed;
}

export async function createDocument({ documentType, fileName, documentObject, generatePdf = false }) {
  return requestJson('/gpt/v1/create-document', {
    method: 'POST',
    body: {
      document_type: documentType,
      file_name: fileName,
      document_json: JSON.stringify(documentObject),
      generate_pdf: generatePdf
    }
  });
}

export function printCreateSummary(result) {
  console.log('documentKey:', result.documentKey || '(none)');
  console.log('documentDownloadUrl:', result.documentDownloadUrl || result.documentUrl || '(none)');
  console.log('previewKeys:', Array.isArray(result.previewKeys) ? result.previewKeys.length : 0);
}
