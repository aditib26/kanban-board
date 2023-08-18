// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { fetchTickets } from './api';
// import TicketCard from './TicketCard';
// import GroupingOptions from './GroupingOptions';
// import SortingOptions from './SortingOptions';

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sorting, setSorting] = useState('priority');


//   useEffect(() => {
//     const storedViewState = JSON.parse(localStorage.getItem('viewState'));
//     if (storedViewState) {
//       setGrouping(storedViewState.grouping);
//       setSorting(storedViewState.sorting);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("Fetching tickets...");
//     fetchTickets()
//       .then(data => {
//         console.log("Fetched tickets:", data);
//         setTickets(data);
//       })
//       .catch(error => console.error("Error fetching tickets:", error));
//   }, []);

//   useEffect(() => {
//     const viewState = { grouping, sorting };
//     localStorage.setItem('viewState', JSON.stringify(viewState));
//   }, [grouping, sorting]);

//   // Add these console.log statements to track the data
//   const groupedTickets = groupTickets(tickets, grouping);
//   console.log("groupedTickets:", groupedTickets);

//   const sortedTickets = sortTickets(groupedTickets, sorting);
//   console.log("sortedTickets:", sortedTickets);

//   return (
//     <div className="kanban-board">
//       <h1>Kanban Board</h1>
//       <GroupingOptions grouping={grouping} onGroupChange={setGrouping} />
//       <SortingOptions sorting={sorting} onSortChange={setSorting} />
//       <div className="ticket-list">
//         {Object.values(sortedTickets).map(group => (
//           group.map(ticket => (
//             <TicketCard key={ticket.id} ticket={ticket} />
//           ))
//         ))}
//       </div>
//     </div>
//   );

// // Function to group tickets based on grouping option
// function groupTickets(tickets, grouping) {
//   if (grouping === 'status') {
//     const groupedByStatus = tickets.reduce((groups, ticket) => {
//       const status = ticket.status;
//       if (!groups[status]) {
//         groups[status] = [];
//       }
//       groups[status].push(ticket);
//       return groups;
//     }, {});
//     return groupedByStatus;
//   } else if (grouping === 'user') {
//     const groupedByUser = tickets.reduce((groups, ticket) => {
//       const user = ticket.user;
//       if (!groups[user]) {
//         groups[user] = [];
//       }
//       groups[user].push(ticket);
//       return groups;
//     }, {});
//     return groupedByUser;
//   } else if (grouping === 'priority') {
//     const groupedByPriority = tickets.reduce((groups, ticket) => {
//       const priority = ticket.priority;
//       if (!groups[priority]) {
//         groups[priority] = [];
//       }
//       groups[priority].push(ticket);
//       return groups;
//     }, {});
//     return groupedByPriority;
//   }
//   return tickets;
// }

// // Function to sort tickets based on sorting option
// function sortTickets(tickets, sorting) {
//   if (sorting === 'priority') {
//     const sortedByPriority = [...tickets].sort((a, b) => b.priority - a.priority);
//     return sortedByPriority;
//   } else if (sorting === 'title') {
//     const sortedByTitle = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//     return sortedByTitle;
//   }
//   return tickets;
// }

// }


// export default App;


import React from 'react';
import './styles.css';
import KanbanBoard from './KanbanBoard';

function App() {
  return (
    <div className="App">
      <KanbanBoard />
    </div>
  );
}

export default App;


