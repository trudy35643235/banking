import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '../../components/RightSideBar'

const Home = () => {

    const loggedIn = {firstName: 'Dylan', lastName: 'Truong', email: "trudylan7@gmail.com"};
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
            RECENT TRANSACTIONS
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 6975.80}, {currentBalance: 6975.80}]}
      />        
    
    
    
    </section>

  )
}

export default Home