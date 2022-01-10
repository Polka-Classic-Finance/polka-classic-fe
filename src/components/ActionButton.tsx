
import styled from 'styled-components';
import { Button } from '@kevin0409/polka-classic-uikit'

const ActionButton = styled(Button)`
  color: ${({ theme }) => theme.isDark && '#ffffff' };
`;

export default ActionButton;