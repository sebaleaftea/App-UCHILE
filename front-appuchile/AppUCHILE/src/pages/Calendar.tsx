import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // free
import dayGridPlugin from "@fullcalendar/daygrid"; // free
import timeGridPlugin from "@fullcalendar/timegrid"; // free
import { formatDate } from "@fullcalendar/core"; // free
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
  team?: string;
  description?: string;
  color?: string; // Color asociado al equipo
}

// Equipos con colores asociados
const teams = [
  { name: "Equipo A", color: "#FF5733" }, // Rojo
  { name: "Equipo B", color: "#33FF57" }, // Verde
  { name: "Equipo C", color: "#3357FF" }, // Azul
  { name: "Equipo D", color: "#F3FF33" }, // Amarillo
];

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventTeam, setNewEventTeam] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(currentEvents));
  }, [currentEvents]);

  const handleDateClick = (selected: any) => {
    setIsModalOpen(true);
    setSelectedDate(selected); // Guardamos la fecha seleccionada
  };

  const handleAddEvent = () => {
    if (newEventTitle && selectedDate && newEventTeam) {
      const selectedTeam = teams.find(team => team.name === newEventTeam);

      const newEvent: Event = {
        id: `${selectedDate.dateStr}-${newEventTitle}`,
        title: newEventTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
        team: newEventTeam,
        description: newEventDescription,
        color: selectedTeam?.color, // Asignar color del equipo
      };

      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
      setIsModalOpen(false);
      setNewEventTitle(""); // Reseteamos los valores
      setNewEventTeam("");
      setNewEventDescription("");
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `¿Estás seguro de que quieres eliminar este evento?: '${selected.event.title}'`
      )
    ) {
      const eventId = selected.event.id;

      // Remover el evento tanto del calendario como del estado
      selected.event.remove();
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calendario" />

      <div style={{ margin: "70px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* CALENDAR SIDEBAR */}
          <div
            style={{
              flex: "1 1 20%",
              backgroundColor: "#0b2027",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h5>Eventos</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {currentEvents.map((event) => (
                <li
                  key={event.id}
                  style={{
                    backgroundColor: event.color || "#87ceeb",
                    margin: "5px 0",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <div>
                    <strong>{event.title || "No title"}</strong>
                    <div>
                      {event.start
                        ? formatDate(new Date(event.start), {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "No date"}
                    </div>
                    {event.team && <div><strong>Equipo:</strong> {event.team}</div>}
                    {event.description && <div><strong>Descripción:</strong> {event.description}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CALENDAR */}
          <div style={{ flex: "1 1 100%", marginLeft: "20px" }}>
            <FullCalendar
              height="75vh"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
              events={currentEvents} // Se muestran los eventos almacenados en el estado
            />
          </div>
        </div>
      </div>

      {/* Modal para agregar nuevo evento */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
              zIndex: 10000,
            }}
          >
            <h3>Agregar Evento</h3>
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              placeholder="Título del evento"
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            />
            <select
              value={newEventTeam}
              onChange={(e) => setNewEventTeam(e.target.value)}
              style={{ margin: "10px 0", padding: "10px", width: "100%" }}
            >
              <option value="">Selecciona un equipo</option>
              {teams.map((team) => (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
            <textarea
              value={newEventDescription}
              onChange={(e) => setNewEventDescription(e.target.value)}
              placeholder="Descripción"
              style={{ margin: "10px 0", padding: "10px", width: "100%", minHeight: "80px" }}
            ></textarea>
            <button
              onClick={handleAddEvent}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Agregar
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                marginLeft: "10px",
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Calendar;
