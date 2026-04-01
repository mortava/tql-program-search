import type { Investor } from '../types'

const PRIM = ['Primary Residence'] as const
const SEC = ['Second Home'] as const
const INV = ['Investment'] as const
const PRIM_SEC = ['Primary Residence', 'Second Home'] as const
const PRIM_SEC_INV = ['Primary Residence', 'Second Home', 'Investment'] as const

const STANDARD_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'] as const
const ALL_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'Rural'] as const

const STANDARD_DOCS = ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE', 'Asset Depletion'] as const
const ALT_DOCS = ['P&L Only', 'WVOE', 'Asset Depletion'] as const

const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const

export const primeTime: Investor = {
  id: 'prime-time',
  name: 'Prime Time (Verus)',
  shortName: 'Prime Time',
  description:
    'Non-QM Full Doc & Alt-Doc lender offering Standard and Alt-Doc programs for primary, second home, and investment properties. Supports bank statement, 1099, P&L, WVOE, and asset utilization income documentation.',

  strRequirements: {
    allowed: false,
    allowedOnDSCR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    rentProofMethods: [],
    propertyTypes: [],
    additionalRequirements: ['STR requirements not specified in Prime Time guidelines'],
    notes: 'STR not specified — consult current product guidelines for STR eligibility.',
  },

  ruralPropertyRules: {
    allowedOnDSCR: false,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: true,
    allowedOnAltDoc: true,
    maxLtv: 80,
    acreageLimit: '20 acres',
    additionalRestrictions: [
      'Rural allowed: max 80% purchase, 75% refi',
      'Max 20 acres',
      'All occupancy types eligible',
    ],
    notes: 'Rural allowed on Standard & Alt-Doc. Max 80% purchase, 75% refi. Max 20 acres.',
  },

  programs: [
    // ── Primary Residence — Purchase ────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years; not allowed AK/KS/MI/MN/NM/RI',
      minReserves: 'LTV <=80%: 3 months; 80-85%: 6 months; >85%: 12 months; >$1.5M: 9 months; >$2.5M: 12 months',
      notes: 'Standard/Bank Statement/1099 doc types. IO: min 660 FICO, max 90% LTV (40yr ARM IO eligible). DTI up to 55% with: min $3,500 residual income, max 80% LTV, 2yr Standard Doc, 6mo reserves, not FTHB, min 660 FICO. State overlays CT/FL/IL/NJ/NY: max 85% purchase, 80% refi, max $2M. Declining market: max 85% purchase, 80% refi, max $2M.',
      ltvMatrix: [
        // Primary — Standard/Bank Statement/1099 — Purchase
        { minFico: 720, maxFico: 850, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 4000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 700, maxFico: 719, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 680, maxFico: 699, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 640, maxFico: 659, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 620, maxFico: 639, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        // Primary — Rate/Term Refinance
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Rate/Term Refinance'] },

        // Primary — Cash-Out Refinance
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },

        // P&L / WVOE / Asset Utilization — Primary — Purchase (reduced LTV)
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: ALL_PROPS, occupancy: PRIM, docTypes: ALT_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'], notes: 'P&L/WVOE/Asset Utilization' },
      ],
    },

    // ── Second Home ──────────────────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Second Home',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years; not allowed AK/KS/MI/MN/NM/RI',
      minReserves: 'LTV <=80%: 3 months; 80-85%: 6 months; >85%: 12 months; >$1.5M: 9 months; >$2.5M: 12 months',
      notes: 'Standard/Bank Statement/1099 doc types for second home.',
      ltvMatrix: [
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3500000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2500000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3500000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 3000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: STANDARD_PROPS, occupancy: SEC, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
      ],
    },

    // ── Investment ───────────────────────────────────────────────────────
    {
      category: 'Full Doc & Alt-Doc Investment',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years; not allowed AK/KS/MI/MN/NM/RI',
      minReserves: 'LTV <=80%: 3 months; 80-85%: 6 months; >85%: 12 months; >$1.5M: 9 months; >$2.5M: 12 months',
      notes: 'Standard/Bank Statement/1099 doc types for investment properties. Gift funds: 10% borrower contribution.',
      ltvMatrix: [
        { minFico: 640, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: INV, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: STANDARD_PROPS, occupancy: INV, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 850, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: STANDARD_PROPS, occupancy: INV, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },

        { minFico: 620, maxFico: 639, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: STANDARD_PROPS, occupancy: INV, docTypes: STANDARD_DOCS, citizenship: US_CSHIP, loanPurpose: ['Purchase'] },
      ],
    },
  ],

  generalGuidelines: {
    minFico: 620,
    maxLoanAmount: 4000000,
    minLoanAmount: 150000,
    maxDti: 50,
    maxProperties: 'Unlimited',
    interestOnly: true,
    prepaymentPenaltyOptions: ['Investment only; max 5 years; not allowed AK/KS/MI/MN/NM/RI'],
    reserveRequirements: 'LTV <=80%: 3 months; 80-85%: 6 months; >85%: 12 months; >$1.5M: 9 months; >$2.5M: 12 months',
    seasoningRequirements: '12-36 months depending on tier',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    entityVesting: true,
    trustVesting: true,
  },

  creditEventSeasoning: {
    bankruptcy: '>=36 months; 24-35 months: max 80% purchase, 75% refi, max $1.5M; 12-23 months: max 70% purchase, max $1M',
    foreclosure: '>=36 months',
    shortSale: '>=36 months',
    mortgageLates: '1x30x12 allowed; 0x60x12: max 80% purchase, 75% refi, max $1.5M; 0x90x12: max 70% purchase, max $1M',
  },

  sourceDocuments: ['Prime Time - Standard Doc and Alt Doc.pdf'],
  lastUpdated: '2026-01-01',
}
