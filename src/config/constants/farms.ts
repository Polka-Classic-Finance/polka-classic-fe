
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DOTC-BUSD LP',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x776904b2f1c279E24e2786d8E32B491906074C1A',
    },
    tokenSymbol: 'DOTC',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x79Ca48c3F6bfB3eF284b4d4C39cA51286830f9aE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DOTC-BNB LP',
    lpAddresses: {
      97: '0x09a53511f17eA9737B9B445f1ffC2A42B90fbcA0',
      56: '0xbD1eD2320A4346DB098e6753F2DD1C561332a82b',
    },
    tokenSymbol: 'DOTC',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x79Ca48c3F6bfB3eF284b4d4C39cA51286830f9aE',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DOTC',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x79Ca48c3F6bfB3eF284b4d4C39cA51286830f9aE', // DOTC-BUSD LP
    },
    tokenSymbol: 'DOTC',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x79Ca48c3F6bfB3eF284b4d4C39cA51286830f9aE',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x7efaef62fddcca950418312c6c91aef321375a00', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  // {
  //   pid: 4,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '0x575Cb459b6E6B8187d3Ef9a25105D64011874820',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAddresses: contracts.busd,
  // },
]

export default farms
