# Restaurant Daily Closeout

A browser-based closeout tool for reconciling restaurant sales and payment settlements, with a private shift-notes workspace.

## Run locally

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm test` for the unit suite and `npm run build` for the production build.

## Closeout

- Import sales and settlement CSVs for one business date.
- Review duplicate, unmatched, and amount-mismatch exceptions.
- Add a note to every exception, confirm the closeout, and export the report.
- Use the demo scenario and sample files to try the workflow.

## Shift notes

Use the **Shift notes** workspace to create, edit, search, and delete handoff notes. Notes persist in this browser using local storage; they are not synced between devices or accounts.

## CSV format

Sales headers: `order_id,sale_time,payment_method,amount`<br>
Settlement headers: `order_id,settled_at,payment_method,amount`

Files are limited to 5 MB and 10,000 rows. Read the in-app validation messages before reconciling; files containing invalid rows cannot be processed.