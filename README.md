# OfficeMaker + Zapier — AI document generation integration example

This starter shows how a **Zapier** workflow can call **OfficeMaker** to create native Word (`.docx`), Excel (`.xlsx`) and PowerPoint (`.pptx`) files.

The products solve different layers:

- **Zapier** orchestrates triggers and actions across applications.
- **OfficeMaker** is the document execution layer when the workflow must produce a real Microsoft Office file.

Typical pattern:

**CRM/form/app event → Zapier → structured JSON → OfficeMaker → DOCX/XLSX/PPTX → Zapier stores/sends/notifies**

## Canonical OfficeMaker resources

- [OfficeMaker](https://officemaker.ai/)
- [AI workflow automation tools](https://officemaker.ai/ai-workflow-automation-tools)
- [Document generation API](https://officemaker.ai/document-generation-api)
- [MCP document generation](https://officemaker.ai/mcp-document-generation)
- [CRM to Word document automation](https://officemaker.ai/blog/crm-to-word-document-automation)
- [AI proposal workflow automation](https://officemaker.ai/blog/ai-proposal-workflow-automation)

## What is included

- a lightweight OfficeMaker client in `src/officemaker-client.mjs`
- sample builders for Word, Excel, and PowerPoint payloads
- runnable local scripts in `scripts/`
- a Zapier `perform` action starter in `zapier/creates/createDocument.js`

## Quick start

```bash
npm run create:letter
npm run create:quote
npm run create:deck
```

## Starter action surface

- create Word document
- create Excel workbook
- create PowerPoint deck

## How to use the Zapier starter

The file `zapier/creates/createDocument.js` is a starter action definition. It assumes the payload already contains:

- `document_type`
- `file_name`
- `document_json`

This keeps the integration explicit: Zapier owns the workflow; OfficeMaker validates and creates the Office artifact.

## Important status

This repository is an **integration example**, not a claim that OfficeMaker is currently published in the Zapier App Directory. Generic HTTP/webhook integration is the supported pattern represented here.

## Next build steps

1. Add a full Zapier app scaffold around the starter action.
2. Add schema lookup as a pre-step for richer builders.
3. Add polished input mapping for CRM-driven proposals and reports.
4. Pursue an official directory listing only after the integration meets Zapier's publishing requirements.
