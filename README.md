# kanban-board
Interactive Kanban Board App with React

This project showcases an interactive Kanban board application developed using React.js. The app communicates with an external API provided by QuickSell (https://api.quicksell.co/v1/internal/frontend-assignment) to fetch and display ticket data.

Key Features:

Dynamic Grouping: Users can choose to group tickets by status, user, or priority level. The Kanban board updates in real-time based on the selected grouping option.
Sorting Options: Tickets can be sorted by priority (descending) or title (ascending), allowing users to customize their view.
Responsive Design: The Kanban board is designed to be responsive, adapting to different screen sizes for optimal user experience.
Persistent State: The app uses localStorage to store the user's selected grouping option, ensuring that the chosen view is maintained even after page reload.
Priority Levels:

Urgent (Priority level 4)
High (Priority level 3)
Medium (Priority level 2)
Low (Priority level 1)
No priority (Priority level 0)
