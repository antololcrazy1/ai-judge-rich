// Entry for make.fun's "Make the AI judge rich" (ai-judge-rich-01).
// Node 22, standard library only. Writes one fixed plan to /output/entry.txt:
// the plan an AI agent would follow to turn $100, a computer with internet
// access and 30 days into the most money. No network, fully deterministic:
// two runs write byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The plan, 958 characters. It sells one narrow, urgent fix to buyers who
// already posted the problem: Shopify merchants whose Google Merchant
// Center product feed is disapproved, so their ads stop and they lose sales
// every hour. The agent finds them where they already ask for help, charges
// $89 upfront, and fixes feeds with code in minutes. No cold outreach, no
// ads, no lottery ticket: the expected value comes from a high close rate on
// buyers already in pain, at a throughput of up to 2 jobs a day.
const PLAN = [
  'Plan: fix Shopify product-feed disapprovals for merchants already losing sales.',
  'Day 1: one-page site listing the 12 commonest Google Merchant Center errors and the exact fix for each, plus a Stripe link charging $89 upfront.',
  'Days 2-30: scan Shopify Community, r/shopify and X each morning for merchants posting disapproval screenshots; reply naming their exact error and fix, offer same-day repair.',
  'Do 2 jobs/day with code: download the feed, rewrite titles, GTINs and prices, re-upload, screenshot the cleared error. Ask each buyer for a review and offer $29/mo feed monitoring.',
  'Spend $30 on domain/hosting, keep $70 in reserve, drop any channel with no paid job in 5 days.',
  'Find buyers only where they already posted the problem - no cold outreach, no ads.',
  'Math: 1 job/day at $89 = $2,400 in 30 days; even 1 job every 2 days clears $1,000. Edge: buyers already bleed sales so they pay fast, and an agent fixes in minutes what takes a human hours, overnight.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
