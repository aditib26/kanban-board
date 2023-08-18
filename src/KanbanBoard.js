import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [groupBy, setGroupBy] = useState(localStorage.getItem('kanbanGroupBy') || 'status'); // Default to 'status'
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
          .then(response => {
            if (response.data && response.data.tickets && response.data.users) {
              setTickets(response.data.tickets);
              setUsers(response.data.users);
            } else {
              console.error('Invalid API response format');
            }
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    
  const statusColors = {
    'Todo': '#c8e6c9', // Pastel Green
    'In progress': '#ffe0b2', // Pastel Orange
    'Backlog': '#b3e0ff' // Pastel Blue
  };

  const userGroups = {};
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };
  const priorityGroups = {};
  
  tickets.forEach(ticket => {
    const userId = ticket.userId;
    const priority = ticket.priority;
    
    if (!userGroups[userId]) {
      userGroups[userId] = [];
    }
    userGroups[userId].push(ticket);

    if (!priorityGroups[priority]) {
      priorityGroups[priority] = [];
    }
    priorityGroups[priority].push(ticket);
  });

  const handleGroupChange = event => {
    const newGroupBy = event.target.value;
    setGroupBy(newGroupBy);
    localStorage.setItem('kanbanGroupBy', newGroupBy);
  };

  const renderUserName = userId => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const renderContent = () => {
    if (groupBy === 'users') {
        return (
            <>
              {Object.keys(userGroups).map(userId => (
                <div key={userId} className="status-group">
                  <h2 className="status-heading">{renderUserName(userId)}</h2>
                  {userGroups[userId].map(ticket => (
                    <div
                      key={ticket.id}
                      className="ticket"
                      style={{ backgroundColor: statusColors[ticket.status] }}
                    >
                      <h3>{ticket.title}</h3>
                      <p>User: {renderUserName(ticket.userId)}</p>
                      <p>Priority: {ticket.priority}</p>
                    </div>
                  ))}
                </div>
              ))}
            </>
          );
    } else if (groupBy === 'priority') {
      return (
        <>
          {Object.keys(priorityGroups).map(priority => (
            <div key={priority} className="status-group">
              <h2 className="status-heading" style={{ backgroundColor: statusColors['Todo'] }}>
                Priority: {priorityLabels[priority]}
              </h2>
              {priorityGroups[priority].map(ticket => (
                <div
                  key={ticket.id}
                  className="ticket"
                  style={{ backgroundColor: statusColors[ticket.status] }}
                >
                  <h3>{ticket.title}</h3>
                  <p>User: {renderUserName(ticket.userId)}</p>
                  <p>Priority: {priorityLabels[ticket.priority]}</p>
                </div>
              ))}
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {Object.keys(statusColors).map(status => (
            <div key={status} className="status-group">
              <h2 className="status-heading" style={{ backgroundColor: statusColors[status] }}>
                {status}
              </h2>
              {tickets.map(ticket => (
                ticket.status === status && (
                  <div
                    key={ticket.id}
                    className="ticket"
                    style={{ backgroundColor: statusColors[ticket.status] }}
                  >
                    <h3>{ticket.title}</h3>
                    <p>User: {renderUserName(ticket.userId)}</p>
                    <p>Priority: {ticket.priority}</p>
                  </div>
                )
              ))}
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div>
      <h1 className="kanban-heading">Kanban Board</h1>
      <div className="group-select">
        <label htmlFor="groupSelect">Group By: </label>
        <select id="groupSelect" value={groupBy} onChange={handleGroupChange}>
          <option value="status">Status</option>
          <option value="users">Users</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="kanban-board">
        {renderContent()}
      </div>
    </div>
  );
};

export default KanbanBoard;