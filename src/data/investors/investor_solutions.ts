import type { Investor } from '../types'

// Shared const arrays
const INV = ['Investment'] as const
const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const

const DSCR_1_4_PROPS = ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD', 'Rural'] as const
const DSCR_5_8_PROPS = ['5-8 Unit', 'Mixed Use'] as const

const PURCH = ['Purchase'] as const
const RT = ['Rate/Term Refinance'] as const
const CO = ['Cash-Out Refinance'] as const

export const investorSolutions: Investor = {
  id: 'investor-solutions',
  name: 'Investor Solutions (Verus)',
  shortName: 'Investor Solutions',
  description:
    'Investor Solutions is a Verus Mortgage Capital product offering DSCR financing for 1–4 unit and 5–8 unit/mixed use investment properties, with STR and rural allowances on 1–4 unit.',
  sourceDocuments: [
    'Investor Solutions - DSCR (1).pdf',
    'Investor Solutions - DSCR (5-8 Units or 2-8 Mixed Use) (1).pdf',
  ],
  lastUpdated: '2026-01-01',

  programs: [
    // ─── DSCR 1-4 Units ──────────────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      interestOnly: true,
      prepaymentPenalty: 'Available — investment only, max 5 years; not allowed AK/KS/MI/MN/NM/RI',
      minReserves: 'Standard 2 months; >$1.5M: 6 months; >$2.5M: 12 months; cash-out may satisfy reserves',
      notes: 'DSCR 1-4 Units. STR: 5% LTV reduction, max 80% purchase/R-T, 70% C/O; DSCR formula (Gross Rents * 0.80)/PITIA. Rural: max 75% purchase, 70% refi, max 5 acres. Condotel: max 75% purchase, 65% refi, max $1.5M. IO: min 680 FICO, max 75% purchase/R-T, 70% C/O. Cash-in-hand: >65% LTV $500k; <65% $1M. Loans <$150k: max 70% purchase, 65% refi, min 1.00 DSCR. First-time investor: min 700 FICO, 36mo seasoning, DSCR>1.00, 1-unit only, must own primary. Ineligible states for 5-8: IL, NY.',
      ltvMatrix: [
        // DSCR >= 1.00 — 740+ FICO — Purchase
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.00 — 720–739 FICO — Purchase
        { minFico: 720, maxFico: 739, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 720, maxFico: 739, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.00 — 700–719 FICO — Purchase
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.00 — 660–699 FICO — Purchase
        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.00 — 640–659 FICO — Purchase
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // DSCR >= 1.00 — Rate/Term
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 720, maxFico: 739, maxLtv: 85, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        // DSCR >= 1.00 — Cash-Out
        { minFico: 740, maxFico: 999, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 720, maxFico: 739, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        // DSCR < 1.00 — Purchase
        { minFico: 700, maxFico: 999, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 60, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH], notes: 'DSCR < 1.00' },
        // DSCR < 1.00 — Rate/Term
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT], notes: 'DSCR < 1.00' },
        // DSCR < 1.00 — Cash-Out
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO], notes: 'DSCR < 1.00' },
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_1_4_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO], notes: 'DSCR < 1.00' },
      ],
    },

    // ─── DSCR 5-8 Units / Mixed Use ──────────────────────────────────────
    {
      category: '5-8 Unit / Mixed Use',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      prepaymentPenalty: 'Available',
      minReserves: '6 months; >$1.5M: 9 months; >$2.5M: 12 months; cash-out may NOT satisfy reserves',
      notes: 'DSCR >= 1.00 only. STR NOT eligible. Rural NOT eligible. Mixed Use: retail/office/restaurant only; max commercial < 49.99% of total area. Max 2 acres. Experienced investor required. First-time investor NOT eligible. Cash-in-hand: max $1M. Ineligible states: IL, NY. CT/FL/NJ: max 70% purchase (min 720 FICO), max 65% refi (min 720 FICO). Vacant units: 75% of market rent.',
      ltvMatrix: [
        // Purchase ≤$1.5M
        { minFico: 700, maxFico: 999, maxLtv: 75, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // Purchase $1.5M–$2M
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...PURCH] },
        // Rate/Term ≤$1.5M
        { minFico: 700, maxFico: 999, maxLtv: 70, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        // Rate/Term $1.5M–$2M
        { minFico: 700, maxFico: 999, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...RT] },
        // Cash-Out ≤$1.5M
        { minFico: 700, maxFico: 999, maxLtv: 65, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
        // Cash-Out $1.5M–$2M
        { minFico: 700, maxFico: 999, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_5_8_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: [...CO] },
      ],
    },
  ],

  strRequirements: {
    allowed: true,
    allowedOnDSCR: true,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    rentProofMethods: [
      'Market Rent Analysis (Form 1007/1025)',
      'Actual Proof of Prior 12 Months Rents',
      'AirDNA Report Only',
    ],
    minFico: undefined,
    maxLtv: 80,
    propertyTypes: ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD'],
    additionalRequirements: [
      'STR allowed on 1-4 unit DSCR only; NOT eligible on 5-8 unit/mixed use',
      'DSCR formula: (Gross Rents * 0.80) / PITIA',
      'AirDNA only for purchase; min market score 60',
      '5% LTV reduction from matrix; max 80% LTV; max 70% C/O',
      '3rd party rental history: 12 months required',
      '12mo bank statements also acceptable',
    ],
  },

  ruralPropertyRules: {
    allowedOnDSCR: true,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    maxLtv: 75,
    acreageLimit: '5 acres',
    additionalRestrictions: [
      'Rural allowed on 1-4 unit DSCR only; NOT eligible on 5-8 unit/mixed use',
      'Max 75% purchase, 70% refi',
    ],
  },

  generalGuidelines: {
    minFico: 640,
    maxLoanAmount: 3500000,
    minLoanAmount: 100000,
    interestOnly: true,
    prepaymentPenaltyOptions: ['Investment only', 'Max 5 years', 'Not allowed AK/KS/MI/MN/NM/RI'],
    reserveRequirements: '1-4 Unit: standard 2 months; >$1.5M: 6 months; >$2.5M: 12 months. 5-8 Unit: 6–12 months.',
    seasoningRequirements: '1-4 Unit: 24–36 months. 5-8 Unit: 36 months.',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    entityVesting: true,
    trustVesting: true,
  },

  creditEventSeasoning: {
    bankruptcy: '24–36 months (1-4 unit); 36 months (5-8 unit)',
    foreclosure: '24–36 months',
    shortSale: '24–36 months',
    deedInLieu: '24–36 months',
    mortgageLates: '1x30x12 allowed; 0x60x12 max 70% LTV',
  },

  sourceDocuments: [
    'Investor Solutions - DSCR (1).pdf',
    'Investor Solutions - DSCR (5-8 Units or 2-8 Mixed Use) (1).pdf',
  ],
  lastUpdated: '2026-01-01',
}
