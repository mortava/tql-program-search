import type { Investor } from '../types'

const INV = ['Investment'] as const
const US_CSHIP = ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'] as const
const DSCR_PROPS = ['SFR', 'PUD', 'Condo (Warrantable)', 'Condo (Non-Warrantable)', 'Condotel', '2-4 Unit'] as const

export const champions: Investor = {
  id: 'champions',
  name: 'Champions Funding',
  shortName: 'Champions',
  description:
    'Non-QM DSCR lender offering Accelerator DSCR 1-4 unit investment program with tiered DSCR eligibility (≥1.00, 0.75-0.99, and No Ratio). Effective 03/16/2026.',

  strRequirements: {
    allowed: true,
    allowedOnDSCR: true,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    rentProofMethods: [
      'Market Rent Analysis (Form 1007/1025)',
      'Actual Proof of Prior 12 Months Rents',
    ],
    maxLtv: 75,
    propertyTypes: ['SFR', 'PUD', 'Condo (Warrantable)', '2-4 Unit'],
    additionalRequirements: [
      'STR max 75% purchase/rate-term, 70% cash-out',
      'Refer to guidelines for income documentation methods',
    ],
    notes: 'STR allowed. Max 75% purchase/R/T, 70% C/O.',
  },

  ruralPropertyRules: {
    allowedOnDSCR: false,
    allowedOnDSCR_STR: false,
    allowedOnFullDoc: false,
    allowedOnAltDoc: false,
    additionalRestrictions: [
      'Rural properties NOT eligible',
      'Up to 10 acres that do NOT meet rural definition are eligible',
    ],
    notes: 'Rural not eligible. Acreage up to 10 acres OK if not rural per appraisal.',
  },

  programs: [
    // ── Accelerator DSCR >= 1.00 ───────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 1.0,
      interestOnly: true,
      interestOnlyTermMonths: 120,
      prepaymentPenalty: '5% of UPB',
      minReserves: 'None <=1.5M; 2 months >1.5M; 6 months >2.5M',
      notes: 'DSCR >= 1.00. Min 600 FICO, max $3M. STR max 75%/70% C/O. No rural. NWC/Condotel: 5% LTV reduction. Cash-out: >65% max $600k; 60-65% max $1M; <=60% unlimited. IO: min 660 FICO, max 75%/70% C/O. Business purpose for C/O only.',
      ltvMatrix: [
        // <= $1M
        { minFico: 700, maxFico: 850, maxLtv: 80, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 620, maxFico: 639, maxLtv: 65, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 620, maxFico: 639, maxLtv: 55, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 600, maxFico: 619, maxLtv: 60, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 600, maxFico: 619, maxLtv: 55, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        // $1M–$1.5M
        { minFico: 740, maxFico: 850, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 740, maxFico: 850, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 80, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 75, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 55, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 620, maxFico: 639, maxLtv: 50, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'] },
        // $1.5M–$2M
        { minFico: 740, maxFico: 850, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 740, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        // $2M–$2.5M
        { minFico: 740, maxFico: 850, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 740, maxFico: 850, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 75, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 739, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 70, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 2000001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        // $2.5M–$3M
        { minFico: 740, maxFico: 850, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 740, maxFico: 850, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 720, maxFico: 739, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 720, maxFico: 739, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 680, maxFico: 699, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 2500001, maxLoanAmount: 3000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
      ],
    },

    // ── Accelerator DSCR 0.75–0.99 ────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: 0.75,
      interestOnly: true,
      prepaymentPenalty: '5% of UPB',
      minReserves: 'None <=1.5M; 2 months >1.5M; 6 months >2.5M',
      notes: 'DSCR 0.75-0.99 tier. Same property types/occupancy as >=1.00 tier. Reduced LTV limits at higher loan amounts.',
      ltvMatrix: [
        { minFico: 740, maxFico: 850, maxLtv: 80, minLoanAmount: 125000, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 0.75-0.99' },
        { minFico: 740, maxFico: 850, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 0.75-0.99' },
        { minFico: 740, maxFico: 850, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 0.75-0.99' },
        { minFico: 740, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 0.75-0.99' },
        { minFico: 700, maxFico: 739, maxLtv: 70, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'DSCR 0.75-0.99' },
        { minFico: 700, maxFico: 739, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['DSCR'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'DSCR 0.75-0.99' },
      ],
    },

    // ── No Ratio DSCR (< 0.75) ─────────────────────────────────────────
    {
      category: 'DSCR Standard',
      available: true,
      minDscr: undefined,
      interestOnly: true,
      prepaymentPenalty: '5% of UPB',
      minReserves: 'None <=1.5M; 2 months >1.5M; 6 months >2.5M',
      notes: 'No Ratio DSCR (<0.75). Min 640 FICO. Asset depletion variant available: 680 FICO max 80% purchase; 720 FICO max 75% R/T; 720 FICO max 70% C/O.',
      ltvMatrix: [
        { minFico: 700, maxFico: 850, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 850, maxLtv: 70, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 680, maxFico: 699, maxLtv: 75, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 680, maxFico: 699, maxLtv: 70, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 660, maxFico: 679, maxLtv: 65, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'] },
        { minFico: 660, maxFico: 679, maxLtv: 60, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'] },
        { minFico: 640, maxFico: 659, maxLtv: 60, minLoanAmount: 125000, maxLoanAmount: 1000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'] },
        { minFico: 740, maxFico: 850, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 740, maxFico: 850, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 720, maxFico: 739, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 720, maxFico: 739, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 719, maxLtv: 70, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 719, maxLtv: 65, minLoanAmount: 1000001, maxLoanAmount: 1500000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 740, maxFico: 850, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 740, maxFico: 850, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 739, maxLtv: 65, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Purchase', 'Rate/Term Refinance'], notes: 'No Ratio <0.75' },
        { minFico: 700, maxFico: 739, maxLtv: 60, minLoanAmount: 1500001, maxLoanAmount: 2000000, propertyTypes: DSCR_PROPS, occupancy: INV, docTypes: ['No Doc / No Ratio'], citizenship: US_CSHIP, loanPurpose: ['Cash-Out Refinance'], notes: 'No Ratio <0.75' },
      ],
    },
  ],

  generalGuidelines: {
    minFico: 600,
    maxLoanAmount: 3000000,
    minLoanAmount: 125000,
    maxProperties: 'Unlimited',
    interestOnly: true,
    prepaymentPenaltyOptions: ['5% of UPB'],
    reserveRequirements: 'None <=1.5M; 2 months >1.5M; 6 months >2.5M',
    seasoningRequirements: '24-36 months depending on credit event',
    citizenshipAllowed: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    entityVesting: true,
    trustVesting: false,
  },

  creditEventSeasoning: {
    bankruptcy: '>=36 months; 24-35 months: max 75% purchase, 70% C/O',
    foreclosure: '>=36 months',
    shortSale: '>=36 months',
    mortgageLates: '1x30x12 allowed; 0x60x12: max 70% purchase, 65% refi',
  },

  sourceDocuments: ['champions DSCR 1 to 4.pdf'],
  lastUpdated: '2026-03-16',
}
