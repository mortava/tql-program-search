import type { Investor } from '../types'

// ── Shared Constants ──────────────────────────────────────────────────
const PRI = ['Primary Residence'] as const
const SEC = ['Second Home'] as const
const INV = ['Investment'] as const
const PRI_SEC = ['Primary Residence', 'Second Home'] as const
const SEC_INV = ['Second Home', 'Investment'] as const

const US_CSHIP = ['US Citizen', 'Permanent Resident'] as const
const US_CSHIP_NPR = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const
const FN_CSHIP = ['Foreign National'] as const
const ITIN_CSHIP = ['ITIN'] as const

const ASCENT_PLUS_PROPS = ['SFR', 'Condo (Warrantable)', 'PUD'] as const
const ASCENT_PROPS = ['SFR', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit', 'PUD'] as const
const DSCR_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'] as const
const FN_DSCR_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'] as const
const CC_DSCR_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'] as const
const CES_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', '2-4 Unit'] as const
const HELOC_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', '2-4 Unit'] as const


const STANDARD_ALT_DOC: readonly ['Full Doc', 'Alt-Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)'] = ['Full Doc', 'Alt-Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)']
const ASCENT_STD_DOC: readonly ['Full Doc', 'Alt-Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'] = ['Full Doc', 'Alt-Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only']
const ASCENT_ALT_DOC: readonly ['P&L Only', 'WVOE', 'Asset Depletion'] = ['P&L Only', 'WVOE', 'Asset Depletion']


export const verus: Investor = {
  id: 'verus',
  name: 'Verus Mortgage Capital',
  shortName: 'Verus',
  description:
    'Full-spectrum Non-QM investor offering Prime Ascent (Full/Alt Doc), ITIN, DSCR 1-4 unit, DSCR 5-8 unit/Mixed Use, Cross Collateral DSCR, Foreign National DSCR, Closed End Second, and HELOC programs. Matrix effective 11/10/2025.',

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
    maxLtv: 75,
    minDscr: 1.0,
    propertyTypes: ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'],
    additionalRequirements: [
      'STR max 75% purchase, 70% refinance',
      '12-month average rents required to account for seasonality',
      '20% expense factor for extraordinary costs (advertising, furnishings, cleaning)',
      'If actual expenses exceed 20%, use actual; if less than 20%, use 20% minimum',
      'AirDNA Rentalizer allowed for purchase only; Market Score >= 60 required',
      'When documented using multiple sources, lowest source of monthly income must be used',
    ],
    notes: 'STR allowed on DSCR 1-4 unit, FN DSCR, and Cross Collateral DSCR. AirDNA purchase-only, Market Score >= 60.',
  },

  ruralPropertyRules: {
    allowedOnDSCR: true,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: true,
    allowedOnAltDoc: true,
    maxLtv: 80,
    acreageLimit: 'Up to 20 acres (Full Doc/Alt Doc); Up to 5 acres (DSCR)',
    additionalRestrictions: [
      'Rural NOT allowed on 5-8 Unit/Mixed Use, Closed End Second, or HELOC',
      'Prime Ascent Plus/Ascent: max 80% purchase, 75% refinance',
      'ITIN: max 75% purchase, 70% refinance',
      'DSCR 1-4: max 75% purchase, 70% refinance',
      'Cross Collateral DSCR: max 75% purchase, 70% refinance (portfolio overlay)',
      'FN DSCR: max 70% purchase/rate-term, 65% cash-out',
    ],
    notes: 'Rural allowed on most programs with LTV caps. Not allowed on 5-8 Unit/Mixed Use, CES, or HELOC.',
  },

  programs: [
    // ══════════════════════════════════════════════════════════════════
    // PRIME ASCENT PLUS — Primary Residence
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      maxDti: 43,
      interestOnly: true,
      interestOnlyTermMonths: 360,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: '6 months PITIA (<85% LTV); 12 months PITIA (>=85% LTV)',
      notes: 'Prime Ascent Plus — Primary Residence. Standard Doc & Alt Doc (Personal/Business Bank Statements). Min 680 FICO. Max $2.5M. Up to 20 acres. IO min 700 FICO, max 80% LTV.',
      ltvMatrix: [
        // ── Primary Residence rows ──
        { minFico: 720, maxFico: 850, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...PRI], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // PRIME ASCENT PLUS — Second Home & Investment
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Full Doc & Alt-Doc Second Home',
      available: true,
      maxDti: 43,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: '6 months PITIA (<85% LTV); 12 months PITIA (>=85% LTV)',
      notes: 'Prime Ascent Plus — Second Home. Standard Doc & Alt Doc. Min 680 FICO. Max $2.5M.',
      ltvMatrix: [
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...SEC], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
      ],
    },

    {
      category: 'Full Doc & Alt-Doc Investment',
      available: true,
      maxDti: 43,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: '6 months PITIA',
      notes: 'Prime Ascent Plus — Investment. Standard Doc & Alt Doc. Min 680 FICO. Max $2.5M.',
      ltvMatrix: [
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], maxDti: 43 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PLUS_PROPS], occupancy: [...INV], docTypes: [...STANDARD_ALT_DOC], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 43 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // PRIME ASCENT — Primary Residence (Standard/Bank Statement/1099)
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      maxDti: 50,
      interestOnly: true,
      interestOnlyTermMonths: 360,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: '3 months PITIA (<80% LTV); 6 months (80-85%); 12 months (>85%); 9 months (>$1.5M); 12 months (>$2.5M)',
      notes: 'Prime Ascent — Primary Residence. Standard Doc, Bank Statement, 1099. Min 620 FICO. Max $4M. 6 doc types. IO min 660 FICO. DTI up to 55% with restrictions.',
      ltvMatrix: [
        // Standard/Bank Statement/1099 doc types
        { minFico: 720, maxFico: 850, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 90, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 3500001, maxLoanAmount: 4000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 3500001, maxLoanAmount: 4000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },

        { minFico: 700, maxFico: 719, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 90, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },

        { minFico: 680, maxFico: 699, maxLtv: 90, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 640, maxFico: 659, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },

        { minFico: 620, maxFico: 639, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },

        // P&L Statement Only, WVOE, Asset Utilization doc types — Primary Residence
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // PRIME ASCENT — Second Home & Investment (Standard/Bank Statement/1099)
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Full Doc & Alt-Doc Second Home',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: '3 months PITIA (<80% LTV); 6 months (80-85%); 12 months (>85%)',
      notes: 'Prime Ascent — Second Home/Investment. Standard Doc, Bank Statement, 1099. Min 620 FICO. Max $4M.',
      ltvMatrix: [
        // Standard/BS/1099 — Second Home/Investment
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 85, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },

        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 85, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },

        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 85, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 640, maxFico: 659, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },

        { minFico: 620, maxFico: 639, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_STD_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },

        // P&L/WVOE/Asset Util — Second Home/Investment (same structure as Primary but reduced LTVs)
        { minFico: 720, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], maxDti: 50 },

        { minFico: 700, maxFico: 719, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...SEC_INV], docTypes: [...ASCENT_ALT_DOC], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // ITIN — Primary Residence & Second Home
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Full Doc & Alt-Doc Primary Residence',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'N/A (Primary/Second Home only)',
      minReserves: '6 months PITIA (LTV=80%); 3 months PITIA (LTV<80%)',
      notes: 'Verus ITIN Program — Primary/Second Home. Standard Doc, Bank Statements, 1099, WVOE. Min 660 FICO. Max $1.5M. IO min 680 FICO.',
      ltvMatrix: [
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 80, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], maxDti: 50 },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...ASCENT_PROPS], occupancy: [...PRI_SEC], docTypes: ['Full Doc', 'Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'], citizenship: [...ITIN_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // INVESTOR SOLUTIONS DSCR (1-4 Unit) — DSCR >= 1.00
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      interestOnlyTermMonths: 360,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '2 months PITIA; 6 months >$1.5M; 12 months >$2.5M',
      notes: 'Investor Solutions DSCR >= 1.00. Min 640 FICO. Max $3.5M. 1-4 unit investment only. IO min 680 FICO, max 75% purchase/R/T, 70% C/O. STR allowed max 75%/70%. Rural max 75%/70%.',
      ltvMatrix: [
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },

        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },

        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
      ],
    },

    // ── DSCR < 1.00 ─────────────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 0.75,
      interestOnly: true,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '2 months PITIA; 6 months >$1.5M; 12 months >$2.5M',
      notes: 'Investor Solutions DSCR < 1.00 tier. Min 660 FICO. Max $3M. Reduced LTVs.',
      ltvMatrix: [
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 60, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },

        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },

        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // DSCR STR (Short Term Rental) — uses same DSCR matrix but with STR caps
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'DSCR Short Term Rental (STR)',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '2 months PITIA; 6 months >$1.5M; 12 months >$2.5M',
      notes: 'Investor Solutions DSCR STR. Max 75% purchase, 70% refinance. 12-month average rents, 20% expense factor. AirDNA Market Score >= 60 for purchase. Uses lower of STR cap or DSCR matrix LTV.',
      ltvMatrix: [
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 3500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },

        { minFico: 660, maxFico: 699, maxLtv: 75, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 699, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 2500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },

        { minFico: 640, maxFico: 659, maxLtv: 70, minLoanAmount: 100000, maxLoanAmount: 1000000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR STR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // DSCR 5-8 UNIT / 2-8 MIXED USE
    // ══════════════════════════════════════════════════════════════════
    {
      category: '5-8 Unit / Mixed Use',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '6 months PITIA; 9 months >$1.5M; 12 months >$2.5M',
      notes: 'DSCR 5-8 Residential Units / 2-8 Mixed Use. Min 700 FICO. Max $3M. DSCR >= 1.00 required. No STR. No rural. No FTHB. Experienced investor required. IL/NY ineligible.',
      ltvMatrix: [
        // 5-8 Residential Units
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 60, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 55, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['5-8 Unit'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },

        // 2-8 Mixed Use
        { minFico: 720, maxFico: 850, maxLtv: 75, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 720, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 720, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 75, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 400000, maxLoanAmount: 1500000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: ['Mixed Use'], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // CROSS COLLATERAL DSCR — Portfolio 2-25 Properties
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '2 months PITIA/property; 6 months >$1.5M; 12 months >$2.5M',
      maxProperties: 25,
      notes: 'Cross Collateral DSCR. Portfolio 2-25 properties. Min 660 FICO. Max $4M. Loan DSCR >= 1.00, Property DSCR >= 0.75. US Citizen/Perm Resident only. Experienced investor required. STR allowed per seller guide. Rural allowed max 75%/70%.',
      ltvMatrix: [
        // DSCR > 1.20
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 200000, maxLoanAmount: 1000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 200000, maxLoanAmount: 1000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 3000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 3000001, maxLoanAmount: 3500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 3500001, maxLoanAmount: 4000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 700, maxFico: 850, maxLtv: 60, minLoanAmount: 3500001, maxLoanAmount: 4000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance'] },

        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 3500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },

        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },

        // DSCR 1.00-1.20 (reduced LTVs)
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 700, maxFico: 850, maxLtv: 60, minLoanAmount: 2500001, maxLoanAmount: 3500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], notes: 'DSCR 1.00-1.20' },

        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 680, maxFico: 699, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 3500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], notes: 'DSCR 1.00-1.20' },

        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 200000, maxLoanAmount: 1500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 200000, maxLoanAmount: 1000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 660, maxFico: 679, maxLtv: 60, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 660, maxFico: 679, maxLtv: 55, minLoanAmount: 1000001, maxLoanAmount: 2000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 660, maxFico: 679, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'] },
        { minFico: 660, maxFico: 679, maxLtv: 55, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Rate/Term Refinance'], notes: 'DSCR 1.00-1.20' },
        { minFico: 660, maxFico: 679, maxLtv: 55, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: [...CC_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...US_CSHIP], loanPurpose: ['Purchase'], notes: 'DSCR 1.00-1.20' },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // FOREIGN NATIONAL DSCR
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      prepaymentPenalty: 'Max 5 years',
      minReserves: '6 months PITIA',
      notes: 'Foreign National DSCR. Min 680 FICO or No Credit Score. Max $2.5M. Investment only. STR allowed max 70% refi. Rural max 70%/65% C/O.',
      ltvMatrix: [
        // DSCR >= 1.00
        { minFico: 680, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase'] },
        // No Credit Score rows — use minFico: 0 to represent no score requirement
        { minFico: 0, maxFico: 850, maxLtv: 75, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'No Credit Score option' },
        { minFico: 0, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase'], notes: 'No Credit Score option' },

        // DSCR < 1.00
        { minFico: 680, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 850, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 850, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR < 1.00' },
        { minFico: 680, maxFico: 850, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR < 1.00' },
        // No Credit Score DSCR < 1.00
        { minFico: 0, maxFico: 850, maxLtv: 70, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR < 1.00, No Credit Score' },
        { minFico: 0, maxFico: 850, maxLtv: 65, minLoanAmount: 150000, maxLoanAmount: 1000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR < 1.00, No Credit Score' },
        { minFico: 0, maxFico: 850, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR < 1.00, No Credit Score' },
        { minFico: 0, maxFico: 850, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: [...FN_DSCR_PROPS], occupancy: [...INV], docTypes: ['DSCR'], citizenship: [...FN_CSHIP], loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'], notes: 'DSCR < 1.00, No Credit Score' },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // CLOSED END SECOND
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'Closed End Second',
      available: true,
      maxDti: 50,
      interestOnly: true,
      interestOnlyTermMonths: 36,
      prepaymentPenalty: 'Investment only; max 5 years',
      minReserves: 'Follow first lien requirements (simultaneous purchase); None (stand-alone C/O)',
      notes: 'Closed End Second. Min 680 FICO. Max $750K. CLTV-based matrix. 3 doc-type tiers. Fixed rate 10-30yr, or 30/15 balloon. IO primary only max 80% CLTV. TX ineligible. No rural. No FTHB.',
      ltvMatrix: [
        // Standard Doc — Primary Residence
        { minFico: 740, maxFico: 850, maxLtv: 90, maxCltv: 90, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 85, maxCltv: 85, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 80, maxCltv: 80, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // Standard Doc — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // Standard Doc — Investment
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // Bank Statement & 1099 — Primary Residence
        { minFico: 740, maxFico: 850, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // Bank Statement & 1099 — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 55, maxCltv: 55, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // Bank Statement & 1099 — Investment
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // WVOE & P&L with 2 Mo Bank St — Primary Residence
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 60, maxCltv: 60, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // WVOE & P&L — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 60, maxCltv: 60, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 55, maxCltv: 55, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 60, maxCltv: 60, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 55, maxCltv: 55, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 50, maxCltv: 50, minLoanAmount: 500001, maxLoanAmount: 750000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },

        // WVOE & P&L — Investment
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: ['WVOE', 'P&L Only'], citizenship: [...US_CSHIP_NPR], loanPurpose: ['Cash-Out Refinance', 'Purchase'], maxDti: 50 },
      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // HELOC
    // ══════════════════════════════════════════════════════════════════
    {
      category: 'HELOC / Second Mortgage',
      available: true,
      maxDti: 50,
      interestOnly: true,
      prepaymentPenalty: 'N/A',
      minReserves: 'Not applicable',
      notes: 'HELOC. Variable rate, Prime index. Min 680 FICO. Max $500K. Draw periods 2/3/5 years. Min 50% initial advance. 12 months ownership required. TX ineligible. No rural. Floor rate 4%. Max rate 18%. BK/FC seasoning 84 months.',
      ltvMatrix: [
        // Standard Doc — Primary Residence
        { minFico: 740, maxFico: 850, maxLtv: 90, maxCltv: 90, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 85, maxCltv: 85, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        // Standard Doc — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        // Standard Doc — Investment
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Full Doc'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        // Bank Statement — Primary Residence
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...PRI], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        // Bank Statement — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...HELOC_PROPS], occupancy: [...SEC], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },

        // Bank Statement — Investment
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 250000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 250001, maxLoanAmount: 350000, propertyTypes: [...HELOC_PROPS], occupancy: [...INV], docTypes: ['Bank Statement (Personal)', 'Bank Statement (Business)'], citizenship: [...US_CSHIP], loanPurpose: ['Cash-Out Refinance'], maxDti: 50 },
      ],
    },
  ],

  generalGuidelines: {
    minFico: 620,
    maxLoanAmount: 4000000,
    minLoanAmount: 50000,
    maxDti: 50,
    maxProperties: 'Unlimited',
    interestOnly: true,
    prepaymentPenaltyOptions: ['Fixed percentage no less than 3%', 'Declining structures max 5%', '6 months interest on >20% prepayment'],
    reserveRequirements: 'Varies by program: 2-12 months PITIA depending on LTV and loan amount',
    seasoningRequirements: 'Prime Ascent: 12-48 months depending on event. DSCR: 24-36 months. CES: 48 months. HELOC: 84 months.',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident', 'Foreign National', 'ITIN'],
    entityVesting: true,
    trustVesting: true,
  },

  creditEventSeasoning: {
    bankruptcy: '>=48 months (Prime Ascent Plus, CES); >=36 months (Prime Ascent, DSCR); >=84 months (HELOC)',
    foreclosure: '>=48 months (Prime Ascent Plus, CES); >=36 months (Prime Ascent, DSCR); >=84 months (HELOC)',
    shortSale: '>=48 months (Prime Ascent Plus, CES); >=36 months (Prime Ascent, DSCR); >=84 months (HELOC)',
    deedInLieu: '>=48 months (Prime Ascent Plus, CES); >=36 months (Prime Ascent, DSCR); >=84 months (HELOC)',
    forbearance: '>12 months all programs',
    loanModification: '>12 months all programs; <=12 months treated as 0x90x12 on Prime Ascent',
    mortgageLates: 'Prime Ascent Plus: 0x30x12. Prime Ascent: 1x30x12 per matrix, 0x60x12 max 80%/75%, 0x90x12 max 70%. DSCR: 1x30x12. CES/HELOC: 0x30x12.',
  },

  sourceDocuments: ['VERUS_FULL PRODUCT LINE_MATICES.pdf'],
  lastUpdated: '2025-11-10',
}
