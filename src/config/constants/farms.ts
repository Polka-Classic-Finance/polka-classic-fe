
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   risk: 5,
  //   lpSymbol: 'DOTC-BUSD LP',
  //   lpAddresses: {
  //     97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
  //     56: '0x91F2DBfB001E1CF49243CE162BFDff644B0C1647',
  //   },
  //   tokenSymbol: 'DOTC',
  //   tokenAddresses: {
  //     97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
  //     56: '0x5df4483e53871a1e8c92662b771e3637abc0ae02',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAddresses: contracts.busd,
  // },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DOTC-BNB LP',
    lpAddresses: {
      97: '0x09a53511f17eA9737B9B445f1ffC2A42B90fbcA0',
      56: '0x9d50A3e6Bf2C747d56e38a6bbA36bF3fa65b970A',
    },
    tokenSymbol: 'DOTC',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x5df4483e53871a1e8c92662b771e3637abc0ae02',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 1,
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
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DOTC',
    lpAddresses: {
      97: '0x862F11650D2C19C2D4768F6acD8212478FeE5472',
      56: '0x9d50A3e6Bf2C747d56e38a6bbA36bF3fa65b970A', // DOTC-BNB LP
    },
    tokenSymbol: 'DOTC',
    tokenAddresses: {
      97: '0xE5104E44ddAb73075Fe22F71CAad2584cF7a6D56',
      56: '0x5df4483e53871a1e8c92662b771e3637abc0ae02',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
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
