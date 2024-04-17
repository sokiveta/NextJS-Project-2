import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
// import ProgressDisplay from './ProgressDisplay';
// import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />{' '}
        <h4>
          <Link
            href={`/TicketPage/${ticket._id}`}
            style={{ display: 'contents' }}
          >
            {ticket.firstname} {ticket.lastname}
          </Link>
        </h4>
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <Link href={`/TicketPage/${ticket._id}`} style={{ display: 'contents' }}>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">
          {formatTimestamp(ticket.createdAt)} | {ticket.state}, {ticket.zip} |
          Phone: {ticket.phone}
        </p>
      </Link>
    </div>
  );
};

export default TicketCard;
