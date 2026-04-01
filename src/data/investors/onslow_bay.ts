import type { Investor } from '../types'

// Shared const arrays to reduce repetition
const PRI = ['Primary Residence'] as const
const SEC = ['Second Home'] as const
const INV = ['Investment'] as const
const PRI_SEC = ['Primary Residence', 'Second Home'] as const
const PRI_SEC_INV = ['Primary Residence', 'Second Home', 'Investment'] as const
const SEC_INV = ['Second Home', 'Investment'] as const

const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const

const FULL_ALT_DOCS = [
  'Full Doc',
  'Bank Statement (Personal)',
  'Bank Statement (Business)',
  'P&L Only',
  '1099 Only',
] as const

const FULL_PROPS = ['SFR', 'Condo (Warrantable)', 'PUD', '2-4 Unit'] as const
const DSCR_PROPS = ['SFR', 'Condo (Warrantable)', 'PUD', '2-4 Unit'] as const

const PURCH = ['Purchase'] as const
const RT = ['Rate/Term Refinance'] as const
const CO = ['Cash-Out Refinance'] as const
const PURCH_RT = ['Purchase', 'Rate/Term Refinance'] as const
const ALL_PURPOSES = ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'] as const

export const onslowBay: Investor = {
  id: 'onslow-bay',
  name: 'Onslow Bay (Annaly)',
  shortName: 'Onslow Bay',
  description:
    'Onslow Bay is an Annaly Capital Management affiliate offering Expanded Prime Plus (full & alt-doc) and DSCR Plus Non-QM programs across primary, second home, and investment properties.',
  sourceDocuments: ['Onslow Bay Correspondent Guidelines.pdf'],
  lastUpdated: '2026-01-01',

  programs: [
    // ─── Expanded Prime Plus ────────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      prepaymentPenalty: 'Available',
      minReserves: '$150k–$500k: 6 months; $500k–$1M: 6 months; $1M–$2M: 9 months; $2M–$3M: 12 months',
      notes: 'Expanded Prime Plus: Full Doc, Bank Statement, P&L, 1099. Exceptions allowed with documented compensating factors. Reserves at <=65% LTV/CLTV: cash-out proceeds eligible.',
      ltvMatrix: [
        // Primary — Purchase ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary — Purchase $1M–$1.5M
        { minFico: 740, maxFico: 999, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary — Purchase $1.5M–$2M
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary — Purchase $2M–$2.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary — Cash-Out ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 739, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        // Primary — Cash-Out $1M–$1.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        // Second Home — Purchase/R-T ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Second Home — Purchase/R-T $1M–$2.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 720, maxFico: 739, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...SEC], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Investment — Purchase/R-T ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Investment — Purchase/R-T $1M–$2.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 720, maxFico: 739, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
      ],
    },

    // ─── Sharp Matrix (A- / A-3) ────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      prepaymentPenalty: 'Available',
      minReserves: '$150k–$1M: 3 months; $1M–$2M: 3 months',
      notes: 'Sharp Matrix A-: 2+ year credit event seasoning, 1x30x12 housing history. Sharp Matrix A-3: additional flexibility on credit seasoning. Exceptions allowed with documented compensating factors.',
      ltvMatrix: [
        // Primary A- Purchase ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 720, maxFico: 739, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 620, maxFico: 639, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary A- Purchase $1M–$2.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 720, maxFico: 739, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Investment A- Purchase ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 700, maxFico: 739, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        { minFico: 620, maxFico: 639, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...INV], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...PURCH_RT] },
        // Primary A- Cash-Out ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 620, maxFico: 639, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FULL_PROPS], occupancy: [...PRI], docTypes: [...FULL_ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
      ],
    },

    // ─── DSCR Plus Matrix ───────────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      prepaymentPenalty: 'Available',
      minReserves: 'DSCR>=1.0: $150k–$500k: 3 months; $500k–$1M: 6 months; $1M–$2M: 6 months',
      notes: 'DSCR >= 1.0: standard matrix. DSCR 0.75–0.99: reduced LTV; min 700 FICO. No Ratio (<0.75): max $1.5M; min 700 FICO. Additional financed properties: 2 months incremental PITIA.',
      ltvMatrix: [
        // DSCR >= 1.0 — Purchase ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 739, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.0 — Purchase $1M–$1.5M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 720, maxFico: 739, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.0 — Purchase $1.5M–$2M
        { minFico: 740, maxFico: 999, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 720, maxFico: 739, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 679, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.0 — Rate/Term ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 720, maxFico: 739, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        // DSCR >= 1.0 — Cash-Out ≤$1M
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        // DSCR 0.75–0.99 — Purchase ≤$1M (min 700 FICO)
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR 0.75–0.99' },
        { minFico: 720, maxFico: 739, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR 0.75–0.99' },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR 0.75–0.99' },
        // No Ratio (<0.75) — Purchase ≤$1.5M (min 700 FICO)
        { minFico: 740, maxFico: 999, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['No Doc / No Ratio'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'No Ratio <0.75' },
        { minFico: 720, maxFico: 739, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['No Doc / No Ratio'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['No Doc / No Ratio'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'No Ratio <0.75' },
      ],
    },
  ],

  strRequirements: {
    allowed: false,
    allowedOnDSCR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    rentProofMethods: ['Not Allowed'],
    propertyTypes: [],
    additionalRequirements: [],
    notes: 'STR requirements not specified in Onslow Bay guidelines. Consult current product guidelines for STR eligibility.',
  },

  ruralPropertyRules: {
    allowedOnDSCR: false,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    additionalRestrictions: ['Rural property rules not specified in Onslow Bay guidelines. Consult current product guidelines for rural eligibility.'],
  },

  generalGuidelines: {
    minFico: 620,
    maxLoanAmount: 2500000,
    minLoanAmount: 150000,
    interestOnly: false,
    prepaymentPenaltyOptions: ['Available'],
    reserveRequirements: 'Expanded Prime Plus: 6–12 months depending on loan amount. Sharp Matrix: 3 months. DSCR: 3–6 months.',
    seasoningRequirements: 'Expanded Prime Plus: 48 months. Sharp A-: 24 months. Sharp A-3: flexible. DSCR: 36 months.',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    entityVesting: true,
    trustVesting: true,
  },

  creditEventSeasoning: {
    bankruptcy: '24–48 months depending on program',
    foreclosure: '24–48 months depending on program',
    shortSale: '24–48 months depending on program',
    deedInLieu: '24–48 months depending on program',
  },

  sourceDocuments: ['Onslow Bay Correspondent Guidelines.pdf'],
  lastUpdated: '2026-01-01',
}
