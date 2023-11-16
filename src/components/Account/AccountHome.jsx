import React from "react";
import AccountProfileCard from "./AccountProfileCard";
import ViewAnalyticsCard from "./ViewAnalyticsCard";

const AccountHome = () => {
  return (
    <div className="account-home">
      <ViewAnalyticsCard/>
      <AccountProfileCard />
    </div>
  );
};

export default AccountHome;
