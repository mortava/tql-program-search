import type { Investor } from '../types'

// Shared const arrays
const PRI = ['Primary Residence'] as const
const SEC = ['Second Home'] as const
const INV = ['Investment'] as const
const PRI_SEC = ['Primary Residence', 'Second Home'] as const
const PRI_SEC_INV = ['Primary Residence', 'Second Home', 'Investment'] as const

const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const
const US_ITIN = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident', 'ITIN'] as const
const FN_ONLY = ['Foreign National'] as const
const ALL_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident', 'ITIN', 'Foreign National'] as const

const FULL_PROPS = ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD', 'Rural'] as const
const DSCR_PROPS = ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD', 'Rural', '5-8 Unit', 'Mixed Use'] as const
const FN_PROPS = ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', '2-4 Unit', 'PUD'] as const

const FULL_ALT_DOCS = [
  'Full Doc',
  'Bank Statement (Personal)',
  'Bank Statement (Business)',
  'P&L Only',
  '1099 Only',
  'Asset Depletion',
  'W2 Only',
  'WVOE',
] as const

const PURCH = ['Purchase'] as const
const RT = ['Rate/Term Refinance'] as const
const CO = ['Cash-Out Refinance'] as const
const PURCH_RT = ['Purchase', 'Rate/Term Refinance'] as const
const ALL_PURPOSES = ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'] as const

export const adProduct: Investor = {
  id: 'ad-product',
  name: 'A&D Mortgage',
  shortName: 'A&D',
  description:
    'A&D Mortgage offers a broad Non-QM suite including Super Prime/Prime full & alt-doc, ITIN DSCR, Foreign National DSCR, Foreign National Full Doc, and a Second Lien product across all occupancy types.',
  sourceDocuments: ['AD Product Matrix 2 19 2026.pdf'],
  lastUpdated: '2026-02-19',

  programs: [
    // ─── Super Prime / Prime ─────────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      maxDti: 55,
      interestOnly: true,
      interestOnlyTermMonths: 120,
      prepaymentPenalty: 'Available',
      minReserves: '$100k–$1M: 3 months; $1M–$2M: 6 months; >$2M: 12 months',
      notes: 'Super Prime/Prime: Full Doc, Bank Statement, P&L, 1099, Asset Utilization, WVOE, FTHB. Max CLTV Full Doc/BS: 90; 1099: 85; P&L/WVOE/Asset Util/FTHB: 80. Cash-out >65% CLTV: max $500k; 55–65%: max $1M; <55%: unlimited. Residual income $2,000 required. No Score (limited tradelines) allowed. Products: 30yr & 40yr Fixed; 5/6 & 7/6 ARM. STR eligible property type. SFR Rural eligible property type.',
      ltvMatrix: [
        // Primary — Purchase ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 90, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 90, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 90, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 640, maxFico: 659, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 620, maxFico: 639, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Primary — Purchase $1M–$2M
        { minFico: 720, maxFico: 999, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Primary — Purchase $2M–$3M
        { minFico: 720, maxFico: 999, maxLtv: 80, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Primary — Purchase $3M–$4M
        { minFico: 720, maxFico: 999, maxLtv: 75, minLoanAmount: 3000001, maxLoanAmount: 4000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 4000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Second Home — Purchase ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Investment — Purchase ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 620, maxFico: 639, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Rate/Term ≤$2M (all occupancies)
        { minFico: 720, maxFico: 999, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI_SEC_INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI_SEC_INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...RT] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI_SEC_INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...RT] },
        // Cash-Out ≤$1M (primary)
        { minFico: 720, maxFico: 999, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...CO] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_ITIN], loanPurpose: [...CO] },
      ],
    },

    // ─── ITIN DSCR ───────────────────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      interestOnly: true,
      interestOnlyTermMonths: 120,
      prepaymentPenalty: 'Available',
      minReserves: 'Purchase: $100k–$1M: 3 months; $1M–$2M: 6 months; >$2M: 12 months. R/T and C/O: no minimum.',
      notes: 'ITIN DSCR: US Citizens, PR, NPR, and ITIN eligible. DSCR < 1 requires min 680 FICO or No FICO. Max CLTV 70%. Cash-out >65% CLTV: max $500k; 55–65%: max $1M; <55%: unlimited. Residual income $2,000 required. No Score allowed. STR eligible. SFR Rural eligible. Multifamily and Mixed Use also eligible. Products: 30yr & 40yr Fixed; 5/6 & 7/6 ARM.',
      minDscr: 0,
      ltvMatrix: [
        // Purchase ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Purchase $1M–$2M
        { minFico: 720, maxFico: 999, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Purchase $2M–$3M
        { minFico: 720, maxFico: 999, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 55, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...PURCH] },
        // Rate/Term ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...RT] },
        // Cash-Out ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 70, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_ITIN], loanPurpose: [...CO] },
      ],
    },

    // ─── Foreign National DSCR ───────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 1.0,
      maxDti: 43,
      prepaymentPenalty: 'Not Available',
      minReserves: 'Standard DSCR reserve requirements',
      notes: 'Foreign National DSCR: investment only. Min 680 FICO or No Score. DSCR >= 1.0. Max cash-in-hand: $500k. 1 Bank Reference Letter required. Income: Letter from Foreign CPA with last 2 years income + YTD. STR eligible. Rural NOT eligible.',
      ltvMatrix: [
        // Purchase ≤$1M
        { minFico: 720, maxFico: 999, maxLtv: 65, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 60, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 55, minLoanAmount: 50000, maxLoanAmount: 1000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        // Purchase $1M–$2M
        { minFico: 720, maxFico: 999, maxLtv: 60, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 55, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 50, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        // Purchase $2M–$3M
        { minFico: 720, maxFico: 999, maxLtv: 55, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 50, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...FN_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_ONLY], loanPurpose: [...PURCH] },
      ],
    },

    // ─── Foreign National Full Doc ────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Investment',
      available: true,
      maxDti: 50,
      interestOnly: false,
      prepaymentPenalty: 'Not Available',
      minReserves: 'Standard reserve requirements',
      notes: 'Foreign National Full Doc: primary/second home/investment eligible. Max CLTV 75%. No IO available. Products: 10/15/20/30yr Fixed only. No Score allowed for Foreign National. STR eligible. Rural NOT eligible.',
      ltvMatrix: [
        // Purchase ≤$500k (all occupancies)
        { minFico: 720, maxFico: 999, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: [...FN_PROPS], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', 'Asset Depletion', 'WVOE', '1099 Only'], citizenship: [...ALL_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: [...FN_PROPS], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', 'Asset Depletion', 'WVOE', '1099 Only'], citizenship: [...ALL_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: [...FN_PROPS], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', 'Asset Depletion', 'WVOE', '1099 Only'], citizenship: [...ALL_CSHIP], loanPurpose: [...PURCH] },
        // Rate/Term ≤$500k
        { minFico: 720, maxFico: 999, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: [...FN_PROPS], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', 'Asset Depletion', 'WVOE', '1099 Only'], citizenship: [...ALL_CSHIP], loanPurpose: [...RT] },
        // Cash-Out ≤$500k
        { minFico: 720, maxFico: 999, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: [...FN_PROPS], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', 'Asset Depletion', 'WVOE', '1099 Only'], citizenship: [...ALL_CSHIP], loanPurpose: [...CO] },
      ],
    },

    // ─── Second Lien ─────────────────────────────────────────────────────
    {
      category: 'Closed End Second',
      available: true,
      maxDti: 50,
      prepaymentPenalty: 'Not Available',
      minReserves: 'Standard',
      notes: 'Second lien product only. Max CLTV 90%. All occupancy types eligible.',
      ltvMatrix: [
        { minFico: 720, maxFico: 999, maxLtv: 90, maxCltv: 90, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: ['SFR', 'Condo (Warrantable)', 'PUD'], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES] },
        { minFico: 700, maxFico: 719, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: ['SFR', 'Condo (Warrantable)', 'PUD'], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES] },
        { minFico: 680, maxFico: 699, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: ['SFR', 'Condo (Warrantable)', 'PUD'], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES] },
        { minFico: 660, maxFico: 679, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 500000, propertyTypes: ['SFR', 'Condo (Warrantable)', 'PUD'], occupancy: [...PRI_SEC_INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES] },
      ],
    },
  ],

  strRequirements: {
    allowed: true,
    allowedOnDSCR: true,
    allowedOnFullDoc: true,
    allowedOnAltDoc: true,
    rentProofMethods: ['Market Rent Analysis (Form 1007/1025)', 'Actual Proof of Prior 12 Months Rents'],
    propertyTypes: ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD'],
    additionalRequirements: [
      'STR listed as eligible property type on Super Prime/Prime, ITIN DSCR, FN DSCR, FN Full Doc',
      'STR NOT eligible on Second Lien',
      'Specific STR LTV overlays apply — consult guidelines',
    ],
  },

  ruralPropertyRules: {
    allowedOnDSCR: true,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: true,
    allowedOnAltDoc: true,
    additionalRestrictions: [
      'SFR Rural listed as eligible property type on Super Prime/Prime and ITIN DSCR',
      'Rural NOT eligible on Foreign National programs or Second Lien',
    ],
  },

  generalGuidelines: {
    minFico: 620,
    maxLoanAmount: 4000000,
    minLoanAmount: 50000,
    maxDti: 55,
    interestOnly: true,
    prepaymentPenaltyOptions: ['Available on most programs'],
    reserveRequirements: '$100k–$1M: 3 months; $1M–$2M: 6 months; >$2M: 12 months',
    seasoningRequirements: '12–48 months depending on program',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident', 'ITIN', 'Foreign National'],
    entityVesting: true,
    trustVesting: true,
  },

  creditEventSeasoning: {
    bankruptcy: '48 months (Super Prime/Prime, ITIN DSCR); 12 months (FN DSCR)',
    foreclosure: '48 months (Super Prime/Prime, ITIN DSCR); 12 months (FN DSCR)',
    shortSale: '48 months (Super Prime/Prime, ITIN DSCR); 12 months (FN DSCR)',
    deedInLieu: '48 months (Super Prime/Prime, ITIN DSCR); 12 months (FN DSCR)',
    loanModification: '48 months',
    forbearance: '48 months',
  },

  sourceDocuments: ['AD Product Matrix 2 19 2026.pdf'],
  lastUpdated: '2026-02-19',
}
