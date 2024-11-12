import React from 'react'
import HeaderBox from '../../components/ui/HeaderBox'
import TotalBalanceBox from '../../components/ui/TotalBalanceBox';

const Home = () => {

    const loggedIn = {firstName: 'Dylan'};
  return (
    <section className = "home">
        <div className = "home-content">
            <header className = "home-header">
                <HeaderBox 
                type = "greeting"
                title = "Welcome"
                user = {loggedIn?.firstName || "Guest"}
                subtext = "Access manage your accounts and transactions"
                
                />
            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250}
            />
            </header>
        </div>
    
    
    
    </section>

  )
}

export default Home