import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import PageLoader from './components/PageLoader'
import styled from 'styled-components'
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme/theme'

// Route-based code splitting
const Unlock = lazy(() => import('./views/Unlock'))
const Wallet = lazy(() => import('./views/Wallet'))
const Send = lazy(() => import('./views/Send'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
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
                <Wallet />
              </Route>
              <Route path="/send">
                <Send />
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