import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Flex, Image, Text } from '@kevin0409/polka-classic-uikit'
import { Pool } from 'state/types'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const TokenSymbolLabel = styled(Text)`
  line-height: 1.2;
`;

const FarmImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  width: 7.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 80px;
`;

const CardHeading: React.FC<HarvestProps> = ({
  pool
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <FarmImageWrapper>
        <Image src={`/images/farms/${pool.stakingTokenName}.png`} alt={pool.stakingTokenName} width={36} height={36} />
        <Image src={`/images/farms/${pool.tokenName}.png`} alt={pool.tokenName} width={36} height={36} />
      </FarmImageWrapper>
      <Flex flexDirection="column" alignItems="flex-end">
        <TokenSymbolLabel color='primary' fontSize='18px' >{pool.stakingTokenName}</TokenSymbolLabel>
        <TokenSymbolLabel fontSize='18px'>{pool.tokenName}</TokenSymbolLabel>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
