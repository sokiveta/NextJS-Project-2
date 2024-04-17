import React from 'react';
import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get tickets', error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [...new Set(tickets?.map(({ source }) => source))];

  return (
    <div className="p-5">
      <h1>New Customers | Listed by Marketing Source</h1>
      <br />
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h5>{uniqueCategory}</h5>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.source === uniqueCategory)
                  .map((filtereTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filtereTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
