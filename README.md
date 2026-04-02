# OfficeMaker Zapier Integration Example

Starter repository for a Zapier app that creates OfficeMaker documents through the public free API at `https://free.officemaker.ai`.

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

The file `zapier/creates/createDocument.js` is a starter action definition for the Zapier platform team/CLI workflow. It assumes the payload already contains:

- `document_type`
- `file_name`
- `document_json`

That keeps the first integration small while we validate the platform fit around:

- AI-generated letters
- custom quotes
- proposal-style outputs

## Next build steps

1. Add a full Zapier app scaffold around the starter action.
2. Add schema lookup as a pre-step for richer builders.
3. Add polished input field mapping for CRM-driven use cases.
