import styled from 'styled-components';
import { Orders, Stat } from '@liqnft/candy-shop';
import { ConnectButton } from '@/components/ConnectButton';
import { useUserWallet } from '@/hooks/useUserWallet';
import { useShopStore } from '@/store/useShopStore';

const MarketplaceWithFilter: React.FC = () => {
  const userWallet = useUserWallet();
  const candyShop = useShopStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <DesContainer>
      <Stat
        candyShop={candyShop}
        title={'A-NFT'}
        description={'The next generation NFT platform for tickets, artists, and more is a game-changing technology that will revolutionize the way we manage and exchange digital assets.s.'}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={userWallet}
        candyShop={candyShop}
        walletConnectComponent={<ConnectButton />}
        filters={FILTERS}
        filterSearch
        search
      />
    </DesContainer>
  );
};

export default MarketplaceWithFilter;

const FILTERS = [
  { name: 'Tickets', collectionId: '1', identifier: 2036309415 },
  { name: 'Artists', collectionId: '2', identifier: 1235887132 },
];

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;
