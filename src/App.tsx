import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageLoader from './components/PageLoader'
import styled from 'styled-components'
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme/theme'
import axios from 'axios';

const Unlock = lazy(() => import('./views/Unlock'))
const Wallet = lazy(() => import('./views/Wallet'))
const Send = lazy(() => import('./views/Send'))
const NotFound = lazy(() => import('./views/NotFound'))

interface IWallet {
  id?: number,
  name: string,
  address: string,
  assets: {
    ticker: string,
    amount: number,
    xrate: number,
    icon: string
  }[];
  balance: {
    localCurrency: string,
    selectedCurrency: string
  };
}

const defaultWallets:IWallet[] = [
  {
    id: 0,
    name: "My Wallet",
    address: "7300 3777 3888 3334",
    assets: [{
      ticker: "USD",
      amount: 50,
      xrate: 30000,
      icon: "images/usd.png"
    },
    {
      ticker: "VND",
      amount: 10000000,
      xrate: 1,
      icon: "images/vnd.png"
    }],
    balance: {
      localCurrency: "23,046,000 VND",
      selectedCurrency: "1,000 USD"
    }
  }
];

const App: React.FC = () => {  
  const [wallets, setWallets]: [IWallet[], (wallets: IWallet[]) => void] = useState(defaultWallets);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
    
  useEffect(() => {
    axios
      .get<IWallet[]>("https://api.npoint.io/4bb76c68d648b209a4a0")
      .then(response => {
        setWallets(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const err =
        ex.response.status === 404
          ? "Resource not found"
          : "An unexpected error has occurred";
        setError(err);
        setLoading(false);
      });
  }, []);
  
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<PageLoader />}>
          <Box>
            <Switch>
              <Route path="/" exact>
                <Unlock />
              </Route>
              <Route path="/wallet">
                <Wallet wallets={wallets}/>
              </Route>
              <Route path="/send">
                <Send assets={wallets[0].assets}/>
              </Route>
              {/* Redirect */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Box>
        </Suspense>
      </ChakraProvider>
    </Router>
  )
}
export default React.memo(App)

const MainContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled(MainContainer)`
  flex-direction: column;
  background-color: #fff;
  z-index: 1;
  margin-top: 4rem;
  max-width: 375px;
  height: 600px;
  width: calc(100vw - 40px);
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: 
    rgb(0 0 0 / 1%) 0px 0px 1px, 
    rgb(0 0 0 / 4%) 0px 4px 8px, 
    rgb(0 0 0 / 4%) 0px 16px 24px, 
    rgb(0 0 0 / 1%) 0px 24px 32px;

  @media (max-width: 768px) {
    margin: 20px;
    min-height: calc(100vh - 40px);
    height: calc(100vh - 40px);
  }
`;