import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; //free
import dayGridPlugin from "@fullcalendar/daygrid"; //free
import timeGridPlugin from "@fullcalendar/timegrid"; //free
import { formatDate } from "@fullcalendar/core"; //free
import interactionPlugin from "@fullcalendar/interaction"; // free
import listPlugin from "@fullcalendar/list"; // free
import DefaultLayout from '../layout/DefaultLayaout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumbs';



interface Event {
  id: string;
  title: string;
  start: string | Date;
  end?: string | Date;
  allDay?: boolean;
}

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateClick = (selected: any) => {
    const title = prompt("Por favor , agrega un titulo a tu agenda");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `¿Estas seguro de borrar esta agenda?:  '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calendario" />

      <div style={{ margin: "70px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* CALENDAR SIDEBAR */}
          <div style={{ flex: "1 1 20%", backgroundColor: "#0b2027", padding: "10px", borderRadius: "8px" }}>
            <h5>Eventos</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {currentEvents.map((event) => (
                <li
                  key={event.id}
                  style={{
                    backgroundColor: "#87ceeb",
                    margin: "5px 0",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <div>
                    <strong>{event.title || "No title"}</strong>
                    <div>
                      {event.start ? formatDate(new Date(event.start), {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }) : "No date"}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CALENDAR */}
          <div style={{ flex: "1 1 100%", marginLeft: "20px" }}>
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events as Event[])}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
