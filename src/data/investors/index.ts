import type { Investor } from '../types'
import { ahl } from './ahl'
import { deephaven } from './deephaven'
import { loanstream } from './loanstream'
import { verus } from './verus'
import { ellington } from './ellington'
import { onslowBay } from './onslow_bay'
import { adProduct } from './ad_product'
import { champions } from './champions'
import { investorSolutions } from './investor_solutions'
import { primeTime } from './prime_time'
import { closedEndSecond } from './closed_end_second'

export const investors: Investor[] = [
  ahl,
  deephaven,
  loanstream,
  verus,
  ellington,
  onslowBay,
  adProduct,
  champions,
  investorSolutions,
  primeTime,
  closedEndSecond,
]
