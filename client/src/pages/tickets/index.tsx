import { useEffect, useState } from 'react';
import { Ticket } from './ticket';
import { TicketMini } from './ticket-mini';

const Tickets = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 750;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {width < breakpoint ? (
        <>
          <TicketMini inlineStyles={{ marginBottom: '20px' }} />
          <TicketMini inlineStyles={{ marginBottom: '20px' }} />
          <TicketMini inlineStyles={{ marginBottom: '20px' }} />
        </>
      ) : (
        <>
          <Ticket
            inlineStyles={{ marginRight: '20px', marginBottom: '20px' }}
          />
          <Ticket
            inlineStyles={{ marginRight: '20px', marginBottom: '20px' }}
          />
          <Ticket
            inlineStyles={{ marginRight: '20px', marginBottom: '20px' }}
          />
        </>
      )}
    </div>
  );
};

export { Tickets };
