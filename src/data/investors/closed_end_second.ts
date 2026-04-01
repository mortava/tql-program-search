import type { Investor } from '../types'

const PRI = ['Primary Residence'] as const
const SEC = ['Second Home'] as const
const INV = ['Investment'] as const
const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const
const CES_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', '2-4 Unit'] as const
const STD_DOCS = ['Full Doc'] as const
const ALT_DOCS = ['Bank Statement (Personal)', 'Bank Statement (Business)', '1099 Only', 'WVOE'] as const
const ALL_PURPOSES = ['Purchase', 'Cash-Out Refinance'] as const

export const closedEndSecond: Investor = {
  id: 'closed-end-second',
  name: 'Closed End Second (Verus)',
  shortName: 'CES (Verus)',
  description:
    'Standalone Closed End Second lien product distributed through Verus. Fixed rate, fully amortizing 10/15/20/25/30 year terms. Standard and Alt Doc. $50K-$500K loan amounts. Not available in Texas.',

  strRequirements: {
    allowed: false,
    allowedOnDSCR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    rentProofMethods: ['Not Allowed'],
    propertyTypes: [],
    additionalRequirements: [],
    notes: 'STR not allowed. This is a second lien product.',
  },

  ruralPropertyRules: {
    allowedOnDSCR: false,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    additionalRestrictions: ['Rural properties NOT eligible'],
    notes: 'Rural properties not eligible.',
  },

  programs: [
    // ── Standard Doc — Max Loan $350,000 ──────────────────────────────
    {
      category: 'Closed End Second',
      available: true,
      interestOnly: false,
      maxDti: 50,
      notes: 'Standard Doc, max $350K. CLTV <=80% max 50% DTI; CLTV >80% max 45% DTI. Condos max 80% CLTV. 2-4 units max 75% CLTV. Combined balance >$2M max 80% CLTV, >$3M max 75% CLTV, max $4M total.',
      ltvMatrix: [
        // FICO 740+ — Primary
        { minFico: 740, maxFico: 850, maxLtv: 90, maxCltv: 90, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 45, notes: 'Standard Doc; CLTV >80% max 45% DTI' },
        // FICO 740+ — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 740+ — Investment
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Primary
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 45, notes: 'Standard Doc; CLTV >80% max 45% DTI' },
        // FICO 700-739 — Second Home
        { minFico: 700, maxFico: 739, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Investment
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Primary
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Second Home
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Investment: N/A (not eligible)
      ],
    },

    // ── Standard Doc — Max Loan $500,000 ──────────────────────────────
    {
      category: 'Closed End Second',
      available: true,
      interestOnly: false,
      maxDti: 50,
      notes: 'Standard Doc, $350,001-$500K. CLTV <=80% max 50% DTI; CLTV >80% max 45% DTI. Condos max 80% CLTV. 2-4 units max 75% CLTV.',
      ltvMatrix: [
        // FICO 740+ — Primary
        { minFico: 740, maxFico: 850, maxLtv: 85, maxCltv: 85, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 45, notes: 'Standard Doc; CLTV >80% max 45% DTI' },
        // FICO 740+ — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 740+ — Investment
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Primary
        { minFico: 700, maxFico: 739, maxLtv: 85, maxCltv: 85, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 45, notes: 'Standard Doc; CLTV >80% max 45% DTI' },
        // FICO 700-739 — Second Home
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Investment
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Primary
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Second Home
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...STD_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Investment: N/A (not eligible)
      ],
    },

    // ── Alt Doc — Max Loan $350,000 ───────────────────────────────────
    {
      category: 'Closed End Second',
      available: true,
      interestOnly: false,
      maxDti: 50,
      notes: 'Alt Doc (Bank Statements, 1099, WVOE), max $350K. CLTV <=80% max 50% DTI; CLTV >80% max 45% DTI. WVOE max 80% CLTV. Condos max 80% CLTV. 2-4 units max 75% CLTV.',
      ltvMatrix: [
        // FICO 740+ — Primary
        { minFico: 740, maxFico: 850, maxLtv: 85, maxCltv: 85, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 45, notes: 'Alt Doc; CLTV >80% max 45% DTI' },
        // FICO 740+ — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 740+ — Investment
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Primary
        { minFico: 700, maxFico: 739, maxLtv: 80, maxCltv: 80, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Second Home
        { minFico: 700, maxFico: 739, maxLtv: 70, maxCltv: 70, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Investment
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Primary
        { minFico: 680, maxFico: 699, maxLtv: 75, maxCltv: 75, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Second Home
        { minFico: 680, maxFico: 699, maxLtv: 65, maxCltv: 65, minLoanAmount: 50000, maxLoanAmount: 350000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Investment: N/A (not eligible)
      ],
    },

    // ── Alt Doc — Max Loan $500,000 ───────────────────────────────────
    {
      category: 'Closed End Second',
      available: true,
      interestOnly: false,
      maxDti: 50,
      notes: 'Alt Doc (Bank Statements, 1099, WVOE), $350,001-$500K. CLTV <=80% max 50% DTI; CLTV >80% max 45% DTI. WVOE max 80% CLTV. Condos max 80% CLTV. 2-4 units max 75% CLTV.',
      ltvMatrix: [
        // FICO 740+ — Primary
        { minFico: 740, maxFico: 850, maxLtv: 80, maxCltv: 80, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 740+ — Second Home
        { minFico: 740, maxFico: 850, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 740+ — Investment
        { minFico: 740, maxFico: 850, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Primary
        { minFico: 700, maxFico: 739, maxLtv: 75, maxCltv: 75, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Second Home
        { minFico: 700, maxFico: 739, maxLtv: 65, maxCltv: 65, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 700-739 — Investment
        { minFico: 700, maxFico: 739, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...INV], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Primary
        { minFico: 680, maxFico: 699, maxLtv: 70, maxCltv: 70, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...PRI], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Second Home
        { minFico: 680, maxFico: 699, maxLtv: 60, maxCltv: 60, minLoanAmount: 350001, maxLoanAmount: 500000, propertyTypes: [...CES_PROPS], occupancy: [...SEC], docTypes: [...ALT_DOCS], citizenship: [...US_CSHIP], loanPurpose: [...ALL_PURPOSES], maxDti: 50 },
        // FICO 680-699 — Investment: N/A (not eligible)
      ],
    },
  ],

  generalGuidelines: {
    minFico: 680,
    maxLoanAmount: 500000,
    minLoanAmount: 50000,
    maxDti: 50,
    interestOnly: false,
    prepaymentPenaltyOptions: [],
    reserveRequirements: 'None required',
    seasoningRequirements: '>= 48 months for BK/FC/SS/DIL; > 12 months for forbearance/modification/deferral',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    entityVesting: false,
    trustVesting: false,
  },

  creditEventSeasoning: {
    bankruptcy: '>= 48 months',
    foreclosure: '>= 48 months',
    shortSale: '>= 48 months',
    deedInLieu: '>= 48 months',
    forbearance: '> 12 months',
    mortgageLates: '0x30x12 required',
  },

  sourceDocuments: ['Closed End Second - Standard and Alt Doc (1).pdf'],
  lastUpdated: '2026-03-31',
}
